import SignOutButton from "@/app/auth/login/SignoutButton";
import AddPlaylist from "@/components/AddPlaylist";
import EditProfile from "@/components/EditProfile";
import PlaylistCard from "@/components/Playlist";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  // if (!session?.user) {
  //   redirect("/auth/login");
  // }

  console.log(session?.user);
  return (
    <>
      <section className="w-full py-4 space-y-4">
        <div className="profile flex lg:gap-12 gap-6 text-cream  w-full items-center">
          <Image
            src={"/spotlistify-rounded.png"}
            width={132}
            height={132}
            alt={session?.user?.name || "spotlistify"}
            className="rounded-full bg-zinc-700"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h1 className="text-3xl font-semibold ">
              {session?.user?.name || "nilaa"}
            </h1>
            <p>the guy that made this website</p>
            <ul className="flex items-center gap-4">
              <li>4 Playlists</li>
              <li>69 Hearts</li>
              <li></li>
            </ul>
            <div className="grid grid-cols-2 items-center gap-2 w-full">
              <EditProfile />
              <AddPlaylist />
            </div>
          </div>
        </div>
        <section className="w-full flex flex-col gap-2">
          <h1 className="text-xl font-bold mb-3">My Playlists</h1>
          <PlaylistCard
            isProfile={true}
            description="The quick brown fox jumps over the lazy dog"
            imageUrl="/spotlistify.png"
            likes={27}
            owner="Nilaa Laishram"
            postedBy="Nilaacodes"
            songs="112 Songs"
            title="Hahahahah"
          />
          <PlaylistCard
            isProfile={true}
            description="The quick brown fox jumps over the lazy dog"
            imageUrl="/spotlistify.png"
            likes={27}
            owner="Nilaa Laishram"
            postedBy="Nilaacodes"
            songs="112 Songs"
            title="Hahahahah"
          />
          <PlaylistCard
            isProfile={true}
            description="The quick brown fox jumps over the lazy dog"
            imageUrl="/spotlistify.png"
            likes={27}
            owner="Nilaa Laishram"
            postedBy="Nilaacodes"
            songs="112 Songs"
            title="Hahahahah"
          />
        </section>
        <Button>
          <SignOutButton />
        </Button>
      </section>
    </>
  );
}
