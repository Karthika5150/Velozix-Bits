"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./interactive-ascii-face.module.css";

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
    const { color, imageClarity, mouseSpeed } = settings.current;
    const interaction = pointer.current;
    const response = Math.min(1.8, Math.max(0.3, mouseSpeed || 1));
    const follow = 1 - Math.exp(-delta * 0.011 * response);
    offsetX += ((interaction?.offset.x ?? 0) - offsetX) * follow;
    offsetY += ((interaction?.offset.y ?? 0) - offsetY) * follow;
    const left = (width - portraitWidth) / 2 + offsetX;
    const top = (height - portraitHeight) / 2 + offsetY;

    context.globalAlpha = 1;
    context.clearRect(0, 0, width, height);
    const mask = image?.tones;
    context.fillStyle = color;
    context.font = "6px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";

    for (let x = CELL_WIDTH / 2, column = 0; x < width; x += CELL_WIDTH, column++) {
      const speed = 42 + (column * 17 % 28);
      const trail = 160 + (column * 41 % 66);
      const cycle = trail + 72 + (column * 13 % 45);
      const travel = rainTime * speed / 1000 + column * 137;
      const head = travel % cycle;
      const traveledRows = Math.floor(travel / CELL_HEIGHT);
      const maskX = Math.floor((x - left) / portraitWidth * MASK_WIDTH);

      for (let y = CELL_HEIGHT / 2, row = 0; y < height; y += CELL_HEIGHT, row++) {
        const maskY = Math.floor((y - top) / portraitHeight * MASK_HEIGHT);
        const tone = mask && maskX >= 0 && maskX < MASK_WIDTH && maskY >= 0 && maskY < MASK_HEIGHT
          ? mask[maskY * MASK_WIDTH + maskX]
          : 0;
        const distance = (head - (y % cycle) + cycle) % cycle;
        const strength = Math.max(0, 1 - distance / trail) ** 1.25;
        const glyphRow = row - traveledRows;
        const seed = Math.imul(column + 1, 374761393) ^ Math.imul(glyphRow, 668265263);
        const imageIndex = maskX >= 0 && maskX < MASK_WIDTH && maskY >= 0 && maskY < MASK_HEIGHT
          ? maskY * MASK_WIDTH + maskX
          : -1;
        const belongsToUpload = imageIndex >= 0 && image?.foreground?.[imageIndex] === 1;
        const belongsToPortrait = imageIndex >= 0 && (belongsToUpload || (!image?.foreground && tone > 0.035));
        // Every non-transparent upload pixel participates, so no part of the
        // submitted image disappears from the static Matrix portrait.
        const imageTone = belongsToUpload
          ? Math.min(1, 0.36 + tone * Math.max(0.5, imageClarity))
          : Math.min(1, tone * Math.max(0.5, imageClarity));
        if (!belongsToPortrait && strength < 0.09) continue;
        const visualTone = belongsToPortrait ? imageTone : strength * 0.78;
        const group = Math.round(visualTone * (GLYPHS.length - 1));
        const glyphs = GLYPHS[group];
        const glyph = ((seed ^ (seed >>> 13) ^ Math.imul(traveledRows, 1274126177)) >>> 0) % glyphs.length;
        context.globalAlpha = belongsToPortrait
          ? Math.min(1, 0.28 + imageTone * 0.72)
          : Math.min(0.7, 0.06 + strength * 0.62);
        context.fillText(glyphs[glyph], x, y);
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
  maxOffset = 22,
  color = "#60ed83",
  lineSpeed = 1,
  mouseSpeed = 1,
  imageClarity = 1.35,
  className = "",
}) {
  const fieldRef = useRef(null);
  const portraitRef = useRef(null);
  const pointer = useRef(null);
  const settings = useRef({ color, imageClarity, lineSpeed, mouseSpeed });
  const renderer = useRef(undefined);
  const source = src ?? REFERENCE;
  const [result, setResult] = useState();
  const current = result?.source === source ? result : undefined;
  const mask = current?.mask;

  useEffect(() => {
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
  }, [source]);

  useEffect(() => {
    if (fieldRef.current && portraitRef.current) {
      const animation = animateRain(fieldRef.current, portraitRef.current, mask, pointer, settings);
      renderer.current = animation;
      return () => {
        animation?.dispose();
        renderer.current = undefined;
      };
    }
  }, [mask]);

  useEffect(() => {
    settings.current = { color, imageClarity, lineSpeed, mouseSpeed };
    renderer.current?.paint();
  }, [color, imageClarity, lineSpeed, mouseSpeed]);

  function movePortrait(event) {
    if (!followPointer || event.pointerType === "touch") return;
    const bounds = fieldRef.current?.getBoundingClientRect();
    if (!bounds?.width || !bounds.height) return;
    const offset = Number.isFinite(maxOffset) ? Math.max(0, maxOffset) : 22;
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    pointer.current = { position: { x, y }, offset: { x: (x / bounds.width * 2 - 1) * offset, y: (y / bounds.height * 2 - 1) * offset } };
  }

  return (
    <div
      className={[styles.stage, className].filter(Boolean).join(" ")}
      onPointerMove={movePortrait}
      onPointerLeave={() => { pointer.current = null; }}
    >
      <canvas ref={fieldRef} className={styles.field} role={mask ? "img" : undefined}
        aria-label={mask ? alt : undefined} aria-hidden={!mask} />
      <div
        ref={portraitRef}
        className={styles.frame}
      >
        {!mask && (
          <p className={styles.status} role="status">
            {current ? "Couldn’t read this image. Try a PNG, JPEG, or WebP." : "Converting image to ASCII…"}
          </p>
        )}
      </div>
    </div>
  );
}
