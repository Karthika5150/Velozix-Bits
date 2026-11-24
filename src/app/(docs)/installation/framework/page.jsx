"use client";

import React, { useState } from "react";
import { frameWorkDaa } from "@/data/data";
import { Check, Copy, Terminal, Layers } from "lucide-react";

export default function FrameWorkSetup() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (content, id) => {
    try {
      setCopiedId(id);
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(content);
      }
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // fallback
    }
  };

  return (
    <main className="w-full max-w-4xl py-6 pb-20 font-inter">
      {/* Breadcrumb */}
      <div className="text-zinc-500 font-mono text-xs flex items-center gap-2">
        <span>Documentation</span>
        <span>/</span>
        <span>Installation</span>
        <span>/</span>
        <span className="text-zinc-300">Frameworks</span>
      </div>

      {/* Header */}
      <div className="mt-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Framework Setup
        </h1>
        {/* 24px gap between title and content */}
        <p className="mt-6 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-2xl">
          Quickly configure Velozix Bits in your preferred modern web framework.
          Both Next.js App Router and Vite are fully supported with zero
          extra configuration.
        </p>
      </div>

      {/* Framework Setup Cards Grid (Mapped with 24px gap & animated borders) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {frameWorkDaa.map((item) => (
          <div key={item.id} className="flex flex-col">
            {/* Framework Title & Badge */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers size={18} className="text-purple-400" />
                {item.title}
              </h2>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-500/15 px-2.5 py-0.5 rounded-full border border-purple-500/30 uppercase">
                {item.status}
              </span>
            </div>

            {/* 24px gap below title */}
            <p className="mt-6 text-xs sm:text-sm text-purple-200/70 leading-relaxed">
              {item.steps.length === 0
                ? "Configuration coming soon."
                : "Follow the 3 quick steps below to set up Velozix Bits in your codebase."}
            </p>

            {/* Steps Container (Mapped with 24px gap & animated glowing borders) */}
            <div className="mt-6 flex flex-col gap-6">
              {item.steps.map((stepval) => (
                <div
                  key={stepval.id}
                  className="group relative rounded-xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
                >
                  {/* Moving gradient line border animation on hover */}
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,0.95)_25%,rgba(216,180,254,0.85)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3.5s_linear_infinite] transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 rounded-xl border border-purple-500/20 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />

                  <div className="relative rounded-[11px] bg-[#090615]/95 backdrop-blur-xl p-4 flex flex-col gap-2.5">
                    {/* Step label & Topic */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-medium text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded border border-purple-500/30">
                        STEP {stepval.step}
                      </span>
                      <span className="text-xs text-purple-200 font-medium">
                        {stepval.topic}
                      </span>
                    </div>

                    {/* Code block with copy button */}
                    <div className="mt-1 flex items-center justify-between gap-3 bg-black/60 border border-purple-500/20 rounded-lg px-3 py-2 font-mono text-xs">
                      <pre className="text-purple-200 overflow-x-auto whitespace-pre no-scrollbar">
                        <code>{stepval.content}</code>
                      </pre>
                      <button
                        type="button"
                        onClick={() => handleCopy(stepval.content, stepval.id)}
                        className="p-1.5 rounded-md text-purple-400 hover:text-white hover:bg-purple-500/20 transition-colors shrink-0 cursor-pointer"
                        title="Copy to clipboard"
                        aria-label="Copy step code"
                      >
                        {copiedId === stepval.id ? (
                          <Check size={14} className="text-purple-300" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
