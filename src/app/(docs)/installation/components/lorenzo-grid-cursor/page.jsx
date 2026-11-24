"use client";

import React, { useState } from "react";
import {
  Code2,
  Copy,
  Check,
  Eye,
  Sparkles,
  MousePointer2,
  Sliders,
  RotateCcw,
  Grid,
} from "lucide-react";
import {
  GooeyGridCursor,
  LorenzoGridCursor,
} from "@/components/ui/lorenzo-grid-cursor";
import { PropsTable } from "@/components/ui/props-table";

const LORENZO_CURSOR_PROPS = [
  {
    prop: "color",
    type: "string",
    default: '"auto"',
    description:
      'Fill color of the grid blocks. "auto" dynamically syncs with CSS var(--brand-accent). Accepts any hex, rgb, or color string.',
  },
  {
    prop: "gridSize",
    type: "number",
    default: "30",
    description:
      "Number of columns across the viewport. Cell size is computed as window.innerWidth / gridSize.",
  },
  {
    prop: "cellSize",
    type: "number",
    default: "undefined",
    description:
      "Optional explicit pixel width and height for each grid cell (e.g. 50). Overrides gridSize calculation.",
  },
  {
    prop: "borderRadius",
    type: "string | number",
    default: '"18%"',
    description:
      'Corner radius of each square block (e.g. "18%", "8px", 8). Lower values give sharp digital pixels; higher values round the blocks.',
  },
  {
    prop: "trailDuration",
    type: "number",
    default: "260",
    description:
      "Duration in milliseconds each grid square stays visible before fading out.",
  },
  {
    prop: "speed",
    type: "number",
    default: "1.0",
    description:
      "Speed multiplier for trail duration and exit transition timing.",
  },
  {
    prop: "blurAmount",
    type: "number",
    default: "4.5",
    description:
      "Gaussian blur strength for the SVG gooey merge filter. Higher values create stronger fluid necks between neighboring squares.",
  },
  {
    prop: "blendMode",
    type: "string",
    default: '"normal"',
    description:
      'CSS mix-blend-mode for the overlay ("normal", "difference", "screen", "multiply"). Use "difference" with #fff for classic editorial inversion.',
  },
  {
    prop: "showFollower",
    type: "boolean",
    default: "true",
    description:
      "Renders a smooth lerping floating cursor follower matching the active theme color.",
  },
  {
    prop: "smoothing",
    type: "number",
    default: "0.12",
    description:
      "Mouse follower interpolation lag factor (0.05 to 0.3). Lower values create more fluid trailing drag.",
  },
  {
    prop: "showGridLines",
    type: "boolean",
    default: "true",
    description:
      "Draws underlying subtle grid lines across the viewport to reveal the matrix structure.",
  },
  {
    prop: "gridLineColor",
    type: "string",
    default: '"rgba(255, 255, 255, 0.03)"',
    description: "Stroke color for the background grid lines.",
  },
  {
    prop: "zIndex",
    type: "number",
    default: "30",
    description: "CSS z-index of the cursor overlay container.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional CSS class names.",
  },
];

export default function LorenzoGridCursorDocPage() {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  // Playground state
  const [gridSize, setGridSize] = useState(28);
  const [borderRadius, setBorderRadius] = useState(20);
  const [trailDuration, setTrailDuration] = useState(220);
  const [blurAmount, setBlurAmount] = useState(6.0);
  const [blendMode, setBlendMode] = useState("screen");

  const handleCopyCode = async () => {
    const code = `import { LorenzoGridCursor } from "velozix-bits";

export default function MyPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* 1:1 Lorenzo Dal Dosso Editorial Grid Cursor */}
      <LorenzoGridCursor
        color="auto"
        cellSize={50} // exact 50px square or gridSize={28}
        borderRadius="20%"
        trailDuration={220}
        blurAmount={6.0}
        blendMode="screen"
        showGridLines={true}
      />

      <main className="relative z-10 p-12">
        <h1 className="text-5xl font-bold">Fluid Editorial Grid</h1>
      </main>
    </div>
  );
}`;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="w-full text-white font-mono space-y-12">
      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-purple-400 uppercase tracking-widest font-semibold">
          <span>HERO & BACKGROUNDS</span>
          <span>•</span>
          <span className="text-emerald-400">Trending</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight">
          Gooey Grid Cursor
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          High-performance fluid grid cursor trail. Features an SVG gooey metaball filter
          that seamlessly fuses adjacent grid squares into smooth organic molten curves,
          dynamic theme accent syncing, and zero-gap Supercover orthogonal tracking.
        </p>
      </div>

      {/* Interactive Playground & Preview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                activeTab === "preview"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Eye size={14} />
              <span>Interactive Preview</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                activeTab === "code"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Code2 size={14} />
              <span>Code Snippet</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <MousePointer2 size={13} className="text-purple-400" />
            <span>Move cursor to test gooey curves</span>
          </div>
        </div>

        {activeTab === "preview" ? (
          <div className="space-y-6">
            {/* Live Interactive Box */}
            <div className="relative h-[480px] w-full rounded-2xl border border-white/10 bg-[#06040d] overflow-hidden flex flex-col items-center justify-center text-center p-6 shadow-2xl">
              {/* Active LorenzoGridCursor instance scoped inside */}
              <LorenzoGridCursor
                color="auto"
                gridSize={gridSize}
                borderRadius={`${borderRadius}%`}
                trailDuration={trailDuration}
                blurAmount={blurAmount}
                blendMode={blendMode}
                showFollower={false}
                showGridLines={true}
                className="!absolute"
              />

              <div className="relative z-10 pointer-events-none max-w-md space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] font-mono uppercase">
                  <Sparkles size={12} />
                  <span>SVG Gooey Curve Filter Active</span>
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                  Move Cursor Across Grid
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Notice how adjacent squares curve and merge together when your mouse enters neighboring blocks.
                </p>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Grid Columns ({gridSize})</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="50"
                  value={gridSize}
                  onChange={(e) => setGridSize(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Square Radius ({borderRadius}%)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={borderRadius}
                  onChange={(e) => setBorderRadius(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Trail Duration ({trailDuration}ms)</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="600"
                  step="20"
                  value={trailDuration}
                  onChange={(e) => setTrailDuration(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Gooey Blur ({blurAmount}px)</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="9"
                  step="0.5"
                  value={blurAmount}
                  onChange={(e) => setBlurAmount(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative rounded-2xl border border-white/10 bg-black/80 p-6 overflow-x-auto">
            <button
              type="button"
              onClick={handleCopyCode}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-colors cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? "Copied" : "Copy Code"}</span>
            </button>
            <pre className="text-xs text-purple-200/90 leading-relaxed font-mono">
              <code>{`import { LorenzoGridCursor } from "velozix-bits";

export default function MyPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* 1:1 Lorenzo Dal Dosso Editorial Grid Cursor */}
      <LorenzoGridCursor
        color="auto" // Dynamic CSS var(--brand-accent) or custom hex
        gridSize={30}
        borderRadius="18%"
        trailDuration={260}
        blurAmount={4.5}
        blendMode="screen"
        showFollower={true}
        showGridLines={true}
      />

      <main className="relative z-10 p-12">
        <h1 className="text-5xl font-bold">Fluid Editorial Grid</h1>
      </main>
    </div>
  );
}`}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Props Specification Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-sans font-bold text-white flex items-center gap-2">
          <span>Component Props</span>
        </h2>
        <PropsTable propsData={LORENZO_CURSOR_PROPS} />
      </div>
    </div>
  );
}
