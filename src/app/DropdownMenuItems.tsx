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

const DropdownMenuItems = async () => {
  const session = await auth();
  return (
    <Drawer>
      <DrawerTrigger>
        <LuUser size={24} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-black">
            Please Login/Signup To Continue
          </DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            {session?.user ? (
              <div className="w-full flex flex-col gap-2">
                <Link
                  href={"/auth/login"}
                  className="bg-green p-1.5 rounded-md text-center hover:opacity-80 transition-all duration-200"
                >
                  Profile
                </Link>
                <Button>
                  <SignOutButton />
                </Button>
              </div>
            ) : (
              <div className="w-full flex flex-col gap-2">
                <Link
                  href={"/auth/login"}
                  className="bg-green p-1.5 rounded-md text-center hover:opacity-80 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  href={"/auth/signup"}
                  className="bg-green p-1.5 rounded-md text-center hover:opacity-80 transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </DrawerClose>
          <DrawerClose>
            <Button variant="outline" className="text-black">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DropdownMenuItems;
