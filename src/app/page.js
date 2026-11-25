"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Terminal,
  Sparkles,
  Layers,
  Cpu,
  Check,
  Copy,
  Zap,
  Boxes,
  Eye,
  Sliders,
  Code2,
  MousePointer2,
  Grid,
} from "lucide-react";
import {
  GooeyGridCursor,
  LorenzoGridCursor,
} from "@/components/ui/lorenzo-grid-cursor";
import { StackedCardsScroll } from "@/components/ui/stacked-cards-scroll";
import { CodeTypewriter } from "@/components/ui/code-typewriter";
import { InstallTabs } from "@/components/ui/install-tabs";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText("npm i velozix-bits");
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const showcaseComponents = [
    {
      title: "Gooey Grid Cursor",
      category: "Cursor & Matrix",
      badge: "Trending",
      description:
        "Fluid grid cursor trail with SVG gooey metaball filtering, dynamic color cycling, and zero-gap Supercover tracking.",
      href: "/installation/components/lorenzo-grid-cursor",
    },
    {
      title: "Stacked Cards 3D",
      category: "Scroll & Marquee",
      badge: "Pin Mode",
      description:
        "10-card top-layered stack with odd/even rotations, pin:true scroll trigger, and an SVG half-ring single-word display.",
      href: "/installation/components/stacked-cards",
    },
    {
      title: "Liquid Blob Hero",
      category: "Hero & Backgrounds",
      badge: "Popular",
      description:
        "Organic multi-layer fluid simulation with real-time marching squares topography and cursor gravity attraction.",
      href: "/installation/components/blob-banner",
    },
    {
      title: "Interactive ASCII Face",
      category: "Canvas Physics",
      badge: "Physics",
      description:
        "Phosphor CRT matrix with spring physics, cursor particle dispersion, contrast auto-levels, and scanlines.",
      href: "/installation/components/interactive-ascii-face",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030014] text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-x-clip font-mono">
      {/* GOOEY GRID CURSOR LOCKED TO VIOLET */}
      <GooeyGridCursor
        color="#a855f7"
        cellSize={50}
        borderRadius="20%"
        trailDuration={220}
        blurAmount={6.0}
        blendMode="screen"
        showGridLines={true}
        gridLineColor="rgba(168, 85, 247, 0.05)"
      />

      {/* Ambient background glows - Deep Black, Violet, Purple & Lavender */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(168,85,247,0.30),rgba(126,34,206,0.10)_50%,transparent_100%)] blur-2xl" />
      <div className="pointer-events-none absolute top-[750px] left-1/4 size-[550px] rounded-full bg-purple-600/12 blur-[140px]" />
      <div className="pointer-events-none absolute top-[1400px] right-1/4 size-[550px] rounded-full bg-violet-600/12 blur-[140px]" />
      <div className="pointer-events-none absolute top-[2200px] left-1/3 size-[600px] rounded-full bg-fuchsia-600/10 blur-[150px]" />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-20 flex flex-col items-center text-center">
        {/* Release Announcement Pill */}
        <Link
          href="/installation/components/lorenzo-grid-cursor"
          className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 hover:bg-purple-900/50 backdrop-blur-xl text-xs font-mono text-purple-200 hover:text-white transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_20px_rgba(168,85,247,0.2)] mb-8 cursor-pointer hover:border-purple-400/60"
        >
          <span className="flex size-2 rounded-full animate-pulse bg-purple-400 shadow-[0_0_8px_#a855f7]" />
          <span>Velozix Bits v0.1.5 is Live</span>
          <span className="text-purple-300/70 group-hover:text-purple-200 transition-colors">
            • Gooey Grid Cursor + Pinned Scrollytelling Deck
          </span>
          <ArrowRight
            size={12}
            className="group-hover:translate-x-0.5 transition-transform text-purple-300"
          />
        </Link>

        {/* Hero Title (Inter font) */}
        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.1]">
          Craft High-Velocity,{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #c084fc 0%, #a855f7 45%, #f3e8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            60FPS UI Bits
          </span>{" "}
          with Fluid Motion.
        </h1>

        {/* Subtitle (IBM Plex Mono font) */}
        <p className="mt-6 font-mono text-xs sm:text-sm md:text-base text-purple-200/90 max-w-2xl leading-relaxed">
          A production collection of interactive React & Next.js animated components.
          Move your cursor across the screen to experience fluid gooey grid merges in rich violet & lavender shades.
        </p>

        {/* CTAs & Terminal Copy Pill */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/installation"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0a0418] font-semibold font-sans text-sm hover:bg-purple-100 transition-all shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:scale-[1.02] cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/installation/components/lorenzo-grid-cursor"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 bg-purple-950/30 hover:bg-purple-900/50 backdrop-blur-xl text-purple-100 font-medium font-sans text-sm transition-all hover:border-purple-400/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] cursor-pointer"
          >
            <Grid size={16} className="text-purple-400" />
            <span>Gooey Grid Cursor</span>
          </Link>

          {/* Quick Copy Command */}
          <button
            type="button"
            onClick={handleCopyInstall}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-purple-500/30 bg-[#070214]/90 hover:bg-[#0c0422] backdrop-blur-xl font-mono text-xs text-purple-200 hover:text-white transition-all cursor-pointer group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_20px_rgba(168,85,247,0.15)] hover:border-purple-400/60"
          >
            <Terminal size={14} className="text-purple-400" />
            <span>npm i velozix-bits</span>
            {copied ? (
              <Check size={14} className="text-emerald-400 ml-1" />
            ) : (
              <Copy size={14} className="text-purple-400/70 group-hover:text-purple-200 ml-1" />
            )}
          </button>
        </div>

        {/* Interactive hint banner */}
        <div className="mt-12 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-500/25 bg-[#080318]/70 backdrop-blur-md text-xs font-mono text-purple-300/80">
          <MousePointer2 size={13} className="text-purple-400" />
          <span>Gooey Grid Cursor: Move across the screen to experience fluid gooey curved square merges</span>
        </div>

        {/* Metric Badges */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 border-t border-purple-500/20 pt-8 w-full max-w-3xl font-mono">
          <div>
            <div className="text-2xl font-bold font-mono text-white">60 FPS</div>
            <div className="text-xs text-purple-300/70 mt-0.5">
              Hardware Accelerated
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-purple-400">
              100%
            </div>
            <div className="text-xs text-purple-300/70 mt-0.5">
              TypeScript Typings
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-white">Zero</div>
            <div className="text-xs text-purple-300/70 mt-0.5">
              Config Setup Required
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-purple-400">
              &lt; 14KB
            </div>
            <div className="text-xs text-purple-300/70 mt-0.5">
              Tree-Shakeable Core
            </div>
          </div>
        </div>
      </section>

      {/* 3D STACKED CARDS DECK SPOTLIGHT (GSAP ScrollTrigger pin: true & Means & Methods Scroller) */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-8 pt-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full border border-purple-500/30 mb-3">
            <Sparkles size={13} />
            <span>GSAP Pinned Scrollytelling Deck</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Stacked Cards with Dynamic Topic Scroller
          </h2>
          <p className="mt-2 font-mono text-xs sm:text-sm text-purple-200/80 max-w-xl">
            Scroll down the page to watch the deck pin in place (pin: true) as each 3D card rotates and the side topic list advances smoothly with glowing highlights.
          </p>
        </div>

        {/* Live Pinned Instance of StackedCardsScroll */}
        <StackedCardsScroll pin={true} pinHeight="320vh" />
      </section>

      {/* CODE TYPEWRITER & ARCHITECTURE SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Live Code Typewriter Terminal */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
              <Terminal size={14} />
              <span>Interactive Typewriter Terminal</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              Drop-In Ready Code Bits
            </h2>
            <p className="font-mono text-xs sm:text-sm text-purple-200/80 mb-6 leading-relaxed">
              Watch live component integration scripts type out in real time. Single
              line imports with typed props and zero boilerplate.
            </p>

            {/* Code Typewriter Instance */}
            <CodeTypewriter />
          </div>

          {/* Right Column: Architectural Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              {
                icon: Cpu,
                title: "Zero Runtime Overhead",
                desc: "Every component is tree-shakeable. You bundle only what you import into your client bundle.",
              },
              {
                icon: Zap,
                title: "Hardware Accelerated 60FPS",
                desc: "Intensive DOM block pooling and topography algorithms execute directly with zero React re-render lag.",
              },
              {
                icon: Layers,
                title: "Self-Contained Embedded CSS",
                desc: "Keyframes and base layout rules are auto-injected. Zero missing stylesheet layout errors.",
              },
              {
                icon: Boxes,
                title: "Universal React 19 & Vite",
                desc: "Built from scratch for Next.js App Router Server Components and traditional Vite applications.",
              },
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                >
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,0.8)_25%,rgba(216,180,254,0.7)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 rounded-xl border border-purple-500/20 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />

                  <div className="relative rounded-[11px] bg-[#070214]/95 backdrop-blur-xl p-4 flex items-start gap-3.5">
                    <div className="size-8 rounded-lg flex items-center justify-center shrink-0 border border-purple-500/30 bg-purple-500/15 text-purple-300 mt-0.5">
                      <ItemIcon size={16} />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-mono text-xs text-purple-200/80 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPONENT CATALOG SHOWCASE */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full border border-purple-500/30 mb-3">
            <Boxes size={13} />
            <span>Component Catalog</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Explore Ready-to-Use UI Bits
          </h2>
          <p className="mt-2 font-mono text-xs sm:text-sm text-purple-200/80 max-w-lg">
            Add these battle-tested animation units into your project with a single import.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {showcaseComponents.map((comp, idx) => (
            <Link
              key={idx}
              href={comp.href}
              className="group relative rounded-2xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
            >
              {/* Moving gradient line border on hover */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,0.95)_25%,rgba(216,180,254,0.85)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-300 pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl border border-purple-500/20 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />

              <div className="relative h-full rounded-[15px] bg-[#070214]/95 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-purple-400/80">
                      {comp.category}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border text-purple-300 bg-purple-500/15 border-purple-500/30">
                      {comp.badge}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-bold text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                    <span>{comp.title}</span>
                    <ArrowRight
                      size={16}
                      className="text-purple-400/60 group-hover:text-white group-hover:translate-x-1 transition-all"
                    />
                  </h3>

                  <p className="mt-3 font-mono text-xs sm:text-sm text-purple-200/70 leading-relaxed">
                    {comp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono text-purple-300/60 group-hover:text-purple-200 transition-colors">
                  <span>Interactive Live Demo</span>
                  <span className="text-purple-400">View Docs →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUICK INSTALL CTA SECTION */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="relative group rounded-3xl p-[1px] overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.2)]">
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,0.95)_25%,rgba(216,180,254,0.85)_50%,transparent_75%)] opacity-40 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-500 pointer-events-none" />

          <div className="relative rounded-[23px] bg-gradient-to-b from-[#180a32] via-[#0d0422] to-[#04010e] p-8 sm:p-12 flex flex-col items-center">
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Build with Velozix Bits?
            </h2>
            <p className="mt-4 font-mono text-xs sm:text-sm text-purple-200/80 max-w-xl">
              Install the package and start adding the Gooey grid cursor, liquid heroes,
              and 3D stacked cards to your project right now.
            </p>

            <div className="w-full max-w-lg mt-8 font-mono">
              <InstallTabs packages="velozix-bits" />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/installation"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold font-sans text-sm hover:bg-purple-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-purple-500/15 py-8 px-4 sm:px-8 text-center text-xs font-mono text-purple-300/60 flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        <div className="flex items-center gap-2">
          <span> &#169; 2026</span>
          <span className="font-bold text-white">Velozix Bits </span>
          <span>• Built by Karthika</span>
          <span>• License</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/installation" className="hover:text-white transition-colors">
            Documentation
          </Link>
          <Link
            href="/installation/framework"
            className="hover:text-white transition-colors"
          >
            Frameworks
          </Link>
          <Link
            href="/installation/components/lorenzo-grid-cursor"
            className="hover:text-white transition-colors"
          >
            Gooey Grid Cursor
          </Link>
        </div>
      </footer>
    </div>
  );
}
