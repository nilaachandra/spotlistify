"use client";

import ProfilePage from "./profileData";

// Client component to render the profile page with the passed data
export default function ProfileClient({ profileData }: { profileData: any }) {
  if (!profileData) return <div>Error fetching profile</div>;

  return <ProfilePage profileData={profileData} />;
}
