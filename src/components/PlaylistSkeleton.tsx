import React from "react";
import { Skeleton } from "./ui/skeleton";

const PlaylistSkeleton = () => {
  return (
    <div className="w-full flex p-3 gap-2 cursor-pointer bg-zinc-900 rounded-lg">
      <Skeleton className="bg-zinc-700 w-[84px] h-[84px] rounded-lg" />
      <div className="w-[512px] flex flex-col gap-2 justify-center">
        <Skeleton className="bg-zinc-700 w-32 h-3" />
        <Skeleton className="bg-zinc-700 w-96 h-3" />
        <Skeleton className="bg-zinc-700 w-80 h-3" />
        <Skeleton className="bg-zinc-700 w-60 h-3" />
      </div>
    </div>
  );
};

export default PlaylistSkeleton;
