"use client";

import React, { useState } from "react";
import {
  Code2,
  Copy,
  Check,
  Eye,
  Layers,
  Sparkles,
  MousePointer2,
  Sliders,
  RotateCcw,
} from "lucide-react";
import {
  StackedCardsScroll,
  DEFAULT_STACKED_CARDS,
} from "@/components/ui/stacked-cards-scroll";
import { PropsTable } from "@/components/ui/props-table";

const STACKED_CARDS_PROPS = [
  {
    prop: "cards",
    type: "StackedCardItem[]",
    default: "DEFAULT_STACKED_CARDS (10 items)",
    description:
      "Array of 10 card items containing title, tag, description, accent colors, and specifications.",
  },
  {
    prop: "initialIndex",
    type: "number",
    default: "0",
    description: "Initially active card index (0 to cards.length - 1).",
  },
  {
    prop: "enableWheelScroll",
    type: "boolean",
    default: "true",
    description:
      "Enables stepping through the 3D card deck via the mouse wheel scroll trigger.",
  },
  {
    prop: "pin",
    type: "boolean",
    default: "false",
    description:
      "Enables ScrollTrigger sticky pinning behavior so page scrolling drives through all 10 cards before unpinning.",
  },
  {
    prop: "pinHeight",
    type: "string",
    default: '"280vh"',
    description: "Height of the scroll track when pin={true}.",
  },
  {
    prop: "autoPlay",
    type: "boolean",
    default: "false",
    description:
      "Automatically advances through cards at a timed interval. Pauses when hovered.",
  },
  {
    prop: "autoPlayInterval",
    type: "number",
    default: "4000",
    description: "Autoplay transition interval in milliseconds.",
  },
  {
    prop: "onChange",
    type: "(index: number, card: StackedCardItem) => void",
    default: "undefined",
    description: "Callback fired whenever the active card changes.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes for outer container styling.",
  },
];

const USAGE_CODE = `"use client";

import { StackedCardsScroll } from "adaptive-ui-react";

export default function Showcase() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      {/* 3D 10-Card Deck with Odd/Even Alternating Rotation & Half-Ring Gauge */}
      <StackedCardsScroll
        enableWheelScroll={true}
        autoPlay={false}
        onChange={(index, card) => console.log("Active Card:", index, card.title)}
      />
    </div>
  );
}`;

export default function StackedCardsDocsPage() {
  const [activeTab, setActiveTab] = useState("preview");
  const [enableWheelScroll, setEnableWheelScroll] = useState(true);
  const [pin, setPin] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(USAGE_CODE);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback
    }
  };

  return (
    <main className="w-full max-w-5xl py-6 pb-20 font-inter">
      {/* Breadcrumb */}
      <div className="text-zinc-500 font-mono text-xs flex items-center gap-2">
        <span>Documentation</span>
        <span>/</span>
        <span>Components</span>
        <span>/</span>
        <span className="text-zinc-300">Stacked Cards 3D</span>
      </div>

      {/* Header */}
      <div className="mt-4">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Stacked Cards 3D
          </h1>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 uppercase">
            New Component
          </span>
        </div>
        <p className="mt-6 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-2xl">
          A high-impact 3D perspective card deck featuring 10 stacked cards with
          odd/even alternating rotations. Paired with a futuristic SVG
          Half-Ring optical progress gauge and smooth optical content transitions
          driven by mouse scroll or interactive scrubbing.
        </p>
      </div>

      {/* Preview / Code Tab Toggle Bar */}
      <div className="mt-8 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeTab === "preview"
                ? "bg-white/15 text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Eye size={14} />
            <span>Preview</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeTab === "code"
                ? "bg-white/15 text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Code2 size={14} />
            <span>Code</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleCopyCode}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          <span>{copied ? "Copied" : "Copy Code"}</span>
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="mt-6">
        {activeTab === "preview" ? (
          <div className="space-y-6">
            {/* Live Component Instance */}
            <StackedCardsScroll
              key={resetKey}
              enableWheelScroll={enableWheelScroll}
              pin={pin}
              autoPlay={autoPlay}
              autoPlayInterval={3500}
            />

            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center gap-2 text-xs font-mono text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableWheelScroll}
                    onChange={(e) => setEnableWheelScroll(e.target.checked)}
                    className="rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-emerald-500/20"
                  />
                  <span>Wheel Scroll</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-mono text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pin}
                    onChange={(e) => setPin(e.target.checked)}
                    className="rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-emerald-500/20"
                  />
                  <span>Pin Mode (Sticky Page Scroll)</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-mono text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoPlay}
                    onChange={(e) => setAutoPlay(e.target.checked)}
                    className="rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-emerald-500/20"
                  />
                  <span>Autoplay</span>
                </label>
              </div>

              <button
                type="button"
                onClick={() => setResetKey((k) => k + 1)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
                <span>Reset to Card 1</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="relative rounded-2xl border border-white/10 bg-black/60 p-6 font-mono text-xs overflow-x-auto">
            <pre className="text-zinc-200">
              <code>{USAGE_CODE}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Props Reference Table */}
      <div className="mt-14">
        <h2 className="text-xl font-bold text-white mb-2">Props Reference</h2>
        <p className="text-xs text-zinc-400 mb-6">
          Customize the 3D card deck, enable/disable scroll triggers, or pass
          your own array of 10 items.
        </p>
        <PropsTable data={STACKED_CARDS_PROPS} />
      </div>
    </main>
  );
}
