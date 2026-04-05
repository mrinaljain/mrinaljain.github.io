"use client";

import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

type ThemeOption = "light" | "dark" | "system";

const themeOptions: ThemeOption[] = ["light", "dark", "system"];
const subscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeTheme = (theme as ThemeOption) ?? "system";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-800 backdrop-blur-sm transition hover:bg-white dark:border-white/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-label="Theme settings"
      >
        Theme
      </button>

      {menuOpen && (
        <div
          className="absolute right-0 top-12 z-50 w-40 rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900"
          role="menu"
        >
          {themeOptions.map((option) => {
            const isActive = mounted && activeTheme === option;

            return (
              <button
                key={option}
                type="button"
                role="menuitem"
                className={`w-full rounded-lg px-3 py-2 text-left text-sm capitalize transition ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                }`}
                onClick={() => {
                  setTheme(option);
                  setMenuOpen(false);
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
