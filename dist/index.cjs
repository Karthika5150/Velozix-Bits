"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  ACCENT_PRESETS: () => ACCENT_PRESETS,
  BlobMorphHero: () => BlobMorphHero,
  CodeTypewriter: () => CodeTypewriter,
  CurvedGridCanvas: () => CurvedGridCanvas,
  DEFAULT_PRESETS: () => DEFAULT_PRESETS,
  DEFAULT_SCROLL_IMAGES: () => DEFAULT_SCROLL_IMAGES,
  DEFAULT_STACKED_CARDS: () => DEFAULT_STACKED_CARDS,
  FullpageCurvedGrid: () => CurvedGridCanvas,
  ImageScroll: () => ImageScroll,
  InfiniteImageScroll: () => InfiniteImageScroll,
  InfiniteTunnelHero: () => InfiniteTunnelHero,
  InstallTabs: () => InstallTabs,
  InteractiveAsciiFace: () => InteractiveAsciiFace,
  InteractiveSnakeGrid: () => InteractiveSnakeGrid,
  LiquidGlassButton: () => LiquidGlassButton,
  PropsTable: () => PropsTable,
  SmoothScrollProvider: () => SmoothScrollProvider,
  StackedCardsScroll: () => StackedCardsScroll,
  ThemeCustomizer: () => ThemeCustomizer,
  applyAccent: () => applyAccent,
  liquidGlassButton: () => liquidGlassButton,
  useAutoCycleAccent: () => useAutoCycleAccent
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/image-scroll.jsx
var import_react = __toESM(require("react"), 1);

// src/components/ui/image-scroll.module.css
var image_scroll_default = {};

// src/components/ui/image-scroll.jsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
var fallbackStyles = {
  container: "adaptive-ui-scroll-container",
  verticalWrapper: "adaptive-ui-scroll-vertical-wrapper",
  verticalTrack: "adaptive-ui-scroll-vertical-track",
  verticalTrackReverse: "adaptive-ui-scroll-vertical-track-reverse",
  horizontalWrapper: "adaptive-ui-scroll-horizontal-wrapper",
  horizontalTrack: "adaptive-ui-scroll-horizontal-track",
  horizontalTrackReverse: "adaptive-ui-scroll-horizontal-track-reverse",
  pauseHover: "adaptive-ui-scroll-pause-hover",
  tiltPerspective: "adaptive-ui-scroll-tilt-perspective",
  tiltInner: "adaptive-ui-scroll-tilt-inner",
  fadeMaskVertical: "adaptive-ui-scroll-fade-vertical",
  fadeMaskHorizontal: "adaptive-ui-scroll-fade-horizontal"
};
var styles = image_scroll_default && Object.keys(image_scroll_default).length > 0 ? image_scroll_default : fallbackStyles;
var EMBEDDED_SCROLL_STYLES = `
.adaptive-ui-scroll-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  user-select: none;
}
.adaptive-ui-scroll-vertical-wrapper {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: var(--scroll-gap, 1.25rem);
  height: var(--container-height, 560px);
  overflow: hidden;
}
.adaptive-ui-scroll-vertical-track {
  display: flex;
  flex-direction: column;
  gap: var(--scroll-gap, 1.25rem);
  will-change: transform;
  animation-name: adaptiveUiScrollUp;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.adaptive-ui-scroll-vertical-track-reverse {
  display: flex;
  flex-direction: column;
  gap: var(--scroll-gap, 1.25rem);
  will-change: transform;
  animation-name: adaptiveUiScrollDown;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.adaptive-ui-scroll-horizontal-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--scroll-gap, 1.25rem);
  width: 100%;
  overflow: hidden;
}
.adaptive-ui-scroll-horizontal-track {
  display: flex;
  flex-direction: row;
  gap: var(--scroll-gap, 1.25rem);
  width: max-content;
  will-change: transform;
  animation-name: adaptiveUiScrollLeft;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.adaptive-ui-scroll-horizontal-track-reverse {
  display: flex;
  flex-direction: row;
  gap: var(--scroll-gap, 1.25rem);
  width: max-content;
  will-change: transform;
  animation-name: adaptiveUiScrollRight;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.adaptive-ui-scroll-pause-hover:hover .adaptive-ui-scroll-vertical-track,
.adaptive-ui-scroll-pause-hover:hover .adaptive-ui-scroll-vertical-track-reverse,
.adaptive-ui-scroll-pause-hover:hover .adaptive-ui-scroll-horizontal-track,
.adaptive-ui-scroll-pause-hover:hover .adaptive-ui-scroll-horizontal-track-reverse {
  animation-play-state: paused;
}
@keyframes adaptiveUiScrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
@keyframes adaptiveUiScrollDown {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}
@keyframes adaptiveUiScrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes adaptiveUiScrollRight {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
.adaptive-ui-scroll-fade-vertical {
  mask-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 8%, black 16%, black 84%, rgba(0, 0, 0, 0.8) 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 8%, black 16%, black 84%, rgba(0, 0, 0, 0.8) 92%, transparent 100%);
}
.adaptive-ui-scroll-fade-horizontal {
  mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.8) 6%, black 14%, black 86%, rgba(0, 0, 0, 0.8) 94%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.8) 6%, black 14%, black 86%, rgba(0, 0, 0, 0.8) 94%, transparent 100%);
}
.adaptive-ui-scroll-tilt-perspective {
  perspective: 1000px;
}
.adaptive-ui-scroll-tilt-inner {
  transform: rotateX(8deg) rotateZ(-4deg) skewX(2deg);
  transform-origin: center center;
  transition: transform 0.4s ease;
}
@media (prefers-reduced-motion: reduce) {
  .adaptive-ui-scroll-vertical-track,
  .adaptive-ui-scroll-vertical-track-reverse,
  .adaptive-ui-scroll-horizontal-track,
  .adaptive-ui-scroll-horizontal-track-reverse {
    animation-play-state: paused !important;
  }
}
`;
var DEFAULT_SCROLL_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
    title: "Quantum Fluidity",
    category: "3D ART",
    accent: "#6366f1"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=700&q=80",
    title: "Prism Dimensions",
    category: "GEOMETRY",
    accent: "#ec4899"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=700&q=80",
    title: "Holographic Veil",
    category: "SYNTH",
    accent: "#10b981"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=700&q=80",
    title: "Neon Nexus",
    category: "CYBER",
    accent: "#06b6d4"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=700&q=80",
    title: "Chromatic Wave",
    category: "GRADIENT",
    accent: "#f59e0b"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=700&q=80",
    title: "Iridescent Orbit",
    category: "SPATIAL",
    accent: "#8b5cf6"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=700&q=80",
    title: "Vortex Singularity",
    category: "MOTION",
    accent: "#14b8a6"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=700&q=80",
    title: "Monolith Monad",
    category: "ABSTRACT",
    accent: "#e11d48"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=80",
    title: "Cyber Horizon",
    category: "CITY",
    accent: "#38bdf8"
  }
];
function DefaultImageCard({ item, cardWidth, cardHeight, onCardClick }) {
  const [imgError, setImgError] = (0, import_react.useState)(false);
  const src = typeof item === "string" ? item : item == null ? void 0 : item.src;
  const title = typeof item === "string" ? "Creative Asset" : (item == null ? void 0 : item.title) || "Visual Frame";
  const category = typeof item === "string" ? "ASSET" : (item == null ? void 0 : item.category) || "GALLERY";
  const accent = typeof item === "object" && (item == null ? void 0 : item.accent) ? item.accent : "#10b981";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      onClick: () => onCardClick == null ? void 0 : onCardClick(item),
      style: {
        width: cardWidth,
        height: cardHeight
      },
      className: "group relative shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 shadow-xl transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-black/60",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: "absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black",
            style: {
              backgroundImage: imgError ? `radial-gradient(circle at 50% 30%, ${accent}25, transparent 70%), linear-gradient(to bottom, #18181b, #09090b)` : void 0
            }
          }
        ),
        !imgError && src && // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "img",
          {
            src,
            alt: title,
            loading: "lazy",
            decoding: "async",
            onError: () => setImgError(true),
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          }
        ),
        imgError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: "flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm",
              style: { color: accent },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Image, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-mono text-xs uppercase tracking-wider text-zinc-400", children: title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              boxShadow: `inset 0 0 0 1px ${accent}66, 0 0 24px -6px ${accent}40`
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "absolute inset-x-0 bottom-0 flex flex-col justify-end p-3 sm:p-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "span",
              {
                className: "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-white backdrop-blur-md",
                style: { borderLeftColor: accent, borderLeftWidth: "2.5px" },
                children: category
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex size-6 sm:size-7 items-center justify-center rounded-full bg-white/10 text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUpRight, { className: "size-3 sm:size-3.5" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { className: "mt-1.5 line-clamp-1 font-sans text-xs sm:text-sm font-bold tracking-wide text-white drop-shadow", children: title })
        ] })
      ]
    }
  );
}
function prepareTrackItems(items) {
  if (!items || items.length === 0) return [];
  let base = [...items];
  while (base.length < 6) {
    base = [...base, ...items];
  }
  return [...base, ...base];
}
function distributeItems(items, count) {
  const tracks = Array.from({ length: count }, () => []);
  items.forEach((item, index) => {
    tracks[index % count].push(item);
  });
  return tracks;
}
function ImageScroll({
  direction = "vertical",
  images = DEFAULT_SCROLL_IMAGES,
  speed = 1,
  reverse = false,
  pauseOnHover = true,
  columns = 3,
  rows = 3,
  staggerDirection = true,
  gap = 18,
  blurEdges = true,
  height = "560px",
  tilt = false,
  cardWidth,
  cardHeight,
  renderItem,
  onCardClick,
  className = "",
  style = {}
}) {
  const isVertical = direction === "vertical";
  const numTracks = isVertical ? Math.max(1, columns) : Math.max(1, rows);
  const trackItemGroups = distributeItems(images, numTracks);
  const normalizedSpeed = Number(speed) || 1;
  const baseDuration = isVertical ? normalizedSpeed <= 8 ? 28 / Math.max(0.1, normalizedSpeed) : Math.max(4, 65 - normalizedSpeed) : normalizedSpeed <= 8 ? 42 / Math.max(0.1, normalizedSpeed) : Math.max(6, 90 - normalizedSpeed);
  const defaultWidth = isVertical ? cardWidth || "250px" : cardWidth || (numTracks >= 3 ? "240px" : "280px");
  const defaultHeight = isVertical ? cardHeight || "280px" : cardHeight || (numTracks >= 3 ? "165px" : "210px");
  const containerStyles = {
    "--scroll-gap": `${gap}px`,
    "--container-height": height,
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      style: containerStyles,
      className: `
        ${styles.container}
        ${tilt ? styles.tiltPerspective : ""}
        ${pauseOnHover ? styles.pauseHover : ""}
        ${isVertical && blurEdges ? styles.fadeMaskVertical : ""}
        ${!isVertical && blurEdges ? styles.fadeMaskHorizontal : ""}
        ${className}
      `,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: EMBEDDED_SCROLL_STYLES } }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: tilt ? styles.tiltInner : "", children: isVertical ? (
          /* ================= VERTICAL COLUMNS ================= */
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: styles.verticalWrapper, children: trackItemGroups.map((group, colIdx) => {
            const isColReverse = staggerDirection ? colIdx % 2 === 1 ? !reverse : reverse : reverse;
            const colSpeed = staggerDirection ? baseDuration * (1 + colIdx % 3 * 0.15) : baseDuration;
            const trackItems = prepareTrackItems(group);
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                className: isColReverse ? styles.verticalTrackReverse : styles.verticalTrack,
                style: {
                  animationDuration: `${colSpeed}s`
                },
                children: trackItems.map((item, itemIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default.Fragment, { children: renderItem ? renderItem(item, itemIdx) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  DefaultImageCard,
                  {
                    item,
                    cardWidth: defaultWidth,
                    cardHeight: defaultHeight,
                    onCardClick
                  }
                ) }, `v-item-${colIdx}-${itemIdx}`))
              },
              `col-${colIdx}`
            );
          }) })
        ) : (
          /* ================= HORIZONTAL ROWS ================= */
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: styles.horizontalWrapper, children: trackItemGroups.map((group, rowIdx) => {
            const isRowReverse = staggerDirection ? rowIdx % 2 === 1 ? !reverse : reverse : reverse;
            const rowSpeed = staggerDirection ? baseDuration * (1 + rowIdx % 3 * 0.15) : baseDuration;
            const trackItems = prepareTrackItems(group);
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                className: isRowReverse ? styles.horizontalTrackReverse : styles.horizontalTrack,
                style: {
                  animationDuration: `${rowSpeed}s`
                },
                children: trackItems.map((item, itemIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default.Fragment, { children: renderItem ? renderItem(item, itemIdx) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  DefaultImageCard,
                  {
                    item,
                    cardWidth: defaultWidth,
                    cardHeight: defaultHeight,
                    onCardClick
                  }
                ) }, `h-item-${rowIdx}-${itemIdx}`))
              },
              `row-${rowIdx}`
            );
          }) })
        ) })
      ]
    }
  );
}
var InfiniteImageScroll = ImageScroll;

// src/components/ui/interactive-ascii-face.jsx
var import_react2 = __toESM(require("react"), 1);

// src/components/ui/interactive-ascii-face.module.css
var interactive_ascii_face_default = {};

