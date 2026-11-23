"use client";

import { useState } from "react";
import {
  Code2,
  Copy,
  Eye,
  Layers,
  MousePointer2,
  Upload,
} from "lucide-react";
import { InteractiveAsciiFace } from "@/components/ui/interactive-ascii-face";
import { PropsTable } from "@/components/ui/props-table";

const props = [
  { prop: "src", type: "string | File", default: "Reference preview", description: "Source photo to convert. Use an uploaded file, local path, or CORS-enabled URL." },
  { prop: "alt", type: "string", default: '"Human portrait formed from green ASCII characters"', description: "Accessible description of the image." },
  { prop: "maxOffset", type: "number", default: "22", description: "Maximum pointer translation in pixels." },
  { prop: "color", type: "string", default: '"#60ed83"', description: "CSS color for all ASCII rain, including the uploaded image shape." },
  { prop: "lineSpeed", type: "number", default: "1", description: "Downward Matrix-rain speed multiplier." },
  { prop: "mouseSpeed", type: "number", default: "1", description: "Pointer response speed." },
  { prop: "imageClarity", type: "number", default: "1.35", description: "Balances image detail and contrast in the static ASCII rendering." },
  { prop: "className", type: "string", default: '""', description: "Extra classes for the stage." },
];

const usage = `"use client";

import { useState } from "react";
import { InteractiveAsciiFace } from "@/components/ui/interactive-ascii-face";

export default function AsciiDemo() {
  const [photo, setPhoto] = useState();

  return (
    <>
      <label>
        Upload photo
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) setPhoto(file);
          }}
        />
      </label>
      <InteractiveAsciiFace src={photo} />
    </>
  );
}`;

const copyButton = "flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 font-mono text-xs font-medium text-white transition hover:bg-white/15 cursor-pointer";

export default function InteractiveAsciiFacePage() {
  const [activeTab, setActiveTab] = useState("preview");
  const [color, setColor] = useState("#60ed83");
  const [lineSpeed, setLineSpeed] = useState(1);
  const [mouseSpeed, setMouseSpeed] = useState(1);
  const [imageClarity, setImageClarity] = useState(1.35);
  const [photo, setPhoto] = useState(null);
  const [copyStatus, setCopyStatus] = useState("");
  const [packageManager, setPackageManager] = useState("npm");

  const installCommands = {
    npm: "npm install lucide-react",
    pnpm: "pnpm add lucide-react",
    yarn: "yarn add lucide-react",
    bun: "bun add lucide-react",
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
              BACKGROUND / CANVAS
            </span>
            <span className="rounded-full border border-white/5 bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400">
              INTERACTIVE ASCII
            </span>
          </div>
          <h1 className="font-sans text-3xl font-black tracking-tight text-white md:text-4xl">
            Interactive ASCII Face
          </h1>
          <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-gray-400 md:text-base">
            Upload a photo to reveal the complete image through crisp Matrix-style digital rain.
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
            <span>ASCII Stream: Running</span>
          </div>
        </div>

        <div id="ascii-preview" hidden={activeTab !== "preview"}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl">
            <InteractiveAsciiFace
              src={photo ?? undefined}
              color={color}
              lineSpeed={lineSpeed}
              mouseSpeed={mouseSpeed}
              imageClarity={imageClarity}
              className="rounded-none! border-0!"
            />
            <div className="absolute inset-x-4 top-4 flex justify-end">
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-200 hover:bg-zinc-800 focus-within:ring-2 focus-within:ring-lime-400">
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
            <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/15 bg-zinc-950/90 p-3 font-mono text-xs text-white shadow-2xl backdrop-blur-md">
              <span className="min-w-0 truncate text-zinc-400" title={photo?.name}>
                {photo?.name ?? "Sample image"}
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <label className="flex items-center gap-2">
                  Color
                  <input
                    type="color"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                    className="h-6 w-7 cursor-pointer rounded border border-white/15 bg-transparent"
                  />
                </label>
                <label className="flex items-center gap-2">Line speed<input type="range" min="0" max="3" step="0.1" value={lineSpeed} onChange={(event) => setLineSpeed(Number(event.target.value))} className="w-16 accent-lime-400" /><span>{lineSpeed.toFixed(1)}×</span></label>
                <label className="flex items-center gap-2">Mouse speed<input type="range" min="0.3" max="1.8" step="0.1" value={mouseSpeed} onChange={(event) => setMouseSpeed(Number(event.target.value))} className="w-16 accent-lime-400" /><span>{mouseSpeed.toFixed(1)}×</span></label>
                <label className="flex items-center gap-2">
                  Clarity
                  <input
                    type="range"
                    min="0.7"
                    max="2.5"
                    step="0.05"
                    value={imageClarity}
                    onChange={(event) => setImageClarity(Number(event.target.value))}
                    className="w-16 accent-lime-400"
                  />
                  <span>{imageClarity.toFixed(2)}×</span>
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
        <div>
          <h2 className="font-sans text-xl font-bold text-white md:text-2xl">Installation</h2>
          <p className="mt-2 text-sm text-gray-400">
            Install the icon dependency used by the component documentation controls.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/40 px-4 py-2">
              <div className="flex items-center gap-2">
                {["npm", "pnpm", "yarn", "bun"].map((manager) => (
                  <button
                    key={manager}
                    type="button"
                    onClick={() => setPackageManager(manager)}
                    className={`cursor-pointer rounded-md px-2.5 py-1 font-mono text-xs transition ${packageManager === manager ? "bg-white/10 font-bold text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                  >
                    {manager}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => copyUsage(installCommands[packageManager])}
                className="p-1 text-zinc-400 transition hover:text-white"
                title="Copy command"
              >
                <Copy aria-hidden="true" className="size-3.5" />
              </button>
            </div>
            <div className="flex items-center gap-2 p-4 font-mono text-xs text-lime-300">
              <span className="select-none text-zinc-500">$</span>
              <span>{installCommands[packageManager]}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">1. Add the component files</h3>
          <p className="text-sm text-gray-400">
            Copy <code className="rounded border border-white/10 bg-zinc-900 px-2 py-0.5 font-mono text-xs text-zinc-200">src/components/ui/interactive-ascii-face.jsx</code>{" "}
            and its CSS module into your project. Use the read-only example in the Code tab for image upload state.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-lime-400/20 bg-lime-400/10 text-lime-400"><Layers className="size-4" /></div>
            <h3 className="text-sm font-semibold text-white">Full Image Portrait</h3>
            <p className="text-xs leading-relaxed text-gray-400">Every visible photo pixel is mapped into the same crisp Matrix-style glyph pattern.</p>
          </div>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400"><Upload className="size-4" /></div>
            <h3 className="text-sm font-semibold text-white">Client-side Upload</h3>
            <p className="text-xs leading-relaxed text-gray-400">The browser samples the uploaded photo locally and recreates it using the same ASCII glyph field.</p>
          </div>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="flex size-8 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/10 text-amber-400"><MousePointer2 className="size-4" /></div>
            <h3 className="text-sm font-semibold text-white">Pointer Response</h3>
            <p className="text-xs leading-relaxed text-gray-400">Move over the preview to gently shift the portrait; the Movement slider has been removed.</p>
          </div>
        </div>
        <PropsTable title="InteractiveAsciiFace Props" data={props} />
      </section>
    </article>
  );
}
