import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import { LuUser } from "react-icons/lu";
import SignOutButton from "./auth/login/SignoutButton";

const NavDialog = async () => {
  const session = await auth();

  return (
    <Sheet>
      <SheetTrigger>
        <LuUser size={24} />
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className="max-w-[712px] w-full mx-auto rounded-lg bg-zinc-900 text-white"
      >
        <SheetHeader>
          <SheetTitle className="text-white">
            Please Login/Signup To Continue
          </SheetTitle>
        </SheetHeader>
        <SheetClose className="w-full">
          {session?.user ? (
            <div className="w-full flex flex-col gap-2">
              <Button className="w-full">
                <Link
                  href={"/profile"}
                  className=" p-1.5 w-full rounded-md text-center hover:opacity-80 transition-all duration-200"
                >
                  Profile
                </Link>
              </Button>
              <Button className="w-full">
                <SignOutButton />
              </Button>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-2">
              <Link
                href={"/auth/login"}
                className="bg-green p-1.5 w-full rounded-md text-center hover:opacity-80 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                href={"/auth/signup"}
                className="bg-green p-1.5 w-full rounded-md text-center hover:opacity-80 transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          )}
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default NavDialog;
