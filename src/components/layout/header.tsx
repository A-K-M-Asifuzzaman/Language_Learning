"use client";

import {
  BookOpen,
  ChevronDown,
  LogOut,
  Menu,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { siteConfig } from "@/config/site";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { logout } from "@/features/auth/services/auth-service";
import { cn } from "@/lib/utils";

// ─── Avatar ───────────────────────────────────────────────────────────────────

function UserAvatar({ photoURL, displayName }: { photoURL?: string | null; displayName?: string | null }) {
  const initials = displayName
    ? displayName.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  if (photoURL) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photoURL}
        alt={displayName ?? "User"}
        className="h-8 w-8 rounded-full object-cover ring-2 ring-border"
      />
    );
  }

  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground ring-2 ring-border">
      {initials}
    </div>
  );
}

// ─── User menu ────────────────────────────────────────────────────────────────

function MenuLink({
  href,
  icon,
  onClick,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
    >
      <span className="text-muted-foreground">{icon}</span>
      {children}
    </Link>
  );
}

function UserMenu() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);

  async function handleSignOut() {
    setOpen(false);
    await logout();
    router.push("/login");
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Sign in
        </Link>
        <Link
          href="/register"
          className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get started
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg px-2 py-1 transition-colors hover:bg-accent"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <UserAvatar photoURL={user.photoURL} displayName={user.displayName} />
        <span className="hidden max-w-[120px] truncate text-sm font-medium text-foreground sm:block">
          {user.displayName ?? user.email}
        </span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full z-50 mt-1.5 w-56 animate-scale-in rounded-xl border border-border bg-popover p-1 shadow-elevated">
            <div className="px-3 py-2 mb-1">
              <p className="truncate text-sm font-medium text-foreground">{user.displayName}</p>
              <p className="truncate text-xs text-muted-foreground">{user.email}</p>
            </div>
            <div className="my-1 border-t border-border" />
            <MenuLink href="/dashboard" icon={<BookOpen className="h-4 w-4" />} onClick={() => setOpen(false)}>
              Dashboard
            </MenuLink>
            <MenuLink href="/settings" icon={<Settings className="h-4 w-4" />} onClick={() => setOpen(false)}>
              Settings
            </MenuLink>
            <MenuLink href="/settings" icon={<User className="h-4 w-4" />} onClick={() => setOpen(false)}>
              Profile
            </MenuLink>
            <div className="my-1 border-t border-border" />
            <button
              onClick={handleSignOut}
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-3 px-4 sm:px-6">
        <button
          onClick={onMenuClick}
          className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            L
          </div>
          <span className="hidden sm:block">{siteConfig.name}</span>
        </Link>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
