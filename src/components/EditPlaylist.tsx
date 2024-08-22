"use client"
import { editPlaylist } from "@/app/actions/playlist";
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
import { useState } from "react";
import { toast } from "sonner";

export default  function EditPlaylist({ description, userId }: { description: string, userId: string }) {
  const [newDesc, setNewDesc] = useState(description)
  const handleSubmit = async () => {
    try {
      const result = await editPlaylist(userId, newDesc)
      if (result.success) {
        toast.success("Playlist updated successfully");
      } else {
        toast.error(result.error || "Failed to update playlist");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Playlist</Button>
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
            <Label htmlFor="name" className="text-right">
              Description
            </Label>
            <Input
              id="name"
              value={newDesc}
              placeholder=""
              onChange={(e) => setNewDesc(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="flex items-end justify-end w-full">
          <Button type="submit" onClick={() => handleSubmit()}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
