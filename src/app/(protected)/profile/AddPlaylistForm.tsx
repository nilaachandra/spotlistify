"use client";
import { PlaylistSchema } from "@/schemas";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoReloadCircleOutline } from "react-icons/io5";

const AddPlaylistForm = ({ userId }: { userId: string | null }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof PlaylistSchema>>({
    resolver: zodResolver(PlaylistSchema),
    defaultValues: {
      link: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof PlaylistSchema>) => {
    startTransition(async () => {
      try {
        const response = await axios.post(
          "/api/playlists/add-playlist",
          {
            link: values.link,
            description: values.description,
            userId: userId,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          toast.success("Playlist added successfully");
          form.reset();
          router.push("/profile");
        } else {
          toast.error(
            response.data.message || "Failed to add playlist. Please try again."
          );
        }
      } catch (error) {
        toast.error("An unexpected error occurred. Please try again.");
      }
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col  gap-3"
      >
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="link" className="font-semibold">
                Link
              </FormLabel>
              <FormControl>
                <Input
                  id="link"
                  {...field}
                  disabled={isPending}
                  type="text"
                  placeholder="https://"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="description" className="font-semibold">
                Description
              </FormLabel>
              <FormControl>
                <Input
                  id="description"
                  {...field}
                  disabled={isPending}
                  type="description"
                  placeholder="Enter Your description"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-3" disabled={isPending}>
          {isPending ? (
            <>
              <IoReloadCircleOutline className="mr-2 h-4 w-4 animate-spin" />
              <span>Please Wait</span>
            </>
          ) : (
            <span>Add Playlist</span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AddPlaylistForm;
