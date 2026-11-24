"use client";

import React, { useEffect, useRef, useId, useState } from "react";

/**
 * GooeyGridCursor (formerly LorenzoGridCursor)
 * High-Performance Editorial Gooey Grid Cursor Interaction.
 *
 * Features:
 * 1. Scoped Coordinate Calibration (no offset inside cards or full-page).
 * 2. Supercover Orthogonal Traversal: Unbroken diagonal molten ribbons at any angle (90° to 270°).
 * 3. Constant Scale 1.0 (pure smooth opacity dissolve with zero zoom-in/out weirdness).
 * 4. SVG Gooey Metaball filter joins adjacent squares into organic molten shapes.
 */
export function GooeyGridCursor({
  color = "auto", // "auto" uses var(--brand-accent), or custom hex/rgb
  gridSize = 28, // balanced ~50px squares
  cellSize = 50, // default exact 50px x 50px square
  borderRadius = "20%", // clean squircle curvature
  trailDuration = 240, // fluid, responsive trail duration (ms)
  speed = 1.0, // speed multiplier
  blurAmount = 7.0, // liquid gooey merge strength
  blendMode = "screen", // vibrant neon luminosity on dark backgrounds
  showGridLines = true, // subtle background grid mesh
  gridLineColor = "rgba(255, 255, 255, 0.035)",
  zIndex = 30,
  className = "",
}) {
  const containerRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const rawId = useId();
  const filterId = `lorenzo-gooey-${rawId.replace(/:/g, "")}`;

  const lastPosRef = useRef({ bx: -1, by: -1 });
  const activeCellsRef = useRef(new Map());
  const [computedCellSize, setComputedCellSize] = useState(cellSize || 50);

  // Calculate actual pixel cell size based on container width
  useEffect(() => {
    const updateSize = () => {
      if (cellSize) {
        setComputedCellSize(cellSize);
      } else {
        const container = containerRef.current;
        const width = container ? container.clientWidth : window.innerWidth;
        const size = Math.floor(width / Math.max(gridSize, 1));
        setComputedCellSize(Math.max(size, 24));
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [cellSize, gridSize]);

  // Main Cursor Tracking with Scoped Coordinates & Unbroken Diagonal Connectivity
  useEffect(() => {
    const inner = cursorInnerRef.current;
    const container = containerRef.current;
    if (!inner || !container) return;

    const actualDuration = Math.max(100, Math.round(trailDuration / speed));
    const fadeDuration = Math.round(actualDuration * 1.0);

    // Resolve active color
    const getActiveColor = () => {
      if (color === "auto") {
        if (typeof window !== "undefined") {
          const style = getComputedStyle(document.documentElement);
          const brand = style.getPropertyValue("--brand-accent").trim();
          if (brand) return brand;
        }
        return "#a855f7";
      }
      return color;
    };

    // Appends a grid square at (bx, by) with 4px bleed to guarantee ZERO diagonal gaps
    const appendCursorBlock = (bx, by) => {
      if (bx < 0 || by < 0) return;

      const cellKey = `${bx},${by}`;
      const now = performance.now();

      // Avoid re-spawning only if already fresh in this cell (< 30ms)
      const lastSpawned = activeCellsRef.current.get(cellKey);
      if (lastSpawned && now - lastSpawned < 30) {
        return;
      }
      activeCellsRef.current.set(cellKey, now);

      const size = computedCellSize;
      const bleed = 4; // 4px overlap ensures adjacent and diagonal corner blocks merge as ONE
      const blockSize = size + bleed;

      const block = document.createElement("div");
      block.className = "lorenzo-cursor-block";

      const fillBg = getActiveColor();
      const radiusValue =
        typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;

      block.style.position = "absolute";
      block.style.left = `${bx * size - bleed / 2}px`;
      block.style.top = `${by * size - bleed / 2}px`;
      block.style.width = `${blockSize}px`;
      block.style.height = `${blockSize}px`;
      block.style.backgroundColor = fillBg;
      block.style.borderRadius = radiusValue;
      block.style.pointerEvents = "none";
      block.style.boxShadow = `0 0 16px ${fillBg}45`;

      // Constant Scale 1.0 (No weird zoom out / in) with pure opacity fade
      block.style.opacity = "1";
      block.style.willChange = "opacity";
      block.style.transition = `opacity ${fadeDuration}ms ease-out`;

      inner.appendChild(block);

      // Smooth exit: pure opacity fade without scaling
      const fadeTimer = setTimeout(() => {
        block.style.opacity = "0";
        const removeTimer = setTimeout(() => {
          if (block.parentNode === inner) {
            inner.removeChild(block);
          }
          activeCellsRef.current.delete(cellKey);
        }, fadeDuration);
        block._removeTimer = removeTimer;
      }, actualDuration);
      block._fadeTimer = fadeTimer;
    };

    // Generates an unbroken, continuous grid path connecting (x0, y0) to (x1, y1)
    // with orthogonal corner fills so diagonal movements have NO GAPS ("Onna Venum")!
    const fillConnectedPath = (x0, y0, x1, y1) => {
      const dx = Math.abs(x1 - x0);
      const dy = Math.abs(y1 - y0);
      const sx = x0 < x1 ? 1 : -1;
      const sy = y0 < y1 ? 1 : -1;

      let currX = x0;
      let currY = y0;
      let err = dx - dy;
      const maxSteps = Math.min(dx + dy + 2, 16);
      let steps = 0;

      while ((currX !== x1 || currY !== y1) && steps < maxSteps) {
        steps++;
        const e2 = 2 * err;

        if (e2 > -dy && e2 < dx) {
          // Diagonal step!
          // Fill the intermediate orthogonal cell to eliminate diagonal gap
          if (dx >= dy) {
            currX += sx;
            appendCursorBlock(currX, currY);
            currY += sy;
            appendCursorBlock(currX, currY);
          } else {
            currY += sy;
            appendCursorBlock(currX, currY);
            currX += sx;
            appendCursorBlock(currX, currY);
          }
          err += dx - dy;
        } else {
          if (e2 > -dy) {
            err -= dy;
            currX += sx;
          }
          if (e2 < dx) {
            err += dx;
            currY += sy;
          }
          appendCursorBlock(currX, currY);
        }
      }
    };

    // Accurate mouse listener subtracting container bounds (fixes mouse left -> square right bug!)
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Check if cursor is inside this container
      if (mx < 0 || my < 0 || mx > rect.width || my > rect.height) {
        lastPosRef.current.bx = -1;
        lastPosRef.current.by = -1;
        return;
      }

      const bx = Math.floor(mx / computedCellSize);
      const by = Math.floor(my / computedCellSize);

      const last = lastPosRef.current;

      if (last.bx === -1 || last.by === -1) {
        // Initial entry: spawn at exact cursor cell
        appendCursorBlock(bx, by);
      } else if (last.bx !== bx || last.by !== by) {
        // Unbroken connected path (diagonal gaps eliminated)
        fillConnectedPath(last.bx, last.by, bx, by);
      }

      lastPosRef.current.bx = bx;
      lastPosRef.current.by = by;
    };

    const handleMouseLeave = () => {
      lastPosRef.current.bx = -1;
      lastPosRef.current.by = -1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (inner) {
        while (inner.firstChild) {
          const child = inner.firstChild;
          if (child._fadeTimer) clearTimeout(child._fadeTimer);
          if (child._removeTimer) clearTimeout(child._removeTimer);
          inner.removeChild(child);
        }
      }
      activeCellsRef.current.clear();
    };
  }, [computedCellSize, color, borderRadius, trailDuration, speed]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{
        zIndex: zIndex,
        mixBlendMode: blendMode,
      }}
      aria-hidden="true"
    >
      {/* Editorial Background Grid Lines */}
      {showGridLines && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${gridLineColor} 1px, transparent 1px),
              linear-gradient(to bottom, ${gridLineColor} 1px, transparent 1px)
            `,
            backgroundSize: `${computedCellSize}px ${computedCellSize}px`,
          }}
        />
      )}

      {/* Clean SVG Gooey / Metaball Filter Definition */}
      <svg
        className="fixed top-0 left-0 w-0 h-0 pointer-events-none opacity-0 overflow-hidden"
        aria-hidden="true"
      >
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={blurAmount}
              result="blur"
            />
            {/* Alpha thresholding matrix curves adjacent squares together */}
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooeyFilter"
            />
            <feComposite in="SourceGraphic" in2="gooeyFilter" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Gooey Container where grid square blocks are dynamically appended */}
      <div
        ref={cursorInnerRef}
        className="w-full h-full relative"
        style={{
          filter: `url(#${filterId})`,
          WebkitFilter: `url(#${filterId})`,
        }}
      />
    </div>
  );
}

export const LorenzoGridCursor = GooeyGridCursor;
export default GooeyGridCursor;
