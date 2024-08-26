"use client";
import Heart from "@/components/Heart";
import PlaylistCard from "@/components/Playlist";
import PlaylistInfo from "@/components/PlaylistInfo";
import PlaylistSkeleton from "@/components/PlaylistSkeleton";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlaylists } from "@/hooks/usePlaylist";
import Link from "next/link";
import { useState } from "react";
import { LuGithub } from "react-icons/lu";

export default function Home() {
  const { data, isLoading } = usePlaylists();
  console.log(data);
  return (
    <div className="w-full">
      <section className="hero min-h-[24vh] flex items-center justify-center flex-col">
        <h1 className="text-4xl lg:text-6xl font-bold leading-none text-center mt-6">
          Find Your{" "}
          <span className="text-green">Perfect Spotify Playlist!</span>
        </h1>
        <h1 className="my-2 ">Your Ultimate Spotify Playlists Directory!</h1>
        <div className=" flex items-center gap-3 mt-3 ">
          <Link
            href={"/profile"}
            className="rounded-lg bg-green p-1.5 hover:opacity-80 transition-all duration-200"
          >
            Add Your Playlist
          </Link>
          {/* <Button
            className="border-black border font-semibold rounded-lg"
            variant={"secondary"}
          >
            <LuGithub size={20} /> Github
          </Button> */}
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="mt-6 text-center">Discover cool Playlists!</h1>
        {isLoading && (
          <div className="flex flex-col gap-2">
            <PlaylistSkeleton />
            <PlaylistSkeleton />
            <PlaylistSkeleton />
            <PlaylistSkeleton />
            <PlaylistSkeleton />
          </div>
        )}
        {/* List */}
        {data?.map((playlist: any) => (
          <PlaylistInfo
            key={playlist.id}
            isProfile={false}
            description={playlist.description}
            imageUrl={playlist.imageUrl}
            likes={playlist.likes}
            postedBy={playlist.username}
            info={playlist.info}
            title={playlist.title}
            userId={playlist.userId}
            playlistId={playlist.id}
            link={playlist.link}
          />
        ))}
        {/* list */}
      </section>
    </div>
  );
}
