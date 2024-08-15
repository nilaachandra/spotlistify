import NextAuth, { Session } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { db } from "./db";
import credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";

export const {
    handlers: { GET, POST },
    auth,
    signOut
} = NextAuth({
    // Use PrismaAdapter for database integration
    adapter: PrismaAdapter(db),

    // Use JWT strategy for session handling
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60, // 1 day in seconds
    },


    // Custom signin page
    pages: {
        signIn: "/auth/login",
    },

    providers: [
        credentials({
            async authorize(credentials) {
                // Validate the credentials using Zod schema
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    // Find the user by email
                    const user = await db.user.findUnique({
                        where: { email },
                    });

                    // If user doesn't exist or has no password, return null (authentication fails)
                    if (!user || !user.password) return null;

                    // Compare the provided password with the stored hash
                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    // If passwords match, return the user object
                    if (passwordsMatch) return user;
                }

                // If validation fails or passwords don't match, return null (authentication fails)
                return null;
            },
        }),
    ],

    callbacks: {
        // Callback for JWT creation/update
        async jwt({ token, user }) {
            if (user) {
                // Add user id and email to the token
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        // Callback for session creation/update
        async session({ session, token }: { session: Session, token: any }) {
            if (session.user) { // Check if session.user is defined
                session.user.id = token.id;
                session.user.email = token.email;
            }
            return session;
        },
    },
});

// Export the signOut function
export const signOutAction = async () => {
    await signOut({ redirectTo: "/auth/login" });
};