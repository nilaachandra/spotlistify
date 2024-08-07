"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuUser } from "react-icons/lu";
import Link from "next/link";

export default function Dropdown() {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <LuUser size={24} className="z-50" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[100px] flex flex-col text-sm gap-2 p-2">
        <Link href={"/"}>Profile</Link>
        <Link href={"/"}>Login</Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
