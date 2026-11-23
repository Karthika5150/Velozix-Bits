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
} from "lucide-react";
import { InteractiveAsciiFace } from "@/components/ui/interactive-ascii-face";
import { PropsTable } from "@/components/ui/props-table";
import { InstallTabs } from "@/components/ui/install-tabs";

const props = [
  { prop: "src", type: "string | File", default: "Reference preview", description: "Source photo to convert. Use an uploaded file, local path, or CORS-enabled URL." },
  { prop: "alt", type: "string", default: '"Phosphor CRT ASCII portrait formed from green code characters"', description: "Accessible description of the image." },
  { prop: "color", type: "string", default: '"#5cfc87"', description: "Primary phosphor green color for the CRT terminal characters." },
  { prop: "mouseSpeed", type: "number", default: "1", description: "Cursor repulsion force and particle dispersion strength." },
  { prop: "lineSpeed", type: "number", default: "1", description: "Spring return speed pulling particles back to original positions." },
  { prop: "imageClarity", type: "number", default: "1.4", description: "Contrast and facial feature detail boost with auto-levels normalization." },
  { prop: "cutoff", type: "number", default: "0.05", description: "Background dark threshold. Lower values preserve more background; higher isolates the subject." },
  { prop: "invert", type: "boolean", default: "false", description: "Inverts character luminance. Essential for photos with white or light backgrounds." },
  { prop: "scanlines", type: "boolean", default: "true", description: "Toggles retro CRT monitor scanlines overlay." },
  { prop: "glow", type: "boolean", default: "true", description: "Toggles phosphor bloom text glow." },
  { prop: "className", type: "string", default: '""', description: "Extra CSS classes for the container stage." },
];

const usage = `"use client";

import { useState } from "react";
import { InteractiveAsciiFace } from "@/components/ui/interactive-ascii-face";

export default function AsciiDemo() {
  const [photo, setPhoto] = useState();

  return (
    <div className="flex flex-col items-center gap-4">
      <label className="cursor-pointer rounded-lg bg-emerald-600 px-4 py-2 font-mono text-sm text-white hover:bg-emerald-500">
        Upload photo
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
      <InteractiveAsciiFace
        src={photo}
        color="#5cfc87"
        imageClarity={1.4}
      />
    </div>
  );
}`;

const copyButton = "flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 font-mono text-xs font-medium text-white transition hover:bg-white/15 cursor-pointer";

