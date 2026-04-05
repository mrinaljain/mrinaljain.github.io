"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import MediaUploadTab from "./MediaUploadTab";

type Tab = "overview" | "media" | "settings";

type Props = {
  displayName?: string;
};

export default function AdminDashboard({ displayName }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="flex min-h-screen w-full bg-slate-50">
      {/* Sidebar */}
      <AdminSidebar
        displayName={displayName}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 md:px-8">
          {/* Header */}
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">Admin</p>
            <h1 className="mt-1 text-3xl font-bold text-slate-900">Welcome to dashboard</h1>
            {displayName ? <p className="mt-2 text-slate-700">Signed in as {displayName}</p> : null}
          </div>

          {/* Content Area */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">Dashboard Overview</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm text-slate-600">Total Assets</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm text-slate-600">This Month</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm text-slate-600">Storage Used</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">0 GB</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "media" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">Media Upload</h2>
              <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <MediaUploadTab />
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">Settings</h2>
              <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-slate-900">Account Settings</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Manage your admin account settings and preferences
                    </p>
                    <button className="mt-4 rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                      Edit Account
                    </button>
                  </div>

                  <hr className="border-slate-200" />

                  <div>
                    <h3 className="font-medium text-slate-900">Cloudinary Configuration</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Check your Cloudinary environment variables in .env.local
                    </p>
                    <p className="mt-3 text-xs text-slate-500">
                      Cloud Name: <code className="bg-slate-100 px-1">{process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "Not configured"}</code>
                    </p>
                  </div>

                  <hr className="border-slate-200" />

                  <div>
                    <h3 className="font-medium text-slate-900">Need Help?</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      See the documentation for setup and feature guides.
                    </p>
                    <a
                      href="/CLOUDINARY_QUICK_START.md"
                      target="_blank"
                      className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      View Documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
