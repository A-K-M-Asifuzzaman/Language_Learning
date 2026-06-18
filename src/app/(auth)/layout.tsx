import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Sign in or create an account to get started.",
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left panel — branding / illustration */}
      <div className="hidden flex-col bg-muted p-10 lg:flex dark:bg-muted/20">
        <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <span>Language Learning</span>
        </div>
        <div className="mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg text-muted-foreground">
              &ldquo;The limits of my language mean the limits of my world.&rdquo;
            </p>
            <footer className="text-sm font-medium">— Ludwig Wittgenstein</footer>
          </blockquote>
        </div>
      </div>

      {/* Right panel — auth form */}
      <div className="flex items-center justify-center p-6 sm:p-12">{children}</div>
    </div>
  );
}
