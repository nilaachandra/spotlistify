import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { Toaster } from "sonner";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import TanstackProvider from "./_provider";
import { ProfileProvider } from "@/contexts/profileContext";

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
  icons: {
    icon: ["spotlistify-rounded.png"],
  },
  openGraph: {
    title: "Spotlistify",
    description: "A Spotify Playlists Directory",
    url: "https://spotlistify.vercel.app",
    siteName: "Spotlistify",
    images: [{ url: "/spotlistify-og.png", width: 1200, height: 630 }],
    locale: "en-IN",
    type: "website",
  },
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
          <ProfileProvider>
            <div className="w-full max-w-[712px] mx-auto px-4 py-2">
              <Toaster duration={3000} position="top-center" />
              <Navbar />
              <main className="w-full">{children}</main>
              <Footer />
            </div>
          </ProfileProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
