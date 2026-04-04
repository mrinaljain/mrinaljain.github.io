"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  displayName?: string;
};

export default function AdminDashboard({ displayName }: Props) {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      router.push("/admin");
      router.refresh();
      setLoggingOut(false);
    }
  }

  return (
    <div className="w-full max-w-2xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm uppercase tracking-wide text-slate-500">Admin</p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">Welcome to dashboard</h1>
      {displayName ? <p className="mt-2 text-slate-700">Signed in as {displayName}</p> : null}

      <button
        type="button"
        onClick={handleLogout}
        disabled={loggingOut}
        className="mt-6 rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loggingOut ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
}
