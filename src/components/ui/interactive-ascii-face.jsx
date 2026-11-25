"use client";

import React, { useEffect, useRef, useState } from "react";
import rawStyles from "./interactive-ascii-face.module.css";
import { AsciiObject } from "./ascii-object";

const fallbackStyles = {
  stage: "adaptive-ascii-stage",
  field: "adaptive-ascii-field",
  scanlines: "adaptive-ascii-scanlines",
  vignette: "adaptive-ascii-vignette",
  frame: "adaptive-ascii-frame",
  status: "adaptive-ascii-status",
};

const styles = rawStyles && Object.keys(rawStyles).length > 0 ? rawStyles : fallbackStyles;

const EMBEDDED_ASCII_STYLES = `
.adaptive-ascii-stage {
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  width: 100%;
  min-height: clamp(28rem, 82svh, 58rem);
  overflow: hidden;
  padding: clamp(1rem, 4vw, 2.5rem);
  border: 1px solid #163620;
  border-radius: 1rem;
  background: radial-gradient(ellipse at center, #06190d 0%, #010603 85%);
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.9), 0 20px 45px rgba(0, 0, 0, 0.7);
  cursor: grab;
  user-select: none;
  touch-action: none;
}
.adaptive-ascii-stage:active {
  cursor: grabbing;
}
.adaptive-ascii-field {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.adaptive-ascii-scanlines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.32) 50%);
  background-size: 100% 4px;
  z-index: 10;
  opacity: 0.65;
}
.adaptive-ascii-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at center, transparent 60%, rgba(0, 0, 0, 0.8) 100%);
  border-radius: 1rem;
  z-index: 11;
}
.adaptive-ascii-status {
  display: grid;
  height: 100%;
  place-content: center;
  padding: 1rem;
  color: #5cfc87;
  text-shadow: 0 0 8px rgba(92, 252, 135, 0.5);
  font: 0.9rem/1.5 ui-monospace, monospace;
  text-align: center;
}
`;

const GLYPHS = [".:;|`", "il/+=:", "xovucz", "7TZH28", "NWM#@%"];

const DEFAULT_MODELS = {
  ant: "procedural:ant",
  "torus-knot": "procedural:torus-knot",
  knot: "procedural:torus-knot",
  torus: "procedural:torus-knot",
  face: "procedural:face",
  duck: "procedural:duck",
  crystal: "procedural:crystal",
  drone: "procedural:drone",
  monolith: "procedural:monolith",
  bolt: "procedural:crystal",
  logo: "procedural:ant",
};

function parseColor(c, fallback = [92, 252, 135]) {
  if (!c || typeof c !== "string") return fallback;
  const clean = c.replace("#", "").trim();
  if (clean.length === 3) {
    return [
      parseInt(clean[0] + clean[0], 16),
      parseInt(clean[1] + clean[1], 16),
      parseInt(clean[2] + clean[2], 16),
    ];
  }
  if (clean.length === 6) {
    return [
      parseInt(clean.slice(0, 2), 16),
      parseInt(clean.slice(2, 4), 16),
      parseInt(clean.slice(4, 6), 16),
    ];
  }
  return fallback;
}

