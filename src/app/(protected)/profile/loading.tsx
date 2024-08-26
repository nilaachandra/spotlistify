import PlaylistSkeleton from "@/components/PlaylistSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="py-4">
      <div className="flex gap-8 items-center">
        <Skeleton className="bg-zinc-900 w-[132px] h-[132px] rounded-full" />
        <div className="gap-3 flex flex-col">
          <Skeleton className="bg-zinc-900 w-32 h-5" />
          <Skeleton className="bg-zinc-900 w-32 h-9" />
        </div>
      </div>
      <Skeleton className="bg-zinc-900 w-32 h-6 my-3" />
      <div className="flex flex-col gap-3">
        <PlaylistSkeleton />
        <PlaylistSkeleton />
        <PlaylistSkeleton />
        <PlaylistSkeleton />
      </div>
      <Skeleton className="w-32 h-10" />
    </div>
  );
};

export default Loading;
