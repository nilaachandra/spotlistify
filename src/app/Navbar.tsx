import Logo from "@/components/Logo";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import DropDownMenuItems from "./DropdownMenuItems";
const Navbar = () => {
  return (
    <header className="w-full p-4 rounded-lg bg-zinc-900 flex justify-between items-center">
      <Logo />
      <DropDownMenuItems/>

    </header>
  );
};

export default Navbar;
