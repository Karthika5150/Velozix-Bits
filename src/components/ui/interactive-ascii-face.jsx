"use client";

import React, { useEffect, useRef, useState } from "react";
import rawStyles from "./interactive-ascii-face.module.css";

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
  cursor: crosshair;
  user-select: none;
  touch-action: none;
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
  opacity: 0.75;
}
.adaptive-ascii-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at center, transparent 60%, rgba(0, 0, 0, 0.8) 100%);
  border-radius: 1rem;
  z-index: 11;
}
.adaptive-ascii-frame {
  position: relative;
  width: min(100%, 34rem, 65svh);
  aspect-ratio: 500 / 610;
  pointer-events: none;
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

const REFERENCE = "/images/ascii-portrait.png";
const GLYPHS = [".:;|`", "il/+=:", "xovucz", "7TZH28", "NWM#@%"];
// High-resolution luminance sampling keeps uploaded facial features readable
// instead of reducing the portrait to a handful of broad glyph blocks.
const MASK_WIDTH = 360;
const MASK_HEIGHT = 432;
const CELL_WIDTH = 5;
const CELL_HEIGHT = 7;

function sampleImage(image, cropReference) {
  const canvas = document.createElement("canvas");
  canvas.width = MASK_WIDTH;
  canvas.height = MASK_HEIGHT;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas unavailable");

  const sourceHeight = cropReference ? 610 : image.naturalHeight;
  // Uploaded photos are cover-cropped to the portrait window. A contained
  // landscape image makes the person too small to read as a portrait.
  const scale = cropReference
    ? Math.min(500 / image.naturalWidth, 610 / sourceHeight)
    : Math.max(500 / image.naturalWidth, 610 / sourceHeight);
  const width = image.naturalWidth * scale * MASK_WIDTH / 500;
  const height = sourceHeight * scale * MASK_HEIGHT / 610;
  const left = (MASK_WIDTH - width) / 2;
  const top = (MASK_HEIGHT - height) / 2;
  context.drawImage(image, 0, 0, image.naturalWidth, sourceHeight, left, top, width, height);
  const { data } = context.getImageData(0, 0, MASK_WIDTH, MASK_HEIGHT);

  const tones = Float32Array.from({ length: MASK_WIDTH * MASK_HEIGHT }, (_, i) => {
    const index = i * 4;
    const luminance = (0.2126 * data[index] + 0.7152 * data[index + 1] + 0.0722 * data[index + 2]) / 255;
    return luminance * data[index + 3] / 255;
  });

  const visibleTones = Array.from(tones).filter((_, i) => data[i * 4 + 3] >= 245).sort((a, b) => a - b);
  const shadow = Math.min(0.10, (visibleTones[Math.floor(visibleTones.length * 0.08)] ?? 0) * 0.8);
  const highlight = Math.max(0.48, visibleTones[Math.floor(visibleTones.length * 0.92)] ?? 1);

  const detailed = tones.map((tone, i) => {
    if (data[i * 4 + 3] === 0) return 0;
    const x = i % MASK_WIDTH;
    const neighbors = (
      (x > 0 ? tones[i - 1] : tone) + (x < MASK_WIDTH - 1 ? tones[i + 1] : tone) +
      (tones[i - MASK_WIDTH] ?? tone) + (tones[i + MASK_WIDTH] ?? tone)
    ) / 4;
    const detailedTone = tone + (tone - neighbors) * 0.45;
    if (cropReference) return Math.min(1, Math.max(0, (detailedTone - 0.045) / 0.91)) ** 0.55;
    return Math.min(1, Math.max(0, (detailedTone - shadow) / (highlight - shadow))) ** 0.75;
  });

  const foreground = cropReference
    ? undefined
    : Uint8Array.from(data, (_, index) => data[index * 4 + 3] > 12 ? 1 : 0);
  return { tones: detailed, foreground };
}

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

function animateRain(canvas, portrait, image, pointer, settings) {
  const context = canvas.getContext("2d");
  if (!context) return;

  let renderWidth = 1;
  let renderHeight = 1;
  let rainTime = 0;
  let frame = 0;
  let lastPaint = -Infinity;
  let offsetX = 0;
  let offsetY = 0;

  function paint(delta = 1000 / 60) {
    if (!context) return;
    const width = renderWidth;
    const height = renderHeight;
    const portraitWidth = portrait.offsetWidth;
    const portraitHeight = portrait.offsetHeight;
    const {
      color,
      dropType = "characters",
      gradient,
      characters,
      dropSize = 7,
      rainOnly = false,
      imageClarity,
      mouseSpeed,
    } = settings.current;

    const interaction = pointer.current;
    const response = Math.min(1.2, Math.max(0.2, (mouseSpeed || 0.8) * 0.6));
    const follow = 1 - Math.exp(-delta * 0.007 * response);
    offsetX += ((interaction?.offset.x ?? 0) - offsetX) * follow;
    offsetY += ((interaction?.offset.y ?? 0) - offsetY) * follow;
    const left = (width - portraitWidth) / 2 + offsetX;
    const top = (height - portraitHeight) / 2 + offsetY;

    context.globalAlpha = 1;
    context.clearRect(0, 0, width, height);
    const mask = rainOnly ? null : image?.tones;

    // Sizing: dropSize controls cell dimensions and font size
    const sizeVal = Math.max(4, Math.min(24, Number(dropSize) || 7));
    const cellW = Math.max(3, Math.round(sizeVal * 0.72));
    const cellH = sizeVal;
    const fontSize = Math.max(4, Math.round(sizeVal * 0.88));

    context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
    context.textAlign = "center";
    context.textBaseline = "middle";

    const customChars =
      typeof characters === "string" && characters.length > 0 ? characters : null;

    const parsedGradient =
      Array.isArray(gradient) && gradient.length > 0
        ? gradient.map((c) => parseColor(c))
        : null;

    const mouseX = interaction?.position?.x;
    const mouseY = interaction?.position?.y;
    const repulsionRadius = 45 * Math.min(1.4, Math.max(0.3, mouseSpeed || 0.8));

    for (let x = cellW / 2, column = 0; x < width; x += cellW, column++) {
      const speed = 42 + ((column * 17) % 28);
      const trail = 160 + ((column * 41) % 66);
      const cycle = trail + 72 + ((column * 13) % 45);
      const travel = (rainTime * speed) / 1000 + column * 137;
      const head = travel % cycle;
      const traveledRows = Math.floor(travel / cellH);
      const maskX = Math.floor(((x - left) / portraitWidth) * MASK_WIDTH);

      for (let y = cellH / 2, row = 0; y < height; y += cellH, row++) {
        const maskY = Math.floor(((y - top) / portraitHeight) * MASK_HEIGHT);
        const tone =
          mask && maskX >= 0 && maskX < MASK_WIDTH && maskY >= 0 && maskY < MASK_HEIGHT
            ? mask[maskY * MASK_WIDTH + maskX]
            : 0;

        const distance = (head - (y % cycle) + cycle) % cycle;
        const strength = Math.max(0, 1 - distance / trail) ** 1.25;
        const glyphRow = row - traveledRows;
        const seed = Math.imul(column + 1, 374761393) ^ Math.imul(glyphRow, 668265263);

        const imageIndex =
          maskX >= 0 && maskX < MASK_WIDTH && maskY >= 0 && maskY < MASK_HEIGHT
            ? maskY * MASK_WIDTH + maskX
            : -1;

        const belongsToUpload =
          !rainOnly && imageIndex >= 0 && image?.foreground?.[imageIndex] === 1;
        const belongsToPortrait =
          !rainOnly &&
          imageIndex >= 0 &&
          (belongsToUpload || (!image?.foreground && tone > 0.035));

        const imageTone = belongsToUpload
          ? Math.min(1, 0.36 + tone * Math.max(0.5, imageClarity))
          : Math.min(1, tone * Math.max(0.5, imageClarity));

        if (!belongsToPortrait && strength < 0.08) continue;
        const visualTone = belongsToPortrait ? imageTone : strength * 0.78;

        // Choose character/glyph
        let glyphChar = "";
        if (customChars) {
          if (belongsToPortrait) {
            const charIdx = Math.min(
              customChars.length - 1,
              Math.floor(visualTone * customChars.length)
            );
            glyphChar = customChars[charIdx];
          } else {
            const glyphSeed =
              ((seed ^ (seed >>> 13) ^ Math.imul(traveledRows, 1274126177)) >>> 0) %
              customChars.length;
            glyphChar = customChars[glyphSeed];
          }
        } else {
          const group = Math.round(visualTone * (GLYPHS.length - 1));
          const glyphs = GLYPHS[group];
          const glyph =
            ((seed ^ (seed >>> 13) ^ Math.imul(traveledRows, 1274126177)) >>> 0) %
            glyphs.length;
          glyphChar = glyphs[glyph];
        }

        // Color & Gradient
        const dropRatio = Math.max(0, Math.min(1, distance / trail));
        if (belongsToPortrait) {
          context.fillStyle = color;
          context.globalAlpha = Math.min(1, 0.28 + imageTone * 0.72);
        } else {
          if (parsedGradient && parsedGradient.length >= 2) {
            context.fillStyle = interpolateGradient(dropRatio, parsedGradient);
          } else {
            context.fillStyle = color;
          }
          context.globalAlpha = Math.min(0.9, 0.08 + strength * 0.82);
        }

        // Cursor particle repulsion/dispersion (calm, gentle move)
        let drawX = x;
        let drawY = y;
        if (mouseX !== undefined && mouseY !== undefined) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.hypot(dx, dy);
          if (dist < repulsionRadius && dist > 0) {
            const push = (1 - dist / repulsionRadius) * 6 * Math.min(1.4, Math.max(0.3, mouseSpeed || 0.8));
            drawX += (dx / dist) * push;
            drawY += (dy / dist) * push;
          }
        }

        if (dropType === "lines") {
          const lineH = belongsToPortrait
            ? Math.max(3, cellH * (0.4 + visualTone * 0.9))
            : Math.max(4, cellH * (0.6 + strength * 1.5));
          const lineThickness = Math.max(1, Math.min(3, Math.round(cellW * 0.35)));

          context.beginPath();
          context.strokeStyle = context.fillStyle;
          context.lineWidth = lineThickness;
          context.lineCap = "round";
          context.moveTo(drawX, drawY - lineH / 2);
          context.lineTo(drawX, drawY + lineH / 2);
          context.stroke();
        } else {
          context.fillText(glyphChar, drawX, drawY);
        }
      }
    }
  }

  function tick(time) {
    const delta = Number.isFinite(lastPaint) ? Math.min(34, time - lastPaint) : 1000 / 60;
    rainTime += delta * Math.max(0, settings.current.lineSpeed ?? 1);
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
    paint();
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
  src,
  alt = "Human portrait formed from green ASCII characters",
  followPointer = true,
  maxOffset = 6,
  color = "#60ed83",
  dropType = "characters",
  gradient,
  characters,
  dropSize = 7,
  rainOnly = false,
  lineSpeed = 1,
  mouseSpeed = 0.8,
  imageClarity = 1.35,
  className = "",
}) {
  const fieldRef = useRef(null);
  const portraitRef = useRef(null);
  const pointer = useRef(null);
  const settings = useRef({
    color,
    dropType,
    gradient,
    characters,
    dropSize,
    rainOnly,
    imageClarity,
    lineSpeed,
    mouseSpeed,
  });
  const renderer = useRef(undefined);
  const source = src ?? REFERENCE;
  const [result, setResult] = useState();
  const current = result?.source === source ? result : undefined;
  const mask = current?.mask;

  useEffect(() => {
    if (rainOnly) return;
    const objectUrl = typeof source === "string" ? undefined : URL.createObjectURL(source);
    const image = new window.Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      try {
        setResult({ source, mask: sampleImage(image, source === REFERENCE) });
      } catch {
        setResult({ source });
      }
    };
    image.onerror = () => setResult({ source });
    image.src = objectUrl ?? String(source);

    return () => {
      image.onload = null;
      image.onerror = null;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [source, rainOnly]);

  useEffect(() => {
    if (fieldRef.current && portraitRef.current) {
      const animation = animateRain(fieldRef.current, portraitRef.current, mask, pointer, settings);
      renderer.current = animation;
      return () => {
        animation?.dispose();
        renderer.current = undefined;
      };
    }
  }, [mask, rainOnly]);

  useEffect(() => {
    settings.current = {
      color,
      dropType,
      gradient,
      characters,
      dropSize,
      rainOnly,
      imageClarity,
      lineSpeed,
      mouseSpeed,
    };
    renderer.current?.paint();
  }, [
    color,
    dropType,
    gradient,
    characters,
    dropSize,
    rainOnly,
    imageClarity,
    lineSpeed,
    mouseSpeed,
  ]);

  function movePortrait(event) {
    if (!followPointer || event.pointerType === "touch") return;
    const bounds = fieldRef.current?.getBoundingClientRect();
    if (!bounds?.width || !bounds.height) return;
    const offset = Number.isFinite(maxOffset) ? Math.max(0, maxOffset) : 6;
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    pointer.current = {
      position: { x, y },
      offset: {
        x: ((x / bounds.width) * 2 - 1) * offset,
        y: ((y / bounds.height) * 2 - 1) * offset,
      },
    };
  }

  return (
    <div
      className={[styles.stage, className].filter(Boolean).join(" ")}
      onPointerMove={movePortrait}
      onPointerLeave={() => {
        pointer.current = null;
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: EMBEDDED_ASCII_STYLES }} />
      <canvas
        ref={fieldRef}
        className={styles.field}
        role={mask && !rainOnly ? "img" : undefined}
        aria-label={mask && !rainOnly ? alt : undefined}
        aria-hidden={!mask || rainOnly}
      />
      <div ref={portraitRef} className={styles.frame}>
        {!mask && !rainOnly && (
          <p className={styles.status} role="status">
            {current
              ? "Couldn’t read this image. Try a PNG, JPEG, or WebP."
              : "Converting image to ASCII…"}
          </p>
        )}
      </div>
    </div>
  );
}
