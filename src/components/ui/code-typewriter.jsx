"use client";

import React, { useState, useEffect } from "react";
import { Check, Copy, Terminal, Play, Pause, RotateCcw } from "lucide-react";

const CODE_SNIPPETS = [
  {
    fileName: "page.jsx",
    language: "jsx",
    lines: [
      `import { StackedCardsScroll } from "adaptive-ui-react";`,
      ``,
      `export default function Showcase() {`,
      `  return (`,
      `    <main className="w-full min-h-screen py-16">`,
      `      {/* Pinned 60FPS 3D Stack with SVG Half-Ring Gauge */}`,
      `      <StackedCardsScroll`,
      `        pin={true}`,
      `        pinHeight="280vh"`,
      `        enableWheelScroll={true}`,
      `      />`,
      `    </main>`,
      `  );`,
      `}`,
    ],
  },
  {
    fileName: "blob-hero.jsx",
    language: "jsx",
    lines: [
      `import { BlobMorphHero } from "adaptive-ui-react";`,
      ``,
      `export default function HeroSection() {`,
      `  return (`,
      `    <BlobMorphHero`,
      `      imageScale={0.85}`,
      `      accentColor="#10b981"`,
      `      topoSpeed={0.8}`,
      `      blobCount={5}`,
      `      wireframeOverlay={true}`,
      `    />`,
      `  );`,
      `}`,
    ],
  },
  {
    fileName: "ascii-face.jsx",
    language: "jsx",
    lines: [
      `import { InteractiveAsciiFace } from "adaptive-ui-react";`,
      ``,
      `export default function TerminalCanvas() {`,
      `  return (`,
      `    <InteractiveAsciiFace`,
      `      color="#5cfc87"`,
      `      mouseSpeed={1.2}`,
      `      imageClarity={1.5}`,
      `      scanlines={true}`,
      `      glow={true}`,
      `    />`,
      `  );`,
      `}`,
    ],
  },
];

export function CodeTypewriter({ className = "" }) {
  const [activeTab, setActiveTab] = useState(0);
  const [displayedLineCount, setDisplayedLineCount] = useState(0);
  const [displayedCharCount, setDisplayedCharCount] = useState(0);
  const [isTypingPaused, setIsTypingPaused] = useState(false);
  const [copied, setCopied] = useState(false);

  const snippet = CODE_SNIPPETS[activeTab];
  const fullText = snippet.lines.join("\n");

  // Reset when tab changes
  useEffect(() => {
    setDisplayedLineCount(0);
    setDisplayedCharCount(0);
  }, [activeTab]);

  // Typewriter effect interval
  useEffect(() => {
    if (isTypingPaused) return;

    const currentLine = snippet.lines[displayedLineCount] || "";
    if (displayedCharCount < currentLine.length) {
      const charSpeed = Math.floor(Math.random() * 15) + 12; // 12-27ms realistic cadence
      const timer = setTimeout(() => {
        setDisplayedCharCount((prev) => prev + 1);
      }, charSpeed);
      return () => clearTimeout(timer);
    } else if (displayedLineCount < snippet.lines.length - 1) {
      const lineSpeed = 50;
      const timer = setTimeout(() => {
        setDisplayedLineCount((prev) => prev + 1);
        setDisplayedCharCount(0);
      }, lineSpeed);
      return () => clearTimeout(timer);
    } else {
      // Completed current snippet, hold for 4 seconds then cycle tab
      const timer = setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % CODE_SNIPPETS.length);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [displayedCharCount, displayedLineCount, snippet, isTypingPaused]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(fullText);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleRestart = () => {
    setDisplayedLineCount(0);
    setDisplayedCharCount(0);
  };

  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-[#070b14]/95 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs select-none ${className}`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-black/40">
        {/* macOS dot window controls */}
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-rose-500/80 border border-rose-600/40" />
          <div className="size-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
          <div className="size-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1">
          {CODE_SNIPPETS.map((item, idx) => (
            <button
              key={item.fileName}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                activeTab === idx
                  ? "bg-white/10 text-emerald-400 font-medium"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {item.fileName}
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsTypingPaused((p) => !p)}
            className="p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title={isTypingPaused ? "Resume typing" : "Pause typing"}
          >
            {isTypingPaused ? <Play size={12} /> : <Pause size={12} />}
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Restart typing"
          >
            <RotateCcw size={12} />
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Copy snippet"
          >
            {copied ? (
              <Check size={12} className="text-emerald-400" />
            ) : (
              <Copy size={12} />
            )}
          </button>
        </div>
      </div>

      {/* Code Body with Line Numbers & Syntax Coloring */}
      <div className="p-4 sm:p-6 overflow-x-auto min-h-[300px]">
        {snippet.lines.map((line, lIdx) => {
          if (lIdx > displayedLineCount) return null;

          const isCurrentTypingLine = lIdx === displayedLineCount;
          const textToRender = isCurrentTypingLine
            ? line.slice(0, displayedCharCount)
            : line;

          return (
            <div key={lIdx} className="flex leading-6">
              {/* Line number */}
              <span className="w-8 shrink-0 text-right pr-4 text-zinc-600 select-none">
                {lIdx + 1}
              </span>
              {/* Line text */}
              <span className="text-zinc-300 whitespace-pre">
                {colorizeLine(textToRender)}
                {isCurrentTypingLine && (
                  <span className="inline-block w-2 h-4 bg-emerald-400 ml-0.5 align-middle animate-pulse" />
                )}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer Status Bar */}
      <div className="px-4 py-2 border-t border-white/5 bg-black/60 flex items-center justify-between text-[10px] text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>TypeScript / React 19 JSX</span>
        </span>
        <span>UTF-8 • 60 FPS Engine</span>
      </div>
    </div>
  );
}

// Simple syntax colorizer for JSX
function colorizeLine(text) {
  if (text.startsWith("//") || text.startsWith("/*") || text.includes("{/*")) {
    return <span className="text-zinc-500 italic">{text}</span>;
  }
  if (text.startsWith("import ") || text.startsWith("export ") || text.startsWith("return")) {
    const parts = text.split(" ");
    return (
      <>
        <span className="text-fuchsia-400 font-semibold">{parts[0]} </span>
        <span>{parts.slice(1).join(" ")}</span>
      </>
    );
  }
  if (text.includes("pin={true}") || text.includes("enableWheelScroll={true}")) {
    return <span className="text-amber-300">{text}</span>;
  }
  if (text.includes("<") && text.includes(">")) {
    return <span className="text-cyan-300">{text}</span>;
  }
  return text;
}

export default CodeTypewriter;
