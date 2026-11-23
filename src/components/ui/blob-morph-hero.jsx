"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Presets                                                             */
/* Default visual layers are local project assets.                      */
/* ------------------------------------------------------------------ */
const BASE_IMG = "/images/banner-crypto-base.webp";
const EQUIPPED_IMG = "/images/banner-crypto-equipped.png";

export const DEFAULT_PRESETS = [
  {
    id: "lando-f1",
    title: "LANDO // F1",
    accentColor: "#d8ff1f",
    bgColor: "#fbfbf8",
    blobColor: "#e6e7df",
    topoColor: "#dcddd4",
    wireColor: "#9aa1a8",
    baseImage: BASE_IMG,
    equippedImage: EQUIPPED_IMG,
  },
  {
    id: "monza-stealth",
    title: "MONZA // STEALTH",
    accentColor: "#ff5a1f",
    bgColor: "#faf8f6",
    blobColor: "#ebe5df",
    topoColor: "#e0d8d0",
    wireColor: "#a39a93",
    baseImage: BASE_IMG,
    equippedImage: EQUIPPED_IMG,
  },
  {
    id: "stride-carbon",
    title: "STRIDE // CARBON",
    accentColor: "#22d3ee",
    bgColor: "#f7fafb",
    blobColor: "#e1e8ea",
    topoColor: "#d5dde0",
    wireColor: "#93a0a6",
    baseImage: BASE_IMG,
    equippedImage: EQUIPPED_IMG,
  },
];

/* ------------------------------------------------------------------ */
/* Topography (marching squares)                                       */
/* ------------------------------------------------------------------ */
const LEVELS = [-3.2, -2.6, -2, -1.4, -0.8, -0.2, 0.4, 1, 1.6, 2.2, 2.8, 3.4];

// edges: 0 = top, 1 = right, 2 = bottom, 3 = left
// index = tl*8 + tr*4 + br*2 + bl
const EDGES = [
  [],
  [[3, 2]],
  [[2, 1]],
  [[3, 1]],
  [[0, 1]],
  [[0, 1], [3, 2]],
  [[0, 2]],
  [[0, 3]],
  [[0, 3]],
  [[0, 2]],
  [[0, 3], [2, 1]],
  [[0, 1]],
  [[3, 1]],
  [[2, 1]],
  [[3, 2]],
  [],
];

function heightAt(x, y, t) {
  return (
    Math.sin(x * 1.1 + t * 0.55) +
    Math.sin(y * 1.4 - t * 0.45) +
    Math.sin((x + y) * 0.8 + t * 0.35) +
    Math.sin(Math.hypot(x - 2.5, y - 1.8) * 1.3 - t * 0.5)
  );
}

function drawTopography(ctx, W, H, t, color) {
  const cell = 16;
  const cols = Math.ceil(W / cell);
  const rows = Math.ceil(H / cell);
  const sc = 8 / Math.min(W, H);
  const stride = cols + 1;
  const grid = new Float32Array(stride * (rows + 1));

  for (let j = 0; j <= rows; j++) {
    for (let i = 0; i <= cols; i++) {
      grid[j * stride + i] = heightAt(i * cell * sc, j * cell * sc, t);
    }
  }

  ctx.clearRect(0, 0, W, H);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;

  for (let l = 0; l < LEVELS.length; l++) {
    const lvl = LEVELS[l];
    ctx.beginPath();
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const tl = grid[j * stride + i];
        const tr = grid[j * stride + i + 1];
        const br = grid[(j + 1) * stride + i + 1];
        const bl = grid[(j + 1) * stride + i];
        const idx =
          (tl > lvl ? 8 : 0) |
          (tr > lvl ? 4 : 0) |
          (br > lvl ? 2 : 0) |
          (bl > lvl ? 1 : 0);
        if (idx === 0 || idx === 15) continue;

        const x0 = i * cell;
        const y0 = j * cell;
        const segs = EDGES[idx];
        for (let s = 0; s < segs.length; s++) {
          const e = segs[s];
          let ax, ay, bx, by;
          for (let k = 0; k < 2; k++) {
            const edge = e[k];
            let px, py;
            if (edge === 0) {
              px = x0 + ((lvl - tl) / (tr - tl)) * cell;
              py = y0;
            } else if (edge === 1) {
              px = x0 + cell;
              py = y0 + ((lvl - tr) / (br - tr)) * cell;
            } else if (edge === 2) {
              px = x0 + ((lvl - bl) / (br - bl)) * cell;
              py = y0 + cell;
            } else {
              px = x0;
              py = y0 + ((lvl - tl) / (bl - tl)) * cell;
            }
            if (k === 0) {
              ax = px;
              ay = py;
            } else {
              bx = px;
              by = py;
            }
          }
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
        }
      }
    }
    ctx.stroke();
  }
}