// src/components/ui/interactive-ascii-face.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var fallbackStyles2 = {
  stage: "adaptive-ascii-stage",
  field: "adaptive-ascii-field",
  scanlines: "adaptive-ascii-scanlines",
  vignette: "adaptive-ascii-vignette",
  frame: "adaptive-ascii-frame",
  status: "adaptive-ascii-status"
};
var styles2 = interactive_ascii_face_default && Object.keys(interactive_ascii_face_default).length > 0 ? interactive_ascii_face_default : fallbackStyles2;
var EMBEDDED_ASCII_STYLES = `
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
var REFERENCE = "/images/ascii-portrait.png";
var GLYPHS = [".:;|`", "il/+=:", "xovucz", "7TZH28", "NWM#@%"];
var MASK_WIDTH = 360;
var MASK_HEIGHT = 432;
function sampleImage(image, cropReference) {
  const canvas = document.createElement("canvas");
  canvas.width = MASK_WIDTH;
  canvas.height = MASK_HEIGHT;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas unavailable");
  const sourceHeight = cropReference ? 610 : image.naturalHeight;
  const scale = cropReference ? Math.min(500 / image.naturalWidth, 610 / sourceHeight) : Math.max(500 / image.naturalWidth, 610 / sourceHeight);
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
  const shadow = Math.min(0.1, (visibleTones[Math.floor(visibleTones.length * 0.08)] ?? 0) * 0.8);
  const highlight = Math.max(0.48, visibleTones[Math.floor(visibleTones.length * 0.92)] ?? 1);
  const detailed = tones.map((tone, i) => {
    if (data[i * 4 + 3] === 0) return 0;
    const x = i % MASK_WIDTH;
    const neighbors = ((x > 0 ? tones[i - 1] : tone) + (x < MASK_WIDTH - 1 ? tones[i + 1] : tone) + (tones[i - MASK_WIDTH] ?? tone) + (tones[i + MASK_WIDTH] ?? tone)) / 4;
    const detailedTone = tone + (tone - neighbors) * 0.45;
    if (cropReference) return Math.min(1, Math.max(0, (detailedTone - 0.045) / 0.91)) ** 0.55;
    return Math.min(1, Math.max(0, (detailedTone - shadow) / (highlight - shadow))) ** 0.75;
  });
  const foreground = cropReference ? void 0 : Uint8Array.from(data, (_, index) => data[index * 4 + 3] > 12 ? 1 : 0);
  return { tones: detailed, foreground };
}
function parseColor(c, fallback = [92, 252, 135]) {
  if (!c || typeof c !== "string") return fallback;
  const clean = c.replace("#", "").trim();
  if (clean.length === 3) {
    return [
      parseInt(clean[0] + clean[0], 16),
      parseInt(clean[1] + clean[1], 16),
      parseInt(clean[2] + clean[2], 16)
    ];
  }
  if (clean.length === 6) {
    return [
      parseInt(clean.slice(0, 2), 16),
      parseInt(clean.slice(2, 4), 16),
      parseInt(clean.slice(4, 6), 16)
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
  function paint(delta = 1e3 / 60) {
    var _a, _b, _c;
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
      mouseSpeed
    } = settings.current;
    const interaction = pointer.current;
    const response = Math.min(1.2, Math.max(0.2, (mouseSpeed || 0.8) * 0.6));
    const follow = 1 - Math.exp(-delta * 7e-3 * response);
    offsetX += (((interaction == null ? void 0 : interaction.offset.x) ?? 0) - offsetX) * follow;
    offsetY += (((interaction == null ? void 0 : interaction.offset.y) ?? 0) - offsetY) * follow;
    const left = (width - portraitWidth) / 2 + offsetX;
    const top = (height - portraitHeight) / 2 + offsetY;
    context.globalAlpha = 1;
    context.clearRect(0, 0, width, height);
    const mask = rainOnly ? null : image == null ? void 0 : image.tones;
    const sizeVal = Math.max(4, Math.min(24, Number(dropSize) || 7));
    const cellW = Math.max(3, Math.round(sizeVal * 0.72));
    const cellH = sizeVal;
    const fontSize = Math.max(4, Math.round(sizeVal * 0.88));
    context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    const customChars = typeof characters === "string" && characters.length > 0 ? characters : null;
    const parsedGradient = Array.isArray(gradient) && gradient.length > 0 ? gradient.map((c) => parseColor(c)) : null;
    const mouseX = (_a = interaction == null ? void 0 : interaction.position) == null ? void 0 : _a.x;
    const mouseY = (_b = interaction == null ? void 0 : interaction.position) == null ? void 0 : _b.y;
    const repulsionRadius = 45 * Math.min(1.4, Math.max(0.3, mouseSpeed || 0.8));
    for (let x = cellW / 2, column = 0; x < width; x += cellW, column++) {
      const speed = 42 + column * 17 % 28;
      const trail = 160 + column * 41 % 66;
      const cycle = trail + 72 + column * 13 % 45;
      const travel = rainTime * speed / 1e3 + column * 137;
      const head = travel % cycle;
      const traveledRows = Math.floor(travel / cellH);
      const maskX = Math.floor((x - left) / portraitWidth * MASK_WIDTH);
      for (let y = cellH / 2, row = 0; y < height; y += cellH, row++) {
        const maskY = Math.floor((y - top) / portraitHeight * MASK_HEIGHT);
        const tone = mask && maskX >= 0 && maskX < MASK_WIDTH && maskY >= 0 && maskY < MASK_HEIGHT ? mask[maskY * MASK_WIDTH + maskX] : 0;
        const distance = (head - y % cycle + cycle) % cycle;
        const strength = Math.max(0, 1 - distance / trail) ** 1.25;
        const glyphRow = row - traveledRows;
        const seed = Math.imul(column + 1, 374761393) ^ Math.imul(glyphRow, 668265263);
        const imageIndex = maskX >= 0 && maskX < MASK_WIDTH && maskY >= 0 && maskY < MASK_HEIGHT ? maskY * MASK_WIDTH + maskX : -1;
        const belongsToUpload = !rainOnly && imageIndex >= 0 && ((_c = image == null ? void 0 : image.foreground) == null ? void 0 : _c[imageIndex]) === 1;
        const belongsToPortrait = !rainOnly && imageIndex >= 0 && (belongsToUpload || !(image == null ? void 0 : image.foreground) && tone > 0.035);
        const imageTone = belongsToUpload ? Math.min(1, 0.36 + tone * Math.max(0.5, imageClarity)) : Math.min(1, tone * Math.max(0.5, imageClarity));
        if (!belongsToPortrait && strength < 0.08) continue;
        const visualTone = belongsToPortrait ? imageTone : strength * 0.78;
        let glyphChar = "";
        if (customChars) {
          if (belongsToPortrait) {
            const charIdx = Math.min(
              customChars.length - 1,
              Math.floor(visualTone * customChars.length)
            );
            glyphChar = customChars[charIdx];
          } else {
            const glyphSeed = ((seed ^ seed >>> 13 ^ Math.imul(traveledRows, 1274126177)) >>> 0) % customChars.length;
            glyphChar = customChars[glyphSeed];
          }
        } else {
          const group = Math.round(visualTone * (GLYPHS.length - 1));
          const glyphs = GLYPHS[group];
          const glyph = ((seed ^ seed >>> 13 ^ Math.imul(traveledRows, 1274126177)) >>> 0) % glyphs.length;
          glyphChar = glyphs[glyph];
        }
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
        let drawX = x;
        let drawY = y;
        if (mouseX !== void 0 && mouseY !== void 0) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.hypot(dx, dy);
          if (dist < repulsionRadius && dist > 0) {
            const push = (1 - dist / repulsionRadius) * 6 * Math.min(1.4, Math.max(0.3, mouseSpeed || 0.8));
            drawX += dx / dist * push;
            drawY += dy / dist * push;
          }
        }
        if (dropType === "lines") {
          const lineH = belongsToPortrait ? Math.max(3, cellH * (0.4 + visualTone * 0.9)) : Math.max(4, cellH * (0.6 + strength * 1.5));
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
    const delta = Number.isFinite(lastPaint) ? Math.min(34, time - lastPaint) : 1e3 / 60;
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
    }
  };
}
function InteractiveAsciiFace({
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
  className = ""
}) {
  const fieldRef = (0, import_react2.useRef)(null);
  const portraitRef = (0, import_react2.useRef)(null);
  const pointer = (0, import_react2.useRef)(null);
  const settings = (0, import_react2.useRef)({
    color,
    dropType,
    gradient,
    characters,
    dropSize,
    rainOnly,
    imageClarity,
    lineSpeed,
    mouseSpeed
  });
  const renderer = (0, import_react2.useRef)(void 0);
  const source = src ?? REFERENCE;
  const [result, setResult] = (0, import_react2.useState)();
  const current = (result == null ? void 0 : result.source) === source ? result : void 0;
  const mask = current == null ? void 0 : current.mask;
  (0, import_react2.useEffect)(() => {
    if (rainOnly) return;
    const objectUrl = typeof source === "string" ? void 0 : URL.createObjectURL(source);
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
  (0, import_react2.useEffect)(() => {
    if (fieldRef.current && portraitRef.current) {
      const animation = animateRain(fieldRef.current, portraitRef.current, mask, pointer, settings);
      renderer.current = animation;
      return () => {
        animation == null ? void 0 : animation.dispose();
        renderer.current = void 0;
      };
    }
  }, [mask, rainOnly]);
  (0, import_react2.useEffect)(() => {
    var _a;
    settings.current = {
      color,
      dropType,
      gradient,
      characters,
      dropSize,
      rainOnly,
      imageClarity,
      lineSpeed,
      mouseSpeed
    };
    (_a = renderer.current) == null ? void 0 : _a.paint();
  }, [
    color,
    dropType,
    gradient,
    characters,
    dropSize,
    rainOnly,
    imageClarity,
    lineSpeed,
    mouseSpeed
  ]);
  function movePortrait(event) {
    var _a;
    if (!followPointer || event.pointerType === "touch") return;
    const bounds = (_a = fieldRef.current) == null ? void 0 : _a.getBoundingClientRect();
    if (!(bounds == null ? void 0 : bounds.width) || !bounds.height) return;
    const offset = Number.isFinite(maxOffset) ? Math.max(0, maxOffset) : 6;
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    pointer.current = {
      position: { x, y },
      offset: {
        x: (x / bounds.width * 2 - 1) * offset,
        y: (y / bounds.height * 2 - 1) * offset
      }
    };
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: [styles2.stage, className].filter(Boolean).join(" "),
      onPointerMove: movePortrait,
      onPointerLeave: () => {
        pointer.current = null;
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("style", { dangerouslySetInnerHTML: { __html: EMBEDDED_ASCII_STYLES } }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "canvas",
          {
            ref: fieldRef,
            className: styles2.field,
            role: mask && !rainOnly ? "img" : void 0,
            "aria-label": mask && !rainOnly ? alt : void 0,
            "aria-hidden": !mask || rainOnly
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref: portraitRef, className: styles2.frame, children: !mask && !rainOnly && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: styles2.status, role: "status", children: current ? "Couldn\u2019t read this image. Try a PNG, JPEG, or WebP." : "Converting image to ASCII\u2026" }) })
      ]
    }
  );
}

// src/components/ui/blob-morph-hero.jsx
var import_react3 = __toESM(require("react"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var BASE_IMG = "/images/banner-crypto-base.webp";
var EQUIPPED_IMG = "/images/banner-crypto-equipped.png";
var DEFAULT_PRESETS = [
  {
    id: "lando-f1",
    title: "LANDO // F1",
    accentColor: "#d8ff1f",
    bgColor: "#fbfbf8",
    blobColor: "#e6e7df",
    topoColor: "#dcddd4",
    wireColor: "#9aa1a8",
    baseImage: BASE_IMG,
    equippedImage: EQUIPPED_IMG
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
    equippedImage: EQUIPPED_IMG
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
    equippedImage: EQUIPPED_IMG
  }
];
var LEVELS = [-3.2, -2.6, -2, -1.4, -0.8, -0.2, 0.4, 1, 1.6, 2.2, 2.8, 3.4];
var EDGES = [
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
  []
];
function heightAt(x, y, t) {
  return Math.sin(x * 1.1 + t * 0.28) + Math.sin(y * 1.4 - t * 0.22) + Math.sin((x + y) * 0.8 + t * 0.18) + Math.sin(Math.hypot(x - 2.5, y - 1.8) * 1.3 - t * 0.25);
}
function drawTopography(ctx, W2, H2, t, color) {
  const cell = 16;
  const cols = Math.ceil(W2 / cell);
  const rows = Math.ceil(H2 / cell);
  const sc = 8 / Math.min(W2, H2);
  const stride = cols + 1;
  const grid = new Float32Array(stride * (rows + 1));
  for (let j = 0; j <= rows; j++) {
    for (let i = 0; i <= cols; i++) {
      grid[j * stride + i] = heightAt(i * cell * sc, j * cell * sc, t);
    }
  }
  ctx.clearRect(0, 0, W2, H2);
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
        const idx = (tl > lvl ? 8 : 0) | (tr > lvl ? 4 : 0) | (br > lvl ? 2 : 0) | (bl > lvl ? 1 : 0);
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
              px = x0 + (lvl - tl) / (tr - tl) * cell;
              py = y0;
            } else if (edge === 1) {
              px = x0 + cell;
              py = y0 + (lvl - tr) / (br - tr) * cell;
            } else if (edge === 2) {
              px = x0 + (lvl - bl) / (br - bl) * cell;
              py = y0 + cell;
            } else {
              px = x0;
              py = y0 + (lvl - tl) / (bl - tl) * cell;
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
var BLOBS = [
  { fx: 0.31, fy: 0.23, px: 0, py: 1.2, ax: 0.46, ay: 0.4, r: 0.13 },
  { fx: 0.22, fy: 0.37, px: 2.1, py: 0.4, ax: 0.44, ay: 0.42, r: 0.1 },
  { fx: 0.41, fy: 0.19, px: 4, py: 2.5, ax: 0.48, ay: 0.38, r: 0.15 },
  { fx: 0.27, fy: 0.33, px: 5.3, py: 3.9, ax: 0.45, ay: 0.41, r: 0.09 },
  { fx: 0.17, fy: 0.29, px: 1, py: 5.1, ax: 0.47, ay: 0.36, r: 0.12 },
  { fx: 0.36, fy: 0.44, px: 3.3, py: 0.9, ax: 0.42, ay: 0.43, r: 0.08 }
];
var MERIDIAN_SPREADS = [40, 80, 120, 160, 185];
var HELMET = {
  shell: "M200 60C285 60 335 120 338 210C340 290 322 350 292 392C270 420 238 432 200 432C162 432 130 420 108 392C78 350 60 290 62 210C65 120 115 60 200 60Z",
  visor: "M108 196C130 172 270 172 292 196C300 212 298 238 286 250C262 262 138 262 114 250C102 238 100 212 108 196Z",
  // wireframe mesh (clipped to the shell)
  latitudes: Array.from({ length: 11 }, (_, i) => {
    const y = 92 + i * 32;
    return `M40 ${y}C120 ${y + 18} 280 ${y + 18} 360 ${y}`;
  }),
  meridians: [
    "M200 60V432",
    ...MERIDIAN_SPREADS.flatMap((k) => [
      `M200 60C${200 - k} 120 ${200 - k} 380 200 432`,
      `M200 60C${200 + k} 120 ${200 + k} 380 200 432`
    ])
  ],
  // design lines: roof stripes, chin vents, nose bridge, neck/HANS
  details: [
    "M140 80C128 110 124 150 128 176",
    "M260 80C272 110 276 150 272 176",
    "M160 330C180 338 220 338 240 330",
    "M170 350C188 356 212 356 230 350",
    "M200 262V318"
  ]
};
var HEAD_VB = { x: 58, y: 56, w: 284, h: 380 };
var DEFAULT_HEAD_BOX = { x: 0.28, y: 0.04, w: 0.44, h: 0.42 };
var VE = { vectorEffect: "non-scaling-stroke" };
var WIPE_REVEAL = 2.4;
var WIPE_HOLD = 1.6;
var WIPE_HIDE = 1;
var WIPE_GAP = 1;
var WIPE_CYCLE = WIPE_REVEAL + WIPE_HOLD + WIPE_HIDE + WIPE_GAP;
var easeInOut = (p) => p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
var MASK_SCALE = 0.4;
function ensureSize(canvas, w, h) {
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}
function getCoverBounds(sw, sh, dw, dh) {
  if (!sw || !sh || !dw || !dh) return { sx: 0, sy: 0, sWidth: sw || 1, sHeight: sh || 1 };
  const sRatio = sw / sh;
  const dRatio = dw / dh;
  let sx = 0, sy = 0, sWidth = sw, sHeight = sh;
  if (sRatio > dRatio) {
    sWidth = sh * dRatio;
    sx = (sw - sWidth) / 2;
  } else {
    sHeight = sw / dRatio;
    sy = (sh - sHeight) / 2;
  }
  return { sx, sy, sWidth, sHeight };
}
function BlobMorphHero({
  preset = "lando-f1",
  baseImage = "",
  equippedImage = "",
  blobMode = "roam",
  speed = 0.5,
  autoPlay = true,
  interactive = true,
  cornerRadius = 25,
  borderRadius,
  aspectRatio = "auto",
  imageScale = 0.85,
  widthScale = 0.85,
  heightScale = 0.85,
  showTopography = true,
  showAmbientBlobs = true,
  showHud = true,
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
  onProgressChange
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
  const radius = borderRadius ?? cornerRadius ?? 25;
  const [autoHead, setAutoHead] = (0, import_react3.useState)(null);
  const hb = {
    ...DEFAULT_HEAD_BOX,
    ...active.headBox || {},
    ...autoFitHead && autoHead || {},
    ...headBox || {}
  };
  const rootRef = (0, import_react3.useRef)(null);
  const topoRef = (0, import_react3.useRef)(null);
  const ambRef = (0, import_react3.useRef)(null);
  const revRef = (0, import_react3.useRef)(null);
  const spdRef = (0, import_react3.useRef)(null);
  const covRef = (0, import_react3.useRef)(null);
  const eqImgRef = (0, import_react3.useRef)(null);
  const wipeRef = (0, import_react3.useRef)(null);
  const scanRef = (0, import_react3.useRef)(null);
  const mouseRef = (0, import_react3.useRef)({
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
    active: false,
    intensity: 0
  });
  const uid = (0, import_react3.useId)().replace(/:/g, "");
  const shellId = "bmh-shell-" + uid;
  const wipeId = "bmh-wipe-" + uid;
  const [size, setSize] = (0, import_react3.useState)({ w: 0, h: 0 });
  const [aspect, setAspect] = (0, import_react3.useState)(0.8);
  const box = (0, import_react3.useMemo)(() => {
    if (!size.w || !size.h) return { x: 0, y: 0, w: 0, h: 0 };
    const wFraction = typeof widthScale === "number" ? widthScale : typeof imageScale === "number" ? imageScale : 0.85;
    const hFraction = typeof heightScale === "number" ? heightScale : typeof imageScale === "number" ? imageScale : 0.85;
    let w = Math.round(size.w * Math.min(1, Math.max(0.1, wFraction)));
    let h = Math.round(size.h * Math.min(1, Math.max(0.1, hFraction)));
    if (aspectRatio === "square" || aspectRatio === 1) {
      const s = Math.min(w, h);
      w = s;
      h = s;
    } else if (typeof aspectRatio === "number" && aspectRatio > 0) {
      h = Math.round(w / aspectRatio);
      if (h > size.h * 0.95) {
        h = Math.round(size.h * 0.95);
        w = Math.round(h * aspectRatio);
      }
    }
    return {
      x: Math.round((size.w - w) / 2),
      y: Math.round((size.h - h) / 2),
      w,
      h
    };
  }, [size, aspectRatio, imageScale, widthScale, heightScale]);
  const handlePointerMove = (e) => {
    if (!rootRef.current || !interactive) return;
    const rect = rootRef.current.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current.targetX = Math.max(0, Math.min(1, x));
      mouseRef.current.targetY = Math.max(0, Math.min(1, y));
      mouseRef.current.active = true;
    }
  };
  const handlePointerEnter = (e) => {
    if (!interactive) return;
    mouseRef.current.active = true;
    handlePointerMove(e);
  };
  const handlePointerLeave = () => {
    mouseRef.current.active = false;
  };
  const propsRef = (0, import_react3.useRef)({});
  propsRef.current = {
    speed,
    flipEquipped,
    debugAlign,
    autoPlay,
    interactive,
    blobMode,
    showTopography,
    showAmbientBlobs,
    topo,
    accent,
    blobFill,
    onProgressChange
  };
  const sizeRef = (0, import_react3.useRef)(size);
  sizeRef.current = size;
  const boxRef = (0, import_react3.useRef)(box);
  boxRef.current = box;
  (0, import_react3.useEffect)(() => {
    const el = rootRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: Math.round(width), h: Math.round(height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  (0, import_react3.useEffect)(() => {
    const src = baseSrc || equippedSrc;
    if (!src) return;
    const im = new Image();
    im.onload = () => {
      if (im.naturalWidth && im.naturalHeight) {
        setAspect(im.naturalWidth / im.naturalHeight);
      }
    };
    im.src = src;
  }, [baseSrc, equippedSrc]);
  (0, import_react3.useEffect)(() => {
    if (!equippedSrc) return;
    const im = new Image();
    im.decoding = "async";
    setAutoHead(null);
    im.onload = () => {
      if (!baseSrc && im.naturalWidth && im.naturalHeight) {
        setAspect(im.naturalWidth / im.naturalHeight);
      }
      try {
        const sw = Math.min(256, im.naturalWidth);
        const sh = Math.max(1, Math.round(sw * im.naturalHeight / im.naturalWidth));
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
          if (w * h < 0.8) setAutoHead({ x: x0 / sw, y: y0 / sh, w, h });
        }
      } catch (e) {
      }
    };
    im.src = equippedSrc;
    eqImgRef.current = im;
  }, [equippedSrc]);
  (0, import_react3.useEffect)(() => {
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
      const dt = Math.min((now - last) / 1e3, 0.05);
      last = now;
      const p = propsRef.current;
      const { w: W2, h: H2 } = sizeRef.current;
      const bx = boxRef.current;
      if (!W2 || !H2 || !bx.w || !bx.h) return;
      if (p.autoPlay) t += dt * p.speed;
      frame++;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const topoCanvas = topoRef.current;
      if (topoCanvas) {
        ensureSize(topoCanvas, Math.round(W2 * dpr), Math.round(H2 * dpr));
        const tctx = topoCanvas.getContext("2d");
        tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (p.showTopography) drawTopography(tctx, W2, H2, t, p.topo);
        else tctx.clearRect(0, 0, W2, H2);
      }
      const mw = Math.max(8, Math.round(W2 * MASK_SCALE));
      const mh = Math.max(8, Math.round(H2 * MASK_SCALE));
      if (maskCanvas.width !== mw || maskCanvas.height !== mh) {
        maskCanvas.width = mw;
        maskCanvas.height = mh;
        imgData = mctx.createImageData(mw, mh);
      }
      const minD = Math.min(mw, mh);
      const live = BLOBS.map((b) => {
        const rad = b.r * minD * 1.4 * (1 + 0.12 * Math.sin(t * 0.5 + b.px));
        return {
          x: (0.5 + b.ax * Math.sin(t * (b.fx * 0.7) + b.px)) * mw,
          y: (0.5 + b.ay * Math.sin(t * (b.fy * 0.7) + b.py)) * mh,
          r2: rad * rad
        };
      });
      const m = mouseRef.current;
      if (p.interactive) {
        m.x += (m.targetX - m.x) * 0.14;
        m.y += (m.targetY - m.y) * 0.14;
        if (m.active) {
          m.intensity += (1 - m.intensity) * 0.08;
        } else {
          m.intensity += (0 - m.intensity) * 0.05;
        }
      } else {
        m.intensity = 0;
      }
      if (m.intensity > 5e-3) {
        const mouseRad = minD * (0.16 + 0.02 * Math.sin(t * 1.2)) * m.intensity;
        live.push({
          x: m.x * mw,
          y: m.y * mh,
          r2: mouseRad * mouseRad
        });
      }
      if (p.blobMode === "flood") {
        const surge = 0.5 + 0.5 * Math.sin(t * 0.45);
        const rad = minD * (0.26 + 0.28 * surge);
        live.push(
          {
            x: (bx.x + bx.w * 0.5) / W2 * mw,
            y: (bx.y + bx.h * 0.5) / H2 * mh,
            r2: rad * rad
          },
          {
            x: (bx.x + bx.w * 0.38) / W2 * mw,
            y: (bx.y + bx.h * 0.46) / H2 * mh,
            r2: rad * rad * 0.65
          },
          {
            x: (bx.x + bx.w * 0.62) / W2 * mw,
            y: (bx.y + bx.h * 0.54) / H2 * mh,
            r2: rad * rad * 0.65
          }
        );
      }
      const sx0 = bx.x / W2 * mw;
      const sy0 = bx.y / H2 * mh;
      const sx1 = (bx.x + bx.w) / W2 * mw;
      const sy1 = (bx.y + bx.h) / H2 * mh;
      let covered = 0;
      let total = 0;
      if (nx1.length !== mw) {
        nx1 = new Float32Array(mw);
        nx2 = new Float32Array(mw);
      }
      if (ny1.length !== mh) {
        ny1 = new Float32Array(mh);
        ny2 = new Float32Array(mh);
      }
      for (let x = 0; x < mw; x++) {
        nx1[x] = Math.sin(x * 0.025 + t * 0.4);
        nx2[x] = Math.sin(x * 0.045 - t * 0.55);
      }
      for (let y = 0; y < mh; y++) {
        ny1[y] = Math.cos(y * 0.03 - t * 0.45);
        ny2[y] = Math.sin(y * 0.05 + t * 0.35);
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
      const ambCanvas = ambRef.current;
      if (ambCanvas) {
        ensureSize(ambCanvas, Math.round(W2 * dpr), Math.round(H2 * dpr));
        const actx = ambCanvas.getContext("2d");
        actx.setTransform(dpr, 0, 0, dpr, 0, 0);
        actx.globalCompositeOperation = "source-over";
        actx.clearRect(0, 0, W2, H2);
        if (p.showAmbientBlobs) {
          actx.imageSmoothingEnabled = true;
          actx.imageSmoothingQuality = "high";
          actx.drawImage(maskCanvas, 0, 0, W2, H2);
          actx.globalCompositeOperation = "source-in";
          actx.fillStyle = p.blobFill;
          actx.fillRect(0, 0, W2, H2);
          actx.globalCompositeOperation = "source-over";
        }
      }
      const revCanvas = revRef.current;
      const eq = eqImgRef.current;
      if (revCanvas) {
        ensureSize(revCanvas, Math.round(bx.w * dpr), Math.round(bx.h * dpr));
        const rctx = revCanvas.getContext("2d");
        rctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        rctx.globalCompositeOperation = "source-over";
        rctx.clearRect(0, 0, bx.w, bx.h);
        if (eq && eq.complete && eq.naturalWidth) {
          const { sx, sy, sWidth, sHeight } = getCoverBounds(
            eq.naturalWidth,
            eq.naturalHeight,
            bx.w,
            bx.h
          );
          if (p.flipEquipped) {
            rctx.save();
            rctx.translate(bx.w, 0);
            rctx.scale(-1, 1);
            rctx.drawImage(eq, sx, sy, sWidth, sHeight, 0, 0, bx.w, bx.h);
            rctx.restore();
          } else {
            rctx.drawImage(eq, sx, sy, sWidth, sHeight, 0, 0, bx.w, bx.h);
          }
          if (!p.debugAlign) {
            rctx.globalCompositeOperation = "destination-in";
            rctx.imageSmoothingEnabled = true;
            rctx.imageSmoothingQuality = "high";
            rctx.drawImage(maskCanvas, -bx.x, -bx.y, W2, H2);
            rctx.globalCompositeOperation = "source-over";
          }
        }
      }
      {
        const c = t % WIPE_CYCLE;
        let top = 1;
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
      const progress = total ? covered / total : 0;
      if (frame % 2 === 0 && p.onProgressChange) p.onProgressChange(progress);
      if (frame % 6 === 0) {
        if (spdRef.current) {
          spdRef.current.textContent = Math.round(240 + 80 * Math.sin(t * 1.7)) + " KM/H";
        }
        if (covRef.current) {
          covRef.current.textContent = Math.round(progress * 100) + "%";
        }
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      ref: rootRef,
      onPointerMove: handlePointerMove,
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
      className: `relative h-full w-full overflow-hidden ${className}`,
      style: { background: bg },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("canvas", { ref: topoRef, className: "absolute inset-0 h-full w-full" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "canvas",
          {
            ref: ambRef,
            className: "pointer-events-none absolute inset-0 h-full w-full",
            style: { opacity: 1 }
          }
        ),
        showHeadline && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "pointer-events-none absolute inset-0 flex select-none items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "span",
          {
            className: "font-black uppercase leading-none",
            style: {
              fontSize: "clamp(80px, 20vw, 280px)",
              color: "transparent",
              WebkitTextStroke: `1px ${wire}66`
            },
            children: headline
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "div",
          {
            className: "absolute overflow-hidden",
            style: {
              left: box.x,
              top: box.y,
              width: box.w,
              height: box.h,
              borderRadius: `${radius}px`
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "img",
                {
                  src: baseSrc,
                  alt: "",
                  draggable: false,
                  className: "absolute inset-0  h-full w-full select-none object-cover pointer-events-none",
                  style: {
                    borderRadius: `${radius}px`,
                    transform: flipBase ? "scaleX(-1)" : void 0
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "canvas",
                {
                  ref: revRef,
                  className: "absolute inset-0 h-full w-full pointer-events-none",
                  style: {
                    borderRadius: `${radius}px`,
                    opacity: debugAlign ? 0.5 : void 0
                  }
                }
              ),
              showHud && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                  "svg",
                  {
                    viewBox: `${HEAD_VB.x} ${HEAD_VB.y} ${HEAD_VB.w} ${HEAD_VB.h}`,
                    preserveAspectRatio: stretchHud ? "none" : "xMidYMid meet",
                    className: "pointer-events-none absolute",
                    style: {
                      left: `${hb.x * 100}%`,
                      top: `${hb.y * 100}%`,
                      width: `${hb.w * 100}%`,
                      height: `${hb.h * 100}%`,
                      outline: debugHead ? "1px dashed #ff00ff" : "none"
                    },
                    fill: "none",
                    stroke: wire,
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    shapeRendering: "geometricPrecision",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("defs", { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("clipPath", { id: shellId, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: HELMET.shell }) }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("clipPath", { id: wipeId, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { ref: wipeRef, x: HEAD_VB.x, y: HEAD_VB.y, width: HEAD_VB.w, height: "0" }) })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { clipPath: `url(#${wipeId})`, children: customSvgMarkup ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { dangerouslySetInnerHTML: { __html: customSvgMarkup } }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: HELMET.shell, fill: "#ffffff", fillOpacity: "0.16", stroke: "none" }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: HELMET.visor, fill: wire, fillOpacity: "0.07", stroke: "none" }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { clipPath: `url(#${shellId})`, opacity: "0.5", strokeWidth: "0.6", children: [
                          HELMET.latitudes.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d, ...VE }, "la" + i)),
                          HELMET.meridians.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d, ...VE }, "me" + i))
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: HELMET.shell, strokeWidth: "1.2", ...VE }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: HELMET.visor, strokeWidth: "1", ...VE }),
                        HELMET.details.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d, opacity: "0.6", ...VE }, "de" + i))
                      ] }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { ref: scanRef, opacity: "0", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: HEAD_VB.x, x2: HEAD_VB.x + HEAD_VB.w, y1: "0", y2: "0", stroke: wire, strokeWidth: "4", opacity: "0.18", ...VE }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: HEAD_VB.x, x2: HEAD_VB.x + HEAD_VB.w, y1: "0", y2: "0", stroke: wire, strokeWidth: "1.2", opacity: "0.9", ...VE })
                      ] })
                    ]
                  }
                ),
                showTelemetry && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                  "div",
                  {
                    className: "pointer-events-none absolute left-3 top-3 font-mono text-[11px] leading-4",
                    style: { color: wire },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                        "SPD ",
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { ref: spdRef, children: "0 KM/H" })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                        "LIVERY ",
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { ref: covRef, children: "0%" })
                      ] })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}

