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

export default function AddPlaylist() {
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Playlist Link
            </Label>
            <Input
              id="username"
              value=""
              placeholder="https://"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Description
            </Label>
            <Input
              id="name"
              value=""
              placeholder="write something about your playlist"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="flex items-end justify-end w-full">
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
