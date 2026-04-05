import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AdminDashboard from "@/components/admin/AdminDashboard";
import { getAdminSession } from "@/lib/admin-auth";
import { createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createPageMetadata({
  title: "Admin Dashboard",
  description: "Private admin dashboard",
  path: "/admin/dashboard",
  noIndex: true,
  type: "website",
});

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin");
  }

  return (
    <AdminDashboard displayName={session.user.displayName || session.user.username} />
  );
}