// src/components/ui/infinite-tunnel-hero.jsx
var import_react4 = __toESM(require("react"), 1);
var import_gsap = __toESM(require("gsap"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var SHAPES = [
  [[523.9, 887.7], [391.2, 887.7], [520.1, 824], [624.3, 824]],
  [[137.3, 845.2], [0, 886.1], [0, 923.1], [24.2, 923.1], [250.9, 845.2]],
  [[402.1, 861.6], [281.1, 861.6], [422.9, 807.6], [519.7, 807.6]],
  [[678.9, 848.9], [563.5, 848.9], [645.6, 799.3], [738.8, 799.3]],
  [[747.6, 1053.5], [310.7, 1053.5], [633, 834.2], [862.7, 834.2]],
  [[0, 992], [0, 1080], [180.8, 1080], [326.5, 992]],
  [[376.6, 843.5], [0, 998.4], [0, 1028.3], [418.6, 843.5]],
  [[760.4, 843.5], [802.4, 843.5], [864.4, 760.2], [836.3, 760.2]],
  [[372.6, 795.5], [0, 918.8], [0, 931.1], [19.4, 931.1], [406.6, 795.5]],
  [[1364.5, 862.3], [1664.8, 1080], [1746.1, 1080], [1409.6, 862.3]],
  [[108.2, 908.8], [0, 947.8], [0, 1005.5], [231.4, 1005.5], [408.5, 908.8]],
  [[975.2, 878.9], [703.3, 878.9], [806.5, 775.5], [980.7, 775.5]],
  [[1064.8, 804.3], [940.8, 804.3], [950.9, 760.9], [1049.7, 760.9]],
  [[1261.3, 803.3], [1138, 803.3], [1108, 760.2], [1206.3, 760.2]],
  [[1410.6, 817.1], [1307.3, 817.1], [1239.7, 768.9], [1321, 768.9]],
  [[1368.7, 804.3], [1271.2, 804.3], [1214, 760.9], [1291.6, 760.9]],
  [[1459.5, 785.9], [1370.5, 785.9], [1320.3, 760.2], [1397.6, 760.2]],
  [[1564.7, 844.8], [1508.1, 844.8], [1379.6, 781.8], [1422.2, 781.8]],
  [[475.7, 959.8], [308, 1080], [531.4, 1080], [644.2, 959.8]],
  [[480.3, 826.2], [372.8, 826.2], [508.7, 774.5], [592.5, 774.5]],
  [[509.7, 803.3], [412.7, 803.3], [530, 760.2], [607.3, 760.2]],
  [[377.9, 811.7], [249.6, 811.7], [422.5, 760.2], [520.9, 760.2]],
  [[783.4, 953.1], [710.7, 1080], [995, 1080], [993.8, 953.1]],
  [[1070.8, 1011.5], [872.1, 1011.5], [906.5, 889.3], [1047.4, 889.3]],
  [[1116.1, 951.4], [1161, 1080], [1472.5, 1080], [1345.7, 951.4]],
  [[1576.9, 1040.7], [1290.5, 1040.7], [1199, 903.7], [1398.1, 903.7]],
  [[707.4, 795.8], [576.9, 795.8], [645.7, 761.7], [754.5, 761.7]],
  [[1186.3, 925.9], [1028.1, 925.9], [1013.7, 797.9], [1111.5, 797.9]],
  [[1477.3, 886.1], [1187.3, 886.1], [1134.9, 807.5], [1347.5, 807.5]],
  [[0, 959.8], [0, 968.2], [21.8, 959.8]],
  [[1234.9, 864.1], [1065.4, 864.1], [1056.5, 831.6], [1205.8, 831.6]],
  [[599.2, 806.7], [465.3, 806.7], [515.9, 785.9], [636.9, 785.9]],
  [[1291.4, 909.8], [1317.9, 909.8], [1296.8, 889.3], [1272, 889.3]],
  [[1059.7, 1054.2], [1063.5, 1080], [1104.2, 1080], [1098.2, 1054.2]],
  [[1504.4, 1041.6], [1548.3, 1080], [1588.9, 1080], [1541.9, 1041.6]],
  [[1081.7, 781.1], [1097.5, 781.1], [1093.2, 773.6], [1078.1, 773.6]],
  [[1349.6, 817.1], [1368.4, 817.1], [1350.8, 806.6], [1332.9, 806.6]],
  [[898.3, 766.6], [912.8, 766.6], [915.7, 760.2], [901.6, 760.2]],
  [[528.7, 827.3], [548.4, 827.3], [569.8, 815.9], [551.1, 815.9]],
  [[764.6, 781.1], [780.4, 781.1], [788.7, 773.6], [773.5, 773.6]],
  [[338.1, 965.3], [369.3, 965.3], [415.7, 937.3], [386.9, 937.3]],
  [[174.8, 897.3], [200.3, 897.3], [249.3, 878.3], [225.4, 878.3]],
  [[168.2, 840.8], [188.9, 840.8], [229.9, 828], [210.2, 828]],
  [[699.4, 844.8], [720.5, 844.8], [734.6, 831.6], [714.5, 831.6]],
  [[1672, 900.6], [1533.5, 900.6], [1412.8, 831.8], [1520.5, 831.8]],
  [[1524.4, 876], [1906.8, 1080], [1920, 1080], [1920, 920.8], [1793.6, 876]],
  [[1905.9, 903.7], [1920, 908.5], [1920, 903.7]],
  [[1744.5, 892.8], [1794.7, 892.8], [1496.8, 781.1], [1465.2, 781.1]],
  [[1495.6, 800.5], [1844.3, 945], [1920, 945], [1920, 867.9], [1693.5, 800.5]],
  [[1712.7, 817.1], [1609.4, 817.1], [1477.3, 768.9], [1558.6, 768.9]],
  [[1471.7, 807.7], [1489.7, 807.7], [1467.4, 798], [1450.2, 798]],
  [[1677.6, 894.7], [1702.8, 894.7], [1659, 876], [1635.3, 876]]
];
var LOOP_SECONDS = 8 / 1.05;
var GAP = 120;
var SHAPE_COPIES = 4;
var PARTICLE_COUNT = 300;
var GLOW_ON = true;
var SIDE_STEP = 600;
var W = 1920;
var H = 1080;
var VX = 960;
var VY = 540;
var PINK = "#FF52EF";
var BG = "#1F0038";
var GRID_Y = [
  760.234,
  761.142,
  763.949,
  768.853,
  776.024,
  785.614,
  797.775,
  812.701,
  830.564,
  851.494,
  875.708,
  903.334,
  934.568,
  969.56,
  1008.46,
  1051.49
];
var GRID_Y_EXIT = 1100;
var RADIAL_X = Array.from({ length: 12 }, (_, i) => 126.298 + i * 151.6);
var RADIAL_Y0 = 760.234;
var BOTTOM_EDGE = 560.234;
var TOP_EDGE = H - BOTTOM_EDGE;
var mirrorY = (y) => H - y;
var toPoints = (pts, mirror) => pts.map(([x, y]) => `${x},${mirror ? mirrorY(y) : y}`).join(" ");
var yAt = (u) => {
  const ys = [GRID_Y[0], ...GRID_Y, GRID_Y_EXIT];
  const i = Math.max(0, Math.min(ys.length - 2, Math.floor(u + 1)));
  const t = u + 1 - i;
  return ys[i] + (ys[i + 1] - ys[i]) * t;
};
var radialEnd = (x0) => {
  const k = (H - RADIAL_Y0) / (RADIAL_Y0 - VY);
  return VX + (x0 - VX) * (1 + k);
};
var mulberry32 = (a) => () => {
  a |= 0;
  a = a + 1831565813 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
};
var rand = mulberry32(7);
var PARTICLE_COLORS = ["#FFFFFF", "#FFB8F8", PINK, "#FF8DF4"];
var PARTICLES = Array.from({ length: PARTICLE_COUNT }, () => ({
  x: -W * ((3 - 1) / 2) - 200 + rand() * (W * 3 + 400),
  // -200 + rand() * (W + 400)
  dy: 180 + rand() * 360,
  // center-la irundhu distance
  r: 0.8 + rand() * 1.8,
  speed: 1 + Math.floor(rand() * 2),
  // 1,2,3 (integer => seamless loop)
  off: rand(),
  color: PARTICLE_COLORS[Math.floor(rand() * PARTICLE_COLORS.length)]
}));
var flyState = (q) => {
  const s = 0.45 * Math.pow(4.2, q);
  const o = Math.max(0, Math.min(1, q / 0.15, (1 - q) / 0.2));
  return {
    o,
    tr: `translate(${VX} ${VY}) scale(${s * 1.2} ${s}) translate(${-VX} ${-VY})`
  };
};
function InfiniteTunnelHero({
  color = PINK,
  backgroundColor = BG,
  speed = 1,
  className = "",
  children
}) {
  const rootRef = (0, import_react4.useRef)(null);
  const hLines = (0, import_react4.useRef)([]);
  const shapesBottom = (0, import_react4.useRef)([]);
  const shapesTop = (0, import_react4.useRef)([]);
  const dotsBottom = (0, import_react4.useRef)([]);
  const dotsTop = (0, import_react4.useRef)([]);
  (0, import_react4.useEffect)(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const state = { p: 0 };
    const apply = (el, tr, o) => {
      if (!el) return;
      el.setAttribute("transform", tr);
      el.setAttribute("opacity", String(o));
    };
    const render = () => {
      const p = state.p;
      for (let j = -1; j < GRID_Y.length; j++) {
        const y = yAt(j + p);
        let o = 1;
        if (j === -1) o = p;
        if (j === GRID_Y.length - 1) o = 1 - p;
        const el = hLines.current[j + 1];
        if (el) {
          el.setAttribute("y1", String(y));
          el.setAttribute("y2", String(y));
          el.setAttribute("opacity", String(o));
        }
      }
      for (let i = 0; i < SHAPES.length; i++) {
        for (let c = 0; c < SHAPE_COPIES; c++) {
          const idx = i * SHAPE_COPIES + c;
          const base = i * 0.618034 + c / SHAPE_COPIES;
          const dx = (c - (SHAPE_COPIES - 1) / 2) * SIDE_STEP;
          const b = flyState((p + base) % 1, dx);
          const t = flyState((p + base + 0.31) % 1, -dx);
          apply(shapesBottom.current[idx], b.tr, b.o);
          apply(shapesTop.current[idx], t.tr, t.o);
        }
      }
      for (let i = 0; i < PARTICLES.length; i++) {
        const d = PARTICLES[i];
        const b = flyState((p * d.speed + d.off) % 1);
        const t = flyState((p * d.speed + d.off + 0.37) % 1);
        apply(dotsBottom.current[i], b.tr, b.o * 0.9);
        apply(dotsTop.current[i], t.tr, t.o * 0.9);
      }
    };
    if (reduce) {
      state.p = 0.3;
      render();
      return;
    }
    const ctx = import_gsap.default.context(() => {
      import_gsap.default.to(state, {
        p: 1,
        duration: LOOP_SECONDS / Math.max(0.1, speed),
        ease: "none",
        repeat: -1,
        onUpdate: render
      });
      import_gsap.default.to(".tunnel-glow", {
        opacity: 0.65,
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }, rootRef);
    render();
    return () => ctx.revert();
  }, [speed]);
  const shapeCount = SHAPES.length * SHAPE_COPIES;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: `relative h-screen w-full overflow-hidden  ${className}`,
      style: { background: backgroundColor },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "svg",
          {
            ref: rootRef,
            className: "pointer-events-none absolute inset-0 h-full w-full",
            viewBox: `0 0 ${W} ${H}`,
            preserveAspectRatio: "xMidYMid slice",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("defs", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("linearGradient", { id: "slabBottom", x1: "0", y1: "1", x2: "0", y2: "0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0", stopColor: color, stopOpacity: "0.9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", stopColor: color, stopOpacity: "0.35" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("linearGradient", { id: "slabTop", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0", stopColor: color, stopOpacity: "0.9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", stopColor: color, stopOpacity: "0.35" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                  "linearGradient",
                  {
                    id: "gridStroke",
                    gradientUnits: "userSpaceOnUse",
                    x1: "0",
                    y1: BOTTOM_EDGE,
                    x2: "0",
                    y2: "1100",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0", stopColor: color, stopOpacity: "1" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.08", stopColor: color, stopOpacity: "0.95" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.2", stopColor: color, stopOpacity: "0.8" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.45", stopColor: color, stopOpacity: "0.9" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", stopColor: color, stopOpacity: "0.45" })
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                  "linearGradient",
                  {
                    id: "gridFade",
                    gradientUnits: "userSpaceOnUse",
                    x1: "-480",
                    y1: "0",
                    x2: "2400",
                    y2: "0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.02", stopColor: "#292929" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.05", stopColor: "#565656" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.09", stopColor: "#7E7E7E" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.12", stopColor: "#A1A1A1" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.2", stopColor: "#D6D6D6" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.3", stopColor: "#F5F5F5" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.54", stopColor: "#FFFFFF" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.74", stopColor: "#E2E2E2" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.88", stopColor: "#8B8B8B" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.96", stopColor: "#323232" })
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "mask",
                  {
                    id: "gridMask",
                    maskUnits: "userSpaceOnUse",
                    x: "-480",
                    y: "0",
                    width: "2880",
                    height: "1300",
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: "-480", y: "0", width: "2880", height: "1300", fill: "url(#gridFade)" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("radialGradient", { id: "glow", cx: "50%", cy: "50%", r: "50%", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.02", stopColor: color, stopOpacity: "1" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.07", stopColor: color, stopOpacity: "0.95" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.19", stopColor: color, stopOpacity: "0.8" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.45", stopColor: color, stopOpacity: "0.45" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", stopColor: color, stopOpacity: "0" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { transform: `translate(0 ${GAP})`, children: [
                GLOW_ON && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { className: "tunnel-glow", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "rect",
                    {
                      x: VX - 1400,
                      y: BOTTOM_EDGE + 60,
                      width: 2800,
                      height: 60,
                      fill: "url(#glow)"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "rect",
                    {
                      x: VX - 1e3,
                      y: BOTTOM_EDGE - 110,
                      width: 2e3,
                      height: 220,
                      fill: "url(#glow)",
                      opacity: "0.22"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { stroke: "url(#gridStroke)", strokeWidth: "0.8", mask: "url(#gridMask)", children: [
                  RADIAL_X.map((x) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: x, y1: RADIAL_Y0, x2: radialEnd(x), y2: H }, `rb-${x}`)),
                  Array.from({ length: GRID_Y.length + 1 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "line",
                    {
                      ref: (el) => {
                        hLines.current[i] = el;
                      },
                      x1: -480,
                      x2: 2400,
                      y1: GRID_Y[0],
                      y2: GRID_Y[0],
                      opacity: "0"
                    },
                    `hb-${i}`
                  ))
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { style: { mixBlendMode: "screen" }, children: [
                  Array.from({ length: shapeCount }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "polygon",
                    {
                      ref: (el) => {
                        shapesBottom.current[k] = el;
                      },
                      points: toPoints(SHAPES[Math.floor(k / SHAPE_COPIES)], false),
                      fill: "url(#slabBottom)",
                      stroke: color,
                      strokeWidth: "1.5",
                      vectorEffect: "non-scaling-stroke",
                      opacity: "0"
                    },
                    `sb-${k}`
                  )),
                  PARTICLES.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "circle",
                    {
                      ref: (el) => {
                        dotsBottom.current[i] = el;
                      },
                      cx: d.x,
                      cy: VY + d.dy,
                      r: d.r,
                      fill: d.color === "#FFFFFF" ? "#FFFFFF" : color,
                      opacity: "0"
                    },
                    `pb-${i}`
                  ))
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { transform: `translate(0 ${-GAP})`, children: [
                GLOW_ON && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { className: "tunnel-glow", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "rect",
                    {
                      x: VX - 1400,
                      y: TOP_EDGE - 130,
                      width: 2800,
                      height: 60,
                      fill: "url(#glow)"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "rect",
                    {
                      x: VX - 1e3,
                      y: TOP_EDGE - 110,
                      width: 2e3,
                      height: 220,
                      fill: "url(#glow)",
                      opacity: "0.22"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { style: { mixBlendMode: "screen" }, children: [
                  Array.from({ length: shapeCount }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "polygon",
                    {
                      ref: (el) => {
                        shapesTop.current[k] = el;
                      },
                      points: toPoints(SHAPES[Math.floor(k / SHAPE_COPIES)], true),
                      fill: "url(#slabTop)",
                      stroke: color,
                      strokeWidth: "1.5",
                      vectorEffect: "non-scaling-stroke",
                      opacity: "0"
                    },
                    `st-${k}`
                  )),
                  PARTICLES.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "circle",
                    {
                      ref: (el) => {
                        dotsTop.current[i] = el;
                      },
                      cx: W - d.x,
                      cy: VY - d.dy,
                      r: d.r,
                      fill: d.color === "#FFFFFF" ? "#FFFFFF" : color,
                      opacity: "0"
                    },
                    `pt-${i}`
                  ))
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative z-10  flex h-full w-full items-center justify-center", children })
      ]
    }
  );
}

// src/components/ui/scrollsmoothprovider.jsx
var import_react5 = __toESM(require("react"), 1);
var import_lenis = __toESM(require("lenis"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
function SmoothScrollProvider({ children, pathname: propPathname }) {
  const lenisRef = (0, import_react5.useRef)(null);
  const [currentPath, setCurrentPath] = (0, import_react5.useState)(
    () => typeof window !== "undefined" ? window.location.pathname : ""
  );
  (0, import_react5.useEffect)(() => {
    const lenis = new import_lenis.default({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      lerp: 0.08,
      autoRaf: false
    });
    lenisRef.current = lenis;
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    if (typeof document !== "undefined" && document.body) {
      resizeObserver.observe(document.body);
    }
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
  const activePath = propPathname !== void 0 ? propPathname : currentPath;
  (0, import_react5.useEffect)(() => {
    if (!lenisRef.current) return;
    lenisRef.current.scrollTo(0, { immediate: true });
    const timeout = setTimeout(() => {
      var _a;
      (_a = lenisRef.current) == null ? void 0 : _a.resize();
    }, 50);
    return () => clearTimeout(timeout);
  }, [activePath]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children });
}

// src/components/ui/liquidGlassButton.jsx
var import_react6 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
function LiquidGlassButton({
  children = "Liquid Glass Button",
  className = "",
  onClick,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "button",
    {
      type: "button",
      onClick,
      className: `relative inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${className}`,
      ...props,
      children
    }
  );
}
var liquidGlassButton = LiquidGlassButton;

// src/components/ui/stacked-cards-scroll.jsx
var import_react7 = __toESM(require("react"), 1);
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var DEFAULT_STACKED_CARDS = [
  {
    id: 1,
    number: "01",
    oneWord: "LIQUID",
    tag: "FLUID DYNAMICS",
    title: "Liquid Morph",
    subtitle: "Organic Fluid Simulation",
    description: "Multi-layer fluid mesh with real-time marching squares topography.",
    accent: "#c084fc",
    // Light Purple / Violet
    cardBg: "linear-gradient(145deg, rgba(88, 28, 135, 0.9) 0%, rgba(20, 8, 38, 0.96) 100%)",
    borderGlow: "rgba(192, 132, 252, 0.5)"
  },
  {
    id: 2,
    number: "02",
    oneWord: "PHOSPHOR",
    tag: "PARTICLE OPTICS",
    title: "Phosphor CRT",
    subtitle: "Terminal ASCII Dispersion",
    description: "High-contrast character matrix with spring physics return.",
    accent: "#a855f7",
    // Vibrant Violet
    cardBg: "linear-gradient(145deg, rgba(107, 33, 168, 0.9) 0%, rgba(23, 7, 43, 0.96) 100%)",
    borderGlow: "rgba(168, 85, 247, 0.5)"
  },
  {
    id: 3,
    number: "03",
    oneWord: "TUNNEL",
    tag: "GEOMETRIC SPACE",
    title: "Infinite Tunnel",
    subtitle: "Recursive Wireframe Warp",
    description: "Hypnotic depth-field rings warping with mouse acceleration.",
    accent: "#9333ea",
    // Deep Purple
    cardBg: "linear-gradient(145deg, rgba(88, 28, 135, 0.9) 0%, rgba(18, 5, 36, 0.96) 100%)",
    borderGlow: "rgba(147, 51, 234, 0.5)"
  },
  {
    id: 4,
    number: "04",
    oneWord: "PARALLAX",
    tag: "PERSPECTIVE ENGINE",
    title: "3D Parallax",
    subtitle: "Spatial Matrix Tilt",
    description: "Natural inertial cursor-coupled tilt calculations.",
    accent: "#c084fc",
    cardBg: "linear-gradient(145deg, rgba(109, 40, 217, 0.9) 0%, rgba(26, 10, 56, 0.96) 100%)",
    borderGlow: "rgba(192, 132, 252, 0.5)"
  },
  {
    id: 5,
    number: "05",
    oneWord: "VELOCITY",
    tag: "SPRING MECHANICS",
    title: "Elastic Velocity",
    subtitle: "Harmonic Damping Equations",
    description: "Physical simulation engine modeling mass and stiffness.",
    accent: "#d8b4fe",
    // Lavender Purple
    cardBg: "linear-gradient(145deg, rgba(76, 29, 149, 0.9) 0%, rgba(18, 7, 40, 0.96) 100%)",
    borderGlow: "rgba(216, 180, 254, 0.5)"
  },
  {
    id: 6,
    number: "06",
    oneWord: "SHADERS",
    tag: "SHADING PIPELINE",
    title: "WebGL Shader",
    subtitle: "Low-Level GPU Fragment",
    description: "Raw GLSL shader passes compiling directly to GPU contexts.",
    accent: "#a855f7",
    cardBg: "linear-gradient(145deg, rgba(91, 33, 182, 0.9) 0%, rgba(22, 8, 48, 0.96) 100%)",
    borderGlow: "rgba(168, 85, 247, 0.5)"
  },
  {
    id: 7,
    number: "07",
    oneWord: "TOPOLOGY",
    tag: "ELEVATION FIELD",
    title: "Marching Squares",
    subtitle: "Isoline Contour Topography",
    description: "Dynamic topological vector contour lines over scalar fields.",
    accent: "#e9d5ff",
    cardBg: "linear-gradient(145deg, rgba(107, 33, 168, 0.9) 0%, rgba(24, 7, 46, 0.96) 100%)",
    borderGlow: "rgba(233, 213, 255, 0.5)"
  },
  {
    id: 8,
    number: "08",
    oneWord: "OPTICS",
    tag: "HUD TELEMETRY",
    title: "Optical Gauges",
    subtitle: "Semi-Circle Arc Radar HUD",
    description: "Vector arc telemetry instruments with dasharray tracking.",
    accent: "#c084fc",
    cardBg: "linear-gradient(145deg, rgba(88, 28, 135, 0.9) 0%, rgba(20, 8, 38, 0.96) 100%)",
    borderGlow: "rgba(192, 132, 252, 0.5)"
  },
  {
    id: 9,
    number: "09",
    oneWord: "SPECTRUM",
    tag: "FREQUENCY SPECTRUM",
    title: "Sound Reactive",
    subtitle: "Fast Fourier Transform",
    description: "Audio frequency FFT frequency spectrum visualizers.",
    accent: "#d8b4fe",
    cardBg: "linear-gradient(145deg, rgba(109, 40, 217, 0.9) 0%, rgba(26, 10, 56, 0.96) 100%)",
    borderGlow: "rgba(216, 180, 254, 0.5)"
  },
  {
    id: 10,
    number: "10",
    oneWord: "ADAPTIVE",
    tag: "MODULAR CORE",
    title: "Adaptive Core",
    subtitle: "Zero Runtime Framework",
    description: "Tree-shakeable architecture with universal Next.js compatibility.",
    accent: "#a855f7",
    cardBg: "linear-gradient(145deg, rgba(76, 29, 149, 0.9) 0%, rgba(18, 7, 40, 0.96) 100%)",
    borderGlow: "rgba(168, 85, 247, 0.5)"
  }
];
function HalfRingGauge({
  currentIndex,
  total = 10,
  accentColor = "#a855f7"
}) {
  const radius = 80;
  const cx = 100;
  const cy = 100;
  const arcLength = Math.PI * radius;
  const progress = total > 1 ? currentIndex / (total - 1) : 0;
  const strokeOffset = arcLength * (1 - progress);
  const angle = Math.PI * (1 - progress);
  const dotX = cx + radius * Math.cos(angle);
  const dotY = cy - radius * Math.sin(angle);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative flex items-center justify-center select-none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "svg",
      {
        viewBox: "0 0 200 120",
        className: "w-48 sm:w-56 h-28 sm:h-32 overflow-visible drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("defs", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("linearGradient", { id: "purpleRingGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "0%", stopColor: "#7e22ce" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "50%", stopColor: "#a855f7" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("stop", { offset: "100%", stopColor: "#e9d5ff" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("filter", { id: "purpleGlow", x: "-20%", y: "-20%", width: "140%", height: "140%", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("feGaussianBlur", { stdDeviation: "5", result: "blur" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("feMerge", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("feMergeNode", { in: "blur" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("feMergeNode", { in: "SourceGraphic" })
              ] })
            ] })
          ] }),
          Array.from({ length: 19 }).map((_, i) => {
            const tAngle = Math.PI * (1 - i / 18);
            const r1 = radius + 8;
            const r2 = radius + (i % 2 === 0 ? 15 : 12);
            const x1 = cx + r1 * Math.cos(tAngle);
            const y1 = cy - r1 * Math.sin(tAngle);
            const x2 = cx + r2 * Math.cos(tAngle);
            const y2 = cy - r2 * Math.sin(tAngle);
            const isPassed = i / 18 <= progress;
            return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "line",
              {
                x1,
                y1,
                x2,
                y2,
                stroke: isPassed ? "#c084fc" : "#27272a",
                strokeWidth: i % 2 === 0 ? 1.5 : 1,
                strokeOpacity: isPassed ? 1 : 0.4,
                className: "transition-colors duration-300"
              },
              i
            );
          }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "path",
            {
              d: "M 20 100 A 80 80 0 0 1 180 100",
              fill: "none",
              stroke: "#1e1830",
              strokeWidth: "7",
              strokeLinecap: "round"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "path",
            {
              d: "M 20 100 A 80 80 0 0 1 180 100",
              fill: "none",
              stroke: "url(#purpleRingGrad)",
              strokeWidth: "7",
              strokeLinecap: "round",
              strokeDasharray: arcLength,
              strokeDashoffset: strokeOffset,
              filter: "url(#purpleGlow)",
              className: "transition-all duration-500 ease-out"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "circle",
            {
              cx: dotX,
              cy: dotY,
              r: "6",
              fill: "#ffffff",
              className: "transition-all duration-500 ease-out drop-shadow-[0_0_10px_#c084fc]"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "circle",
            {
              cx: dotX,
              cy: dotY,
              r: "10",
              fill: "#a855f7",
              fillOpacity: "0.5",
              className: "transition-all duration-500 ease-out animate-pulse"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute bottom-2 flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "font-mono text-xl sm:text-2xl font-black tracking-tight text-white", children: [
      String(currentIndex + 1).padStart(2, "0"),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-xs font-normal text-purple-300/60 ml-1", children: "/10" })
    ] }) })
  ] });
}
function StackedCardsScroll({
  cards = DEFAULT_STACKED_CARDS,
  initialIndex = 0,
  enableWheelScroll = true,
  pin = false,
  pinHeight = "280vh",
  autoPlay = false,
  autoPlayInterval = 4e3,
  className = "",
  onChange
}) {
  const [activeIndex, setActiveIndex] = (0, import_react7.useState)(initialIndex);
  const [isHovered, setIsHovered] = (0, import_react7.useState)(false);
  const containerRef = (0, import_react7.useRef)(null);
  const pinTrackRef = (0, import_react7.useRef)(null);
  const lastScrollTime = (0, import_react7.useRef)(0);
  const totalCards = cards.length;
  const currentCard = cards[activeIndex] || cards[0];
  const handleNext = (0, import_react7.useCallback)(() => {
    setActiveIndex((prev) => {
      const next = prev < totalCards - 1 ? prev + 1 : 0;
      if (onChange) onChange(next, cards[next]);
      return next;
    });
  }, [totalCards, cards, onChange]);
  const handlePrev = (0, import_react7.useCallback)(() => {
    setActiveIndex((prev) => {
      const next = prev > 0 ? prev - 1 : totalCards - 1;
      if (onChange) onChange(next, cards[next]);
      return next;
    });
  }, [totalCards, cards, onChange]);
  const handleSelect = (0, import_react7.useCallback)(
    (index) => {
      if (index >= 0 && index < totalCards) {
        setActiveIndex(index);
        if (onChange) onChange(index, cards[index]);
      }
    },
    [totalCards, cards, onChange]
  );
  const handleWheel = (0, import_react7.useCallback)(
    (e) => {
      if (pin) return;
      if (!enableWheelScroll) return;
      const now = Date.now();
      if (now - lastScrollTime.current < 260) return;
      if (e.deltaY > 20) {
        lastScrollTime.current = now;
        handleNext();
      } else if (e.deltaY < -20) {
        lastScrollTime.current = now;
        handlePrev();
      }
    },
    [pin, enableWheelScroll, handleNext, handlePrev]
  );
  (0, import_react7.useEffect)(() => {
    if (!pin) return;
    const track = pinTrackRef.current;
    if (!track) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = track.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalDistance = rect.height - windowHeight;
          if (totalDistance > 0) {
            const scrolled = -rect.top;
            const progress = Math.min(Math.max(scrolled / totalDistance, 0), 1);
            const targetIndex = Math.min(
              Math.floor(progress * totalCards),
              totalCards - 1
            );
            setActiveIndex((prev) => {
              if (prev !== targetIndex) {
                if (onChange) onChange(targetIndex, cards[targetIndex]);
                return targetIndex;
              }
              return prev;
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pin, totalCards, cards, onChange]);
  (0, import_react7.useEffect)(() => {
    if (pin || !autoPlay || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [pin, autoPlay, isHovered, autoPlayInterval, handleNext]);
  const deckNode = /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      ref: containerRef,
      onWheel: handleWheel,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      tabIndex: 0,
      style: {
        backgroundAttachment: "fixed"
      },
      className: `relative w-full rounded-3xl border border-purple-500/20 bg-[#070512]/95 backdrop-blur-2xl p-6 sm:p-8 md:p-10 select-none overflow-hidden outline-none shadow-[0_0_50px_rgba(168,85,247,0.15)] ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "pointer-events-none absolute -top-24 -left-24 size-96 rounded-full blur-3xl opacity-30 bg-purple-600 transition-all duration-700" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full blur-3xl opacity-25 bg-violet-500 transition-all duration-700" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-purple-500/15 pb-4 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "size-8 rounded-lg border border-purple-500/30 bg-purple-500/15 flex items-center justify-center text-purple-400", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Layers, { size: 16 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h3", { className: "font-sans font-bold text-base text-white flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "3D Stacked Cards Deck" }),
                pin && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "inline-flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Pin, { size: 10 }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "Pinned" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "font-mono text-xs text-purple-300/70", children: "Top Stack Layered Fan \u2022 Odd/Even Alternating Rotation" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "hidden sm:inline-flex text-[11px] font-mono text-purple-300/60 bg-purple-950/40 px-2.5 py-1 rounded-full border border-purple-500/20", children: pin ? "Scroll down to flip" : "Scroll wheel or click" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-1.5 bg-black/50 border border-purple-500/20 rounded-lg p-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "button",
                {
                  type: "button",
                  onClick: handlePrev,
                  className: "p-1.5 rounded text-purple-300 hover:text-white hover:bg-purple-500/20 transition-colors cursor-pointer",
                  "aria-label": "Previous card",
                  children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.ChevronLeft, { size: 16 })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "font-mono text-xs px-2 text-white font-semibold", children: [
                String(activeIndex + 1).padStart(2, "0"),
                "/",
                totalCards
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "button",
                {
                  type: "button",
                  onClick: handleNext,
                  className: "p-1.5 rounded text-purple-300 hover:text-white hover:bg-purple-500/20 transition-colors cursor-pointer",
                  "aria-label": "Next card",
                  children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.ChevronRight, { size: 16 })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "lg:col-span-6 flex items-center justify-center py-10 px-2", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "relative w-full max-w-[340px] sm:max-w-[370px] h-[380px] flex items-center justify-center perspective-[1000px]", children: cards.map((card, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;
            let rotateDeg = 0;
            let translateY = 0;
            let scale = 1;
            let zIndex = 30 - Math.abs(offset);
            let opacity = 1;
            let pointerEvents = "auto";
            if (isActive) {
              rotateDeg = 0;
              translateY = 0;
              scale = 1;
              zIndex = 40;
              opacity = 1;
            } else if (offset > 0) {
              const sign = index % 2 === 0 ? 1 : -1;
              rotateDeg = sign * (3.2 + offset * 1.1);
              translateY = -offset * 13;
              scale = Math.max(0.74, 1 - offset * 0.035);
              opacity = Math.max(0.35, 1 - offset * 0.075);
            } else {
              const sign = index % 2 === 0 ? -1 : 1;
              rotateDeg = sign * 14;
              translateY = 70 + Math.abs(offset) * 15;
              scale = 1.05;
              opacity = 0;
              pointerEvents = "none";
            }
            return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
              "div",
              {
                onClick: () => handleSelect(index),
                style: {
                  transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotateDeg}deg)`,
                  zIndex,
                  opacity,
                  pointerEvents,
                  background: card.cardBg,
                  borderColor: isActive ? "#c084fc" : "rgba(168, 85, 247, 0.3)",
                  transition: "transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.5s ease, z-index 0.5s ease, border-color 0.4s ease",
                  boxShadow: isActive ? "0 25px 50px -15px rgba(168, 85, 247, 0.5), 0 0 30px -5px rgba(168, 85, 247, 0.4)" : "0 10px 25px -10px rgba(0,0,0,0.7)"
                },
                className: "absolute top-0 w-full h-full rounded-2xl p-6 cursor-pointer border flex flex-col justify-between overflow-hidden backdrop-blur-md",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent pointer-events-none" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative z-10 flex items-center justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "text-xs font-mono font-bold px-2.5 py-1 rounded-md border text-purple-300 bg-purple-950/60 border-purple-400/40", children: [
                      "CARD ",
                      card.number
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-[10px] font-mono tracking-widest uppercase text-purple-200/90 font-semibold", children: card.tag })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative z-10 my-auto flex flex-col items-center justify-center py-4", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "size-16 rounded-2xl flex items-center justify-center border border-purple-400/40 bg-purple-950/50 shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-transform duration-500 hover:scale-110", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Sparkles, { size: 28, className: "text-purple-300" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h4", { className: "mt-4 font-sans font-bold text-lg text-white text-center tracking-tight", children: card.title }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mt-1 text-xs font-mono text-purple-300/80 text-center", children: card.subtitle })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative z-10 border-t border-purple-500/20 pt-3 flex items-center justify-between text-[11px] font-mono text-purple-300/70", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "size-2 rounded-full bg-purple-400 animate-ping" }),
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "font-medium text-white", children: "Active Vector" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
                      "Deck ",
                      index + 1,
                      " of ",
                      totalCards
                    ] })
                  ] })
                ]
              },
              card.id
            );
          }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "lg:col-span-6 flex items-center justify-center py-6", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-3xl border border-purple-500/20 bg-purple-950/20 backdrop-blur-xl w-full max-w-lg shadow-[0_0_40px_rgba(168,85,247,0.1)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              HalfRingGauge,
              {
                currentIndex: activeIndex,
                total: totalCards,
                accentColor: "#a855f7"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-col items-center sm:items-start text-center sm:text-left justify-center min-w-[180px]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "text-[11px] font-mono tracking-widest uppercase text-purple-400/80 font-semibold", children: [
                "STAGE ",
                currentCard.number
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "h2",
                {
                  className: "font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mt-1 animate-[fadeIn_0.35s_ease-out]",
                  style: {
                    textShadow: "0 0 30px rgba(168, 85, 247, 0.7), 0 0 60px rgba(168, 85, 247, 0.3)"
                  },
                  children: currentCard.oneWord
                },
                currentCard.oneWord
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-xs font-mono text-purple-300/70 mt-1", children: currentCard.subtitle })
            ] })
          ] }) })
        ] })
      ]
    }
  );
  if (pin) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        ref: pinTrackRef,
        style: { minHeight: pinHeight },
        className: "relative w-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "sticky top-20 w-full z-20", children: deckNode })
      }
    );
  }
  return deckNode;
}

