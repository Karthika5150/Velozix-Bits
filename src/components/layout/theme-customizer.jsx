"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Palette, Check } from "lucide-react";

export const ACCENT_PRESETS = [
  {
    id: "violet",
    name: "Violet",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.45)",
    muted: "rgba(168, 85, 247, 0.15)",
    rgb: "168, 85, 247",
  },
  {
    id: "emerald",
    name: "Emerald",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.45)",
    muted: "rgba(16, 185, 129, 0.15)",
    rgb: "16, 185, 129",
  },
  {
    id: "cyan",
    name: "Cyan",
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.45)",
    muted: "rgba(6, 182, 212, 0.15)",
    rgb: "6, 182, 212",
  },
  {
    id: "amber",
    name: "Amber",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.45)",
    muted: "rgba(245, 158, 11, 0.15)",
    rgb: "245, 158, 11",
  },
  {
    id: "rose",
    name: "Rose",
    color: "#f43f5e",
    glow: "rgba(244, 63, 94, 0.45)",
    muted: "rgba(244, 63, 94, 0.15)",
    rgb: "244, 63, 94",
  },
  {
    id: "indigo",
    name: "Indigo",
    color: "#6366f1",
    glow: "rgba(99, 102, 241, 0.45)",
    muted: "rgba(99, 102, 241, 0.15)",
    rgb: "99, 102, 241",
  },
];

export function applyAccent(accentId, persist = true) {
  if (typeof document === "undefined") return;
  const preset =
    ACCENT_PRESETS.find((p) => p.id === accentId) || ACCENT_PRESETS[0];

  document.documentElement.setAttribute("data-accent", preset.id);
  document.documentElement.style.setProperty("--brand-accent", preset.color);
  document.documentElement.style.setProperty("--brand-accent-glow", preset.glow);
  document.documentElement.style.setProperty("--brand-accent-muted", preset.muted);
  document.documentElement.style.setProperty("--brand-accent-rgb", preset.rgb);

  if (persist) {
    try {
      localStorage.setItem("velozix-accent", preset.id);
      localStorage.setItem("velozix-manual-accent", "true");
    } catch {
      // fallback
    }
  }
}

/**
 * Hook to automatically cycle accent colors smoothly on the landing page
 */
export function useAutoCycleAccent(enabled = true, intervalMs = 3600) {
  useEffect(() => {
    if (!enabled) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % ACCENT_PRESETS.length;
      const nextPreset = ACCENT_PRESETS[currentIndex];
      applyAccent(nextPreset.id, false); // false = auto cycle mode, don't lock manual
    }, intervalMs);

    return () => clearInterval(interval);
  }, [enabled, intervalMs]);
}

/**
 * Manual Theme Accent Switcher component for Docs & Settings
 */
export function ThemeCustomizer({ className = "", compact = false }) {
  const [selectedAccent, setSelectedAccent] = useState("violet");

  useEffect(() => {
    const saved = localStorage.getItem("velozix-accent");
    if (saved && ACCENT_PRESETS.some((p) => p.id === saved)) {
      applyAccent(saved, false);
      setSelectedAccent(saved);
    } else {
      applyAccent("violet", false);
    }
  }, []);

  const handleSelect = (id) => {
    setSelectedAccent(id);
    applyAccent(id, true);
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md">
        {ACCENT_PRESETS.map((preset) => {
          const isSelected = selectedAccent === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => handleSelect(preset.id)}
              style={{ backgroundColor: preset.color }}
              title={`Switch accent to ${preset.name}`}
              className={`size-5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                isSelected
                  ? "ring-2 ring-white scale-110 shadow-[0_0_12px_var(--brand-accent)]"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              {isSelected && <Check size={11} className="text-white drop-shadow stroke-[3]" />}
            </button>
          );
        })}
      </div>
      {!compact && (
        <span className="text-[10px] font-mono text-zinc-400 capitalize">
          Active: {selectedAccent}
        </span>
      )}
    </div>
  );
}
