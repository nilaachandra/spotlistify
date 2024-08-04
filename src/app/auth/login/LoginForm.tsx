"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { LoginSchema } from "@/schemas";
import { Card, CardTitle } from "@/components/ui/card";
import { IoReloadCircleOutline } from "react-icons/io5";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  
  // Initialize the form with react-hook-form and zod resolver
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "", // Changed from email to email
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      // Attempt to sign in using NextAuth
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email, // Changed from email to email
        password: values.password,
      });

      if (result?.error) {
        // Show error message if login fails
        toast.error(result.error);
      } else {
        // Show success message and redirect on successful login
        toast.success("Logged in successfully!");
        router.push("/profile");
      }
    });
  };

  return (
    <Card className="lg:w-1/2 w-full p-4 border border-black">
      <CardTitle className="mb-3 text-lg">
        Sign In to your account
      </CardTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="email"
                    placeholder="Enter Your email"
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
                <FormLabel className="font-semibold">Password</FormLabel>
                <FormControl>
                  <Input
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

          <Button type="submit" className="w-full mt-3" disabled={isPending}>
            {isPending ? (
              <>
                <IoReloadCircleOutline className="mr-2 h-4 w-4 animate-spin" />
                <span>Please Wait</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default LoginForm;