// src/components/ui/curved-grid-canvas.jsx
var import_react8 = __toESM(require("react"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
function CurvedGridCanvas({
  cellSize = 50,
  accentColor: propAccentColor,
  fadeSpeed = 0.65,
  // energy decay per second
  className = ""
}) {
  const canvasRef = (0, import_react8.useRef)(null);
  const activeSquaresRef = (0, import_react8.useRef)(/* @__PURE__ */ new Map());
  const trailRef = (0, import_react8.useRef)([]);
  const mouseRef = (0, import_react8.useRef)({
    x: -9999,
    y: -9999,
    isDown: false,
    lastCol: -1,
    lastRow: -1
  });
  (0, import_react8.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId;
    let lastTime = performance.now();
    const getAccentTheme = () => {
      if (propAccentColor) {
        return {
          hex: propAccentColor,
          rgb: "168, 85, 247"
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
    const handlePointerMove = (e) => {
      const mx = e.clientX;
      const my = e.clientY;
      mouseRef.current.x = mx;
      mouseRef.current.y = my;
      const col = Math.floor(mx / cellSize);
      const row = Math.floor(my / cellSize);
      if (col < 0 || row < 0) return;
      const isNewSquare = col !== mouseRef.current.lastCol || row !== mouseRef.current.lastRow;
      const key = `${col},${row}`;
      const cx = col * cellSize + cellSize / 2;
      const cy = row * cellSize + cellSize / 2;
      const pullFactor = mouseRef.current.isDown ? 0.35 : 0.18;
      const effCx = cx + (mx - cx) * pullFactor;
      const effCy = cy + (my - cy) * pullFactor;
      const now = performance.now();
      activeSquaresRef.current.set(key, {
        col,
        row,
        cx,
        cy,
        effCx,
        effCy,
        energy: 1,
        isDown: mouseRef.current.isDown,
        updatedAt: now
      });
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
          energy: 1,
          isDown: mouseRef.current.isDown,
          createdAt: now
        });
        if (trailRef.current.length > 40) {
          trailRef.current.shift();
        }
      } else {
        const lastNode = trailRef.current[trailRef.current.length - 1];
        if (lastNode && lastNode.key === key) {
          lastNode.effCx = effCx;
          lastNode.effCy = effCy;
          lastNode.energy = 1;
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
    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1e3, 0.1);
      lastTime = time;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cols = Math.ceil(w / cellSize);
      const rows = Math.ceil(h / cellSize);
      const { hex: accentColor, rgb: accentRgb } = getAccentTheme();
      ctx.clearRect(0, 0, w, h);
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
      ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
      for (let c = 0; c <= cols; c += 2) {
        for (let r = 0; r <= rows; r += 2) {
          ctx.fillRect(c * cellSize - 1, r * cellSize - 1, 2, 2);
        }
      }
      for (const [key, sq] of activeSquaresRef.current.entries()) {
        sq.energy -= dt * fadeSpeed;
        if (sq.energy <= 0) {
          activeSquaresRef.current.delete(key);
        }
      }
      for (let i = trailRef.current.length - 1; i >= 0; i--) {
        const node = trailRef.current[i];
        node.energy -= dt * fadeSpeed;
        if (node.energy <= 0) {
          trailRef.current.splice(i, 1);
        }
      }
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
        ctx.strokeStyle = `rgba(${accentRgb}, ${alpha * 0.85})`;
        ctx.lineWidth = sq.isDown ? 2 : 1.5;
        ctx.fillStyle = `rgba(${accentRgb}, ${alpha * 0.14})`;
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = sq.isDown ? 16 : 10;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
      const trail = trailRef.current;
      if (trail.length >= 2) {
        for (let i = 1; i < trail.length; i++) {
          const p1 = trail[i - 1];
          const p2 = trail[i];
          const curveEnergy = Math.min(p1.energy, p2.energy);
          if (curveEnergy <= 0.05) continue;
          const mx = (p1.effCx + p2.effCx) / 2;
          const my = (p1.effCy + p2.effCy) / 2;
          const dx = p2.effCx - p1.effCx;
          const dy = p2.effCy - p1.effCy;
          const dist = Math.hypot(dx, dy);
          const sign = i % 2 === 0 ? 1 : -1;
          const bowFactor = (p2.isDown ? 22 : 15) * sign;
          const nx = -dy / (dist || 1) * bowFactor;
          const ny = dx / (dist || 1) * bowFactor;
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
      for (const sq of activeSquaresRef.current.values()) {
        const alpha = Math.min(Math.max(sq.energy, 0), 1);
        ctx.save();
        ctx.beginPath();
        ctx.arc(sq.effCx, sq.effCy, 6 * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRgb}, ${alpha * 0.4})`;
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = 14;
        ctx.fill();
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "canvas",
    {
      ref: canvasRef,
      className: `fixed inset-0 pointer-events-none z-0 w-full h-full ${className}`,
      style: {
        display: "block"
      }
    }
  );
}

// src/components/layout/theme-customizer.jsx
var import_react9 = __toESM(require("react"), 1);
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var ACCENT_PRESETS = [
  {
    id: "violet",
    name: "Violet",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.45)",
    muted: "rgba(168, 85, 247, 0.15)",
    rgb: "168, 85, 247"
  },
  {
    id: "emerald",
    name: "Emerald",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.45)",
    muted: "rgba(16, 185, 129, 0.15)",
    rgb: "16, 185, 129"
  },
  {
    id: "cyan",
    name: "Cyan",
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.45)",
    muted: "rgba(6, 182, 212, 0.15)",
    rgb: "6, 182, 212"
  },
  {
    id: "amber",
    name: "Amber",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.45)",
    muted: "rgba(245, 158, 11, 0.15)",
    rgb: "245, 158, 11"
  },
  {
    id: "rose",
    name: "Rose",
    color: "#f43f5e",
    glow: "rgba(244, 63, 94, 0.45)",
    muted: "rgba(244, 63, 94, 0.15)",
    rgb: "244, 63, 94"
  },
  {
    id: "indigo",
    name: "Indigo",
    color: "#6366f1",
    glow: "rgba(99, 102, 241, 0.45)",
    muted: "rgba(99, 102, 241, 0.15)",
    rgb: "99, 102, 241"
  }
];
function applyAccent(accentId, persist = true) {
  if (typeof document === "undefined") return;
  const preset = ACCENT_PRESETS.find((p) => p.id === accentId) || ACCENT_PRESETS[0];
  document.documentElement.setAttribute("data-accent", preset.id);
  document.documentElement.style.setProperty("--brand-accent", preset.color);
  document.documentElement.style.setProperty("--brand-accent-glow", preset.glow);
  document.documentElement.style.setProperty("--brand-accent-muted", preset.muted);
  document.documentElement.style.setProperty("--brand-accent-rgb", preset.rgb);
  if (persist) {
    try {
      localStorage.setItem("velozix-accent", preset.id);
      localStorage.setItem("velozix-manual-accent", "true");
    } catch {
    }
  }
}
function useAutoCycleAccent(enabled = true, intervalMs = 3600) {
  (0, import_react9.useEffect)(() => {
    if (!enabled) return;
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % ACCENT_PRESETS.length;
      const nextPreset = ACCENT_PRESETS[currentIndex];
      applyAccent(nextPreset.id, false);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [enabled, intervalMs]);
}
function ThemeCustomizer({ className = "", compact = false }) {
  const [selectedAccent, setSelectedAccent] = (0, import_react9.useState)("violet");
  (0, import_react9.useEffect)(() => {
    const saved = localStorage.getItem("velozix-accent");
    if (saved && ACCENT_PRESETS.some((p) => p.id === saved)) {
      applyAccent(saved, false);
      setSelectedAccent(saved);
    } else {
      applyAccent("violet", false);
    }
  }, []);
  const handleSelect = (id) => {
    setSelectedAccent(id);
    applyAccent(id, true);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: `flex flex-col gap-2 ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex items-center gap-1.5 p-1.5 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md", children: ACCENT_PRESETS.map((preset) => {
      const isSelected = selectedAccent === preset.id;
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "button",
        {
          type: "button",
          onClick: () => handleSelect(preset.id),
          style: { backgroundColor: preset.color },
          title: `Switch accent to ${preset.name}`,
          className: `size-5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${isSelected ? "ring-2 ring-white scale-110 shadow-[0_0_12px_var(--brand-accent)]" : "opacity-60 hover:opacity-100 hover:scale-105"}`,
          children: isSelected && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Check, { size: 11, className: "text-white drop-shadow stroke-[3]" })
        },
        preset.id
      );
    }) }),
    !compact && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-[10px] font-mono text-zinc-400 capitalize", children: [
      "Active: ",
      selectedAccent
    ] })
  ] });
}

