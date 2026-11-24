"use client";
import React from "react";
import { useState } from "react";
import { Check, Code2, Copy, Eye, Gauge, Orbit } from "lucide-react";
import { InfiniteTunnelHero } from "@/components/ui/infinite-tunnel-hero";
import { PropsTable } from "@/components/ui/props-table";

const tunnelProps = [
  { prop: "color", type: "string", default: '"#ff52ef"', description: "Hex color used for the neon grid, horizon line, and glow." },
  { prop: "backgroundColor", type: "string", default: '"#1f0038"', description: "Base color for the tunnel background." },
  { prop: "speed", type: "number", default: "1", description: "Forward travel speed. Use 0 to hold a still tunnel." },
  { prop: "className", type: "string", default: '""', description: "Extra classes applied to the hero container." },
  { prop: "label", type: "string", default: '"Animated infinite tunnel"', description: "Accessible name for the canvas animation." },
];

const usage = `import { InfiniteTunnelHero } from "@/components/ui/infinite-tunnel-hero";

export default function Hero() {
  return (
    <InfiniteTunnelHero
      color="#ff52ef"
      backgroundColor="#1f0038"
      speed={1}
    />
  );
}`;

export default function InfiniteTunnelPage() {
  const [activeTab, setActiveTab] = useState("preview");
  const [color, setColor] = useState("#ff52ef");
  const [backgroundColor, setBackgroundColor] = useState("#1f0038");
  const [speed, setSpeed] = useState(1);
  const [copied, setCopied] = useState(false);


  async function copyUsage() {
    await navigator.clipboard.writeText(usage);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <article className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 text-gray-200 font-plex md:px-10">
      <nav className="flex items-center gap-2 font-mono text-[13px] text-gray-500" aria-label="Breadcrumb">
        <span>Documentation</span><span>/</span><span>Components</span><span>/</span>
        <span className="font-medium text-gray-200">Infinite Tunnel Hero</span>
      </nav>

      <header className="mt-4 flex flex-col justify-between gap-8 border-b border-white/10 pb-6 md:flex-row md:items-center">
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 font-mono text-xs font-semibold text-cyan-300">NEW COMPONENT</span>
            <span className="rounded-full border border-white/5 bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">HERO / CANVAS</span>
            <span className="rounded-full border border-white/5 bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">MIRRORED DEPTH GRID</span>
          </div>
          <div>
            <h1 className="font-sans text-3xl font-black tracking-tight text-white md:text-4xl">Infinite Tunnel Hero</h1>
            <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-gray-400 md:text-base">
              A retro-futuristic neon grid tunnel with animated mirrored ceiling and floor planes converging at a fixed horizon.
            </p>
          </div>
        </div>
        <button type="button" onClick={copyUsage} className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 font-mono text-xs font-medium text-white transition hover:bg-white/15">
          {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4 text-zinc-400" />}
          <span className={copied ? "text-emerald-400" : ""}>{copied ? "Copied!" : "Copy Usage"}</span>
        </button>
      </header>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="inline-flex rounded-xl border border-white/10 bg-zinc-900 p-1">
            {[{ id: "preview", label: "Preview", Icon: Eye }, { id: "code", label: "Code", Icon: Code2 }].map(({ id, label, Icon }) => (
              <button key={id} type="button" onClick={() => setActiveTab(id)} className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-medium transition ${activeTab === id ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-400 hover:text-white"}`}>
                <Icon className="size-3.5" />{label}
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-zinc-400 sm:flex"><span className="size-2 animate-pulse rounded-full bg-pink-400" />Grid field: Live</div>
        </div>

        {activeTab === "preview" ? (
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
            <InfiniteTunnelHero
              key={`${color}-${backgroundColor}-${speed}`}
              color={color}
              backgroundColor={backgroundColor}
              speed={speed}
            />
            <div className="absolute inset-x-4 bottom-4 z-30 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/15 bg-zinc-950/90 p-3 font-mono text-xs text-white shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 text-zinc-400"><Orbit className="size-3.5 text-pink-300" />Autonomous tunnel loop</div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <label className="flex items-center gap-2">Grid<input type="color" value={color} onChange={(event) => setColor(event.target.value)} className="size-6 cursor-pointer rounded border border-white/15 bg-transparent" /></label>
                <label className="flex items-center gap-2">BG<input type="color" value={backgroundColor} onChange={(event) => setBackgroundColor(event.target.value)} className="size-6 cursor-pointer rounded border border-white/15 bg-transparent" /></label>
                <label className="flex items-center gap-2">Speed<input type="range" min="0" max="3" step="0.1" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} className="w-16 accent-pink-300" /><span>{speed.toFixed(1)}×</span></label>
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/60 px-4 py-3 font-mono text-xs text-zinc-400"><span className="flex items-center gap-2"><Code2 className="size-4" />Usage: page.jsx</span><button type="button" onClick={copyUsage} className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1 text-white hover:bg-white/15"><Copy className="size-3.5" />Copy</button></div>
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-zinc-300"><code>{usage}</code></pre>
          </div>
        )}
      </section>

      <section className="mt-12 space-y-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5"><div className="flex size-8 items-center justify-center rounded-lg border border-pink-400/20 bg-pink-400/10 text-pink-300"><Orbit className="size-4" /></div><h2 className="text-sm font-semibold text-white">Neon Grid Corridor</h2><p className="text-xs leading-relaxed text-gray-400">Ceiling and floor grid planes recycle from a shared horizon for continuous depth.</p></div>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5"><div className="flex size-8 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-300"><Orbit className="size-4" /></div><h2 className="text-sm font-semibold text-white">Fixed Vanishing Point</h2><p className="text-xs leading-relaxed text-gray-400">The horizon remains locked in the center for a clean, uninterrupted tunnel loop.</p></div>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5"><div className="flex size-8 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/10 text-amber-300"><Gauge className="size-4" /></div><h2 className="text-sm font-semibold text-white">Live Tuning</h2><p className="text-xs leading-relaxed text-gray-400">Adjust ring count, travel speed, color, and pointer response directly in the preview.</p></div>
        </div>

        <div className="pt-6">
          <PropsTable title="InfiniteTunnelHero Props" description="Customize the tunnel depth, color, movement, and interaction." data={tunnelProps} />
        </div>
      </section>
    </article>
  );
}
