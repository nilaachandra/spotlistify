"use client";

import { allPlaylists } from "@/app/actions/playlist";
import { useQuery } from "@tanstack/react-query";

export const usePlaylists = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["result"],
    queryFn: () => allPlaylists(),
  });
  return { data, isLoading, error, refetch };
};
