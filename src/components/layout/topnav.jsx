"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Check, Copy } from "lucide-react";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function NavComponent() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText("npm i velozix-bits");
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const navLinks = [
    { name: "Overview", href: "/" },
    { name: "Documentation", href: "/installation" },
    { name: "Frameworks", href: "/installation/framework" },
    { name: "Components", href: "/installation/components/blob-banner" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50 flex items-center justify-between px-4 sm:px-8 border-b border-white/[0.08] bg-[#030712]/50 backdrop-blur-3xl backdrop-saturate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_12px_40px_-10px_rgba(0,0,0,0.6)] select-none">
      {/* iOS 26 / macOS Liquid Glass Specular Top Sheen */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {/* Brand logo */}
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="size-7 rounded-xl flex items-center justify-center text-white font-mono font-bold text-xs border border-white/25 backdrop-blur-xl transition-all duration-300 group-hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, var(--brand-accent, #a855f7) 0%, #3b0764 100%)",
              boxShadow:
                "0 0 16px var(--brand-accent-glow, rgba(168, 85, 247, 0.4)), inset 0 1px 1px rgba(255,255,255,0.4)",
            }}
          >
            V
          </div>
          <span className="text-white font-sans font-bold text-sm tracking-tight group-hover:text-purple-200 transition-colors">
            Velozix{" "}
            <span
              className="transition-colors duration-500"
              style={{ color: "var(--brand-accent, #a855f7)" }}
            >
              Bits
            </span>
          </span>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/[0.04] text-purple-200/90 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            v0.1.5
          </span>
        </Link>

        {/* Navigation links - Mac / iOS Frosted Pills */}
        <nav className="hidden md:flex items-center gap-1.5 pl-4 border-l border-white/10 font-mono">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/12 border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right actions: Quick Install Glass Capsule + GitHub Circle */}
      <div className="flex items-center gap-3">
        {/* Quick Install Glass Pill */}
        <button
          type="button"
          onClick={handleCopyInstall}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-200 text-xs font-mono text-zinc-300 hover:text-white cursor-pointer group"
          title="Click to copy install command"
        >
          <Terminal
            size={12}
            className="transition-colors duration-500"
            style={{ color: "var(--brand-accent, #a855f7)" }}
          />
          <span>npm i velozix-bits</span>
          {copied ? (
            <Check size={12} className="text-emerald-400 ml-1" />
          ) : (
            <Copy
              size={12}
              className="text-zinc-500 group-hover:text-zinc-300 ml-1 transition-colors"
            />
          )}
        </button>

        {/* GitHub Glass Circle */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="size-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-200"
          aria-label="GitHub Repository"
        >
          <GithubIcon size={15} />
        </a>
      </div>
    </header>
  );
}
