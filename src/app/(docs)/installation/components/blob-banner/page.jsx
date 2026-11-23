"use client";

import React, { useState } from "react";
import {
  BlobMorphHero,
  DEFAULT_PRESETS,
} from "@/components/ui/blob-morph-hero";
import { PropsTable } from "@/components/ui/props-table";
import { InstallTabs } from "@/components/ui/install-tabs";
import {
  Copy,
  Check,
  Play,
  Pause,
  Sliders,
  Sparkles,
  Upload,
  Code2,
  Eye,
  Terminal,
  Layers,
  Zap,
  Globe2,
} from "lucide-react";

// Reusable Props Definition Data passed into <PropsTable data={bannerPropsData} />
const bannerPropsData = [
  {
    prop: "preset",
    type: "string",
    default: '"lando-f1"',
    description:
      'Pre-configured theme: "lando-f1", "monza-stealth", or "stride-carbon". Configures default colors, assets, and blueprint layers.',
  },
  {
    prop: "baseImage",
    type: "string",
    default: "Preset portrait",
    description:
      "URL or local asset path for the unequipped base driver/product image.",
  },
  {
    prop: "equippedImage",
    type: "string",
    default: "Preset equipped",
    description:
      "URL or local asset path for the equipped helmet/product image revealed dynamically as blobs roam over the portrait.",
  },
  {
    prop: "blobMode",
    type: '"roam" | "flood"',
    default: '"roam"',
    description:
      'In "roam" mode (default), liquid blobs sweep continuously across the entire banner container like dynamic lenses, revealing the equipped layer strictly where blobs contact the subject. In "flood" mode, the blobs also surge harmonically over the center subject.',
  },
  {
    prop: "speed",
    type: "number",
    default: "1.0",
    description:
      "Animation playback multiplier for both topographic wave frequency and fluid blob trajectory speed.",
  },
  {
    prop: "autoPlay",
    type: "boolean",
    default: "true",
    description:
      "Enables continuous automatic morphing and contour line drift.",
  },
  {
    prop: "showTopography",
    type: "boolean",
    default: "true",
    description:
      "Toggles the 60fps marching-squares topographic contour line canvas across the banner background.",
  },
  {
    prop: "showAmbientBlobs",
    type: "boolean",
    default: "true",
    description:
      "Controls whether glowing viscous liquid metaball blobs are visible roaming the topography background outside the card.",
  },
  {
    prop: "showHud",
    type: "boolean",
    default: "true",
    description:
      "Toggles the technical SVG F1 helmet wireframe HUD and telemetry vector overlay.",
  },
  {
    prop: "accentColor",
    type: "string",
    default: '"#c8ff00"',
    description:
      "Hex or RGB color used for SVG blueprint strokes, telemetry text, and glowing reticles.",
  },
  {
    prop: "topoColor",
    type: "string",
    default: '"#262933"',
    description:
      "Stroke color for the animated topographic elevation contour lines.",
  },
  {
    prop: "customSvgMarkup",
    type: "string",
    default: '""',
    description:
      "Optional raw SVG inner markup to replace the default F1 helmet wireframe.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes applied to the root container.",
  },
  {
    prop: "onProgressChange",
    type: "(progress: number) => void",
    default: "undefined",
    description:
      "Callback fired every 2 animation frames with the current morph reveal progress (0 to 1).",
  },
];

