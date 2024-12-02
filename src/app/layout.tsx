import type { Metadata } from "next";
import { Inter, Lobster } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          inter.variable,
          lobster.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
