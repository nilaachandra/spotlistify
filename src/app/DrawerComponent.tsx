import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import SignOutButton from "./auth/login/SignoutButton";
import { LuUser } from "react-icons/lu";

const DrawerComponent = async () => {
  const session = await auth();
  return (
    <Drawer>
      <DrawerTrigger>
        <LuUser size={24} />
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-900 border border-zinc-900 max-w-[712px] mx-auto w-full">
        <DrawerHeader>
          <DrawerTitle className="text-cream">
            Please Login/Signup To Continue
          </DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className="flex flex-col items-center w-full gap-2">
            {session?.user ? (
              <>
                <Button  className="w-full">
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
              </>
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
          </DrawerClose>
          <DrawerClose>
            <Button variant="outline" className="text-black w-full">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
