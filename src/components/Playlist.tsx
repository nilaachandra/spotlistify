import React from "react";
import Heart from "./Heart";
import Image from "next/image";

type PlaylistCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  songs: string;
  owner: string;
  postedBy: string;
  likes: number;
};

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  imageUrl,
  title,
  description,
  owner,
  songs,
  postedBy,
  likes,
}) => {
  return (
    <div className="bg-zinc-900 w-full p-3 rounded-lg flex items-center justify-between cursor-pointer">
      <div className="imgandtitle flex gap-2 items-center">
        <Image
          src={imageUrl}
          width={64}
          height={64}
          alt={title}
          className="rounded-lg"
        />
        <div className="title">
          <h1 className="font-semibold">{title}</h1>
          <h1 className="text-zinc-400 text-sm">
            Playlist • {owner} • {songs}
          </h1>
          <h1 className="text-zinc-400 text-sm">Posted by {postedBy}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <Heart />
        <span>{likes}</span>
      </div>
    </div>
  );
};

export default PlaylistCard;