/* ------------------------------------------------------------------ */
/* Metaballs                                                           */
/* ------------------------------------------------------------------ */
// positions are normalized (0..1) and follow Lissajous paths so the
// blobs sweep across the whole banner, not just the card.
const BLOBS = [
  { fx: 0.31, fy: 0.23, px: 0.0, py: 1.2, ax: 0.46, ay: 0.4, r: 0.13 },
  { fx: 0.22, fy: 0.37, px: 2.1, py: 0.4, ax: 0.44, ay: 0.42, r: 0.1 },
  { fx: 0.41, fy: 0.19, px: 4.0, py: 2.5, ax: 0.48, ay: 0.38, r: 0.15 },
  { fx: 0.27, fy: 0.33, px: 5.3, py: 3.9, ax: 0.45, ay: 0.41, r: 0.09 },
  { fx: 0.17, fy: 0.29, px: 1.0, py: 5.1, ax: 0.47, ay: 0.36, r: 0.12 },
  { fx: 0.36, fy: 0.44, px: 3.3, py: 0.9, ax: 0.42, ay: 0.43, r: 0.08 },
];

/* ------------------------------------------------------------------ */
/* Helmet HUD geometry: FRONT view, symmetric, viewBox 400x500         */
/* Every joint is tangent-continuous so the outline stays smooth.      */
/* ------------------------------------------------------------------ */
const MERIDIAN_SPREADS = [40, 80, 120, 160, 185];

const HELMET = {
  shell:
    "M200 60C285 60 335 120 338 210C340 290 322 350 292 392C270 420 238 432 200 432C162 432 130 420 108 392C78 350 60 290 62 210C65 120 115 60 200 60Z",
  visor:
    "M108 196C130 172 270 172 292 196C300 212 298 238 286 250C262 262 138 262 114 250C102 238 100 212 108 196Z",
  // wireframe mesh (clipped to the shell)
  latitudes: Array.from({ length: 11 }, (_, i) => {
    const y = 92 + i * 32;
    return `M40 ${y}C120 ${y + 18} 280 ${y + 18} 360 ${y}`;
  }),
  meridians: [
    "M200 60V432",
    ...MERIDIAN_SPREADS.flatMap((k) => [
      `M200 60C${200 - k} 120 ${200 - k} 380 200 432`,
      `M200 60C${200 + k} 120 ${200 + k} 380 200 432`,
    ]),
  ],
  // design lines: roof stripes, chin vents, nose bridge, neck/HANS
  details: [
    "M140 80C128 110 124 150 128 176",
    "M260 80C272 110 276 150 272 176",
    "M160 330C180 338 220 338 240 330",
    "M170 350C188 356 212 356 230 350",
    "M200 262V318",
  ],
};

// the helmet drawing only occupies this part of its 400x500 canvas
const HEAD_VB = { x: 58, y: 56, w: 284, h: 380 };

// where the head sits inside the subject image, as fractions (0..1) of the
// image box. Tune per image, or turn on the debugHead prop to see the box.
const DEFAULT_HEAD_BOX = { x: 0.28, y: 0.04, w: 0.44, h: 0.42 };

const VE = { vectorEffect: "non-scaling-stroke" };

// wipe timeline (seconds): reveal top->bottom, hold, hide top->bottom, 1s gap
const WIPE_REVEAL = 2.4;
const WIPE_HOLD = 1.6;
const WIPE_HIDE = 1.0;
const WIPE_GAP = 1.0;
const WIPE_CYCLE = WIPE_REVEAL + WIPE_HOLD + WIPE_HIDE + WIPE_GAP;
const easeInOut = (p) =>
  p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

const MASK_SCALE = 0.4;

