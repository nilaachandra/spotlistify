import AddPlaylistForm from "@/app/(protected)/profile/AddPlaylistForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AddPlaylist({
  userId,
  username,
}: {
  userId: string;
  username: string | null;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add Playlist</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 border-none flex flex-col items-start">
        <DialogHeader>
          <DialogTitle className="text-left">Add a playlist</DialogTitle>
          <DialogDescription className="text-left">
            Add your playlist here. Click add when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-left items-start w-full">
          <AddPlaylistForm userId={userId} username={username} />
        </div>
        <DialogFooter className="flex items-end justify-end w-full"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
