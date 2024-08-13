"use client";
import { PlaylistSchema } from "@/schemas";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useTransition, useState } from "react";
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
import metaFetcher from "meta-fetcher";

const AddPlaylistForm = ({ userId }: { userId: string | null }) => {
  const [isPending, startTransition] = useTransition();
  const [isMetaValid, setIsMetaValid] = useState(true);
  const router = useRouter();

  const form = useForm<z.infer<typeof PlaylistSchema>>({
    resolver: zodResolver(PlaylistSchema),
    defaultValues: {
      link: "",
      description: "",
    },
  });

  const checkMetaData = async (linkUrl: string) => {
    try {
      const result = await metaFetcher(linkUrl);
      console.log(result)
      if (result && result.metadata.title) {
        setIsMetaValid(true);
        toast.success("Metadata fetched successfully");
      } else {
        setIsMetaValid(false);
        toast.error("Invalid metadata link");
      }
    } catch (error) {
      setIsMetaValid(false);
      toast.error("Failed to fetch metadata. Please check the link.");
    }
  };

  const onSubmit = async (values: z.infer<typeof PlaylistSchema>) => {
    if (!isMetaValid) {
      toast.error("Please enter a valid metadata link before submitting.");
      return;
    }

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
                  onBlur={() => checkMetaData(field.value)} // Validate metadata on blur
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
                  type="text"
                  placeholder="Enter your description"
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
