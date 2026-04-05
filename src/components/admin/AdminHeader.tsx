import Link from "next/link";

export default function AdminHeader() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Mrinal Jain
        </Link>
        <p className="text-sm font-medium text-slate-600">Admin Dashboard</p>
      </div>
    </header>
  );
}
