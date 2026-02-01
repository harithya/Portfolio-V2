import React from "react";
import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { JapaneseOrnaments } from "@/components/japanese-ornaments";

const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harithya Wisesa | Fullstack Developer",
  description:
    "Fullstack Developer from Tasikmalaya - Frontend, Mobile & Web Development",
  icons: {
    icon: "/favicon2.ico",
    apple: "/favicon2.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${notoSerifJP.className} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <JapaneseOrnaments />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
