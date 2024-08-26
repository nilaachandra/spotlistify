// Import necessary modules
import { auth } from "@/lib/auth";
import ProfileClient from "./ProfileClient";
import { db } from "@/lib/db";
import Link from "next/link";

// Server component to fetch data and pass it to the client component
export default async function ProfileServer() {
  const session = await auth();

  if (!session?.user) {
    // Handle the case where the user is not authenticated
    // You can redirect or return a message
    return (
      <div className="flex flex-col min-h-[60vh] h-full items-center justify-center text-lg font-semibold">
        <p>Oops</p>
        <p>You are not logged in!</p>
        <p>
          Please{" "}
          <Link href={"/auth/login"} className="text-green underline">
            Log In!
          </Link>
        </p>
      </div>
    );
  }

  // Fetch user profile data
  const profileData = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      playlists: true,
      comments: true,
      likes: true,
    },
  });

  // Pass the fetched profile data to the client component
  return <ProfileClient profileData={profileData} />;
}
