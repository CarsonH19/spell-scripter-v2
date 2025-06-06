import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Narration from "@/components/narration/Narration";
import { useEffect } from "react";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <TooltipProvider delayDuration={0}>
        <html lang="en">
          <body className={`${font.className} antialiased bg-white`}>
            {/* <Toaster /> */}

            {/* Dialogue */}
            <div id="dialogue" />

            {/* Modals */}
            <div id="modal" />

            {/* Main Content */}
            {children}
          </body>
        </html>
      </TooltipProvider>
    </ClerkProvider>
  );
}
