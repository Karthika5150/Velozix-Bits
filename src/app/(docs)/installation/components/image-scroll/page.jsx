"use client";

import { useState } from "react";
import {
  Check,
  Code2,
  Copy,
  Eye,
  Sliders,
  Layers,
  Sparkles,
  ArrowUpDown,
  ArrowLeftRight,
  Maximize2,
  Play,
  Pause,
  Repeat,
} from "lucide-react";
import {
  ImageScroll,
  DEFAULT_SCROLL_IMAGES,
} from "@/components/ui/image-scroll";
import { PropsTable } from "@/components/ui/props-table";

const scrollProps = [
  {
    prop: "direction",
    type: '"vertical" | "horizontal"',
    default: '"vertical"',
    description:
      "Primary scroll axis. 'vertical' creates multi-column vertical loop streams; 'horizontal' creates horizontal marquee rows.",
  },
  {
    prop: "images",
    type: "Array<{ src, title, category, accent } | string>",
    default: "DEFAULT_SCROLL_IMAGES (9 curated 3D/cyber visuals)",
    description:
      "Array of image objects or plain image URL strings to scroll. Automatically duplicated and wrapped for zero-jerk infinite looping.",
  },
  {
    prop: "speed",
    type: "number",
    default: "1",
    description:
      "Speed multiplier for the animation loop. 1 is normal pace, 2 is 2x faster, 0.5 is slower.",
  },
  {
    prop: "columns",
    type: "number",
    default: "3",
    description:
      "Number of vertical tracks/columns displayed when direction='vertical'. Items are distributed evenly.",
  },
  {
    prop: "rows",
    type: "number",
    default: "3",
    description:
      "Number of horizontal tracks/rows displayed when direction='horizontal'. Items are distributed evenly across 3 alternating streams.",
  },
  {
    prop: "reverse",
    type: "boolean",
    default: "false",
    description:
      "Inverts the base scroll direction (e.g. top-to-bottom instead of bottom-to-top, or left-to-right).",
  },
  {
    prop: "staggerDirection",
    type: "boolean",
    default: "true",
    description:
      "When true, alternates scroll direction and speeds between adjacent columns or rows for parallax depth.",
  },
  {
    prop: "pauseOnHover",
    type: "boolean",
    default: "true",
    description:
      "Pauses the infinite scroll animation smoothly whenever the mouse hovers over the images.",
  },
  {
    prop: "blurEdges",
    type: "boolean",
    default: "true",
    description:
      "Applies smooth CSS gradient fade masks to the container edges so images blend seamlessly into the background.",
  },
  {
    prop: "height",
    type: "string",
    default: '"560px"',
    description: "Height of the viewport container in vertical mode.",
  },
  {
    prop: "tilt",
    type: "boolean",
    default: "false",
    description:
      "Applies a 3D perspective skew transformation for landing-page showcase hero aesthetics.",
  },
  {
    prop: "gap",
    type: "number",
    default: "18",
    description: "Gap spacing between image cards in pixels.",
  },
  {
    prop: "cardWidth",
    type: "string",
    default: '"250px" (vertical) / "280px" (horizontal)',
    description: "Fixed width applied to each card element.",
  },
  {
    prop: "cardHeight",
    type: "string",
    default: '"280px" (vertical) / "220px" (horizontal)',
    description: "Fixed height applied to each card element.",
  },
  {
    prop: "renderItem",
    type: "(item, index) => ReactNode",
    default: "undefined",
    description:
      "Custom render prop to provide your own card design or markup.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Extra CSS class names applied to the container.",
  },
];

const generateUsageCode = (direction, columns, rows, speed, reverse, pauseOnHover, blurEdges, tilt) => {
  return `"use client";

import { ImageScroll } from "@/components/ui/image-scroll";

const myImages = [
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
    title: "Quantum Fluidity",
    category: "3D ART",
    accent: "#6366f1",
  },
  {
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=700&q=80",
    title: "Prism Dimensions",
    category: "GEOMETRY",
    accent: "#ec4899",
  },
  {
    src: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=700&q=80",
    title: "Holographic Veil",
    category: "SYNTH",
    accent: "#10b981",
  },
  {
    src: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=700&q=80",
    title: "Neon Nexus",
    category: "CYBER",
    accent: "#06b6d4",
  },
];

export default function InfiniteShowcase() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <ImageScroll
        direction="${direction}"
        images={myImages}
        speed={${speed}}${direction === "vertical" ? `\n        columns={${columns}}` : `\n        rows={${rows}}`}
        reverse={${reverse}}
        pauseOnHover={${pauseOnHover}}
        blurEdges={${blurEdges}}${tilt ? `\n        tilt={true}` : ""}
      />
    </div>
  );
}`;
};

