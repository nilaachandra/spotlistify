import { db } from "@/lib/db";
import { error } from "console";
import { NextResponse } from "next/server";
import * as z from 'zod'

const AddPlaylistSchema = z.object({
    userId: z.string().min(1, {
        message: "User ID is required",
    }),
    link: z.string().min(1, {
        message: "Please add an valid link"
    }),
    description: z.string().min(4, {
        message: "Please Add a description"
    })
})

export async function POST(req: Request) {
    try {
        const body = await req.json();

        //validate the request using zod
        const validatedFields = AddPlaylistSchema.safeParse(body);
        if (!validatedFields.success) {
            return NextResponse.json(
                { error: "Invalid Fields!", issues: validatedFields.error.errors },
                { status: 400 }
            )
        }
        const { userId, link, description } = validatedFields.data

        //check if the user exists
        const user = await db.user.findUnique({
            where: { id: userId }
        })

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            )
        }

        //create a playlist if user exists
        const playlist = await db.playlist.create({
            data: {
                link,
                description,
                userId
            }
        })

        return NextResponse.json(
            { playlist, message: "Playlist added Succesfully" },
            { status: 200 }
        )

    } catch (error) {
        console.error("Error adding playlist", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        )
    }
}