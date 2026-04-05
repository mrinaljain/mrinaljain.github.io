"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type LoginState = {
  username: string;
  password: string;
};

export default function AdminLoginForm() {
  const router = useRouter();
  const [form, setForm] = useState<LoginState>({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { ok: boolean; message?: string };
      if (!res.ok || !data.ok) {
        setError(data.message || "Login failed");
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      console.error("Admin login failed:", err);
      setError("Unable to login right now");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-semibold text-slate-900">Admin Login</h1>

      <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="admin-username">
        Username
      </label>
      <input
        id="admin-username"
        type="text"
        autoComplete="username"
        value={form.username}
        onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))}
        className="mb-4 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-blue-500 focus:ring"
        required
      />

      <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="admin-password">
        Password
      </label>
      <input
        id="admin-password"
        type="password"
        autoComplete="current-password"
        value={form.password}
        onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
        className="mb-4 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-blue-500 focus:ring"
        required
      />

      {error ? <p className="mb-3 text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
