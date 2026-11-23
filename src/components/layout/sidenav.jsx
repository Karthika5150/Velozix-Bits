"use client";

import React from "react";
import { SideNavData } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside
      data-lenis-prevent
      className="w-[15%] h-[calc(100vh-3.5rem)] z-40 flex flex-col fixed top-14 left-0 overflow-y-auto no-scrollbar bg-[#030712] border-r border-white/5"
    >
      <div className="text-white flex flex-col gap-6 p-6">
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
                    className={`flex flex-col gap-2 pl-4 py-1 transition-colors duration-150 border-l -ml-[1px] ${
                      isActive
                        ? "border-emerald-400 text-white font-medium"
                        : "border-transparent text-gray-500 hover:text-gray-300"
                    }`}
                    key={vals.id}
                  >
                    <p className={`text-[14px] font-inter ${isActive ? "text-white" : ""}`}>
                      {vals.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}