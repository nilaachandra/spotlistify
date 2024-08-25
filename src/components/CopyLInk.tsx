import { useState } from "react";
import { FontBoldIcon } from "@radix-ui/react-icons";
import { Toggle } from "@/components/ui/toggle";
import { LuLink } from "react-icons/lu";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import { TooltipTrigger } from "./ui/tooltip";

export function CopyLink({ link }: { link: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    toast.success("Link Copied To Clipboard");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={handleCopy}
          className="hover:bg-zinc-600 transition-colors duration-150 border-zinc-500 border p-1.5 cursor-pointer rounded-md"
        >
          <LuLink size={14} />
        </TooltipTrigger>
        <TooltipContent className="bg-green px-1 rounded-md">
          <p>Copy to Clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
