"use client";

import { useState, useRef, useCallback } from "react";
import {
  Code2,
  Copy,
  Eye,
  Layers,
  MousePointer2,
  RotateCcw,
  Sparkles,
  CloudRain,
  Palette,
  Type,
  Sliders,
  Activity,
  Box,
  Bug,
  Zap,
  Orbit,
  Flame,
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
  { label: "Full ASCII Set", value: "full" },
  { label: "Simple Glyphs", value: "simple" },
  { label: "Digits (0-9)", value: "digits" },
  { label: "Binary (01)", value: "01" },
  { label: "Hex (0-F)", value: "0123456789ABCDEF" },
  { label: "Matrix Code", value: "ADAPTIVEUI01" },
];

const OBJECT_MODELS = [
  { id: "ant", label: "3D Cyber Ant", icon: Bug, tag: "ANT OBJECT" },
  { id: "torus-knot", label: "Canvas Knot", icon: Orbit, tag: "CANVAS UI" },
  { id: "face", label: "Cyber Mask", icon: Eye, tag: "HEAD MASK" },
  { id: "duck", label: "Rubber Duck", icon: Flame, tag: "PROCEDURAL" },
  { id: "crystal", label: "Crystal Gem", icon: Sparkles, tag: "GEMSTONE" },
  { id: "drone", label: "Cyber Drone", icon: Box, tag: "AEROSPACE" },
];

const props = [
  { prop: "model", type: '"ant" | "torus-knot" | "face" | "duck" | "crystal" | "drone"', default: '"ant"', description: "3D ASCII object to display: 'ant' renders the articulated 3D cyber ant, 'torus-knot' renders the signature Canvas UI geometric knot, 'face' renders the cyber samurai mask, 'duck' renders the rubber duck, 'crystal' renders the gemstone, and 'drone' renders the cyber recon drone." },
  { prop: "src", type: "string", default: "undefined", description: "Direct URL of any custom 3D model (.glb/.gltf), SVG, or image to render as an ASCII Object." },
  { prop: "mode", type: '"face" | "face-rain" | "rain"', default: '"face"', description: "'face' renders pure 3D ASCII Object floating in lit studio, 'face-rain' blends falling matrix rain around it, and 'rain' renders pure digital rain." },
  { prop: "colored", type: "boolean", default: "true", description: "When true, tints each character with the authentic 3D scene color underneath (e.g. vibrant cyber armor or yellow duck body). When false, renders in monochrome phosphor color." },
  { prop: "contrast", type: "number", default: "1.5", description: "Tone contrast multiplier of the character selection (range: 0.5 to 3.5). Deepens shadows and sharpens character transitions." },
  { prop: "edgeContrast", type: "number", default: "2.0", description: "How strongly characters snap to contours and shape edges of the 3D object." },
  { prop: "dropSize", type: "number", default: "8", description: "Character cell size in CSS pixels (range: 4 to 20). Smaller values produce ultra high-definition resolution." },
  { prop: "speed", type: "number", default: "1.0", description: "Multiplier for auto-rotation turntable speed and digital matrix rainfall." },
  { prop: "autoRotate", type: "boolean", default: "true", description: "Enables continuous turntable rotation around the vertical axis." },
  { prop: "rainColor", type: "string", default: '"#5cfc87"', description: "Matrix rainfall stream color. Earlier top letters hide progressively as each drop moves downward." },
  { prop: "color", type: "string", default: '"#5cfc87"', description: "Primary phosphor color when colored is disabled." },
  { prop: "className", type: "string", default: '""', description: "Extra CSS classes for the container stage." },
];