function interpolateGradient(ratio, stops) {
  if (!stops || stops.length === 0) return null;
  if (stops.length === 1) return `rgb(${stops[0][0]}, ${stops[0][1]}, ${stops[0][2]})`;
  const segment = 1 / (stops.length - 1);
  const index = Math.min(stops.length - 2, Math.floor(ratio / segment));
  const localT = (ratio - index * segment) / segment;
  const c0 = stops[index];
  const c1 = stops[index + 1];
  const r = Math.round(c0[0] + (c1[0] - c0[0]) * localT);
  const g = Math.round(c0[1] + (c1[1] - c0[1]) * localT);
  const b = Math.round(c0[2] + (c1[2] - c0[2]) * localT);
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Matrix Rain Canvas Overlay (Active in "face-rain" and "rain" modes)
 * Authentic vanishing stream: as each drop moves downward, the top/earlier
 * characters progressively fade and disappear (first letters hide as the drop advances).
 */
function animateRainOverlay(canvas, pointer, settings) {
  const context = canvas.getContext("2d");
  if (!context) return;

  let renderWidth = 1;
  let renderHeight = 1;
  let frame = 0;
  let lastPaint = -Infinity;

  let columns = [];

  function initColumns(width, height, cellW, cellH) {
    const colCount = Math.max(1, Math.floor(width / cellW));
    columns = [];
    for (let i = 0; i < colCount; i++) {
      const trailRows = 12 + ((i * 7) % 14); // 12 to 26 characters
      const speed = 75 + ((i * 31) % 110); // fall speed
      const x = i * cellW + cellW / 2;
      // Stagger drops across and above canvas
      const headY = -Math.random() * (height * 1.5) - trailRows * cellH;
      columns.push({
        x,
        headY,
        trailLength: trailRows * cellH,
        speed,
        mutationTick: Math.random() * 100,
      });
    }
  }

  function paint(delta = 1000 / 60) {
    if (!context) return;
    const width = renderWidth;
    const height = renderHeight;

    const {
      color = "#5cfc87",
      rainColor,
      mode = "face-rain",
      dropType = "characters",
      gradient,
      characters,
      dropSize = 8,
      mouseSpeed = 0.8,
    } = settings.current;

    context.globalAlpha = 1;
    context.clearRect(0, 0, width, height);

    if (mode === "face") return; // Pure 3D Object mode: clean studio without rain

    const activeRainColor = rainColor || color || "#5cfc87";
    const sizeVal = Math.max(4, Math.min(24, Number(dropSize) || 8));
    const cellW = Math.max(3, Math.round(sizeVal * 0.72));
    const cellH = sizeVal;
    const fontSize = Math.max(4, Math.round(sizeVal * 0.88));

    if (columns.length === 0) {
      initColumns(width, height, cellW, cellH);
    }

    context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
    context.textAlign = "center";
    context.textBaseline = "middle";

    const customChars = typeof characters === "string" && characters.length > 0 ? characters : null;
    const parsedGradient = Array.isArray(gradient) && gradient.length > 0 ? gradient.map((c) => parseColor(c)) : null;

    const mouseX = pointer.current?.position?.x;
    const mouseY = pointer.current?.position?.y;
    const repulsionRadius = 55 * Math.min(1.4, Math.max(0.3, mouseSpeed || 0.8));
    const speedMultiplier = Number(settings.current.speed ?? settings.current.lineSpeed ?? 1.0);
    const dt = delta / 1000;

    for (let c = 0; c < columns.length; c++) {
      const col = columns[c];
      col.headY += col.speed * dt * Math.max(0.1, speedMultiplier);
      col.mutationTick += delta;

      // When the tail drops past the bottom, respawn above the screen
      if (col.headY - col.trailLength > height) {
        const trailRows = 12 + ((c * 7) % 14);
        col.trailLength = trailRows * cellH;
        col.speed = 75 + ((c * 31) % 110);
        col.headY = -Math.random() * 180 - col.trailLength;
      }

      // Only draw rows within the active drop window [headY - trailLength, headY]
      // Any character above this window has disappeared/hidden (earlier letters hide as drop moves down)
      const startRow = Math.max(0, Math.floor((col.headY - col.trailLength) / cellH));
      const endRow = Math.min(Math.floor(height / cellH), Math.floor(col.headY / cellH));

      if (startRow > endRow) continue;

      for (let r = startRow; r <= endRow; r++) {
        const y = r * cellH + cellH / 2;
        const distFromHead = col.headY - y;
        if (distFromHead < 0 || distFromHead > col.trailLength) continue;

        const progress = 1 - distFromHead / col.trailLength; // 1.0 at head, 0.0 at tail

        // Hybrid mode: fade center area to let the 3D model shine
        let densityFactor = 1.0;
        if (mode === "face-rain") {
          const dxCenter = Math.abs(col.x - width / 2) / (width * 0.35);
          const dyCenter = Math.abs(y - height / 2) / (height * 0.35);
          if (dxCenter < 1 && dyCenter < 1) {
            densityFactor = 0.35;
          }
        }

        let drawX = col.x;
        let drawY = y;

        if (mouseX !== undefined && mouseY !== undefined) {
          const dx = col.x - mouseX;
          const dy = y - mouseY;
          const dist = Math.hypot(dx, dy);
          if (dist < repulsionRadius && dist > 0) {
            const push = (1 - dist / repulsionRadius) * 6 * Math.min(1.4, Math.max(0.3, mouseSpeed || 0.8));
            drawX += (dx / dist) * push;
            drawY += (dy / dist) * push;
          }
        }

        // Mutation seed: characters slowly flicker like real Matrix code
        const mutateCycle = Math.floor(col.mutationTick / 120);
        const rainSeed = Math.imul(c + 1, 374761393) ^ Math.imul(r + mutateCycle, 668265263);

        let rainChar = "";
        if (customChars) {
          const glyphSeed = ((rainSeed ^ (rainSeed >>> 13)) >>> 0) % customChars.length;
          rainChar = customChars[glyphSeed];
        } else {
          const group = Math.min(GLYPHS.length - 1, Math.floor(progress * GLYPHS.length));
          const glyphs = GLYPHS[group];
          const glyph = ((rainSeed ^ (rainSeed >>> 13)) >>> 0) % glyphs.length;
          rainChar = glyphs[glyph];
        }

        const isHead = distFromHead < cellH * 1.15;

        if (isHead) {
          // Leading First Drop: Radiant White Glowing Head
          context.fillStyle = "#ffffff";
          context.shadowColor = activeRainColor;
          context.shadowBlur = 8;
          context.globalAlpha = 1.0 * densityFactor;
        } else {
          // Trailing Letters: Fading progressively upward until hidden
          context.shadowBlur = 0;
          if (parsedGradient && parsedGradient.length >= 2) {
            context.fillStyle = interpolateGradient(1 - progress, parsedGradient);
          } else {
            context.fillStyle = activeRainColor;
          }
          context.globalAlpha = Math.max(0.06, Math.min(0.85, (progress ** 1.3) * 0.85)) * densityFactor;
        }

        if (dropType === "lines") {
          const lineH = Math.max(4, cellH * (0.6 + progress * 1.5));
          context.beginPath();
          context.strokeStyle = context.fillStyle;
          context.lineWidth = Math.max(1, Math.min(3, Math.round(cellW * 0.35)));
          context.lineCap = "round";
          context.moveTo(drawX, drawY - lineH / 2);
          context.lineTo(drawX, drawY + lineH / 2);
          context.stroke();
        } else {
          context.fillText(rainChar, drawX, drawY);
        }
      }
    }
    context.shadowBlur = 0;
  }

  function tick(time) {
    const delta = Number.isFinite(lastPaint) ? Math.min(34, time - lastPaint) : 1000 / 60;
    paint(delta);
    lastPaint = time;
    frame = requestAnimationFrame(tick);
  }

  function resize() {
    if (!context) return;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    renderWidth = Math.max(1, Math.round(canvas.clientWidth));
    renderHeight = Math.max(1, Math.round(canvas.clientHeight));
    canvas.width = renderWidth * pixelRatio;
    canvas.height = renderHeight * pixelRatio;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.imageSmoothingEnabled = false;
    const sizeVal = Math.max(4, Math.min(24, Number(settings.current.dropSize) || 8));
    const cellW = Math.max(3, Math.round(sizeVal * 0.72));
    const cellH = sizeVal;
    initColumns(renderWidth, renderHeight, cellW, cellH);
    paint(16);
  }

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();
  frame = requestAnimationFrame(tick);

  return {
    paint,
    dispose: () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    },
  };
}

