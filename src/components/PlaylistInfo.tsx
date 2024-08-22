import React from "react";
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
import ConfirmDelete from "./ConfirmDelete";
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
}) => {
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
        />
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-900 border border-zinc-900 max-w-[712px] mx-auto w-full ">
        <DrawerHeader>
          <DrawerTitle>Playlist Info</DrawerTitle>
          <DrawerDescription>
            <div className="text-white text-left">
              <div>
                <Image src={imageUrl} width={150} height={150} alt={title} />
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="">{description}</p>
                <p className="text-zinc-400">{info}</p>
                <p className="text-zinc-400">Posted by {postedBy}</p>
              </div>
              <div className="flex gap-3 mt-3">
                <EditPlaylist description={description} userId={userId} />
                <ConfirmDelete />
              </div>
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
