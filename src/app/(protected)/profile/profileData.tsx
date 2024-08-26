"use client";
import SignOutButton from "@/app/auth/login/SignoutButton";
import AddPlaylist from "@/components/AddPlaylist";
import EditProfile from "@/components/EditProfile";
import PlaylistCard from "@/components/Playlist";
import PlaylistInfo from "@/components/PlaylistInfo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProfilePage({ profileData }: { profileData: any }) {
  console.log(profileData);

  return (
    <>
      <section className="w-full py-4 space-y-4">
        <div className="profile flex lg:gap-12 gap-6 text-cream  w-full items-center">
          <Image
            src={"/user-spotlistify.png"}
            width={132}
            height={132}
            alt={profileData.username || "spotlistify"}
            className="rounded-full bg-zinc-700"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h1 className="text-3xl font-semibold ">
              {profileData.username || "nilaa"}
            </h1>
            {/* <p>{profileData.bio || "the guy that made this website"}</p> */}
            {/* <ul className="flex items-center gap-4">
              <li>{profileData.playlists.length()} Playlists</li>
              <li>{profileData.likes} Hearts</li>
            </ul> */}
            <div className="grid grid-cols-2 items-center gap-2 w-full">
              {/* <EditProfile /> */}
              <AddPlaylist userId={profileData.id} username={profileData.username} />
            </div>
          </div>
        </div>
        <section className="w-full flex flex-col gap-2">
          <h1 className="text-xl font-bold mb-3">My Playlists</h1>
          {profileData?.playlists?.map((playlist: any) => (
            <PlaylistInfo
              key={playlist.id}
              isProfile={true}
              description={playlist.description}
              imageUrl={playlist.imageUrl}
              likes={playlist.likes}
              postedBy={profileData.username}
              info={playlist.info}
              title={playlist.title}
              userId={playlist.userId}
              playlistId={playlist.id}
              link={playlist.link}
            />
          ))}
        </section>
        <Button>
          <SignOutButton />
        </Button>
      </section>
    </>
  );
}
