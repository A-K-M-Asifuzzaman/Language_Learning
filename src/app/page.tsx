import type { Metadata } from "next";
import Link from "next/link";
import {
  BookMarked,
  FlaskConical,
  Mic2,
  PenLine,
  BotMessageSquare,
  ChartBar,
  ArrowRight,
  Zap,
  Flame,
  Star,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Language Learning — Practice English with AI",
  description:
    "Master English with AI-powered vocabulary, grammar quizzes, speaking practice, writing assistance, and a personal AI tutor.",
};

const FEATURES = [
  {
    icon: BookMarked,
    color: "text-ds-teal",
    bg: "bg-ds-teal/10",
    title: "Vocabulary Builder",
    description: "Spaced repetition + AI examples. Build a 1000-word vocabulary that sticks.",
  },
  {
    icon: FlaskConical,
    color: "text-ds-violet",
    bg: "bg-ds-violet/10",
    title: "Grammar Lab",
    description: "18 grammar categories. AI generates unique questions at your exact level.",
  },
  {
    icon: Mic2,
    color: "text-ds-amber",
    bg: "bg-ds-amber/10",
    title: "Speaking Practice",
    description: "Speak and get instant AI feedback on clarity, fluency, and vocabulary.",
  },
  {
    icon: PenLine,
    color: "text-ds-teal",
    bg: "bg-ds-teal/10",
    title: "Writing Assistant",
    description: "Fix grammar, rewrite for tone, boost vocabulary — in real time.",
  },
  {
    icon: BotMessageSquare,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "AI Tutor",
    description: "Chat with Aria, your personal English tutor, available 24/7.",
  },
  {
    icon: ChartBar,
    color: "text-ds-green",
    bg: "bg-ds-green/10",
    title: "Progress Tracking",
    description: "Rich analytics, streaks, XP, and achievements to keep you motivated.",
  },
];

const PERKS = [
  "Free to get started — no credit card",
  "AI-powered feedback on every answer",
  "Works on mobile and desktop",
  "Dark mode included",
];

const STATS = [
  { value: "18+", label: "Grammar topics" },
  { value: "AI", label: "Powered feedback" },
  { value: "6", label: "Practice modes" },
  { value: "∞", label: "Practice sessions" },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
              L
            </div>
            Language Learning
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              Get started free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 sm:py-28">
        {/* Badge */}
        <div className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Zap className="h-3.5 w-3.5" />
          Powered by Google Gemini AI
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Learn English{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              faster with AI
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Vocabulary, grammar, speaking, and writing — all in one place.
            Get instant AI feedback and track your progress every day.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-glow-violet active:scale-[0.98]"
          >
            Start for free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 rounded-xl border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent active:scale-[0.98]"
          >
            View dashboard
          </Link>
        </div>

        {/* Perks */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {PERKS.map((p) => (
            <div key={p} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-ds-green" />
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-muted/30 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-0.5 text-center">
              <span className="text-3xl font-bold text-foreground">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Everything you need to master English
          </h2>
          <p className="max-w-lg text-muted-foreground">
            Six AI-powered modules that work together to accelerate your learning.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-elevated"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${f.bg}`}>
                <f.icon className={`h-5 w-5 ${f.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof / motivation strip */}
      <section className="border-y border-border bg-muted/30 py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-ds-amber text-ds-amber" />
            ))}
          </div>
          <blockquote className="text-xl font-semibold text-foreground">
            &ldquo;The limits of my language mean the limits of my world.&rdquo;
          </blockquote>
          <footer className="text-sm text-muted-foreground">— Ludwig Wittgenstein</footer>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 rounded-full bg-ds-amber/15 px-3 py-1.5 text-sm font-medium text-ds-amber">
              <Flame className="h-4 w-4" />
              Daily streaks
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5 text-sm font-medium text-primary">
              <Zap className="h-4 w-4" />
              Earn XP
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-ds-teal/15 px-3 py-1.5 text-sm font-medium text-ds-teal">
              <Star className="h-4 w-4" />
              Unlock badges
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Ready to start learning?
        </h2>
        <p className="max-w-md text-muted-foreground">
          Join now and practise English with AI feedback every single day.
        </p>
        <Link
          href="/register"
          className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-glow-violet active:scale-[0.98]"
        >
          Create free account
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground sm:px-6">
          <p>© {new Date().getFullYear()} Language Learning. Built with Next.js 15 &amp; Gemini AI.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