export function InteractiveAsciiFace({
  model = "ant", // "ant" (3D Cyber Ant) | "crystal" | "drone" | "monolith" | "duck" | "face"
  src,
  alt = "3D ASCII Object simulation",
  mode = "face", // "face" (pure 3D object) | "face-rain" | "rain"
  colored = true,
  color = "#5cfc87",
  rainColor,
  autoRotate = true,
  speed = 1.0,
  lineSpeed = 1.0,
  contrast = 1.5,
  imageClarity = 1.5,
  edgeContrast = 2.0,
  dropSize = 8,
  cellSize,
  characters,
  charset = "full",
  rainOnly = false,
  dropType = "characters",
  gradient,
  mouseSpeed = 0.8,
  className = "",
}) {
  const rainCanvasRef = useRef(null);
  const pointer = useRef({ position: null });
  const [modelLoaded, setModelLoaded] = useState(false);

  const effectiveMode = rainOnly ? "rain" : mode;
  const effectiveSpeed = Number(speed ?? lineSpeed ?? 1.0);
  const effectiveContrast = Number(contrast ?? imageClarity ?? 1.5);
  const effectiveCellSize = Number(cellSize ?? dropSize ?? 8);
  const effectiveRainColor = rainColor || color || "#5cfc87";

  const resolvedSrc = src ?? (DEFAULT_MODELS[model] || "procedural:ant");

  const settings = useRef({
    color,
    rainColor: effectiveRainColor,
    mode: effectiveMode,
    dropType,
    gradient,
    characters,
    dropSize: effectiveCellSize,
    speed: effectiveSpeed,
    mouseSpeed,
  });

  useEffect(() => {
    settings.current = {
      color,
      rainColor: effectiveRainColor,
      mode: effectiveMode,
      dropType,
      gradient,
      characters,
      dropSize: effectiveCellSize,
      speed: effectiveSpeed,
      mouseSpeed,
    };
  }, [color, effectiveRainColor, effectiveMode, dropType, gradient, characters, effectiveCellSize, effectiveSpeed, mouseSpeed]);

  useEffect(() => {
    if (effectiveMode !== "face" && rainCanvasRef.current) {
      const animation = animateRainOverlay(rainCanvasRef.current, pointer, settings);
      return () => animation?.dispose();
    }
  }, [effectiveMode]);

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    if (!bounds?.width || !bounds.height) return;
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    pointer.current.position = { x, y };
  }

  function handlePointerLeave() {
    pointer.current.position = null;
  }

  return (
    <div
      className={[styles.stage, className].filter(Boolean).join(" ")}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <style dangerouslySetInnerHTML={{ __html: EMBEDDED_ASCII_STYLES }} />

      {/* Official Canvas UI GPU AsciiObject Renderer (3D WebGL Scene + Glyph Atlas Shader) */}
      {effectiveMode !== "rain" && (
        <div className="absolute inset-0 z-0 h-full w-full">
          <AsciiObject
            src={resolvedSrc}
            cellSize={effectiveCellSize}
            cellAspect={0.6}
            charset={characters || charset}
            colored={colored}
            color={color}
            contrast={effectiveContrast}
            edgeContrast={edgeContrast}
            autoRotate={autoRotate}
            autoRotateSpeed={effectiveSpeed * 2.2}
            orbit={true}
            zoom={true}
            scale={model === "duck" ? 3.2 : model === "ant" ? 3.3 : model === "torus-knot" || model === "knot" ? 3.1 : model === "crystal" ? 3.0 : model === "drone" ? 3.0 : 2.8}
            highlight={colored ? "#066aff" : color}
            onLoad={() => setModelLoaded(true)}
            className="h-full w-full"
            style={{ position: "absolute", inset: 0 }}
          />
        </div>
      )}

      {/* Matrix Rainfall Canvas Overlay (in "face-rain" and "rain" modes) */}
      {effectiveMode !== "face" && (
        <canvas
          ref={rainCanvasRef}
          className={`${styles.field} pointer-events-none z-10`}
          role="img"
          aria-label={alt}
        />
      )}

      {/* CRT Scanlines and Screen Corner Vignette */}
      <div className={styles.scanlines} />
      <div className={styles.vignette} />
    </div>
  );
}
