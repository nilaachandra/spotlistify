"use client";
import { PlaylistSchema } from "@/schemas";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
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
import { addPlaylist, fetchMetadata } from "@/app/actions/playlist";
import { useProfile } from "@/contexts/profileContext";

const AddPlaylistForm = ({ userId }: { userId: string | null }) => {
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);
  const [isMetaValid, setIsMetaValid] = useState<boolean | null>(null);
  const router = useRouter();
  const { refetch } = useProfile();
  const form = useForm<z.infer<typeof PlaylistSchema>>({
    resolver: zodResolver(PlaylistSchema),
    defaultValues: {
      link: "",
      description: "",
    },
  });

  const checkMetaData = async (linkUrl: string) => {
    if (!linkUrl.startsWith("https://open.spotify.com/playlist/")) {
      setIsMetaValid(false);
      return;
    }

    setIsLoading(true);
    try {
      const result = await fetchMetadata(linkUrl);
      if (result.success && result.data.title) {
        setIsMetaValid(true);
        toast.success("Metadata fetched successfully");
      } else {
        setIsMetaValid(false);
        toast.error("Invalid metadata link");
      }
    } catch (error) {
      setIsMetaValid(false);
      toast.error("Failed to fetch metadata. Please check the link.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values: z.infer<typeof PlaylistSchema>) => {
    if (!userId) {
      toast.error("User ID is missing. Please log in.");
      return;
    }

    startTransition(async () => {
      const result = await addPlaylist(values, userId);
      if (result.success) {
        toast.success(result.message);
        form.reset();
        router.push("/profile");
        refetch();
      } else {
        toast.error(
          result.error || "Failed to add playlist. Please try again."
        );
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="link" className="font-semibold">
                Link
              </FormLabel>
              <div className="grid grid-cols-4 gap-2">
                <FormControl>
                  <Input
                    className="col-span-3"
                    id="link"
                    {...field}
                    disabled={isPending || isLoading}
                    type="text"
                    placeholder="https://"
                  />
                </FormControl>
                <Button
                  type="button"
                  onClick={() => checkMetaData(form.watch("link"))}
                  disabled={isPending || isLoading}
                  className="w-full col-span-1"
                >
                  {isLoading ? (
                    <>
                      <IoReloadCircleOutline className="mr-2 h-4 w-4 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <span>Verify</span>
                  )}
                </Button>
              </div>

              <FormMessage />
              {isLoading && (
                <p className="text-sm text-gray-500">Checking Playlist...</p>
              )}
              {isMetaValid === false && !isLoading && (
                <p className="text-sm text-red-500">Invalid Playlist link</p>
              )}
              {isMetaValid === true && !isLoading && (
                <p className="text-sm text-green-500">Playlist Link Verified</p>
              )}
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
                  placeholder="Enter Your description"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full mt-3"
          disabled={isPending || isLoading || !isMetaValid}
        >
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
