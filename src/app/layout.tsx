import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans, Figtree } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/Navbar";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const ibmPlexSerif = IBM_Plex_Serif({
    variable: "--font-ibm-plex-serif",
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap'
});

const monaSans = Mona_Sans({
    variable: '--font-mona-sans',
    subsets: ['latin'],
    display: 'swap'
})

export const metadata: Metadata = {
  title: "Bookified",
  description: "Transform your books into interactive AI conversations. Upload PDFs, and chat with your books using voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en" className={cn("font-sans", figtree.variable)}>
          <body
            className={`${ibmPlexSerif.variable} ${monaSans.variable} relative font-sans antialiased`}
          >
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </body>
        </html>
    </ClerkProvider>
  );
}
