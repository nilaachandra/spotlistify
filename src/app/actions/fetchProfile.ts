"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function fetchProfile() {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      throw new Error("Unauthorized");
    }

    const userProfile = await db.user.findUnique({
      where: {
        id: session?.user?.id,
      },
      include: {
        playlists: true,
        comments: true,
        likes: true
      }
    });

    if (!userProfile) {
      throw new Error("User Not Found");
    }

    return userProfile;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}
