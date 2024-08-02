import Logo from "@/components/Logo";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <Logo />
      <Link href={'/login'}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>NC</AvatarFallback>
      </Avatar>
      </Link>
    </header>
  );
};

export default Navbar;
