"use client";

import React from "react";
import { SideNavData } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeCustomizer } from "@/components/layout/theme-customizer";
import { Palette } from "lucide-react";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside
      data-lenis-prevent
      className="w-[18%] h-[calc(100vh-3.5rem)] z-40 scroll-smooth flex flex-col justify-between fixed top-14 left-0 overflow-y-auto no-scrollbar bg-[#030712] border-r border-white/5"
    >
      <div className="text-white flex flex-col gap-6 py-6 px-3">
        {SideNavData.map((val) => (
          <div key={val.id} className="w-full flex flex-col gap-3">
            <h6 className="text-[#a9a1af] text-[12px] font-normal font-plex tracking-wider uppercase">
              {val.title}
            </h6>
            <div className="border-l border-zinc-800 flex flex-col">
              {val.items.map((vals) => {
                const isActive = pathname === vals.href;
                return (
                  <Link
                    href={vals.href}
                    className={`flex items-center justify-between pl-4 pr-3 py-1.5 transition-colors duration-150 border-l -ml-[1px] ${
                      isActive
                        ? "border-[var(--brand-accent,#a855f7)] text-white font-medium"
                        : "border-transparent text-gray-500 hover:text-gray-300"
                    }`}
                    key={vals.id}
                  >
                    <p className={`text-[13px] font-inter ${isActive ? "text-white" : ""}`}>
                      {vals.name}
                    </p>
                    {vals.badge && (
                      <span
                        className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-full ${
                          vals.badge === "Planned" || vals.badge === "Soon"
                            ? "bg-zinc-800/80 text-zinc-400 border border-white/5"
                            : "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        }`}
                      >
                        {vals.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Manual Accent Color Switcher inside Docs ("ulla naa accent click pannatha change aaganum") */}
      
    </aside>
  );
}
