import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your progress."
      />

      {/* Feature widgets will go here */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground"
          >
            Stat card {i + 1}
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          Recent activity — feature coming soon
        </div>
        <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          Progress chart — feature coming soon
        </div>
      </div>
    </div>
  );
}
