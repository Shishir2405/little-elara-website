import type { Metadata } from "next";
import { AdminNav } from "@/components/layout/AdminNav";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cream min-h-[100dvh]">
      <AdminNav />
      {children}
    </div>
  );
}
