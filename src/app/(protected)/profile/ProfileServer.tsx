// Import necessary modules
import { auth } from "@/lib/auth";
import ProfileClient from "./ProfileClient";
import { db } from "@/lib/db";

// Server component to fetch data and pass it to the client component
export default async function ProfileServer() {
  const session = await auth();

  if (!session?.user) {
    // Handle the case where the user is not authenticated
    // You can redirect or return a message
    return <div>You are not logged in.</div>;
  }

  // Fetch user profile data
  const profileData = await db.user.findUnique({
    where: {
      id: session.user.id
    },
    include: {
        playlists: true,
        comments: true,
        likes: true
      }
  });

  // Pass the fetched profile data to the client component
  return <ProfileClient profileData={profileData} />;
}
