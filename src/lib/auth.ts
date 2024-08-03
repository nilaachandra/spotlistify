import NextAuth, { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "./db";
import { User } from "@prisma/client";

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = signinSchema.safeParse(credentials);
        if (!parsed.success) {
          throw new Error("Invalid credentials");
        }

        const { email, password } = parsed.data;
        const user = await db.user.findUnique({
          where: { email },
        });

        if (user && (await bcrypt.compare(password, user.password))) {
          return { id: user.id, name: user.username, email: user.email };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: any }) {
      if (token) {
        session.user = { id: token.sub, email: token.email };
      }
      return session;
    },
    async jwt({ token, user }: { session: Session; user: User }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions) ;
export { handler as GET, handler as POST };
