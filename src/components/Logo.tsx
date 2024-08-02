import Link from "next/link";
import React from "react";
import { IoMusicalNotesSharp } from "react-icons/io5";
const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center bg-green gap-1 text-white border-2 border-green max-w-fit p-1.5 rounded-lg cursor-pointer"
    >
      <IoMusicalNotesSharp size={20} />
      {/* <Image src={'/spotlistify.png'} width={30} height={30} alt='Spotlistify Logo'/> */}
      <h1 className="font-bold">Spotlistify</h1>
    </Link>
  );
};

export default Logo;
