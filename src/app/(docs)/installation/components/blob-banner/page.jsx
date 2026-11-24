"use client";

import React, { useState } from "react";
import { BlobMorphHero } from "@/components/ui/blob-morph-hero";
import { PropsTable } from "@/components/ui/props-table";
import {
  Copy,
  Check,
  Sliders,
  Sparkles,
  Upload,
  Code2,
  Eye,
  Terminal,
  Layers,
  Globe2,
  MousePointer,
  RotateCcw,
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
      "URL or local asset path for the equipped helmet/product image dynamically revealed by wandering blobs and cursor interaction.",
  },
  {
    prop: "interactive",
    type: "boolean",
    default: "true",
    description:
      "When enabled, entering and hovering the mouse over the banner creates an interactive liquid metaball that reveals the equipped image beneath the cursor.",
  },
  {
    prop: "cornerRadius",
    type: "number",
    default: "25",
    description:
      "Corner radius in pixels applied to the base and equipped images card. Preserves image proportions with zero stretching.",
  },
  {
    prop: "aspectRatio",
    type: 'number | "square" | "auto"',
    default: "1",
    description:
      'Aspect ratio of the image card. Defaults to 1 ("square") for 4 sides equal with equal top-to-bottom spacing.',
  },
  {
    prop: "imageScale",
    type: "number",
    default: "0.75",
    description:
      "Target percentage scale of the image card relative to the banner (0.75 = 75% of container height/width).",
  },
  {
    prop: "minImageScale",
    type: "number",
    default: "0.30",
    description:
      "Minimum responsive scale percentage on low-width / mobile screens so the card never gets too tiny (0.30 = 30%).",
  },
  {
    prop: "speed",
    type: "number",
    default: "0.5",
    description:
      "Animation playback multiplier. Default is relaxed at 0.5 for calm, organic liquid movement.",
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

  // Playground interactive state
  const [speed, setSpeed] = useState(0.5);
  const [customImgs, setCustomImgs] = useState({ base: "", equipped: "" });
  const [liveProgress, setLiveProgress] = useState(0);

  const handleImageUpload = (slot, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCustomImgs((prev) => ({ ...prev, [slot]: URL.createObjectURL(file) }));
  };

  const handleResetImages = () => {
    setCustomImgs({ base: "", equipped: "" });
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
        baseImage="/images/banner-crypto-base.webp" // URL or local asset path (any size)
        equippedImage="/images/banner-crypto-equipped.png" // revealed dynamically by blobs & mouse
        imageScale={0.85} // 85% width of the container
        cornerRadius={25} // 25px rounded corners
        speed={0.5} // calm, relaxed liquid animation speed
        interactive={true} // enables mouse cursor blob reveal on hover
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
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/60 shadow-2xl">
            {/* The Embedded Hero Component Canvas */}
            <div className="relative h-[560px] md:h-[620px] w-full">
              <BlobMorphHero
                baseImage={customImgs.base}
                equippedImage={customImgs.equipped}
                cornerRadius={25}
                imageScale={0.85}
                speed={speed}
                autoPlay={true}
                interactive={true}
                showTopography={true}
                showAmbientBlobs={true}
                showHud={false}
                onProgressChange={(p) => setLiveProgress(p)}
              />
            </div>

            {/* Docked Live Controls Bar */}
            
            <div className="border-t border-white/10 bg-zinc-950/90 p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-white">
              {/* Custom Image Assets Direct Controls */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-mono uppercase text-zinc-400 mr-1 flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-lime-400" />
                  Custom Assets:
                </span>
                <label className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white cursor-pointer transition">
                  <span>Base Image</span>
                  {customImgs.base && <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload("base", e)}
                    className="hidden"
                  />
                </label>
                <label className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white cursor-pointer transition">
                  <span>Equipped Layer</span>
                  {customImgs.equipped && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload("equipped", e)}
                    className="hidden"
                  />
                </label>
                {(customImgs.base || customImgs.equipped) && (
                  <button
                    onClick={handleResetImages}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-rose-400 transition cursor-pointer"
                    title="Reset to default images"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Speed Slider & Mouse Interactive Indicator */}
              <div className="flex items-center gap-3.5 flex-wrap">
                {/* Speed Slider */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-400">
                    Speed: {speed.toFixed(1)}x
                  </span>
                  <input
                    type="range"
                    min="0.1"
                    max="1.5"
                    step="0.05"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    className="w-20 accent-lime-400 cursor-pointer"
                  />
                </div>

                {/* Mouse Hover Indicator Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-lime-400/10 border border-lime-400/20 text-lime-400 text-[11px] font-mono">
                  <MousePointer className="w-3 h-3" />
                  <span>Cursor Reveal Active</span>
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

      {/* Architecture & Props Reference */}
      <div className="mt-12 space-y-10">
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