const usage = `import { InteractiveAsciiFace } from "@/components/ui/interactive-ascii-face";

export default function AsciiDemo() {
  return (
    <div className="w-full h-[640px]">
      <InteractiveAsciiFace
        model="ant" // "ant" (3D Cyber Ant), "torus-knot" (Canvas UI Knot), "face", "duck", "crystal", or "drone"
        mode="face" // "face" (pure 3D object in studio), "face-rain" (with digital rain), or "rain"
        colored={true} // Full scene colors (emerald armor, cyan eyes) or monochrome phosphor
        contrast={1.5} // Tone contrast multiplier for deep shadows
        dropSize={8} // Character cell size in CSS pixels
        autoRotate={true} // Drag anywhere to orbit in 3D, scroll to zoom
        speed={1.0} // Turntable rotation speed multiplier
      />
    </div>
  );
}`;

const copyButton = "flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 font-mono text-xs font-medium text-white transition hover:bg-white/15 cursor-pointer";

/**
 * Animatic Scrub Bar Component
 * Fluid gradient progress fill, animated neon scanlines, 12-segment equalizer ticks,
 * and live interactive drag scrubbing with floating value indicator.
 */
function AnimaticSlider({
  label,
  value,
  min,
  max,
  step = 0.1,
  unit = "",
  icon: Icon,
  colorScheme = "emerald",
  onChange,
  lowLabel,
  highLabel,
}) {
  const trackRef = useRef(null);
  const isDragging = useRef(false);

  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  const updateFromPosition = useCallback(
    (clientX) => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const rawPct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const rawVal = min + rawPct * (max - min);
      const stepped = Math.round(rawVal / step) * step;
      const clamped = Math.max(min, Math.min(max, stepped));
      onChange(clamped);
    },
    [min, max, step, onChange]
  );

  const handlePointerDown = (e) => {
    isDragging.current = true;
    updateFromPosition(e.clientX);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e) => {
    if (isDragging.current) {
      updateFromPosition(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const themeColors = {
    emerald: {
      gradient: "from-emerald-600 via-emerald-400 to-teal-300",
      glow: "shadow-[0_0_18px_rgba(52,211,153,0.55)]",
      thumbRing: "ring-emerald-400/40",
      thumbBg: "bg-emerald-300",
      text: "text-emerald-400",
      activeNotch: "bg-emerald-400 shadow-[0_0_6px_#34d399]",
    },
    cyan: {
      gradient: "from-cyan-600 via-cyan-400 to-sky-300",
      glow: "shadow-[0_0_18px_rgba(34,211,238,0.55)]",
      thumbRing: "ring-cyan-400/40",
      thumbBg: "bg-cyan-300",
      text: "text-cyan-400",
      activeNotch: "bg-cyan-400 shadow-[0_0_6px_#22d3ee]",
    },
    amber: {
      gradient: "from-amber-600 via-amber-400 to-yellow-300",
      glow: "shadow-[0_0_18px_rgba(251,191,36,0.55)]",
      thumbRing: "ring-amber-400/40",
      thumbBg: "bg-amber-300",
      text: "text-amber-400",
      activeNotch: "bg-amber-400 shadow-[0_0_6px_#fbbf24]",
    },
  };

  const currentTheme = themeColors[colorScheme] || themeColors.emerald;
  const NOTCHES_COUNT = 12;

  return (
    <div className="group rounded-2xl border border-white/10 bg-zinc-900/60 p-4 transition-all hover:border-white/20 hover:bg-zinc-900/80 hover:shadow-lg backdrop-blur-md">
      {/* Header Row: Label & Value Badge */}
      <div className="mb-3 flex items-center justify-between font-mono text-xs">
        <span className="flex items-center gap-1.5 font-medium text-zinc-300">
          <Icon className={`size-3.5 ${currentTheme.text}`} />
          {label}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="rounded-lg border border-white/10 bg-zinc-950 px-2 py-0.5 font-bold font-mono text-xs shadow-inner text-white">
            <span className={currentTheme.text}>
              {step < 1 ? value.toFixed(1) : value}
            </span>
            <span className="text-zinc-500 text-[10px] ml-0.5">{unit}</span>
          </span>
        </div>
      </div>

      {/* Interactive Animatic Progress Bar */}
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative h-4 w-full cursor-pointer select-none rounded-full border border-white/15 bg-zinc-950 p-0.5 shadow-inner"
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={label}
        tabIndex={0}
      >
        <div className="absolute inset-0 overflow-hidden rounded-full opacity-20">
          <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
        </div>

        <div
          className={`h-full rounded-full bg-gradient-to-r ${currentTheme.gradient} ${currentTheme.glow} transition-[width] duration-75 ease-out relative`}
          style={{ width: `${pct}%` }}
        >
          <div
            className={`absolute right-0 top-1/2 size-3.5 -translate-y-1/2 translate-x-1/2 rounded-full ${currentTheme.thumbBg} ring-4 ${currentTheme.thumbRing} shadow-md transition-transform group-hover:scale-125 group-active:scale-135`}
          />
        </div>
      </div>

      {/* High-tech Equalizer Tick Spectrum */}
      <div className="mt-2.5 flex items-center justify-between px-0.5">
        {Array.from({ length: NOTCHES_COUNT }).map((_, idx) => {
          const notchPct = (idx / (NOTCHES_COUNT - 1)) * 100;
          const isActive = notchPct <= pct;
          return (
            <div
              key={idx}
              className={`h-2 w-1 rounded-full transition-all duration-150 ${
                isActive ? `${currentTheme.activeNotch} scale-y-110` : "bg-zinc-800"
              }`}
            />
          );
        })}
      </div>

      <div className="mt-2 flex justify-between font-mono text-[10px] text-zinc-500">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  );
}

export default function InteractiveAsciiFacePage() {
  const [activeTab, setActiveTab] = useState("preview");
  const [model, setModel] = useState("ant"); // 3D Cyber Ant procedural model
  const [customSrc, setCustomSrc] = useState(""); // Custom GLB/glTF or image URL
  const [mode, setMode] = useState("face"); // "face" (pure 3D object) | "face-rain" | "rain"
  const [colored, setColored] = useState(true); // Full scene colors vs monochrome phosphor
  const [autoRotate, setAutoRotate] = useState(true);
  const [themeKey, setThemeKey] = useState("phosphor");
  const [color, setColor] = useState(GRADIENT_THEMES.phosphor.color);
  const [rainColor, setRainColor] = useState("#5cfc87"); // Customizable Matrix rainfall stream color
  const [dropSize, setDropSize] = useState(8);
  const [selectedChars, setSelectedChars] = useState("full");
  const [lineSpeed, setLineSpeed] = useState(1);
  const [contrast, setContrast] = useState(1.5);
  const [copyStatus, setCopyStatus] = useState("");

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
        <span aria-current="page" className="font-medium text-gray-200">Interactive ASCII Object</span>
      </nav>

      <header className="mt-4 flex flex-col justify-between gap-8 border-b border-white/10 pb-6 md:flex-row md:items-center">
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-2.5 py-1 font-mono text-xs font-semibold text-lime-400">
              NEW COMPONENT
            </span>
            <span className="rounded-full border border-white/5 bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">
              CANVAS UI ENGINE
            </span>
            <span className="rounded-full border border-white/5 bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">
              THREE.JS SHADER
            </span>
            <span className="rounded-full border border-white/5 bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">
              DRAG TO ORBIT
            </span>
          </div>
          <h1 className="font-sans text-3xl font-black tracking-tight text-white md:text-4xl">
            Interactive ASCII 3D Object
          </h1>
          <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-gray-400 md:text-base">
            Point it at any 3D GLB/glTF model, SVG, or image and it renders inside a lit 3D studio entirely formed from ASCII characters that look exactly like the image. Features GPU shape-matching, 360° orbit drag, and auto-rotation.
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

          <div className="hidden items-center gap-3 font-mono text-xs text-zinc-400 sm:flex">
            <span className="inline-block size-2 animate-pulse rounded-full bg-emerald-500" />
            <span>
              {customSrc
                ? "Custom GLB Model: Active"
                : model === "ant"
                ? "3D Cyber Ant: Active"
                : model === "torus-knot"
                ? "Canvas Knot: Active"
                : model === "face"
                ? "Cyber Mask: Active"
                : model === "duck"
                ? "Rubber Duck: Active"
                : model === "crystal"
                ? "Crystal Gem: Active"
                : "Cyber Drone: Active"}
            </span>
          </div>
        </div>

        <div id="ascii-preview" hidden={activeTab !== "preview"}>
          {/* Pure Canvas Output Stage - 100% Clean Canvas UI WebGL Stage */}
          <div className="relative h-[560px] w-full overflow-hidden rounded-2xl border border-emerald-950/60 bg-black shadow-2xl">
            <InteractiveAsciiFace
              model={model}
              src={customSrc.trim() || undefined}
              mode={mode}
              colored={colored}
              color={color}
              rainColor={rainColor}
              contrast={contrast}
              dropSize={dropSize}
              speed={lineSpeed}
              autoRotate={autoRotate}
              characters={selectedChars === "full" ? undefined : selectedChars}
              className="h-full w-full rounded-none! border-0!"
            />

            {/* Canvas UI Style Stage Hint: Drag to Orbit & Zoom */}
            <div className="pointer-events-none absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-xl border border-white/15 bg-zinc-950/85 px-3 py-1.5 font-mono text-xs text-zinc-300 backdrop-blur-md shadow-lg">
              <MousePointer2 className="size-3.5 text-emerald-400 animate-pulse" />
              <span>Drag to orbit 3D model · Scroll to zoom</span>
            </div>

            {/* Non-intrusive HUD Status Pill in top corner */}
            <div className="pointer-events-none absolute top-4 right-4 z-20 flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-950/70 px-2.5 py-1 font-mono text-[11px] text-zinc-400 backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase font-semibold tracking-wider text-zinc-300">
                {customSrc ? "CUSTOM 3D MODEL" : model.toUpperCase()} · {mode === "face" ? "STUDIO" : mode === "face-rain" ? "OBJECT + RAIN" : "MATRIX RAIN"}
              </span>
            </div>
          </div>

          {/* Canvas UI Style Creative Control Dock - Placed Underneath Output */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/90 p-5 md:p-6 backdrop-blur-2xl shadow-2xl space-y-6">
            {/* 3D Model Picker (Cyber Ant, Torus Knot, Cyber Mask, Rubber Duck, Crystal Gem, Drone) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                  <Box className="size-3.5" />
                  3D Geometry Asset
                </span>
                <h3 className="font-sans text-base font-bold text-white mt-0.5">
                  Select 3D ASCII Model
                </h3>
              </div>

              {/* Model Choice Buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                {OBJECT_MODELS.map(({ id, label, icon: Icon, tag }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      setModel(id);
                      setCustomSrc("");
                    }}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs transition border ${
                      !customSrc && model === id
                        ? "bg-emerald-500/20 text-emerald-300 font-bold border-emerald-400/40 shadow-[0_0_15px_rgba(52,211,153,0.25)]"
                        : "bg-zinc-900 text-zinc-400 hover:text-white border-white/10"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    <span>{label}</span>
                    {tag && (
                      <span className="rounded bg-white/10 px-1 py-0.2 text-[9px] text-zinc-300">
                        {tag}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom 3D Model Input Bar (Canvas UI GLB/glTF Loader) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-900/60 p-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-zinc-300 shrink-0">
                <Box className="size-4 text-emerald-400" />
                <span>Custom Model URL:</span>
              </div>
              <input
                type="text"
                placeholder="Paste any .glb, .gltf, or image URL..."
                value={customSrc}
                onChange={(e) => setCustomSrc(e.target.value)}
                className="w-full flex-1 rounded-lg border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:border-emerald-400 focus:outline-none"
              />
              {customSrc && (
                <button
                  type="button"
                  onClick={() => setCustomSrc("")}
                  className="rounded-lg bg-zinc-800 px-2.5 py-1 text-zinc-400 hover:text-white transition"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Rendering Color Style & Mode Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              {/* Color Mode: Scene Colors vs Terminal Phosphor */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-400">Style:</span>
                <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900/90 p-1 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setColored(true)}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                      colored
                        ? "bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-400/40 shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Sparkles className="size-3.5" />
                    <span>Scene Colors</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setColored(false)}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                      !colored
                        ? "bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-400/40 shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Palette className="size-3.5" />
                    <span>Monochrome Phosphor</span>
                  </button>
                </div>
              </div>

              {/* Mode Switcher Tabs */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-400">Mode:</span>
                <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900/90 p-1 font-mono text-xs">
                  {[
                    { id: "face", label: "3D Object Studio", icon: Box },
                    { id: "face-rain", label: "Object + Rain", icon: Sparkles },
                    { id: "rain", label: "Rain Only", icon: CloudRain },
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setMode(id)}
                      className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                        mode === id
                          ? "bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-400/40 shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Icon className="size-3.5" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Auto Rotate Button */}
              <button
                type="button"
                onClick={() => setAutoRotate(!autoRotate)}
                className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3.5 py-1.5 font-mono text-xs transition ${
                  autoRotate
                    ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-300 font-semibold"
                    : "border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
                }`}
              >
                <Orbit className={`size-3.5 ${autoRotate ? "animate-spin text-emerald-400" : ""}`} />
                <span>Auto Rotate: {autoRotate ? "ON" : "OFF"}</span>
              </button>
            </div>

            {/* Dedicated Rainfall Color Picker (Active in face-rain and rain modes) */}
            {mode !== "face" && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs uppercase font-bold text-emerald-400 flex items-center gap-1.5">
                    <CloudRain className="size-3.5" />
                    Rainfall Color:
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {[
                      { name: "Phosphor", color: "#5cfc87" },
                      { name: "Cyan", color: "#22d3ee" },
                      { name: "Emerald", color: "#10b981" },
                      { name: "Purple", color: "#c084fc" },
                      { name: "Amber", color: "#fbbf24" },
                      { name: "Crimson", color: "#f43f5e" },
                    ].map((item) => (
                      <button
                        key={item.color}
                        type="button"
                        onClick={() => setRainColor(item.color)}
                        className={`flex cursor-pointer items-center gap-2 rounded-xl px-3 py-1.5 font-mono text-xs transition border ${
                          rainColor === item.color
                            ? "bg-white/15 text-white border-white/30 font-bold shadow-sm"
                            : "bg-zinc-900 text-zinc-400 hover:text-white border-white/10"
                        }`}
                      >
                        <span
                          className="size-2.5 rounded-full shadow-[0_0_8px_currentColor]"
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{item.name}</span>
                      </button>
                    ))}
                    <input
                      type="color"
                      value={rainColor}
                      onChange={(e) => setRainColor(e.target.value)}
                      className="h-8 w-9 cursor-pointer rounded-lg border border-white/15 bg-transparent p-0.5"
                      title="Custom rainfall color"
                    />
                  </div>
                </div>
                <span className="font-mono text-[11px] text-zinc-400">
                  ⚡ Vanishing Matrix Stream: Earlier top letters hide as drop falls
                </span>
              </div>
            )}

            {/* Grid of Animatic Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Animatic Speed Slider */}
              <AnimaticSlider
                label="3D Orbit & Turntable Speed"
                value={lineSpeed}
                min={0.2}
                max={2.5}
                step={0.1}
                unit="×"
                icon={Activity}
                colorScheme="emerald"
                onChange={setLineSpeed}
                lowLabel="0.2× Turntable Slow"
                highLabel="2.5× Hyper Orbit"
              />

              {/* Animatic Contrast Slider */}
              <AnimaticSlider
                label="Tone Contrast & Detail Depth"
                value={contrast}
                min={0.6}
                max={3.0}
                step={0.1}
                unit="×"
                icon={Layers}
                colorScheme="cyan"
                onChange={setContrast}
                lowLabel="0.6× Subtle Tones"
                highLabel="3.0× Deep Shadows"
              />

              {/* Animatic Cell Size Slider */}
              <AnimaticSlider
                label="ASCII Character Resolution"
                value={dropSize}
                min={5}
                max={16}
                step={1}
                unit="px"
                icon={Type}
                colorScheme="amber"
                onChange={setDropSize}
                lowLabel="5px Ultra-Fine"
                highLabel="16px Chunky Retro"
              />
            </div>

            {/* Bottom Row: Themes, Glyphs & Reset */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              {/* Theme Colors (active when monochrome is enabled) */}
              {!colored ? (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs text-zinc-400 uppercase font-bold flex items-center gap-1">
                    <Palette className="size-3.5 text-emerald-400" />
                    Phosphor:
                  </span>
                  {Object.entries(GRADIENT_THEMES).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleThemeChange(key)}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs transition cursor-pointer border flex items-center gap-2 ${
                        themeKey === key
                          ? "bg-white/15 text-white border-white/30 font-bold shadow-sm"
                          : "bg-zinc-900 text-zinc-400 hover:text-white border-white/10"
                      }`}
                    >
                      <span
                        className="size-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name.split(" ")[0]}</span>
                    </button>
                  ))}
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => {
                      setColor(e.target.value);
                      setThemeKey("custom");
                    }}
                    className="h-7 w-8 cursor-pointer rounded-lg border border-white/15 bg-transparent"
                    title="Custom color override"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <Sparkles className="size-3.5 text-amber-400" />
                  <span>Scene color mapping active (True 3D mesh surface materials rendered in full color).</span>
                </div>
              )}

              {/* Glyphs & Reset */}
              <div className="flex items-center gap-3 flex-wrap">
                <select
                  value={selectedChars}
                  onChange={(e) => setSelectedChars(e.target.value)}
                  className="bg-zinc-900 border border-white/15 rounded-xl px-3 py-1.5 font-mono text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
                >
                  {CHARACTER_PRESETS.map((p) => (
                    <option key={p.label} value={p.value} className="bg-zinc-900 text-white">
                      {p.label}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => {
                    setModel("ant");
                    setMode("face");
                    setColored(true);
                    setAutoRotate(true);
                    setLineSpeed(1);
                    setContrast(1.5);
                    setDropSize(8);
                    setSelectedChars("full");
                    setRainColor("#5cfc87");
                    handleThemeChange("phosphor");
                  }}
                  className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
                  title="Reset to defaults"
                >
                  <RotateCcw className="size-3.5" />
                  <span>Reset</span>
                </button>
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
            <div className="flex size-8 items-center justify-center rounded-lg border border-lime-400/20 bg-lime-400/10 text-lime-400"><Sparkles className="size-4" /></div>
            <h3 className="text-sm font-semibold text-white">Full-Body 3D ASCII Mapping</h3>
            <p className="text-xs leading-relaxed text-gray-400">Renders entire 3D models (like the classic rubber duck) completely filled with shape-matched characters that look exactly like the real asset.</p>
          </div>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400"><MousePointer2 className="size-4" /></div>
            <h3 className="text-sm font-semibold text-white">360° Orbit Drag & Zoom</h3>
            <p className="text-xs leading-relaxed text-gray-400">Full Three.js OrbitControls integration lets you drag across the canvas to orbit the object, or use scroll wheel to zoom.</p>
          </div>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/10 text-amber-400"><Sliders className="size-4" /></div>
            <h3 className="text-sm font-semibold text-white">Animatic Scrub Console</h3>
            <p className="text-xs leading-relaxed text-gray-400">Interactive glowing progress bars with moving light sweeps, 12-segment equalizer notch meters, and real-time contrast tuning.</p>
          </div>
        </div>
        <PropsTable title="InteractiveAsciiFace Props" data={props} />
      </section>
    </article>
  );
}
