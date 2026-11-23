"use client";

import React, { useId, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Terminal, Package } from "lucide-react";

const managers = ["npm", "pnpm", "yarn", "bun"];

const getCommand = (manager, packages = "adaptive-ui", component, mode = "cli", dev = false) => {
  if (mode === "cli" && component) {
    if (manager === "npm") return `npx adaptive-ui add ${component}`;
    if (manager === "pnpm") return `pnpm dlx adaptive-ui add ${component}`;
    if (manager === "yarn") return `yarn dlx adaptive-ui add ${component}`;
    if (manager === "bun") return `bunx --bun adaptive-ui add ${component}`;
    return `npx adaptive-ui add ${component}`;
  }

  // Package mode
  const pkgName = packages || "adaptive-ui";
  if (manager === "npm") return `npm install ${dev ? "-D " : ""}${pkgName}`;
  if (manager === "pnpm") return `pnpm add ${dev ? "-D " : ""}${pkgName}`;
  if (manager === "yarn") return `yarn add ${dev ? "-D " : ""}${pkgName}`;
  if (manager === "bun") return `bun add ${dev ? "-D " : ""}${pkgName}`;
  return `npm install ${pkgName}`;
};

const STORAGE_KEY = "adaptive-ui:package-manager";
const listeners = new Set();
const read = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return managers.includes(stored) ? stored : "npm";
  } catch {
    return "npm";
  }
};
const choose = (manager) => {
  try {
    localStorage.setItem(STORAGE_KEY, manager);
  } catch {}
  listeners.forEach((listener) => listener());
};
const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export function InstallTabs({
  packages = "adaptive-ui",
  component,
  dev = false,
  className = "",
}) {
  const id = useId();
  const manager = useSyncExternalStore(subscribe, read, () => "npm");
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState(component ? "cli" : "package");

  const currentText = getCommand(manager, packages, component, mode, dev);

  function onKey(event, index) {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = managers[(index + step + managers.length) % managers.length];
    choose(next);
    document.getElementById(`${id}-${next}`)?.focus();
  }

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(currentText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {}
  }

  return (
    <div
      className={`w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950/90 shadow-2xl backdrop-blur-md ${className}`}
    >
      {/* Top Bar with Package Managers and Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-zinc-900/60 px-3 py-2">
        <div className="flex items-center gap-2">
          {/* Package Manager Buttons */}
          <div role="tablist" aria-label="Package manager" className="flex items-center gap-1">
            {managers.map((option, index) => {
              const isSelected = manager === option;
              return (
                <button
                  key={option}
                  id={`${id}-${option}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`${id}-panel`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => choose(option)}
                  onKeyDown={(event) => onKey(event, index)}
                  className={`relative flex cursor-pointer items-center gap-1 rounded-lg px-2.5 py-1 font-mono text-xs transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-emerald-400 ${
                    isSelected ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {/* Smooth sliding pill indicator between tabs */}
                  {isSelected && (
                    <motion.span
                      layoutId={`${id}-pill`}
                      aria-hidden
                      className="absolute inset-0 rounded-lg border border-white/15 bg-white/10 shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Mode toggle (CLI vs NPM package) if component is specified */}
          {component && (
            <div className="ml-2 hidden items-center rounded-lg border border-white/10 bg-black/40 p-0.5 sm:flex">
              <button
                type="button"
                onClick={() => setMode("cli")}
                className={`flex cursor-pointer items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-mono transition ${
                  mode === "cli"
                    ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Terminal className="size-3" />
                CLI
              </button>
              <button
                type="button"
                onClick={() => setMode("package")}
                className={`flex cursor-pointer items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-mono transition ${
                  mode === "package"
                    ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Package className="size-3" />
                NPM
              </button>
            </div>
          )}
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={copyCommand}
          className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300 transition hover:bg-white/15 hover:text-white"
          aria-label="Copy install command"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <span className="text-zinc-400">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Command Display with Left-To-Right Animated Motion */}
      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-${manager}`}
        className="relative overflow-hidden px-4 py-3.5 font-mono text-xs sm:text-sm bg-black/40"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${manager}-${mode}`}
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 28 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex items-center gap-2.5 whitespace-nowrap text-zinc-200"
          >
            <span className="select-none font-bold text-emerald-400">$</span>
            <span className="tracking-wide">{currentText}</span>
          </motion.div>
        </AnimatePresence>
        <span role="status" className="sr-only">
          {copied ? "Copied" : ""}
        </span>
      </div>
    </div>
  );
}

export default InstallTabs;
