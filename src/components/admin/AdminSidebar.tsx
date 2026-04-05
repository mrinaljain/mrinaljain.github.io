"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaSignOutAlt, FaChartBar, FaImages, FaCog } from "react-icons/fa";
import { useRouter } from "next/navigation";

type SidebarTab = "overview" | "media" | "settings";

type AdminSidebarProps = {
  displayName?: string;
  activeTab: SidebarTab;
  onTabChange: (tab: SidebarTab) => void;
};

export default function AdminSidebar({ displayName, activeTab, onTabChange }: AdminSidebarProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  const menuItems = [
    { id: "overview" as const, label: "Overview", icon: FaChartBar },
    { id: "media" as const, label: "Media Upload", icon: FaImages },
    { id: "settings" as const, label: "Settings", icon: FaCog },
  ];

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
    <>
      {/* Mobile Toggle Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg bg-slate-900 p-2 text-white hover:bg-slate-800"
          aria-label="Toggle sidebar"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 transform bg-slate-900 text-white transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo / Header */}
        <div className="border-b border-slate-700 p-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="mt-1 text-xs text-slate-400">Dashboard</p>
        </div>

        {/* User Info */}
        <div className="border-b border-slate-700 p-6">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
            <span className="text-lg font-bold">
              {displayName?.charAt(0).toUpperCase() || "A"}
            </span>
          </div>
          <p className="mt-3 text-sm font-medium">{displayName || "Admin User"}</p>
          <p className="text-xs text-slate-400">Admin</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-2 p-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Logout Section */}
        <div className="border-t border-slate-700 p-6">
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex w-full items-center gap-3 rounded-lg bg-red-600 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FaSignOutAlt size={18} />
            {loggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </aside>

      {/* Main Content Offset */}
      <div className="hidden md:block md:w-64 md:shrink-0" />
    </>
  );
}
