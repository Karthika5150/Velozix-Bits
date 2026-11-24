"use client";

import { useState } from "react";
import {
  Code2,
  Copy,
  Eye,
  Layers,
  MousePointer2,
  RotateCcw,
  Sparkles,
  Upload,
  CloudRain,
  Palette,
  Type,
  Sliders,
} from "lucide-react";
import { InteractiveAsciiFace } from "@/components/ui/interactive-ascii-face";
import { PropsTable } from "@/components/ui/props-table";

const GRADIENT_THEMES = {
  phosphor: {
    name: "Phosphor Green",
    color: "#5cfc87",
    gradient: ["#ffffff", "#5cfc87", "#056526"],
  },
  cyberpunk: {
    name: "Cyberpunk Cyan",
    color: "#22d3ee",
    gradient: ["#ffffff", "#22d3ee", "#083344"],
  },
  neon: {
    name: "Neon Violet",
    color: "#c084fc",
    gradient: ["#ffffff", "#c084fc", "#3b0764"],
  },
  amber: {
    name: "Amber Gold",
    color: "#fbbf24",
    gradient: ["#ffffff", "#fbbf24", "#451a03"],
  },
};

const CHARACTER_PRESETS = [
  { label: "CRT Glyphs", value: "" },
  { label: "Binary (01)", value: "01" },
  { label: "Hex (0-F)", value: "0123456789ABCDEF" },
  { label: "Matrix Code", value: "ADAPTIVEUI01" },
  { label: "Katakana", value: "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ" },
];

const props = [
  { prop: "src", type: "string | File", default: '"/images/ascii-portrait.png"', description: "Source photo to convert. Use an image URL, local asset path, or File object directly via props." },
  { prop: "dropType", type: '"characters" | "lines"', default: '"characters"', description: "Falling particle style: 'characters' (matrix code letters) or 'lines' (sleek falling cyber light streaks)." },
  { prop: "rainOnly", type: "boolean", default: "false", description: "When true, disables facial detection and renders pure matrix digital rain with interactive cursor repulsion across the full canvas." },
  { prop: "characters", type: "string", default: "undefined (authentic CRT glyphs)", description: 'Custom string of letters, numbers, or symbols for the falling digital rain (e.g. "01" for binary or "MATRIX"). Used when dropType is "characters".' },
  { prop: "dropSize", type: "number", default: "7", description: "Size in pixels of falling character drops and grid spacing (range: 4 to 20)." },
  { prop: "color", type: "string", default: '"#5cfc87"', description: "Primary phosphor color for ASCII characters and facial portrait." },
  { prop: "gradient", type: "string[]", default: "undefined", description: "Optional array of hex colors for vertical raindrop trail color transitions." },
  { prop: "lineSpeed", type: "number", default: "1", description: "Speed multiplier for falling rain trails." },
  { prop: "mouseSpeed", type: "number", default: "0.8", description: "Subtle cursor repulsion force and particle dispersion strength (gentle by default)." },
  { prop: "maxOffset", type: "number", default: "6", description: "Subtle maximum pixel offset for smooth parallax camera tilt." },
  { prop: "imageClarity", type: "number", default: "1.4", description: "Contrast and facial feature detail boost with auto-levels normalization." },
  { prop: "followPointer", type: "boolean", default: "true", description: "Enables interactive parallax shift on cursor movement." },
  { prop: "className", type: "string", default: '""', description: "Extra CSS classes for the container stage." },
];

const usage = `import { InteractiveAsciiFace } from "@/components/ui/interactive-ascii-face";

export default function AsciiDemo() {
  return (
    <div className="w-full h-[640px]">
      <InteractiveAsciiFace
        src="/images/ascii-portrait.png" // Image path, URL, or File object passed directly via props
        dropType="lines" // "characters" (matrix letters) or "lines" (sleek falling cyber light lines)
        rainOnly={false} // Set true for pure matrix rainfall without face
        color="#5cfc87"
        dropSize={7} // Drop & line size (px)
        lineSpeed={1.0} // Rain fall speed
        mouseSpeed={0.8} // Subtle cursor repulsion (calm & gentle)
        imageClarity={1.4}
      />
    </div>
  );
}`;

const copyButton = "flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 font-mono text-xs font-medium text-white transition hover:bg-white/15 cursor-pointer";

