"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <span>{siteConfig.name}</span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* User menu will be added as a feature */}
        </div>
      </div>
    </header>
  );
}