function ensureSize(canvas, w, h) {
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export function BlobMorphHero({
  preset = "lando-f1",
  baseImage = "",
  equippedImage = "",
  blobMode = "roam",
  speed = 1.0,
  autoPlay = true,
  showTopography = true,
  showAmbientBlobs = true,
  showHud = true,
  showNextRace = false,
  accentColor,
  topoColor,
  bgColor,
  blobColor,
  wireColor,
  showTelemetry = false,
  showHeadline = false,
  autoFitHead = true,
  stretchHud = false,
  debugAlign = false,
  customSvgMarkup = "",
  headBox,
  debugHead = false,
  flipBase = false,
  flipEquipped = false,
  className = "",
  onProgressChange,
}) {
  const active = DEFAULT_PRESETS.find((p) => p.id === preset) || DEFAULT_PRESETS[0];
  const accent = accentColor || active.accentColor;
  const topo = topoColor || active.topoColor;
  const bg = bgColor || active.bgColor;
  const blobFill = blobColor || active.blobColor;
  const wire = wireColor || active.wireColor;
  const baseSrc = baseImage || active.baseImage;
  const equippedSrc = equippedImage || active.equippedImage;
  const headline = active.title.split("//")[0].trim();
  const [autoHead, setAutoHead] = useState(null);
  const hb = {
    ...DEFAULT_HEAD_BOX,
    ...(active.headBox || {}),
    ...((autoFitHead && autoHead) || {}),
    ...(headBox || {}),
  };

  const rootRef = useRef(null);
  const topoRef = useRef(null);
  const ambRef = useRef(null);
  const revRef = useRef(null);
  const spdRef = useRef(null);
  const covRef = useRef(null);
  const eqImgRef = useRef(null);
  const wipeRef = useRef(null);
  const scanRef = useRef(null);
  const uid = useId().replace(/:/g, "");
  const shellId = "bmh-shell-" + uid;
  const wipeId = "bmh-wipe-" + uid;

  const [size, setSize] = useState({ w: 0, h: 0 });
  const [aspect, setAspect] = useState(0.8);

  // subject box (where base image + reveal canvas live)
  const box = useMemo(() => {
    let h = size.h * 0.9;
    let w = h * aspect;
    if (w > size.w * 0.9) {
      w = size.w * 0.9;
      h = w / aspect;
    }
    return {
      x: Math.round((size.w - w) / 2),
      y: Math.round((size.h - h) / 2),
      w: Math.round(w),
      h: Math.round(h),
    };
  }, [size, aspect]);

  // keep latest values readable inside the animation loop
  const propsRef = useRef({});
  propsRef.current = {
    speed,
    flipEquipped,
    debugAlign,
    autoPlay,
    blobMode,
    showTopography,
    showAmbientBlobs,
    topo,
    accent,
    blobFill,
    onProgressChange,
  };
  const sizeRef = useRef(size);
  sizeRef.current = size;
  const boxRef = useRef(box);
  boxRef.current = box;

  // observe container size
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: Math.round(width), h: Math.round(height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // load images
  useEffect(() => {
    const im = new Image();
    im.onload = () => {
      if (im.naturalWidth && im.naturalHeight) {
        setAspect(im.naturalWidth / im.naturalHeight);
      }
    };
    im.src = baseSrc;
  }, [baseSrc]);

  useEffect(() => {
    const im = new Image();
    im.decoding = "async";
    setAutoHead(null);
    im.onload = () => {
      // The helmet cut-out is transparent around the helmet, so its opaque
      // bounding box is exactly where the head is. Needs a same-origin image
      // (e.g. from /public); remote images without CORS just skip this.
      try {
        const sw = Math.min(256, im.naturalWidth);
        const sh = Math.max(1, Math.round((sw * im.naturalHeight) / im.naturalWidth));
        const c = document.createElement("canvas");
        c.width = sw;
        c.height = sh;
        const cx = c.getContext("2d", { willReadFrequently: true });
        cx.drawImage(im, 0, 0, sw, sh);
        const px = cx.getImageData(0, 0, sw, sh).data;
        let x0 = sw, y0 = sh, x1 = -1, y1 = -1;
        for (let y = 0; y < sh; y++) {
          for (let x = 0; x < sw; x++) {
            if (px[(y * sw + x) * 4 + 3] > 40) {
              if (x < x0) x0 = x;
              if (x > x1) x1 = x;
              if (y < y0) y0 = y;
              if (y > y1) y1 = y;
            }
          }
        }
        if (x1 > x0 && y1 > y0) {
          const w = (x1 - x0 + 1) / sw;
          const h = (y1 - y0 + 1) / sh;
          // ignore opaque (non-cut-out) images: bbox would cover everything
          if (w * h < 0.8) setAutoHead({ x: x0 / sw, y: y0 / sh, w, h });
        }
      } catch (e) {
        /* tainted canvas: fall back to headBox / default */
      }
    };
    im.src = equippedSrc;
    eqImgRef.current = im;
  }, [equippedSrc]);

  // main animation loop
  useEffect(() => {
    const maskCanvas = document.createElement("canvas");
    const mctx = maskCanvas.getContext("2d");
    let imgData = null;
    let nx1 = new Float32Array(0);
    let nx2 = new Float32Array(0);
    let ny1 = new Float32Array(0);
    let ny2 = new Float32Array(0);
    let raf = 0;
    let last = performance.now();
    let t = 0;
    let frame = 0;

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const p = propsRef.current;
      const { w: W, h: H } = sizeRef.current;
      const bx = boxRef.current;
      if (!W || !H || !bx.w || !bx.h) return;

      if (p.autoPlay) t += dt * p.speed;
      frame++;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      /* ---- 1. topography ---- */
      const topoCanvas = topoRef.current;
      if (topoCanvas) {
        ensureSize(topoCanvas, Math.round(W * dpr), Math.round(H * dpr));
        const tctx = topoCanvas.getContext("2d");
        tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (p.showTopography) drawTopography(tctx, W, H, t, p.topo);
        else tctx.clearRect(0, 0, W, H);
      }

      /* ---- 2. metaball mask (low-res) ---- */
      const mw = Math.max(8, Math.round(W * MASK_SCALE));
      const mh = Math.max(8, Math.round(H * MASK_SCALE));
      if (maskCanvas.width !== mw || maskCanvas.height !== mh) {
        maskCanvas.width = mw;
        maskCanvas.height = mh;
        imgData = mctx.createImageData(mw, mh);
      }
      const minD = Math.min(mw, mh);

      const live = BLOBS.map((b) => {
        const rad = b.r * minD * 1.5 * (1 + 0.18 * Math.sin(t * 0.9 + b.px));
        return {
          x: (0.5 + b.ax * Math.sin(t * b.fx + b.px)) * mw,
          y: (0.5 + b.ay * Math.sin(t * b.fy + b.py)) * mh,
          r2: rad * rad,
        };
      });

      if (p.blobMode === "flood") {
        const surge = 0.5 + 0.5 * Math.sin(t * 0.7);
        const rad = minD * (0.16 + 0.24 * surge);
        live.push({
          x: ((bx.x + bx.w / 2) / W) * mw,
          y: ((bx.y + bx.h / 2) / H) * mh,
          r2: rad * rad,
        });
      }

      // subject box in mask space (for progress)
      const sx0 = (bx.x / W) * mw;
      const sy0 = (bx.y / H) * mh;
      const sx1 = ((bx.x + bx.w) / W) * mw;
      const sy1 = ((bx.y + bx.h) / H) * mh;
      let covered = 0;
      let total = 0;

      // separable noise tables: cheap, and breaks the round metaballs up into
      // ragged shards, rings and holes like the reference
      if (nx1.length !== mw) {
        nx1 = new Float32Array(mw);
        nx2 = new Float32Array(mw);
      }
      if (ny1.length !== mh) {
        ny1 = new Float32Array(mh);
        ny2 = new Float32Array(mh);
      }
      for (let x = 0; x < mw; x++) {
        nx1[x] = Math.sin(x * 0.025 + t * 0.9);
        nx2[x] = Math.sin(x * 0.045 - t * 1.4);
      }
      for (let y = 0; y < mh; y++) {
        ny1[y] = Math.cos(y * 0.03 - t * 1.1);
        ny2[y] = Math.sin(y * 0.05 + t * 0.8);
      }

      const d = imgData.data;
      const n = live.length;
      for (let y = 0; y < mh; y++) {
        for (let x = 0; x < mw; x++) {
          let f = 0;
          for (let k = 0; k < n; k++) {
            const dx = x - live[k].x;
            const dy = y - live[k].y;
            f += live[k].r2 / (dx * dx + dy * dy + 1);
          }
          f += 0.5 * (nx1[x] * ny1[y] + 0.6 * nx2[x] * ny2[y]);
          // hard edge (tiny ramp only to avoid shimmer)
          let a = (f - 1) / 0.05 + 0.5;
          a = a < 0 ? 0 : a > 1 ? 1 : a;
          const o = (y * mw + x) * 4;
          d[o] = 255;
          d[o + 1] = 255;
          d[o + 2] = 255;
          d[o + 3] = a * 255;
          if (x >= sx0 && x < sx1 && y >= sy0 && y < sy1) {
            total++;
            covered += a;
          }
        }
      }
      mctx.putImageData(imgData, 0, 0);

      /* ---- 3. ambient glowing blobs (whole banner) ---- */
      const ambCanvas = ambRef.current;
      if (ambCanvas) {
        ensureSize(ambCanvas, Math.round(W * dpr), Math.round(H * dpr));
        const actx = ambCanvas.getContext("2d");
        actx.setTransform(dpr, 0, 0, dpr, 0, 0);
        actx.globalCompositeOperation = "source-over";
        actx.clearRect(0, 0, W, H);
        if (p.showAmbientBlobs) {
          actx.imageSmoothingEnabled = true;
          actx.imageSmoothingQuality = "high";
          actx.drawImage(maskCanvas, 0, 0, W, H);
          actx.globalCompositeOperation = "source-in";
          actx.fillStyle = p.blobFill;
          actx.fillRect(0, 0, W, H);
          actx.globalCompositeOperation = "source-over";
        }
      }

      /* ---- 4. equipped layer, visible only inside the blobs ---- */
      const revCanvas = revRef.current;
      const eq = eqImgRef.current;
      if (revCanvas) {
        ensureSize(revCanvas, Math.round(bx.w * dpr), Math.round(bx.h * dpr));
        const rctx = revCanvas.getContext("2d");
        rctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        rctx.globalCompositeOperation = "source-over";
        rctx.clearRect(0, 0, bx.w, bx.h);
        if (eq && eq.complete && eq.naturalWidth) {
          if (p.flipEquipped) {
            rctx.save();
            rctx.translate(bx.w, 0);
            rctx.scale(-1, 1);
            rctx.drawImage(eq, 0, 0, bx.w, bx.h);
            rctx.restore();
          } else {
            rctx.drawImage(eq, 0, 0, bx.w, bx.h);
          }
          if (!p.debugAlign) {
            rctx.globalCompositeOperation = "destination-in";
            rctx.imageSmoothingEnabled = true;
            rctx.imageSmoothingQuality = "high";
            rctx.drawImage(maskCanvas, -bx.x, -bx.y, W, H);
            rctx.globalCompositeOperation = "source-over";
          }
        }
      }

      /* ---- 4b. HUD wipe: reveal top->bottom, hold, hide top->bottom, pause ---- */
      {
        const c = t % WIPE_CYCLE;
        let top = 1; // fractions of the helmet height (0 = top, 1 = bottom)
        let bottom = 1;
        let lead = -1;
        if (c < WIPE_REVEAL) {
          top = 0;
          bottom = easeInOut(c / WIPE_REVEAL);
          lead = bottom;
        } else if (c < WIPE_REVEAL + WIPE_HOLD) {
          top = 0;
          bottom = 1;
        } else if (c < WIPE_REVEAL + WIPE_HOLD + WIPE_HIDE) {
          top = easeInOut((c - WIPE_REVEAL - WIPE_HOLD) / WIPE_HIDE);
          bottom = 1;
          lead = top;
        }
        const wipe = wipeRef.current;
        if (wipe) {
          wipe.setAttribute("y", (HEAD_VB.y + top * HEAD_VB.h).toFixed(1));
          wipe.setAttribute("height", (Math.max(0, bottom - top) * HEAD_VB.h).toFixed(1));
        }
        const scan = scanRef.current;
        if (scan) {
          const y = HEAD_VB.y + Math.max(lead, 0) * HEAD_VB.h;
          scan.setAttribute("transform", "translate(0 " + y.toFixed(1) + ")");
          scan.setAttribute("opacity", lead < 0 ? "0" : "1");
        }
      }

      /* ---- 5. progress + telemetry ---- */
      const progress = total ? covered / total : 0;
      if (frame % 2 === 0 && p.onProgressChange) p.onProgressChange(progress);
      if (frame % 6 === 0) {
        if (spdRef.current) {
          spdRef.current.textContent =
            Math.round(240 + 80 * Math.sin(t * 1.7)) + " KM/H";
        }
        if (covRef.current) {
          covRef.current.textContent = Math.round(progress * 100) + "%";
        }
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={rootRef}
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ background: bg }}
    >
      {/* topography */}
      <canvas ref={topoRef} className="absolute inset-0 h-full w-full" />

      {/* ambient blobs */}
      <canvas
        ref={ambRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: 1 }}
      />

      {/* headline behind the subject (opt-in) */}
      {showHeadline && (
      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center">
        <span
          className="font-black uppercase leading-none"
          style={{
            fontSize: "clamp(80px, 20vw, 280px)",
            color: "transparent",
            WebkitTextStroke: `1px ${wire}66`,
          }}
        >
          {headline}
        </span>
      </div>
      )}

      {/* subject: base image + blob-revealed equipped image + HUD */}
      <div
        className="absolute"
        style={{ left: box.x, top: box.y, width: box.w, height: box.h }}
      >
        <img
          src={baseSrc}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full select-none"
          style={flipBase ? { transform: "scaleX(-1)" } : undefined}
        />
        <canvas
          ref={revRef}
          className="absolute inset-0 h-full w-full"
          style={debugAlign ? { opacity: 0.5 } : undefined}
        />

        {showHud && (
          <>
            {/* helmet wireframe, fitted to the head box */}
            <svg
              viewBox={`${HEAD_VB.x} ${HEAD_VB.y} ${HEAD_VB.w} ${HEAD_VB.h}`}
              preserveAspectRatio={stretchHud ? "none" : "xMidYMid meet"}
              className="pointer-events-none absolute"
              style={{
                left: `${hb.x * 100}%`,
                top: `${hb.y * 100}%`,
                width: `${hb.w * 100}%`,
                height: `${hb.h * 100}%`,
                outline: debugHead ? "1px dashed #ff00ff" : "none",
              }}
              fill="none"
              stroke={wire}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              shapeRendering="geometricPrecision"
            >
              <defs>
                <clipPath id={shellId}>
                  <path d={HELMET.shell} />
                </clipPath>
                <clipPath id={wipeId}>
                  <rect ref={wipeRef} x={HEAD_VB.x} y={HEAD_VB.y} width={HEAD_VB.w} height="0" />
                </clipPath>
              </defs>

              <g clipPath={`url(#${wipeId})`}>
                {customSvgMarkup ? (
                  <g dangerouslySetInnerHTML={{ __html: customSvgMarkup }} />
                ) : (
                  <g>
                    <path d={HELMET.shell} fill="#ffffff" fillOpacity="0.16" stroke="none" />
                    <path d={HELMET.visor} fill={wire} fillOpacity="0.07" stroke="none" />
                    <g clipPath={`url(#${shellId})`} opacity="0.5" strokeWidth="0.6">
                      {HELMET.latitudes.map((d, i) => (
                        <path key={"la" + i} d={d} {...VE} />
                      ))}
                      {HELMET.meridians.map((d, i) => (
                        <path key={"me" + i} d={d} {...VE} />
                      ))}
                    </g>
                    <path d={HELMET.shell} strokeWidth="1.2" {...VE} />
                    <path d={HELMET.visor} strokeWidth="1" {...VE} />
                    {HELMET.details.map((d, i) => (
                      <path key={"de" + i} d={d} opacity="0.6" {...VE} />
                    ))}
                  </g>
                )}
              </g>

              {/* scan line at the wipe edge */}
              <g ref={scanRef} opacity="0">
                <line x1={HEAD_VB.x} x2={HEAD_VB.x + HEAD_VB.w} y1="0" y2="0" stroke={wire} strokeWidth="4" opacity="0.18" {...VE} />
                <line x1={HEAD_VB.x} x2={HEAD_VB.x + HEAD_VB.w} y1="0" y2="0" stroke={wire} strokeWidth="1.2" opacity="0.9" {...VE} />
              </g>
            </svg>

            {/* telemetry (opt-in) */}
            {showTelemetry && (
              <div
                className="pointer-events-none absolute left-3 top-3 font-mono text-[11px] leading-4"
                style={{ color: wire }}
              >
                <div>
                  SPD <span ref={spdRef}>0 KM/H</span>
                </div>
                <div>
                  LIVERY <span ref={covRef}>0%</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {showNextRace && (
        <div
          className="pointer-events-none absolute left-6 top-6 text-xs"
          style={{ color: "#111111" }}
        >
          <div className="opacity-60">Next race</div>
          <div className="text-sm font-semibold">Las Vegas GP</div>
        </div>
      )}
    </div>
  );
}

export default BlobMorphHero;
