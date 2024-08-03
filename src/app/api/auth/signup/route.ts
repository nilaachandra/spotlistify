import { db } from "@/lib/db";
import { BackendSignupSchema, SignupSchema } from "@/schemas";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import * as z from 'zod';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate the request body using Zod
        const validatedFields = BackendSignupSchema.safeParse(body);
        if (!validatedFields.success) {
            return NextResponse.json(
                { error: "Invalid Fields!", issues: validatedFields.error.errors },
                { status: 400 }
            );
        }

        const { email, username, password } = validatedFields.data;

        // Check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: { email }
        });
        if (existingUserByEmail) {
            return NextResponse.json(
                { user: null, message: "Email already in use" },
                { status: 409 }
            );
        }

        // Check if username already exists
        const existingUserByUsername = await db.user.findUnique({
            where: { username }
        });
        if (existingUserByUsername) {
            return NextResponse.json(
                { user: null, message: "Username already exists" },
                { status: 409 }
            );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Register user in the database
        const registerUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });

        // Exclude the password from the response
        const { password: newUserPassword, ...rest } = registerUser;

        return NextResponse.json(
            { user: rest, message: "User Created Successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error during user registration:", error);
        return NextResponse.json(
            { message: 'Something went wrong. Please try again!' },
            { status: 500 }
        );
    }
}
