import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { Toaster } from "sonner";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import TanstackProvider from "./_provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: "Spotlistify",
  description: "A Spotify Playlists Directory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.className} ${fontSans.className}`}
      suppressHydrationWarning
    >
      <head />
      <body className={cn("bg-zinc-950 text-cream min-h-screen")}>
        <TanstackProvider>
          <div className="w-full max-w-[712px] mx-auto px-4 py-2">
            <Toaster duration={3000} position="top-center" />
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
          </div>
        </TanstackProvider>
      </body>
    </html>
  );
}