export default function BannerComponentPage() {
  const [activeTab, setActiveTab] = useState("preview"); // "preview" | "code"
  const [copied, setCopied] = useState(false);
  const [selectedPresetId, setSelectedPresetId] = useState(
    DEFAULT_PRESETS[0].id,
  );

  // Playground interactive state
  const activePreset =
    DEFAULT_PRESETS.find((p) => p.id === selectedPresetId) ||
    DEFAULT_PRESETS[0];

  const [speed, setSpeed] = useState(1.0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [blobMode, setBlobMode] = useState("roam"); // "roam" | "flood"
  const [accentColor, setAccentColor] = useState(activePreset.accentColor);
  const [topoColor, setTopoColor] = useState(activePreset.topoColor);
  const [showTopography, setShowTopography] = useState(true);
  const [showAmbientBlobs, setShowAmbientBlobs] = useState(true);
  const [customImgs, setCustomImgs] = useState({ base: "", equipped: "" });
  const [liveProgress, setLiveProgress] = useState(0);

  const handlePresetChange = (presetId) => {
    setSelectedPresetId(presetId);
    const p = DEFAULT_PRESETS.find((item) => item.id === presetId);
    if (p) {
      setAccentColor(p.accentColor);
      setTopoColor(p.topoColor);
      setCustomImgs({ base: "", equipped: "" });
    }
  };

  const handleImageUpload = (slot, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCustomImgs((prev) => ({ ...prev, [slot]: URL.createObjectURL(file) }));
  };

  const copyToClipboard = async (text) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn("Clipboard copy failed:", e);
    }
  };

  const componentUsageCode = `import { BlobMorphHero } from "@/components/ui/blob-morph-hero";

export default function HeroSection() {
  return (
    <div className="h-screen w-full">
      <BlobMorphHero
        preset="lando-f1"
        blobMode="flood" // "flood" surges and floods card; "roam" sweeps across banner & card
        speed={1.0}
        showTopography={true}
        showAmbientBlobs={true}
        showHud={false}
      />
    </div>
  );
}`;

  return (
    <div className="w-full min-h-screen px-4 md:px-10 py-6 max-w-7xl mx-auto text-gray-200 font-plex">
      {/* Breadcrumb Navigation */}
      <div className="text-gray-500 font-mono text-[13px] flex items-center gap-2">
        <span>Documentation</span>
        <span>/</span>
        <span>Components</span>
        <span>/</span>
        <span className="text-gray-200 font-medium">Banner & Hero</span>
      </div>

      {/* Header & Badges */}
      <div className="mt-4 flex flex-col  md:flex-row md:items-center justify-between gap-8 border-b border-white/10 pb-6">
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-lime-400/10 text-lime-400 border border-lime-400/20">
              NEW COMPONENT
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-zinc-800 text-zinc-400 border border-white/5">
              HERO / BANNER
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-zinc-800 text-zinc-400 border border-white/5">
              CONTAINER-WIDE LIQUID METABALL
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black font-sans tracking-tight text-white">
            Liquid Blob Morph Hero
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-400 max-w-2xl font-sans leading-relaxed">
            Formula 1 inspired banner with animated 60fps topography contour
            background, transparent 3D aerodynamic glass racing helmet with
            signature fluorescent liquid livery morph, McLaren carbon brow
            armor, Android chin badge, and interactive FIA telemetry HUD.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => copyToClipboard(componentUsageCode)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium bg-white/10 hover:bg-white/15 text-white transition border border-white/10 cursor-pointer shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-400" />
                <span>Copy Usage</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Showcase Section */}
      <div className="mt-8">
        {/* Preview / Code Tab Switcher */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center p-1 rounded-xl bg-zinc-900 border border-white/10">
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeTab === "preview"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeTab === "code"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Livery Morph: {(liveProgress * 100).toFixed(0)}%</span>
          </div>
        </div>

        {/* Tab 1: Interactive Preview Playground */}
        {activeTab === "preview" && (
          <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-black/60 shadow-2xl">
            {/* The Embedded Hero Component Canvas */}
            <div className="relative h-[660px] md:h-[740px] w-full">
              <BlobMorphHero
                preset={selectedPresetId}
                baseImage={customImgs.base}
                equippedImage={customImgs.equipped}
                accentColor={accentColor}
                topoColor={topoColor}
                speed={speed}
                autoPlay={autoPlay}
                showTopography={showTopography}
                showHud={false}
                showNextRace={true}
                onProgressChange={(p) => setLiveProgress(p)}
              />
            </div>

            {/* Floating Live Controls Bar (React Bits Style) */}
            <div className="absolute bottom-4 left-4 right-4 z-30 flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-white/15 text-xs text-white shadow-2xl">
              {/* Presets Selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                <span className="text-[11px] font-mono uppercase text-zinc-400 mr-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Preset:
                </span>
                {DEFAULT_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePresetChange(p.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition cursor-pointer ${
                      selectedPresetId === p.id
                        ? "bg-white text-black font-bold shadow-sm"
                        : "bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    {p.title.split("//")[0].trim()}
                  </button>
                ))}
              </div>

              {/* Animation Play/Pause & Speed Controls */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  onClick={() => setAutoPlay(!autoPlay)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-xs transition cursor-pointer ${
                    autoPlay
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-zinc-800 text-zinc-300 border border-white/10"
                  }`}
                >
                  {autoPlay ? (
                    <>
                      <Pause className="w-3 h-3" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3" />
                      <span>Play</span>
                    </>
                  )}
                </button>

                {/* Blob Surge Mode Toggle */}
                <button
                  onClick={() =>
                    setBlobMode(blobMode === "flood" ? "roam" : "flood")
                  }
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-xs transition cursor-pointer ${
                    blobMode === "flood"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold"
                      : "bg-zinc-800 text-zinc-400 border border-white/10"
                  }`}
                  title="Toggle between flood surge vs roaming liquid lens across the banner"
                >
                  <Zap className="w-3 h-3" />
                  <span>
                    {blobMode === "flood" ? "Flood Surge" : "Roaming Lens"}
                  </span>
                </button>

                {/* Speed Slider */}
                <div className="hidden md:flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-400">
                    Speed: {speed.toFixed(1)}x
                  </span>
                  <input
                    type="range"
                    min="0.2"
                    max="2.5"
                    step="0.1"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    className="w-20 accent-white cursor-pointer"
                  />
                </div>

                {/* Color Pickers */}
                <div className="hidden lg:flex items-center gap-2">
                  <label
                    className="flex items-center gap-1 cursor-pointer"
                    title="Accent & SVG Color"
                  >
                    <span className="text-[10px] font-mono text-zinc-400">
                      Accent:
                    </span>
                    <input
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-5 h-5 rounded cursor-pointer border-0 bg-transparent"
                    />
                  </label>
                  <label
                    className="flex items-center gap-1 cursor-pointer"
                    title="Topography Line Color"
                  >
                    <span className="text-[10px] font-mono text-zinc-400">
                      Topo:
                    </span>
                    <input
                      type="color"
                      value={topoColor}
                      onChange={(e) => setTopoColor(e.target.value)}
                      className="w-5 h-5 rounded cursor-pointer border-0 bg-transparent"
                    />
                  </label>
                </div>

                {/* Layer Toggles */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setShowAmbientBlobs(!showAmbientBlobs)}
                    className={`px-2 py-1 rounded text-[11px] font-mono transition cursor-pointer ${
                      showAmbientBlobs
                        ? "bg-lime-400/20 text-lime-300 border border-lime-400/30"
                        : "text-zinc-500 hover:text-zinc-300 border border-transparent"
                    }`}
                    title="Toggle gooey metaball visibility across full topography banner"
                  >
                    Banner Blobs: {showAmbientBlobs ? "ON" : "OFF"}
                  </button>
                  <button
                    onClick={() => setShowTopography(!showTopography)}
                    className={`px-2 py-1 rounded text-[11px] font-mono transition cursor-pointer ${
                      showTopography
                        ? "bg-white/10 text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Topo: {showTopography ? "ON" : "OFF"}
                  </button>
                </div>
              </div>
            </div>

            {/* Custom Uploads Accordion Tray */}
            <div className="absolute top-4 right-4 z-30">
              <div className="group relative">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-white/15 text-xs text-zinc-300 hover:text-white transition cursor-pointer">
                  <Upload className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Custom Assets</span>
                </button>
                <div className="hidden group-hover:flex group-focus-within:flex flex-col gap-2 p-3 absolute right-0 top-full mt-2 w-64 rounded-xl bg-zinc-950/95 backdrop-blur-md border border-white/15 shadow-2xl text-xs z-40">
                  <span className="font-mono text-[10px] uppercase text-zinc-400 font-bold">
                    Upload Custom Layers
                  </span>
                  <label className="flex items-center justify-between text-zinc-300 hover:text-white cursor-pointer py-1 border-b border-white/5">
                    <span>1. Base (Driver Portrait)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload("base", e)}
                      className="hidden"
                    />
                    <span className="text-lime-400 font-mono text-[11px] underline">
                      Upload
                    </span>
                  </label>
                  <label className="flex items-center justify-between text-zinc-300 hover:text-white cursor-pointer py-1 border-b border-white/5">
                    <span>2. Equipped (Helmet Photo)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload("equipped", e)}
                      className="hidden"
                    />
                    <span className="text-lime-400 font-mono text-[11px] underline">
                      Upload
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Code & Implementation */}
        {activeTab === "code" && (
          <div className="rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-zinc-900/60 font-mono text-xs">
              <div className="flex items-center gap-2 text-zinc-400">
                <Code2 className="w-4 h-4 text-zinc-300" />
                <span>Usage: page.jsx</span>
              </div>
              <button
                onClick={() => copyToClipboard(componentUsageCode)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-white transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-5 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
              <code>{componentUsageCode}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Installation & Guide Section */}
      <div className="mt-12 space-y-10">
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold font-sans text-white">
              Installation
            </h2>
            <p className="text-sm text-gray-400">
              Install the component using the Adaptive UI CLI or your preferred package manager.
            </p>
          </div>
          <div className="max-w-2xl">
            <InstallTabs packages="adaptive-ui" component="blob-banner" />
          </div>
        </div>

        {/* Step-by-step Setup */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            1. Create the Component File
          </h3>
          <p className="text-sm text-gray-400">
            Copy the full component implementation to{" "}
            <code className="text-zinc-200 bg-zinc-900 px-2 py-0.5 rounded border border-white/10 font-mono text-xs">
              src/components/ui/blob-morph-hero.jsx
            </code>
            .
          </p>
        </div>

        {/* Component Architecture & Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl border border-white/10 bg-zinc-900/40 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-white text-sm">
              Layer 1: Topographic Canvas
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Calculates an organic drifting elevation heightfield using a
              marching-squares algorithm at a locked 60fps across the full hero
              container.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-zinc-900/40 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
              <Globe2 className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-white text-sm">
              Layer 2: Container-Wide Liquid Blobs
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Viscous liquid metaballs drift across the full topography banner.
              As soon as any blob travels over the driver portrait, the equipped
              racer image is dynamically revealed inside that intersecting area.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-zinc-900/40 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Sliders className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-white text-sm">
              Layer 3: F1 Technical Blueprint
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Autonomous SVG wireframe HUD depicting helmet aerodynamics, visor
              aperture, Hans anchors, and telemetry reticles animating in a
              synchronized loop.
            </p>
          </div>
        </div>

        {/* Reusable Props Reference Table Component */}
        <div className="pt-4">
          <PropsTable
            title="BlobMorphHero Props"
            description="Complete interactive reference of all customizable properties and parameters for BlobMorphHero."
            data={bannerPropsData}
          />
        </div>
      </div>
    </div>
  );
}
