"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import PlaylistCard from "./Playlist";
import Image from "next/image";
import Heart from "./Heart";
import EditPlaylist from "./EditPlaylist";
import { deletePlaylist } from "@/app/actions/playlist";
import { toast } from "sonner";
import { useProfile } from "@/contexts/profileContext";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { LuLink } from "react-icons/lu";
import { CopyLink } from "./CopyLInk";
type PlaylistCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  postedBy: string;
  info: string;
  likes: number;
  isProfile: boolean;
  userId: string;
  playlistId: string;
  link: string;
};

const PlaylistInfo: React.FC<PlaylistCardProps> = ({
  imageUrl,
  title,
  description,
  postedBy,
  isProfile,
  likes,
  info,
  userId,
  playlistId,
  link,
}) => {
  const { refetch } = useProfile();
  const router = useRouter();
  const handleDelete = async () => {
    try {
      toast.promise(deletePlaylist(playlistId), {
        loading: "Deleting...",
        success: () => {
          return "Playlist has been deleted";
        },
        error: "Error",
      });
      refetch();
      router.refresh();
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <Drawer>
      <DrawerTrigger className="w-full text-left">
        <PlaylistCard
          description={description}
          imageUrl={imageUrl}
          info={info}
          isProfile={false}
          likes={likes}
          playlistId={playlistId}
          postedBy={postedBy}
          title={title}
          userId={userId}
          link={link}
        />
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-900 border border-zinc-900 max-w-[712px] mx-auto w-full ">
        <DrawerHeader>
          <DrawerTitle>Playlist Info</DrawerTitle>
          <DrawerDescription>
            <div className="text-white text-left">
              <div>
                <img
                  src={imageUrl}
                  width={150}
                  height={150}
                  alt={title}
                  className="rounded-lg"
                />
                <h1 className="text-xl font-bold">{title}</h1>

                <div className="flex items-end gap-1.5">
                  <CopyLink link={link} />

                  <a href={link} className="text-blue-600 underline ">
                    Open in Spotify
                  </a>
                </div>
                <p className="">{description}</p>
                <p className="text-zinc-400">{info}</p>
                <p className="text-zinc-400">Posted by {postedBy}</p>
              </div>
              {isProfile && (
                <div className="flex gap-3 mt-3 w-full">
                  <EditPlaylist description={description} userId={playlistId} />
                  <Button
                    variant="default"
                    className=""
                    onClick={() => handleDelete()}
                  >
                    Delete Playlist
                  </Button>
                </div>
              )}
              <div className="btns mt-3">
                {/* <div className="flex items-center gap-2">
                  <Heart />27
                </div> */}
              </div>
            </div>
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="default" className="w-full">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default PlaylistInfo;
