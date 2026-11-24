"use client";

import React from "react";
import Link from "next/link";
import {
  IntroductionData,
  ArchitectureData,
  PrerequisitesData,
} from "@/data/data";
import { InstallTabs } from "@/components/ui/install-tabs";
import {
  Sparkles,
  Layers,
  Cpu,
  ArrowRight,
  Terminal,
  CheckCircle2,
  Code2,
  Palette,
} from "lucide-react";

const ICON_MAP = {
  Layers: Layers,
  Sparkles: Sparkles,
  Code2: Code2,
  Palette: Palette,
};

export default function InstallationPage() {
  return (
    <main className="w-full max-w-4xl py-6 pb-20 font-inter">
      {/* Breadcrumb */}
      <div className="text-zinc-500 font-mono text-xs flex items-center gap-2">
        <span>Documentation</span>
        <span>/</span>
        <span className="text-zinc-300">Installation</span>
      </div>

      {/* Header */}
      <div className="mt-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Installation
        </h1>
        {/* 24px gap between title and content */}
        <p className="mt-6 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-2xl">
          Get started with Adaptive UI and elevate your interfaces with 60FPS
          hardware-accelerated canvas heroes, interactive ASCII physics, and
          customizable 3D stacked scroll animations. One single package installs
          everything you need.
        </p>
      </div>

      {/* Quick Package Install Card with Moving Gradient Border */}
      <div className="mt-10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
          <Terminal size={14} />
          <span>Quick Install</span>
        </div>
        <h2 className="text-xl font-semibold text-white">
          Install the Package
        </h2>
        {/* 24px gap below title */}
        <div className="mt-6">
          <div className="group relative rounded-xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            {/* Animated glowing border beam on hover */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,0.95)_25%,rgba(216,180,254,0.85)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3.5s_linear_infinite] transition-opacity duration-300 pointer-events-none" />
            <div className="absolute inset-0 rounded-xl border border-purple-500/20 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />
            <div className="relative rounded-[11px] bg-[#090615]/95 backdrop-blur-xl p-5">
              <InstallTabs packages="velozix-bits" />
            </div>
          </div>
        </div>
      </div>

      {/* What is Velozix Bits / Features */}
      <div className="mt-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
          <Sparkles size={14} />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-xl font-semibold text-white">
          Why Choose Velozix Bits?
        </h2>
        {/* 24px gap below title */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {IntroductionData.map((item) => {
            const IconComponent = ICON_MAP[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative rounded-xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
              >
                {/* Moving gradient line border animation on hover */}
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,0.9)_25%,rgba(216,180,254,0.8)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-300 pointer-events-none" />
                <div className="absolute inset-0 rounded-xl border border-purple-500/20 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />

                <div className="relative h-full rounded-[11px] bg-[#090615]/90 backdrop-blur-xl p-5 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="size-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                        <IconComponent size={16} />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-purple-200/70">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Architecture Section (Mapped with 24px gap & animated borders) */}
      <div className="mt-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
          <Cpu size={14} />
          <span>Under The Hood</span>
        </div>
        <h2 className="text-xl font-semibold text-white">
          Engine & Architecture
        </h2>
        {/* 24px gap below title */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ArchitectureData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            >
              {/* Moving gradient line border animation on hover */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,0.8)_25%,rgba(56,189,248,0.8)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-300 pointer-events-none" />
              <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />

              <div className="relative h-full rounded-[11px] bg-[#090d16]/90 backdrop-blur-xl p-5 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prerequisites Section (Mapped with 24px gap & animated borders) */}
      <div className="mt-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
          <CheckCircle2 size={14} />
          <span>System Requirements</span>
        </div>
        <h2 className="text-xl font-semibold text-white">
          Prerequisites
        </h2>
        {/* 24px gap below title */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {PrerequisitesData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,0.8)_25%,rgba(216,180,254,0.7)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-300 pointer-events-none" />
              <div className="absolute inset-0 rounded-xl border border-purple-500/20 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />

              <div className="relative h-full rounded-[11px] bg-[#090615]/90 backdrop-blur-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-white">
                      {item.title}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-purple-200/70 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Choose Framework Section (Mapped with 24px gap & animated borders) */}
      <div className="mt-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
          <Layers size={14} />
          <span>Integration Guides</span>
        </div>
        <h2 className="text-xl font-semibold text-white">
          Choose Your Framework
        </h2>
        {/* 24px gap below title */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/installation/framework"
            className="group relative rounded-xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
          >
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,0.95)_25%,rgba(216,180,254,0.85)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite] transition-opacity duration-300 pointer-events-none" />
            <div className="absolute inset-0 rounded-xl border border-purple-500/20 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />

            <div className="relative rounded-[11px] bg-[#090615]/95 backdrop-blur-xl p-6 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    Next.js (App Router)
                  </h3>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full border border-purple-500/30">
                    Production Ready
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-purple-200/70 mt-2">
                  Optimized for React 19 Server Components and client boundaries.
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-purple-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-4"
              />
            </div>
          </Link>

          <Link
            href="/installation/framework"
            className="group relative rounded-xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
          >
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,0.95)_25%,rgba(216,180,254,0.85)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite] transition-opacity duration-300 pointer-events-none" />
            <div className="absolute inset-0 rounded-xl border border-purple-500/20 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />

            <div className="relative rounded-[11px] bg-[#090615]/95 backdrop-blur-xl p-6 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    Vite (React + Tailwind)
                  </h3>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full border border-purple-500/30">
                    Production Ready
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-purple-200/70 mt-2">
                  Blazing fast HMR and lightweight bundle with standard ES modules.
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-purple-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-4"
              />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
