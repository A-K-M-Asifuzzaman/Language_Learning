import {
  BookOpen,
  BookMarked,
  BotMessageSquare,
  ChartBar,
  FlaskConical,
  LayoutDashboard,
  Settings,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

export const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Overview of your progress",
  },
  {
    label: "Lessons",
    href: "/lessons",
    icon: BookOpen,
    description: "Browse and start lessons",
  },
  {
    label: "AI Tutor",
    href: "/tutor",
    icon: BotMessageSquare,
    description: "Chat with your AI English tutor",
  },
  {
    label: "Vocabulary",
    href: "/vocabulary",
    icon: BookMarked,
    description: "Build and review your word library",
  },
  {
    label: "Grammar Lab",
    href: "/grammar",
    icon: FlaskConical,
    description: "AI-powered grammar quizzes",
  },
  {
    label: "Progress",
    href: "/progress",
    icon: ChartBar,
    description: "Track your learning journey",
  },
  {
    label: "Achievements",
    href: "/achievements",
    icon: Trophy,
    description: "View your badges and milestones",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Account and preferences",
  },
];
