"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background border-b border-border h-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto lg:px-0 px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors z-50 relative"
          onClick={() => setIsOpen(false)}
        >
          HW.
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-all duration-300 relative py-2",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            </li>
          ))}
          {/* Theme Toggle (Desktop) */}
          <li>
            <div className="flex items-center gap-2 min-w-[44px]">
              {mounted ? (
                <Switch
                  checked={resolvedTheme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <Moon size={12} className="text-foreground" />
                  ) : (
                    <Sun size={12} className="text-foreground" />
                  )}
                </Switch>
              ) : (
                <div className="w-11 h-6 bg-muted animate-pulse rounded-full opacity-50" />
              )}
            </div>
          </li>
        </ul>

        {/* Mobile Navigation Toggle & Theme Switcher */}
        <div className="flex items-center gap-2 md:hidden z-50 relative">
          <div className="flex items-center gap-2 min-w-[44px]">
            {mounted ? (
              <Switch
                checked={resolvedTheme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
                aria-label="Toggle theme"
                className="data-[state=checked]:bg-accent"
              >
                {resolvedTheme === "dark" ? (
                  <Moon size={12} className="text-foreground" />
                ) : (
                  <Sun size={12} className="text-foreground" />
                )}
              </Switch>
            ) : (
              <div className="w-11 h-6 bg-muted animate-pulse rounded-full opacity-50" />
            )}
          </div>

          <button
            className="p-2 -mr-2 text-foreground hover:text-accent transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} strokeWidth={1.5} />
            ) : (
              <Menu size={28} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Content */}
        <div
          className={cn(
            "fixed top-20 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-start pt-12 transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1) md:hidden h-screen overscroll-contain",
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none",
          )}
        >
          {/* Decorative vertical line */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-border/50 hidden sm:block" />
          <div className="absolute top-0 bottom-0 right-6 w-px bg-border/50 hidden sm:block" />

          <ul className="flex flex-col items-center gap-8 w-full relative z-20">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={cn(
                  "transition-all duration-500 transform w-full text-center group",
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0",
                )}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-block lg:text-4xl text-3xl font-serif font-medium tracking-wide transition-all duration-300 relative py-2",
                    pathname === item.href
                      ? "text-foreground italic"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Hover effect */}
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-accent/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-0" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom Decoration - Geometric Wireframe */}
          <div className="absolute bottom-20 right-0 pointer-events-none opacity-10 z-0">
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="250"
                cy="250"
                r="100"
                stroke="var(--foreground)"
                strokeWidth="2"
              />
              <circle
                cx="250"
                cy="250"
                r="150"
                stroke="var(--accent)"
                strokeWidth="1"
                strokeDasharray="10 10"
              />
              <circle
                cx="250"
                cy="250"
                r="200"
                stroke="var(--foreground)"
                strokeWidth="0.5"
              />
              <path
                d="M50 250 L250 50"
                stroke="var(--accent)"
                strokeWidth="1"
              />
              <rect
                x="180"
                y="180"
                width="140"
                height="140"
                stroke="var(--foreground)"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="absolute bottom-10 left-0 right-0 text-center text-xs text-muted-foreground tracking-widest uppercase opacity-50 z-10">
            Portfolio © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </nav>
  );
}
