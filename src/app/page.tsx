"use client"
import Heart from "@/components/Heart";
import PlaylistCard from "@/components/Playlist";
import PlaylistInfo from "@/components/PlaylistInfo";
import { Button } from "@/components/ui/button";
import { usePlaylists } from "@/hooks/usePlaylist";
import { LuGithub } from "react-icons/lu";

export default function Home() {
  const { data } = usePlaylists();
  console.log(data)
  return (
    <div className="w-full">
      <section className="hero min-h-[24vh] flex items-center justify-center flex-col">
        <h1 className="text-4xl lg:text-6xl font-bold leading-none text-center mt-6">
          Find Your{" "}
          <span className="text-green">Perfect Spotify Playlist!</span>
        </h1>
        <h1 className="my-2 ">Your Ultimate Spotify Playlists Directory!</h1>
        <div className=" flex items-center gap-3 mt-3 ">
          <Button className="font-semibold rounded-lg">Get Started</Button>
          <Button
            className="border-black border font-semibold rounded-lg"
            variant={"secondary"}
          >
            <LuGithub size={20} /> Github
          </Button>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="mt-6 text-center">
          Discover cool Playlists, upvote, bookmark or share them!
        </h1>
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
          />
        ))}
        {/* list */}
      </section>
    </div>
  );
}
