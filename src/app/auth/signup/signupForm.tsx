"use client";

import { Card, CardTitle } from "@/components/ui/card";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoReloadCircleOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignupSchema>) => {
    const validationResult = SignupSchema.safeParse(values);

    if (!validationResult.success) {
      console.error("Validation errors:", validationResult.error);
      return;
    }

    const dataToSend = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    startTransition(async () => {
      try {
        const response = await axios.post("/api/auth/signup", dataToSend, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          router.push("/profile");
          toast.success("Your account has been created!");
        } else {
          toast.error(
            response.data.message || "Account creation failed. Please try again."
          );
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(
            error.response.data.message || "An error occurred. Please try again."
          );
        } else {
          console.error("Error during signup:", error);
          toast.error("An unexpected error occurred. Please try again.");
        }
      }
    });
  };

  return (
    <Card className="p-4 border border-black">
      <CardTitle className="mb-3 text-lg">
        Sign Up now to start listing your Playlists
      </CardTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="username" className="font-semibold">Username</FormLabel>
                <FormControl>
                  <Input
                    id="username"
                    {...field}
                    disabled={isPending}
                    type="text"
                    placeholder="Enter Your Username"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email" className="font-semibold">Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    {...field}
                    disabled={isPending}
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password" className="font-semibold">Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    {...field}
                    disabled={isPending}
                    type="password"
                    placeholder="Enter Your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPassword" className="font-semibold">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    id="confirmPassword"
                    {...field}
                    disabled={isPending}
                    type="password"
                    placeholder="Confirm Your password"
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
              <span>Sign Up</span>
            )}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default SignupForm;