// src/components/ui/interactive-snake-grid.jsx
var import_react10 = __toESM(require("react"), 1);
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var GRID_COLS = 20;
var GRID_ROWS = 20;
var MAX_TRAIL_LENGTH = 16;
function InteractiveSnakeGrid({
  accentColor = "var(--brand-accent, #a855f7)",
  className = "",
  showControls = true
}) {
  const [trail, setTrail] = (0, import_react10.useState)([]);
  const [food, setFood] = (0, import_react10.useState)({ x: 14, y: 8 });
  const [score, setScore] = (0, import_react10.useState)(0);
  const [isHovered, setIsHovered] = (0, import_react10.useState)(false);
  const decayTimerRef = (0, import_react10.useRef)(null);
  const autoSnakeRef = (0, import_react10.useRef)({
    x: 5,
    y: 10,
    dx: 1,
    dy: 0,
    body: [
      { x: 5, y: 10 },
      { x: 4, y: 10 },
      { x: 3, y: 10 }
    ]
  });
  const spawnFood = (0, import_react10.useCallback)(() => {
    setFood({
      x: Math.floor(Math.random() * (GRID_COLS - 4)) + 2,
      y: Math.floor(Math.random() * (GRID_ROWS - 4)) + 2
    });
  }, []);
  const handleCellHover = (0, import_react10.useCallback)(
    (col, row) => {
      setIsHovered(true);
      setTrail((prev) => {
        if (prev.length > 0 && prev[0].x === col && prev[0].y === row) {
          return prev;
        }
        const newTrail = [{ x: col, y: row, id: `${col}-${row}-${Date.now()}` }, ...prev];
        if (newTrail.length > MAX_TRAIL_LENGTH) {
          newTrail.pop();
        }
        return newTrail;
      });
      if (col === food.x && row === food.y) {
        setScore((s) => s + 10);
        spawnFood();
      }
    },
    [food, spawnFood]
  );
  (0, import_react10.useEffect)(() => {
    decayTimerRef.current = setInterval(() => {
      setTrail((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(0, prev.length - 1);
      });
    }, 75);
    return () => clearInterval(decayTimerRef.current);
  }, []);
  (0, import_react10.useEffect)(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      const snake = autoSnakeRef.current;
      if (Math.random() < 0.35) {
        if (snake.x < food.x) {
          snake.dx = 1;
          snake.dy = 0;
        } else if (snake.x > food.x) {
          snake.dx = -1;
          snake.dy = 0;
        } else if (snake.y < food.y) {
          snake.dx = 0;
          snake.dy = 1;
        } else {
          snake.dx = 0;
          snake.dy = -1;
        }
      }
      let nx = snake.x + snake.dx;
      let ny = snake.y + snake.dy;
      if (nx < 0) nx = GRID_COLS - 1;
      if (nx >= GRID_COLS) nx = 0;
      if (ny < 0) ny = GRID_ROWS - 1;
      if (ny >= GRID_ROWS) ny = 0;
      snake.x = nx;
      snake.y = ny;
      const newHead = { x: nx, y: ny, id: `auto-${nx}-${ny}-${Date.now()}` };
      setTrail((prev) => [newHead, ...prev.slice(0, 7)]);
      if (nx === food.x && ny === food.y) {
        setScore((s) => s + 10);
        spawnFood();
      }
    }, 180);
    return () => clearInterval(interval);
  }, [isHovered, food, spawnFood]);
  const trailMap = import_react10.default.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    trail.forEach((pos, idx) => {
      const key = `${pos.x}-${pos.y}`;
      if (!map.has(key)) {
        map.set(key, {
          index: idx,
          ratio: 1 - idx / Math.max(trail.length, 1),
          isHead: idx === 0
        });
      }
    });
    return map;
  }, [trail]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      className: `relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl border border-white/10 bg-[#060913]/90 backdrop-blur-xl shadow-2xl select-none ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            className: "pointer-events-none absolute inset-0 rounded-2xl blur-3xl opacity-20 transition-all duration-500",
            style: {
              background: `radial-gradient(circle at 50% 50%, ${accentColor}, transparent 70%)`
            }
          }
        ),
        showControls && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative z-10 w-full flex items-center justify-between pb-3 mb-3 border-b border-white/8 text-xs font-mono", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center gap-2 text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react4.Gamepad2, { size: 15, style: { color: accentColor } }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "font-semibold tracking-wide", children: "20\xD720 Interactive Snake Grid" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "text-zinc-400", children: [
              "Score:",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { className: "text-white font-mono", style: { color: accentColor }, children: score })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-[10px] text-zinc-500 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5", children: isHovered ? "Mouse Active" : "Auto Wandering" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
              aspectRatio: "1 / 1"
            },
            className: "relative z-10 w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] gap-[3px] p-2 rounded-xl bg-black/60 border border-white/8 shadow-inner",
            children: Array.from({ length: GRID_ROWS }).map(
              (_, r) => Array.from({ length: GRID_COLS }).map((_2, c) => {
                const key = `${c}-${r}`;
                const trailInfo = trailMap.get(key);
                const isFood = c === food.x && r === food.y;
                let cellBg = "bg-white/[0.03]";
                let cellBorder = "border-white/5";
                let scale = 1;
                let opacity = 1;
                let shadow = "none";
                if (trailInfo) {
                  if (trailInfo.isHead) {
                    cellBg = accentColor;
                    cellBorder = accentColor;
                    scale = 1.15;
                    shadow = `0 0 14px ${accentColor}`;
                  } else {
                    scale = Math.max(0.65, 0.7 + trailInfo.ratio * 0.35);
                    opacity = Math.max(0.2, trailInfo.ratio);
                    shadow = `0 0 8px ${accentColor}`;
                  }
                } else if (isFood) {
                  scale = 1.05;
                }
                return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "div",
                  {
                    onMouseEnter: () => handleCellHover(c, r),
                    style: {
                      backgroundColor: trailInfo ? trailInfo.isHead ? accentColor : `${accentColor}${Math.floor(trailInfo.ratio * 255).toString(16).padStart(2, "0")}` : isFood ? "#ffffff" : void 0,
                      transform: `scale(${scale})`,
                      boxShadow: shadow,
                      borderColor: (trailInfo == null ? void 0 : trailInfo.isHead) ? accentColor : void 0,
                      transition: "transform 0.12s ease-out, background-color 0.15s ease"
                    },
                    className: `w-full h-full rounded-[4px] border ${trailInfo ? "border-transparent" : cellBorder} ${!trailInfo && !isFood ? cellBg : ""} ${isFood ? "animate-pulse shadow-[0_0_12px_#ffffff]" : ""} cursor-crosshair`
                  },
                  key
                );
              })
            )
          }
        ),
        showControls && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative z-10 mt-3 text-[11px] font-mono text-zinc-400 flex items-center justify-between w-full", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "Move mouse across squares to control the worm trail" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
            "button",
            {
              type: "button",
              onClick: () => {
                setTrail([]);
                setScore(0);
                spawnFood();
              },
              className: "flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react4.RotateCcw, { size: 11 }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "Reset" })
              ]
            }
          )
        ] })
      ]
    }
  );
}

// src/components/ui/code-typewriter.jsx
var import_react11 = __toESM(require("react"), 1);
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var CODE_SNIPPETS = [
  {
    fileName: "page.jsx",
    language: "jsx",
    lines: [
      `import { StackedCardsScroll } from "adaptive-ui-react";`,
      ``,
      `export default function Showcase() {`,
      `  return (`,
      `    <main className="w-full min-h-screen py-16">`,
      `      {/* Pinned 60FPS 3D Stack with SVG Half-Ring Gauge */}`,
      `      <StackedCardsScroll`,
      `        pin={true}`,
      `        pinHeight="280vh"`,
      `        enableWheelScroll={true}`,
      `      />`,
      `    </main>`,
      `  );`,
      `}`
    ]
  },
  {
    fileName: "blob-hero.jsx",
    language: "jsx",
    lines: [
      `import { BlobMorphHero } from "adaptive-ui-react";`,
      ``,
      `export default function HeroSection() {`,
      `  return (`,
      `    <BlobMorphHero`,
      `      imageScale={0.85}`,
      `      accentColor="#10b981"`,
      `      topoSpeed={0.8}`,
      `      blobCount={5}`,
      `      wireframeOverlay={true}`,
      `    />`,
      `  );`,
      `}`
    ]
  },
  {
    fileName: "ascii-face.jsx",
    language: "jsx",
    lines: [
      `import { InteractiveAsciiFace } from "adaptive-ui-react";`,
      ``,
      `export default function TerminalCanvas() {`,
      `  return (`,
      `    <InteractiveAsciiFace`,
      `      color="#5cfc87"`,
      `      mouseSpeed={1.2}`,
      `      imageClarity={1.5}`,
      `      scanlines={true}`,
      `      glow={true}`,
      `    />`,
      `  );`,
      `}`
    ]
  }
];
function CodeTypewriter({ className = "" }) {
  const [activeTab, setActiveTab] = (0, import_react11.useState)(0);
  const [displayedLineCount, setDisplayedLineCount] = (0, import_react11.useState)(0);
  const [displayedCharCount, setDisplayedCharCount] = (0, import_react11.useState)(0);
  const [isTypingPaused, setIsTypingPaused] = (0, import_react11.useState)(false);
  const [copied, setCopied] = (0, import_react11.useState)(false);
  const snippet = CODE_SNIPPETS[activeTab];
  const fullText = snippet.lines.join("\n");
  (0, import_react11.useEffect)(() => {
    setDisplayedLineCount(0);
    setDisplayedCharCount(0);
  }, [activeTab]);
  (0, import_react11.useEffect)(() => {
    if (isTypingPaused) return;
    const currentLine = snippet.lines[displayedLineCount] || "";
    if (displayedCharCount < currentLine.length) {
      const charSpeed = Math.floor(Math.random() * 15) + 12;
      const timer = setTimeout(() => {
        setDisplayedCharCount((prev) => prev + 1);
      }, charSpeed);
      return () => clearTimeout(timer);
    } else if (displayedLineCount < snippet.lines.length - 1) {
      const lineSpeed = 50;
      const timer = setTimeout(() => {
        setDisplayedLineCount((prev) => prev + 1);
        setDisplayedCharCount(0);
      }, lineSpeed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % CODE_SNIPPETS.length);
      }, 4e3);
      return () => clearTimeout(timer);
    }
  }, [displayedCharCount, displayedLineCount, snippet, isTypingPaused]);
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(fullText);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch {
    }
  };
  const handleRestart = () => {
    setDisplayedLineCount(0);
    setDisplayedCharCount(0);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      className: `relative rounded-2xl border border-white/10 bg-[#070b14]/95 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs select-none ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between px-4 py-3 border-b border-white/8 bg-black/40", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "size-3 rounded-full bg-rose-500/80 border border-rose-600/40" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "size-3 rounded-full bg-amber-500/80 border border-amber-600/40" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "size-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex items-center gap-1", children: CODE_SNIPPETS.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setActiveTab(idx),
              className: `px-3 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${activeTab === idx ? "bg-white/10 text-emerald-400 font-medium" : "text-zinc-500 hover:text-zinc-300"}`,
              children: item.fileName
            },
            item.fileName
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                type: "button",
                onClick: () => setIsTypingPaused((p) => !p),
                className: "p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer",
                title: isTypingPaused ? "Resume typing" : "Pause typing",
                children: isTypingPaused ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react5.Play, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react5.Pause, { size: 12 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                type: "button",
                onClick: handleRestart,
                className: "p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer",
                title: "Restart typing",
                children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react5.RotateCcw, { size: 12 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                type: "button",
                onClick: handleCopy,
                className: "p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer",
                title: "Copy snippet",
                children: copied ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react5.Check, { size: 12, className: "text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react5.Copy, { size: 12 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "p-4 sm:p-6 overflow-x-auto min-h-[300px]", children: snippet.lines.map((line, lIdx) => {
          if (lIdx > displayedLineCount) return null;
          const isCurrentTypingLine = lIdx === displayedLineCount;
          const textToRender = isCurrentTypingLine ? line.slice(0, displayedCharCount) : line;
          return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "w-8 shrink-0 text-right pr-4 text-zinc-600 select-none", children: lIdx + 1 }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "text-zinc-300 whitespace-pre", children: [
              colorizeLine(textToRender),
              isCurrentTypingLine && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "inline-block w-2 h-4 bg-emerald-400 ml-0.5 align-middle animate-pulse" })
            ] })
          ] }, lIdx);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "px-4 py-2 border-t border-white/5 bg-black/60 flex items-center justify-between text-[10px] text-zinc-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-400 animate-pulse" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "TypeScript / React 19 JSX" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "UTF-8 \u2022 60 FPS Engine" })
        ] })
      ]
    }
  );
}
function colorizeLine(text) {
  if (text.startsWith("//") || text.startsWith("/*") || text.includes("{/*")) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-zinc-500 italic", children: text });
  }
  if (text.startsWith("import ") || text.startsWith("export ") || text.startsWith("return")) {
    const parts = text.split(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "text-fuchsia-400 font-semibold", children: [
        parts[0],
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: parts.slice(1).join(" ") })
    ] });
  }
  if (text.includes("pin={true}") || text.includes("enableWheelScroll={true}")) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-amber-300", children: text });
  }
  if (text.includes("<") && text.includes(">")) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-cyan-300", children: text });
  }
  return text;
}

