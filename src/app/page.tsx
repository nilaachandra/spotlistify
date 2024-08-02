import Heart from "@/components/Heart";
import { Button } from "@/components/ui/button";
import { LuGithub } from "react-icons/lu";

export default function Home() {
  return (
    <div className="w-full">
      <section className="hero min-h-[24vh] flex items-center justify-center flex-col">
        <h1 className="text-4xl lg:text-6xl font-bold leading-none text-center mt-6">
          Find Your <span className="text-green">Perfect Spotify Playlist!</span> 
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
        <h1 className="mt-6 text-center">Discover cool Playlists, upvote, bookmark or share them!</h1>
        {/* List */}
        <div className="bg-zinc-900 w-full p-3 rounded-lg flex items-center justify-between">
          <div className="imgandtitle flex gap-2 items-center">
            <div className="bg-slate-800 h-[64px] w-[64px] rounded-lg"></div>
            <div className="title">
              <h1 className="font-semibold">No Contact</h1>
              <h1 className="text-zinc-400 text-sm">
                Playlist • Nilaa Laishram • 112 Songs
              </h1>
              <h1 className="text-zinc-400 text-sm">Posted by Nilaacodes</h1>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <Heart/>
            <span>27</span>
          </div>
        </div>
        {/* list */}


        <div className="bg-zinc-900 w-full px-3 py-2 rounded-lg flex items-center justify-between">
          <div className="imgandtitle flex gap-2 items-center">
            <div className="bg-slate-800 h-[64px] w-[64px] rounded-lg"></div>
            <div className="title">
              <h1 className="font-semibold">No Contact</h1>
              <h1 className="text-zinc-400 text-sm">
                Playlist • Nilaa Laishram • 112 Songs
              </h1>
              <h1 className="text-zinc-400 text-sm">Posted by Nilaacodes</h1>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <Heart/>
            <span>27</span>
          </div>
        </div>

        <div className="bg-zinc-900 w-full px-3 py-2 rounded-lg flex items-center justify-between">
          <div className="imgandtitle flex gap-2 items-center">
            <div className="bg-slate-800 h-[64px] w-[64px] rounded-lg"></div>
            <div className="title">
              <h1 className="font-semibold">No Contact</h1>
              <h1 className="text-zinc-400 text-sm">
                Playlist • Nilaa Laishram • 112 Songs
              </h1>
              <h1 className="text-zinc-400 text-sm">Posted by Nilaacodes</h1>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <Heart/>
            <span>27</span>
          </div>
        </div>

        <div className="bg-zinc-900 w-full px-3 py-2 rounded-lg flex items-center justify-between">
          <div className="imgandtitle flex gap-2 items-center">
            <div className="bg-slate-800 h-[64px] w-[64px] rounded-lg"></div>
            <div className="title">
              <h1 className="font-semibold">No Contact</h1>
              <h1 className="text-zinc-400 text-sm">
                Playlist • Nilaa Laishram • 112 Songs
              </h1>
              <h1 className="text-zinc-400 text-sm">Posted by Nilaacodes</h1>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <Heart/>
            <span>27</span>
          </div>
        </div>

        <div className="bg-zinc-900 w-full px-3 py-2 rounded-lg flex items-center justify-between">
          <div className="imgandtitle flex gap-2 items-center">
            <div className="bg-slate-800 h-[64px] w-[64px] rounded-lg"></div>
            <div className="title">
              <h1 className="font-semibold">No Contact</h1>
              <h1 className="text-zinc-400 text-sm">
                Playlist • Nilaa Laishram • 112 Songs
              </h1>
              <h1 className="text-zinc-400 text-sm">Posted by Nilaacodes</h1>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <Heart/>
            <span>27</span>
          </div>
        </div>

        <div className="bg-zinc-900 w-full px-3 py-2 rounded-lg flex items-center justify-between">
          <div className="imgandtitle flex gap-2 items-center">
            <div className="bg-slate-800 h-[64px] w-[64px] rounded-lg"></div>
            <div className="title">
              <h1 className="font-semibold">No Contact</h1>
              <h1 className="text-zinc-400 text-sm">
                Playlist • Nilaa Laishram • 112 Songs
              </h1>
              <h1 className="text-zinc-400 text-sm">Posted by Nilaacodes</h1>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <Heart/>
            <span>27</span>
          </div>
        </div>
      </section>
    </div>
  );
}
