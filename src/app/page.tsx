import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Language Learning — Practice English",
  description:
    "A production-grade language learning platform for vocabulary, grammar, speaking, and writing practice.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Language Learning
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          A production-grade language learning platform built with Next.js 15, TypeScript, and
          Firebase.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/login"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get Started
        </Link>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}