// src/components/ui/install-tabs.jsx
var import_react12 = __toESM(require("react"), 1);
var import_react13 = require("motion/react");
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var managers = ["npm", "pnpm", "yarn", "bun"];
var getCommand = (manager, packages = "adaptive-ui", component, mode = "cli", dev = false) => {
  if (mode === "cli" && component) {
    if (manager === "npm") return `npx adaptive-ui add ${component}`;
    if (manager === "pnpm") return `pnpm dlx adaptive-ui add ${component}`;
    if (manager === "yarn") return `yarn dlx adaptive-ui add ${component}`;
    if (manager === "bun") return `bunx --bun adaptive-ui add ${component}`;
    return `npx adaptive-ui add ${component}`;
  }
  const pkgName = packages || "adaptive-ui";
  if (manager === "npm") return `npm install ${dev ? "-D " : ""}${pkgName}`;
  if (manager === "pnpm") return `pnpm add ${dev ? "-D " : ""}${pkgName}`;
  if (manager === "yarn") return `yarn add ${dev ? "-D " : ""}${pkgName}`;
  if (manager === "bun") return `bun add ${dev ? "-D " : ""}${pkgName}`;
  return `npm install ${pkgName}`;
};
var STORAGE_KEY = "adaptive-ui:package-manager";
var listeners = /* @__PURE__ */ new Set();
var read = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return managers.includes(stored) ? stored : "npm";
  } catch {
    return "npm";
  }
};
var choose = (manager) => {
  try {
    localStorage.setItem(STORAGE_KEY, manager);
  } catch {
  }
  listeners.forEach((listener) => listener());
};
var subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
function InstallTabs({
  packages = "adaptive-ui",
  component,
  dev = false,
  className = ""
}) {
  const id = (0, import_react12.useId)();
  const manager = (0, import_react12.useSyncExternalStore)(subscribe, read, () => "npm");
  const [copied, setCopied] = (0, import_react12.useState)(false);
  const [mode, setMode] = (0, import_react12.useState)(component ? "cli" : "package");
  const currentText = getCommand(manager, packages, component, mode, dev);
  function onKey(event, index) {
    var _a;
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = managers[(index + step + managers.length) % managers.length];
    choose(next);
    (_a = document.getElementById(`${id}-${next}`)) == null ? void 0 : _a.focus();
  }
  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(currentText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      className: `w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950/90 shadow-2xl backdrop-blur-md ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-zinc-900/60 px-3 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { role: "tablist", "aria-label": "Package manager", className: "flex items-center gap-1", children: managers.map((option, index) => {
              const isSelected = manager === option;
              return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                "button",
                {
                  id: `${id}-${option}`,
                  role: "tab",
                  "aria-selected": isSelected,
                  "aria-controls": `${id}-panel`,
                  tabIndex: isSelected ? 0 : -1,
                  onClick: () => choose(option),
                  onKeyDown: (event) => onKey(event, index),
                  className: `relative flex cursor-pointer items-center gap-1 rounded-lg px-2.5 py-1 font-mono text-xs transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-emerald-400 ${isSelected ? "text-white font-semibold" : "text-zinc-400 hover:text-white"}`,
                  children: [
                    isSelected && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                      import_react13.motion.span,
                      {
                        layoutId: `${id}-pill`,
                        "aria-hidden": true,
                        className: "absolute inset-0 rounded-lg border border-white/15 bg-white/10 shadow-sm",
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 30
                        }
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "relative z-10", children: option })
                  ]
                },
                option
              );
            }) }),
            component && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "ml-2 hidden items-center rounded-lg border border-white/10 bg-black/40 p-0.5 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                "button",
                {
                  type: "button",
                  onClick: () => setMode("cli"),
                  className: `flex cursor-pointer items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-mono transition ${mode === "cli" ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30" : "text-zinc-400 hover:text-white"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.Terminal, { className: "size-3" }),
                    "CLI"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                "button",
                {
                  type: "button",
                  onClick: () => setMode("package"),
                  className: `flex cursor-pointer items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-mono transition ${mode === "package" ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30" : "text-zinc-400 hover:text-white"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.Package, { className: "size-3" }),
                    "NPM"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "button",
            {
              type: "button",
              onClick: copyCommand,
              className: "flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300 transition hover:bg-white/15 hover:text-white",
              "aria-label": "Copy install command",
              children: copied ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.Check, { className: "size-3.5 text-emerald-400" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-emerald-400 font-medium", children: "Copied!" })
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-zinc-400", children: "Copy" }) })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
          "div",
          {
            id: `${id}-panel`,
            role: "tabpanel",
            "aria-labelledby": `${id}-${manager}`,
            className: "relative overflow-hidden px-4 py-3.5 font-mono text-xs sm:text-sm bg-black/40",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react13.AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                import_react13.motion.div,
                {
                  initial: { opacity: 0, x: -28 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 28 },
                  transition: { duration: 0.22, ease: "easeOut" },
                  className: "flex items-center gap-2.5 whitespace-nowrap text-zinc-200",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "select-none font-bold text-emerald-400", children: "$" }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "tracking-wide", children: currentText })
                  ]
                },
                `${manager}-${mode}`
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { role: "status", className: "sr-only", children: copied ? "Copied" : "" })
            ]
          }
        )
      ]
    }
  );
}

// src/components/ui/props-table.jsx
var import_react14 = __toESM(require("react"), 1);
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function PropsTable({
  data = [],
  title = "Props Reference",
  description = "Complete reference of all customizable properties and parameters.",
  className = ""
}) {
  const [searchQuery, setSearchQuery] = (0, import_react14.useState)("");
  const [copiedProp, setCopiedProp] = (0, import_react14.useState)(null);
  const filteredData = data.filter((item) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return item.prop.toLowerCase().includes(query) || item.type && item.type.toLowerCase().includes(query) || item.description && item.description.toLowerCase().includes(query);
  });
  const copyPropName = async (propName) => {
    var _a;
    try {
      if ((_a = navigator == null ? void 0 : navigator.clipboard) == null ? void 0 : _a.writeText) {
        await navigator.clipboard.writeText(propName);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = propName;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopiedProp(propName);
      setTimeout(() => setCopiedProp(null), 1800);
    } catch (e) {
      console.warn("Clipboard copy failed:", e);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: `space-y-4 w-full ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("h3", { className: "text-xl md:text-2xl font-bold font-sans text-white flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.SlidersHorizontal, { className: "w-5 h-5 text-lime-400" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: title })
        ] }),
        description && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "mt-1 text-xs md:text-sm text-gray-400 font-sans", children: description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "relative w-full sm:w-64", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.Search, { className: "w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "input",
          {
            type: "text",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: "Search props, types...",
            className: "w-full bg-zinc-900/80 border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400/50 transition font-sans"
          }
        ),
        searchQuery && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "button",
          {
            onClick: () => setSearchQuery(""),
            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs font-mono",
            children: "\xD7"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "rounded-2xl border border-white/10 overflow-hidden bg-zinc-950 shadow-xl", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("table", { className: "w-full text-left text-xs font-sans", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("thead", { className: "bg-zinc-900/70 border-b border-white/10 font-mono text-zinc-400", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("th", { className: "py-3 px-4 font-semibold w-1/4", children: "Prop" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("th", { className: "py-3 px-4 font-semibold w-1/5", children: "Type" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("th", { className: "py-3 px-4 font-semibold w-1/6", children: "Default" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("th", { className: "py-3 px-4 font-semibold", children: "Description" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tbody", { className: "divide-y divide-white/5 text-zinc-300", children: filteredData.length > 0 ? filteredData.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        "tr",
        {
          className: "hover:bg-white/[0.02] transition-colors group",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("td", { className: "py-3.5 px-4 font-mono", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                "button",
                {
                  onClick: () => copyPropName(item.prop),
                  className: "font-semibold text-lime-400 hover:text-lime-300 transition flex items-center gap-1 cursor-pointer",
                  title: "Click to copy prop name",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: item.prop }),
                    copiedProp === item.prop ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.Check, { className: "w-3 h-3 text-emerald-400 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.Copy, { className: "w-3 h-3 text-zinc-600 opacity-0 group-hover:opacity-100 transition shrink-0" })
                  ]
                }
              ),
              item.required && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-[10px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-sans", children: "required" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("td", { className: "py-3.5 px-4 font-mono text-[11px]", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "inline-block px-2 py-0.5 rounded-md bg-zinc-900 text-cyan-300 border border-white/5", children: item.type }) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("td", { className: "py-3.5 px-4 font-mono text-[11px] text-zinc-400", children: item.default ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("code", { className: "bg-zinc-900 px-1.5 py-0.5 rounded text-amber-300/90 border border-white/5", children: item.default }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-zinc-600", children: "\u2014" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("td", { className: "py-3.5 px-4 text-gray-300 leading-relaxed font-sans", children: item.description })
          ]
        },
        item.prop || idx
      )) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        "td",
        {
          colSpan: 4,
          className: "py-8 text-center text-zinc-500 font-mono text-xs",
          children: [
            'No matching props found for "',
            searchQuery,
            '".'
          ]
        }
      ) }) })
    ] }) }) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACCENT_PRESETS,
  BlobMorphHero,
  CodeTypewriter,
  CurvedGridCanvas,
  DEFAULT_PRESETS,
  DEFAULT_SCROLL_IMAGES,
  DEFAULT_STACKED_CARDS,
  FullpageCurvedGrid,
  ImageScroll,
  InfiniteImageScroll,
  InfiniteTunnelHero,
  InstallTabs,
  InteractiveAsciiFace,
  InteractiveSnakeGrid,
  LiquidGlassButton,
  PropsTable,
  SmoothScrollProvider,
  StackedCardsScroll,
  ThemeCustomizer,
  applyAccent,
  liquidGlassButton,
  useAutoCycleAccent
});
//# sourceMappingURL=index.cjs.map