"use client";

import { useEffect, useState } from "react";

export function JapaneseOrnaments() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vertical Text - Right Side */}
      <div
        className="absolute top-32 right-8 md:right-12 flex flex-col items-center gap-8 opacity-10 md:opacity-20 select-none writing-vertical-rl"
        style={{ writingMode: "vertical-rl" }}
      >
        {/* <div className="flex gap-4 items-center">
          <span className="text-sm font-light tracking-[0.5em] text-foreground/60 uppercase">
            Portfolio v2
          </span>
          <div className="w-px h-24 bg-foreground/60"></div>
        </div> */}
        {/* <h1 className="text-6xl md:text-8xl font-serif text-foreground font-black tracking-widest leading-none">
          クリエイティブ
        </h1> */}
        {/* <div className="text-xs font-mono tracking-widest text-foreground/60 rotate-180">
          EST. 2024
        </div> */}
      </div>

      {/* Vertical Text - Left Side (Subtle) */}
      {/* <div
        className="hidden lg:flex absolute bottom-32 left-12 flex-col items-center gap-8 opacity-10 select-none"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="text-4xl font-serif text-foreground tracking-widest">
          ポートフォリオ
        </span>
        <div className="w-px h-32 bg-foreground"></div>
      </div> */}

      {/* Red Circle (Sun Motif) - Blurred and faded */}
      <div className="absolute top-[-10%] left-[-5%] w-[50vh] h-[50vh] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Bottom Right Circle */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vh] h-[40vh] bg-foreground/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Seigaiha (Wave) Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
