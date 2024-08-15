"use client";

import { useQuery } from "@tanstack/react-query";
import ProfilePage from "./profileData";
import { fetchProfile } from "@/server/user-profile/actions";


export default function ProfileClient() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => fetchProfile(),
  });

  console.log(data)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching profile</div>;

  return <ProfilePage profileData={data} />;
}
