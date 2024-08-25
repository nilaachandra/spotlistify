import React from "react";
import Heart from "./Heart";
import Image from "next/image";
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
  link: string
};

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  imageUrl,
  title,
  description,
  postedBy,
  isProfile,
  likes,
  info,
  userId,
  playlistId,
  link
}) => {
  return (
    <div className="bg-zinc-900 w-full p-3 rounded-lg flex items-center justify-between cursor-pointer">
      <div className="imgandtitle flex gap-2 items-center">
        <Image
          src={imageUrl}
          width={84}
          height={84}
          alt={title}
          className="rounded-lg"
        />
        <div className="title">
          <h1 className="font-semibold leading-none">{title}</h1>
          <p className="text-sm">{description}</p>
          <h1 className="text-zinc-400 text-sm">
            {info}
          </h1>
          <div className="flex items-center gap-6 text-sm">
            <h1 className="text-zinc-400 text-sm">Posted by {postedBy}</h1>
            {isProfile ? (
              <div className="flex gap-3">
                <EditPlaylist userId={playlistId} description={description}/>
                <ConfirmDelete/>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
