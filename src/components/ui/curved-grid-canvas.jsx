"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * CurvedGridCanvas / FullpageCurvedGrid
 * Full-page 50x50 interactive square grid canvas:
 * - 50px x 50px grid across entire viewport
 * - Hover / Drag reveals 50x50 squares with dynamic morphing
 * - Consecutive squares have their center points curved and joined together with smooth bezier arcs
 * - Dynamically syncs with active theme accent color (--brand-accent)
 */
export function CurvedGridCanvas({
  cellSize = 50,
  accentColor: propAccentColor,
  fadeSpeed = 0.65, // energy decay per second
  className = "",
}) {
  const canvasRef = useRef(null);
  const activeSquaresRef = useRef(new Map());
  const trailRef = useRef([]); // ordered list of recent nodes for center curve connections
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    isDown: false,
    lastCol: -1,
    lastRow: -1,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let lastTime = performance.now();

    // Helper to get active accent color & RGB from document
    const getAccentTheme = () => {
      if (propAccentColor) {
        return {
          hex: propAccentColor,
          rgb: "168, 85, 247",
        };
      }
      if (typeof window === "undefined") {
        return { hex: "#a855f7", rgb: "168, 85, 247" };
      }
      const style = getComputedStyle(document.documentElement);
      const hex = style.getPropertyValue("--brand-accent").trim() || "#a855f7";
      const rgb = style.getPropertyValue("--brand-accent-rgb").trim() || "168, 85, 247";
      return { hex, rgb };
    };

    // Handle high DPI resizing
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Pointer event listeners on window so dragging / hovering works everywhere
    const handlePointerMove = (e) => {
      const mx = e.clientX;
      const my = e.clientY;
      mouseRef.current.x = mx;
      mouseRef.current.y = my;

      const col = Math.floor(mx / cellSize);
      const row = Math.floor(my / cellSize);

      if (col < 0 || row < 0) return;

      const isNewSquare =
        col !== mouseRef.current.lastCol || row !== mouseRef.current.lastRow;

      const key = `${col},${row}`;
      const cx = col * cellSize + cellSize / 2;
      const cy = row * cellSize + cellSize / 2;

      // Calculate pull offset when dragging or hovering
      const pullFactor = mouseRef.current.isDown ? 0.35 : 0.18;
      const effCx = cx + (mx - cx) * pullFactor;
      const effCy = cy + (my - cy) * pullFactor;

      const now = performance.now();

      // Update or create active square
      activeSquaresRef.current.set(key, {
        col,
        row,
        cx,
        cy,
        effCx,
        effCy,
        energy: 1.0,
        isDown: mouseRef.current.isDown,
        updatedAt: now,
      });

      // If moved into a new square, link its center point to recent trail
      if (isNewSquare) {
        mouseRef.current.lastCol = col;
        mouseRef.current.lastRow = row;

        trailRef.current.push({
          col,
          row,
          cx,
          cy,
          effCx,
          effCy,
          key,
          energy: 1.0,
          isDown: mouseRef.current.isDown,
          createdAt: now,
        });

        // Limit maximum trail points to keep it super fast
        if (trailRef.current.length > 40) {
          trailRef.current.shift();
        }
      } else {
        // Update the latest point's effective center
        const lastNode = trailRef.current[trailRef.current.length - 1];
        if (lastNode && lastNode.key === key) {
          lastNode.effCx = effCx;
          lastNode.effCy = effCy;
          lastNode.energy = 1.0;
        }
      }
    };

    const handlePointerDown = (e) => {
      mouseRef.current.isDown = true;
      handlePointerMove(e);
    };

    const handlePointerUp = () => {
      mouseRef.current.isDown = false;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    // Main 60FPS Render Loop
    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const cols = Math.ceil(w / cellSize);
      const rows = Math.ceil(h / cellSize);

      const { hex: accentColor, rgb: accentRgb } = getAccentTheme();

      // Clear full canvas
      ctx.clearRect(0, 0, w, h);

      // 1. Draw subtle ambient 50x50 grid across full page
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        const x = c * cellSize;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let r = 0; r <= rows; r++) {
        const y = r * cellSize;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // Tiny corner tick marks at intersections for technical aesthetic
      ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
      for (let c = 0; c <= cols; c += 2) {
        for (let r = 0; r <= rows; r += 2) {
          ctx.fillRect(c * cellSize - 1, r * cellSize - 1, 2, 2);
        }
      }

      // 2. Decay energies of active squares
      for (const [key, sq] of activeSquaresRef.current.entries()) {
        sq.energy -= dt * fadeSpeed;
        if (sq.energy <= 0) {
          activeSquaresRef.current.delete(key);
        }
      }

      // Decay trail nodes
      for (let i = trailRef.current.length - 1; i >= 0; i--) {
        const node = trailRef.current[i];
        node.energy -= dt * fadeSpeed;
        if (node.energy <= 0) {
          trailRef.current.splice(i, 1);
        }
      }

      // 3. Draw active 50x50 squares (morphing with drag / pull)
      for (const sq of activeSquaresRef.current.values()) {
        const x0 = sq.col * cellSize;
        const y0 = sq.row * cellSize;
        const pad = 2;
        const size = cellSize - pad * 2;

        const alpha = Math.min(Math.max(sq.energy, 0), 1);
        const radius = sq.isDown ? 12 : 6;

        ctx.save();
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(x0 + pad, y0 + pad, size, size, radius);
        } else {
          ctx.rect(x0 + pad, y0 + pad, size, size);
        }

        // Glowing stroke & glass fill
        ctx.strokeStyle = `rgba(${accentRgb}, ${alpha * 0.85})`;
        ctx.lineWidth = sq.isDown ? 2 : 1.5;
        ctx.fillStyle = `rgba(${accentRgb}, ${alpha * 0.14})`;
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = sq.isDown ? 16 : 10;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      // 4. DRAW THE CURVED LINES JOINING THE CENTER POINTS OF CONSECUTIVE SQUARES
      // "2 swure oda center point curve aagi join aa theriyanum"
      const trail = trailRef.current;
      if (trail.length >= 2) {
        for (let i = 1; i < trail.length; i++) {
          const p1 = trail[i - 1];
          const p2 = trail[i];

          // Average energy between the two squares
          const curveEnergy = Math.min(p1.energy, p2.energy);
          if (curveEnergy <= 0.05) continue;

          // Midpoint between center points
          const mx = (p1.effCx + p2.effCx) / 2;
          const my = (p1.effCy + p2.effCy) / 2;

          // Organic perpendicular curve displacement
          const dx = p2.effCx - p1.effCx;
          const dy = p2.effCy - p1.effCy;
          const dist = Math.hypot(dx, dy);

          // Alternating curve bow or drag pull
          const sign = i % 2 === 0 ? 1 : -1;
          const bowFactor = (p2.isDown ? 22 : 15) * sign;
          const nx = (-dy / (dist || 1)) * bowFactor;
          const ny = (dx / (dist || 1)) * bowFactor;

          const ctrlX = mx + nx;
          const ctrlY = my + ny;

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(p1.effCx, p1.effCy);
          ctx.quadraticCurveTo(ctrlX, ctrlY, p2.effCx, p2.effCy);

          ctx.strokeStyle = `rgba(${accentRgb}, ${curveEnergy * 0.95})`;
          ctx.lineWidth = (p2.isDown ? 3.5 : 2.5) * curveEnergy;
          ctx.lineCap = "round";
          ctx.shadowColor = accentColor;
          ctx.shadowBlur = 18;
          ctx.stroke();
          ctx.restore();
        }
      }

      // 5. Draw luminous center beads / nodes at each square's center point
      for (const sq of activeSquaresRef.current.values()) {
        const alpha = Math.min(Math.max(sq.energy, 0), 1);
        ctx.save();

        // Outer glowing halo
        ctx.beginPath();
        ctx.arc(sq.effCx, sq.effCy, 6 * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRgb}, ${alpha * 0.4})`;
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = 14;
        ctx.fill();

        // Inner bright white core bead
        ctx.beginPath();
        ctx.arc(sq.effCx, sq.effCy, 3 * alpha, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [cellSize, propAccentColor, fadeSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 w-full h-full ${className}`}
      style={{
        display: "block",
      }}
    />
  );
}

export default CurvedGridCanvas;