export default function InteractiveAsciiFacePage() {
  const [activeTab, setActiveTab] = useState("preview");
  const [color, setColor] = useState("#5cfc87");
  const [lineSpeed, setLineSpeed] = useState(1);
  const [mouseSpeed, setMouseSpeed] = useState(1);
  const [imageClarity, setImageClarity] = useState(1.4);
  const [cutoff, setCutoff] = useState(0.05);
  const [invert, setInvert] = useState(false);
  const [scanlines, setScanlines] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [copyStatus, setCopyStatus] = useState("");

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
            Upload any photo or portrait to render it into glowing phosphor green ASCII terminal typography. Hovering the cursor scatters the code characters like interactive particles, which then smoothly spring back to their original position.
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
            <span>CRT Terminal: Online</span>
          </div>
        </div>

        <div id="ascii-preview" hidden={activeTab !== "preview"}>
          <div className="relative overflow-hidden rounded-2xl border border-emerald-950/60 bg-black shadow-2xl">
            <InteractiveAsciiFace
              src={photo ?? undefined}
              color={color}
              lineSpeed={lineSpeed}
              mouseSpeed={mouseSpeed}
              imageClarity={imageClarity}
              cutoff={cutoff}
              invert={invert}
              scanlines={scanlines}
              className="rounded-none! border-0!"
            />

            {/* Upload Button */}
            <div className="absolute inset-x-4 top-4 z-20 flex justify-end">
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-emerald-500/25 bg-zinc-950/85 px-3.5 py-1.5 text-xs font-mono text-emerald-300 backdrop-blur shadow-lg hover:bg-zinc-900 focus-within:ring-2 focus-within:ring-emerald-400">
                <Upload aria-hidden="true" className="size-3.5" />
                Upload photo
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
            </div>

            {/* Controls Bar */}
            <div className="absolute inset-x-4 bottom-4 z-20 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-900/35 bg-zinc-950/92 p-3 font-mono text-xs text-white shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 min-w-0">
                <span className="max-w-[140px] truncate text-emerald-400/80 sm:max-w-[200px]" title={photo?.name}>
                  {photo?.name ?? "Sample portrait"}
                </span>
                {photo && (
                  <button
                    type="button"
                    onClick={() => setPhoto(null)}
                    className="flex cursor-pointer items-center gap-1 rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300 hover:bg-zinc-700 hover:text-white"
                    title="Reset to default image"
                  >
                    <RotateCcw className="size-3" />
                    Reset
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  Color
                  <input
                    type="color"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                    className="h-6 w-7 cursor-pointer rounded border border-white/15 bg-transparent"
                  />
                </label>

                <label className="flex items-center gap-2 cursor-pointer" title="Cursor repulsion radius and power">
                  Repulsion
                  <input
                    type="range"
                    min="0.3"
                    max="2.5"
                    step="0.1"
                    value={mouseSpeed}
                    onChange={(event) => setMouseSpeed(Number(event.target.value))}
                    className="w-16 accent-emerald-400"
                  />
                  <span>{mouseSpeed.toFixed(1)}×</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer" title="Particle return spring speed">
                  Return
                  <input
                    type="range"
                    min="0.2"
                    max="2.5"
                    step="0.1"
                    value={lineSpeed}
                    onChange={(event) => setLineSpeed(Number(event.target.value))}
                    className="w-16 accent-emerald-400"
                  />
                  <span>{lineSpeed.toFixed(1)}×</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer" title="Contrast and facial feature detail">
                  Clarity
                  <input
                    type="range"
                    min="0.6"
                    max="2.5"
                    step="0.05"
                    value={imageClarity}
                    onChange={(event) => setImageClarity(Number(event.target.value))}
                    className="w-16 accent-emerald-400"
                  />
                  <span>{imageClarity.toFixed(2)}×</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer" title="Background darkness cutoff">
                  Cutoff
                  <input
                    type="range"
                    min="0.00"
                    max="0.20"
                    step="0.01"
                    value={cutoff}
                    onChange={(event) => setCutoff(Number(event.target.value))}
                    className="w-14 accent-emerald-400"
                  />
                  <span>{cutoff.toFixed(2)}</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer text-zinc-300 hover:text-white" title="Invert light and dark (for white backgrounds)">
                  <input
                    type="checkbox"
                    checked={invert}
                    onChange={(e) => setInvert(e.target.checked)}
                    className="rounded border-zinc-700 bg-zinc-900 text-emerald-400 accent-emerald-400 focus:ring-0"
                  />
                  <span>Invert</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer text-zinc-300 hover:text-white" title="Toggle CRT scanlines">
                  <input
                    type="checkbox"
                    checked={scanlines}
                    onChange={(e) => setScanlines(e.target.checked)}
                    className="rounded border-zinc-700 bg-zinc-900 text-emerald-400 accent-emerald-400 focus:ring-0"
                  />
                  <span>CRT</span>
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
                Upload example · page.jsx
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
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="font-sans text-xl font-bold text-white md:text-2xl">Installation</h2>
            <p className="text-sm text-gray-400">
              Install the component using the Adaptive UI CLI or your preferred package manager.
            </p>
          </div>
          <div className="max-w-2xl">
            <InstallTabs packages="adaptive-ui" component="interactive-ascii-face" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">1. Add the component files</h3>
          <p className="text-sm text-gray-400">
            Copy <code className="rounded border border-white/10 bg-zinc-900 px-2 py-0.5 font-mono text-xs text-zinc-200">src/components/ui/interactive-ascii-face.jsx</code>{" "}
            and its CSS module into your project.
          </p>
        </div>

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
