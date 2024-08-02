import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { Toaster } from "sonner";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });
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
    <html lang="en" className={bricolage.className}>
      <body className="w-full max-w-[712px] mx-auto min-h-screen px-4 py-2 bg-zinc-950 text-cream">
        <Toaster />
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
