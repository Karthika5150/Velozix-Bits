"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      lerp: 0.08,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    // Animation frame driving loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Watch DOM mutations and size changes so Lenis recalculates page limit dynamically
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    if (typeof document !== "undefined" && document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // When route changes, recalculate height and scroll immediately to top
  useEffect(() => {
    if (!lenisRef.current) return;

    // Reset scroll to top on page change
    lenisRef.current.scrollTo(0, { immediate: true });

    // Allow Next.js DOM to commit, then resize Lenis bounds
    const timeout = setTimeout(() => {
      lenisRef.current?.resize();
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return <>{children}</>;
}