export default function InteractiveAsciiFacePage() {
  const [activeTab, setActiveTab] = useState("preview");
  const [themeKey, setThemeKey] = useState("phosphor");
  const [color, setColor] = useState(GRADIENT_THEMES.phosphor.color);
  const [dropType, setDropType] = useState("characters");
  const [rainOnly, setRainOnly] = useState(false);
  const [dropSize, setDropSize] = useState(7);
  const [selectedChars, setSelectedChars] = useState("");
  const [lineSpeed, setLineSpeed] = useState(1);
  const [mouseSpeed, setMouseSpeed] = useState(0.8);
  const [imageClarity, setImageClarity] = useState(1.4);
  const [photo, setPhoto] = useState(null);
  const [copyStatus, setCopyStatus] = useState("");

  const activeGradient = GRADIENT_THEMES[themeKey]?.gradient;

  const handleThemeChange = (key) => {
    setThemeKey(key);
    if (GRADIENT_THEMES[key]) {
      setColor(GRADIENT_THEMES[key].color);
    }
  };

  async function copyUsage(text = usage) {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("Copied");
    } catch {
      setCopyStatus("Select the example to copy it.");
    }
  }

  return (
    <article className="mx-auto min-h-screen w-full min-w-0 max-w-7xl px-4 py-6 text-gray-200 font-plex md:px-10">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[13px] text-gray-500">
        <span>Documentation</span>
        <span aria-hidden="true">/</span>
        <span>Components</span>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="font-medium text-gray-200">Interactive ASCII Face</span>
      </nav>

      <header className="mt-4 flex flex-col justify-between gap-8 border-b border-white/10 pb-6 md:flex-row md:items-center">
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-2.5 py-1 font-mono text-xs font-semibold text-lime-400">
              NEW COMPONENT
            </span>
            <span className="rounded-full border border-white/5 bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">
              CRT TERMINAL
            </span>
            <span className="rounded-full border border-white/5 bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">
              PARTICLE DISPERSION
            </span>
          </div>
          <h1 className="font-sans text-3xl font-black tracking-tight text-white md:text-4xl">
            Interactive ASCII Face
          </h1>
          <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-gray-400 md:text-base">
            Render any photo into glowing ASCII terminal typography, or toggle autonomous Matrix digital rainfall. Custom drop sizes, character sets, and gradient trails disperse interactively when cursor hovers over the canvas.
          </p>
        </div>
        <div className="shrink-0">
          <button type="button" onClick={copyUsage} className={copyButton}>
            <Copy aria-hidden="true" className="size-4" />
            {copyStatus === "Copied" ? "Copied" : "Copy Usage"}
          </button>
          <span role="status" className="sr-only">{copyStatus}</span>
        </div>
      </header>

      <section aria-label="Component showcase" className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <div role="group" aria-label="Showcase view" className="inline-flex items-center rounded-xl border border-white/10 bg-zinc-900 p-1">
            {[
              { id: "preview", label: "Preview", Icon: Eye },
              { id: "code", label: "Code", Icon: Code2 },
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                aria-pressed={activeTab === id}
                aria-controls={`ascii-${id}`}
                onClick={() => setActiveTab(id)}
                className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-medium transition ${activeTab === id ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-400 hover:text-white"}`}
              >
                <Icon aria-hidden="true" className="size-3.5" />
                {label}
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-zinc-400 sm:flex">
            <span className="inline-block size-2 animate-pulse rounded-full bg-emerald-500" />
            <span>{rainOnly ? "Rainfall Mode: Active" : "CRT Face Mode: Online"}</span>
          </div>
        </div>

        <div id="ascii-preview" hidden={activeTab !== "preview"}>
          <div className="relative overflow-hidden rounded-2xl border border-emerald-950/60 bg-black shadow-2xl">
            <InteractiveAsciiFace
              src={photo ?? "/images/ascii-portrait.png"}
              dropType={dropType}
              rainOnly={rainOnly}
              color={color}
              gradient={activeGradient}
              characters={selectedChars}
              dropSize={dropSize}
              lineSpeed={lineSpeed}
              mouseSpeed={mouseSpeed}
              imageClarity={imageClarity}
              className="rounded-none! border-0!"
            />

            {/* Top Bar: Mode Switcher, Drop Style & Quick Upload */}
            <div className="absolute inset-x-4 top-4 z-20 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                {/* Rain Only State Toggle */}
                <button
                  type="button"
                  onClick={() => setRainOnly(!rainOnly)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs transition cursor-pointer backdrop-blur shadow-lg ${
                    rainOnly
                      ? "bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 font-bold"
                      : "bg-zinc-950/85 text-zinc-300 hover:text-white border border-white/15"
                  }`}
                >
                  <CloudRain className="size-3.5 text-emerald-400" />
                  <span>{rainOnly ? "Mode: Rainfall Only" : "Mode: Face + Rain"}</span>
                </button>

                {/* Drop Type: Letters vs Cyber Lines */}
                <div className="inline-flex items-center rounded-xl border border-white/15 bg-zinc-950/85 p-0.5 text-xs font-mono backdrop-blur shadow-lg">
                  <button
                    type="button"
                    onClick={() => setDropType("characters")}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1 transition ${
                      dropType === "characters"
                        ? "bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-400/30"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Type className="size-3" />
                    <span>Letters</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDropType("lines")}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1 transition ${
                      dropType === "lines"
                        ? "bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-400/30"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Sliders className="size-3" />
                    <span>Cyber Lines</span>
                  </button>
                </div>
              </div>

              {/* Upload Button */}
              {!rainOnly && (
                <div className="flex items-center gap-2">
                  <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-emerald-500/25 bg-zinc-950/85 px-3.5 py-1.5 text-xs font-mono text-emerald-300 backdrop-blur shadow-lg hover:bg-zinc-900 focus-within:ring-2 focus-within:ring-emerald-400">
                    <Upload aria-hidden="true" className="size-3.5" />
                    <span>Upload photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) setPhoto(file);
                      }}
                      className="sr-only"
                    />
                  </label>
                  {photo && (
                    <button
                      type="button"
                      onClick={() => setPhoto(null)}
                      className="flex cursor-pointer items-center gap-1 rounded-xl bg-zinc-900/90 border border-white/10 px-2.5 py-1.5 text-xs font-mono text-zinc-300 hover:text-rose-400"
                      title="Reset to default image"
                    >
                      <RotateCcw className="size-3" />
                      Reset
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Controls Bar - Minimal React Bits Style */}
            <div className="absolute inset-x-4 bottom-4 z-20 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-950/90 p-3 font-mono text-xs text-white shadow-2xl backdrop-blur-md">
              {/* Left: Color Theme Swatches */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] text-zinc-400 uppercase font-bold flex items-center gap-1 mr-1">
                  <Palette className="size-3 text-emerald-400" />
                  Color:
                </span>
                {Object.entries(GRADIENT_THEMES).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleThemeChange(key)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] transition cursor-pointer border ${
                      themeKey === key
                        ? "bg-white/15 text-white border-white/30 font-bold"
                        : "bg-white/5 text-zinc-400 hover:text-zinc-200 border-white/5"
                    }`}
                  >
                    {item.name.split(" ")[0]}
                  </button>
                ))}
                <input
                  type="color"
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                    setThemeKey("custom");
                  }}
                  className="h-5 w-6 cursor-pointer rounded border border-white/15 bg-transparent ml-1"
                  title="Custom color override"
                />
              </div>

              {/* Right: Essential Sliders & Character Selector */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {dropType === "characters" && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-zinc-400">Glyphs:</span>
                    <select
                      value={selectedChars}
                      onChange={(e) => setSelectedChars(e.target.value)}
                      className="bg-zinc-900 border border-white/15 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
                    >
                      {CHARACTER_PRESETS.map((p) => (
                        <option key={p.label} value={p.value} className="bg-zinc-900 text-white">
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <label className="flex items-center gap-1.5 cursor-pointer" title="Character & line size">
                  <span className="text-zinc-400">Size:</span>
                  <input
                    type="range"
                    min="5"
                    max="14"
                    step="1"
                    value={dropSize}
                    onChange={(event) => setDropSize(Number(event.target.value))}
                    className="w-16 accent-emerald-400 cursor-pointer"
                  />
                  <span>{dropSize}px</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer" title="Fall animation speed">
                  <span className="text-zinc-400">Speed:</span>
                  <input
                    type="range"
                    min="0.2"
                    max="2.5"
                    step="0.1"
                    value={lineSpeed}
                    onChange={(event) => setLineSpeed(Number(event.target.value))}
                    className="w-16 accent-emerald-400 cursor-pointer"
                  />
                  <span>{lineSpeed.toFixed(1)}×</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div id="ascii-code" hidden={activeTab !== "code"}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-zinc-900/60 px-4 py-3 font-mono text-xs">
              <span className="flex items-center gap-2 text-zinc-400">
                <Code2 aria-hidden="true" className="size-4" />
                Usage Example · page.jsx
              </span>
              <button type="button" onClick={copyUsage} className={copyButton}>
                <Copy aria-hidden="true" className="size-4" />
                Copy
              </button>
            </div>
            <pre tabIndex={0} className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-zinc-300">
              <code>{usage}</code>
            </pre>
          </div>
          {copyStatus && <p className="mt-2 text-xs text-lime-300">{copyStatus}</p>}
        </div>
      </section>

      <section className="mt-12 space-y-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-lime-400/20 bg-lime-400/10 text-lime-400"><Layers className="size-4" /></div>
            <h3 className="text-sm font-semibold text-white">High-Definition CRT Sampling</h3>
            <p className="text-xs leading-relaxed text-gray-400">Auto-contrast levels and 12-tier alphanumeric typography translate eyes, lips, and facial contours with 100% solid opacity.</p>
          </div>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400"><MousePointer2 className="size-4" /></div>
            <h3 className="text-sm font-semibold text-white">Interactive Particle Physics</h3>
            <p className="text-xs leading-relaxed text-gray-400">Hovering the cursor scatters the code characters like physical particles, which smoothly spring back into place.</p>
          </div>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/10 text-amber-400"><Sparkles className="size-4" /></div>
            <h3 className="text-sm font-semibold text-white">Phosphor Glow & Scanlines</h3>
            <p className="text-xs leading-relaxed text-gray-400">Vibrant green phosphor emission and authentic CRT scanlines reproduce the retro terminal self-portrait look.</p>
          </div>
        </div>
        <PropsTable title="InteractiveAsciiFace Props" data={props} />
      </section>
    </article>
  );
}