export default function ImageScrollPage() {
  const [activeTab, setActiveTab] = useState("preview"); // "preview" | "code"
  const [direction, setDirection] = useState("vertical"); // "vertical" | "horizontal"
  const [speed, setSpeed] = useState(1);
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(3);
  const [reverse, setReverse] = useState(false);
  const [pauseOnHover, setPauseOnHover] = useState(true);
  const [blurEdges, setBlurEdges] = useState(true);
  const [tilt, setTilt] = useState(false);
  const [copied, setCopied] = useState(false);

  const usageCode = generateUsageCode(
    direction,
    columns,
    rows,
    speed,
    reverse,
    pauseOnHover,
    blurEdges,
    tilt
  );

  async function copyUsage() {
    await navigator.clipboard.writeText(usageCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <article className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 text-gray-200 font-plex md:px-10">
      {/* Breadcrumb Navigation */}
      <nav
        className="flex items-center gap-2 font-mono text-[13px] text-gray-500"
        aria-label="Breadcrumb"
      >
        <span>Documentation</span>
        <span>/</span>
        <span>Components</span>
        <span>/</span>
        <span className="font-medium text-gray-200">Image Scroll</span>
      </nav>

      {/* Header */}
      <header className="mt-4 flex flex-col justify-between gap-8 border-b border-white/10 pb-6 md:flex-row md:items-center">
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-300">
              NEW COMPONENT
            </span>
            <span className="rounded-full border border-white/5 bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">
              ANIMATION / HERO
            </span>
            <span className="rounded-full border border-white/5 bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">
              VERTICAL & HORIZONTAL
            </span>
          </div>
          <div>
            <h1 className="font-sans text-3xl font-black tracking-tight text-white md:text-4xl">
              Image Scroll
            </h1>
            <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-gray-400 md:text-base">
              A high-performance infinite loop scrolling showcase for images and cards.
              Seamlessly toggles between multi-column vertical streams and horizontal marquees
              with parallax staggering, pause-on-hover, and smooth gradient edge vignettes.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={copyUsage}
          className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 font-mono text-xs font-medium text-white transition hover:bg-white/15"
        >
          {copied ? (
            <Check className="size-4 text-emerald-400" />
          ) : (
            <Copy className="size-4 text-zinc-400" />
          )}
          <span className={copied ? "text-emerald-400" : ""}>
            {copied ? "Copied!" : "Copy Usage"}
          </span>
        </button>
      </header>

      {/* Main Section */}
      <section className="mt-8">
        {/* Direction Switcher & Tabs */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Preview / Code Tab */}
            <div className="inline-flex rounded-xl border border-white/10 bg-zinc-900 p-1">
              {[
                { id: "preview", label: "Preview", Icon: Eye },
                { id: "code", label: "Code", Icon: Code2 },
              ].map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-medium transition ${
                    activeTab === id
                      ? "bg-zinc-800 text-white shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Icon className="size-3.5" />
                  {label}
                </button>
              ))}
            </div>

            {/* Direct Direction Toggle Pills */}
            <div className="inline-flex rounded-xl border border-white/10 bg-zinc-950 p-1">
              <button
                type="button"
                onClick={() => setDirection("vertical")}
                className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  direction === "vertical"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <ArrowUpDown className="size-3.5" />
                Vertical Mode
              </button>
              <button
                type="button"
                onClick={() => setDirection("horizontal")}
                className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  direction === "horizontal"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <ArrowLeftRight className="size-3.5" />
                Horizontal Mode
              </button>
            </div>
          </div>

          <div className="hidden items-center gap-2 font-mono text-xs text-zinc-400 sm:flex">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            Mode:{" "}
            <span className="text-white uppercase font-bold">
              {direction}
            </span>{" "}
            ({direction === "vertical" ? `${columns} cols` : `${rows} rows`})
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "preview" ? (
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-2xl">
            {/* Interactive Component Stage */}
            <div className="p-4 md:p-8">
              <ImageScroll
                key={`${direction}-${columns}-${rows}-${speed}-${reverse}-${tilt}-${pauseOnHover}-${blurEdges}`}
                direction={direction}
                speed={speed}
                columns={columns}
                rows={rows}
                reverse={reverse}
                pauseOnHover={pauseOnHover}
                blurEdges={blurEdges}
                tilt={tilt}
                height="540px"
              />
            </div>

            {/* Live Interactive Control Bar */}
            <div className="border-t border-white/10 bg-zinc-950/90 p-3.5 font-mono text-xs text-white shadow-2xl backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Left: Columns or Rows count */}
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400">
                    {direction === "vertical" ? "Columns:" : "Rows:"}
                  </span>
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => (direction === "vertical" ? setColumns(num) : setRows(num))}
                      className={`rounded-lg px-2.5 py-1 text-xs transition cursor-pointer border ${
                        (direction === "vertical" ? columns : rows) === num
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold"
                          : "bg-white/5 text-zinc-400 hover:text-white border-white/5"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>

                {/* Right: Speed slider & 3D Tilt toggle */}
                <div className="flex items-center gap-4 flex-wrap">
                  <label className="flex items-center gap-2 text-zinc-300 cursor-pointer">
                    <span className="text-zinc-400">Speed:</span>
                    <input
                      type="range"
                      min="0.5"
                      max="3"
                      step="0.25"
                      value={speed}
                      onChange={(e) => setSpeed(Number(e.target.value))}
                      className="w-20 cursor-pointer accent-emerald-400"
                    />
                    <span className="w-8 text-right text-emerald-400 font-bold">{speed.toFixed(1)}×</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => setTilt(!tilt)}
                    className={`px-2.5 py-1 rounded-lg text-xs transition cursor-pointer border ${
                      tilt
                        ? "bg-white/15 text-white border-white/30 font-bold"
                        : "bg-white/5 text-zinc-400 hover:text-white border-white/5"
                    }`}
                  >
                    3D Tilt: {tilt ? "ON" : "OFF"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setReverse(!reverse)}
                    className={`px-2.5 py-1 rounded-lg text-xs transition cursor-pointer border ${
                      reverse
                        ? "bg-white/15 text-white border-white/30 font-bold"
                        : "bg-white/5 text-zinc-400 hover:text-white border-white/5"
                    }`}
                  >
                    Reverse: {reverse ? "ON" : "OFF"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/60 px-4 py-3 font-mono text-xs text-zinc-400">
              <span className="flex items-center gap-2">
                <Code2 className="size-4 text-emerald-400" />
                Usage: page.jsx ({direction} mode)
              </span>
              <button
                type="button"
                onClick={copyUsage}
                className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1 text-white hover:bg-white/15"
              >
                <Copy className="size-3.5" />
                Copy
              </button>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-zinc-300">
              <code>{usageCode}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Feature Highlights */}
      <section className="mt-12 space-y-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
              <ArrowUpDown className="size-4" />
            </div>
            <h2 className="text-sm font-semibold text-white">
              Bi-Directional Flexibility
            </h2>
            <p className="text-xs leading-relaxed text-gray-400">
              Seamlessly switch between vertical showcase walls (columns) and horizontal
              marquee ribbons (rows) with a single prop.
            </p>
          </div>

          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <Repeat className="size-4" />
            </div>
            <h2 className="text-sm font-semibold text-white">
              Mathematically Seamless Loop
            </h2>
            <p className="text-xs leading-relaxed text-gray-400">
              Double-buffered track replication ensures 0% to -50% CSS transforms loop
              continuously with zero stutter, hitching, or blank seams.
            </p>
          </div>

          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-400/10 text-purple-300">
              <Layers className="size-4" />
            </div>
            <h2 className="text-sm font-semibold text-white">
              Parallax Staggering & Fade
            </h2>
            <p className="text-xs leading-relaxed text-gray-400">
              Adjacent columns and rows scroll in alternating directions at slightly staggered speeds,
              complemented by smooth hardware-accelerated gradient masks.
            </p>
          </div>
        </div>

        {/* Props Reference Table */}
        <div className="pt-6">
          <PropsTable
            title="ImageScroll Props"
            description="Complete reference of customizable properties, modes, and controls."
            data={scrollProps}
          />
        </div>
      </section>
    </article>
  );
}
