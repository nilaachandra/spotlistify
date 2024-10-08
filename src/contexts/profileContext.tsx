"use client";

import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "@/app/actions/fetchProfile";

type ProfileContextType = {
  data: any;
  isLoading: boolean;
  error: any;
  refetch: any;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => fetchProfile(),
  });

  return (
    <ProfileContext.Provider value={{ data, isLoading, error, refetch }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
