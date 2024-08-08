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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EditPlaylist() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <h1 className="text-sm hover:underline duration-150">Edit</h1>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 border-none flex flex-col items-start">
        <DialogHeader>
          <DialogTitle className="text-left">Edit playlist</DialogTitle>
          <DialogDescription className="text-left">
            Edit your playlist here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-left items-start w-full">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Playlist Link
            </Label>
            <Input
              id="username"
              value="https://open.spotify.com/playlist/4s0H8Qk3tsjbdMSeVkfSgx?si=3b77a97915784286"
              placeholder=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Description
            </Label>
            <Input
              id="name"
              value="just some songs about her"
              placeholder=""
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="flex items-end justify-end w-full">
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
