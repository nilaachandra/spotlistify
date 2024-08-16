"use client";

import { useProfile } from "@/contexts/profileContext";
import ProfilePage from "./profileData";


export default function ProfileClient() {
  const { data, isLoading, error } = useProfile();

  console.log(data)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching profile</div>;

  return <ProfilePage profileData={data} />;
}
