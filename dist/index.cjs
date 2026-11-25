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
  AsciiObject: () => AsciiObject,
  BlobMorphHero: () => BlobMorphHero,
  CodeTypewriter: () => CodeTypewriter,
  CurvedGridCanvas: () => CurvedGridCanvas,
  DEFAULT_PRESETS: () => DEFAULT_PRESETS,
  DEFAULT_SCROLL_IMAGES: () => DEFAULT_SCROLL_IMAGES,
  DEFAULT_STACKED_CARDS: () => DEFAULT_STACKED_CARDS,
  FullpageCurvedGrid: () => CurvedGridCanvas,
  GooeyGridCursor: () => GooeyGridCursor,
  GridCursorTrail: () => GooeyGridCursor,
  ImageScroll: () => ImageScroll,
  InfiniteImageScroll: () => InfiniteImageScroll,
  InfiniteTunnelHero: () => InfiniteTunnelHero,
  InstallTabs: () => InstallTabs,
  InteractiveAsciiFace: () => InteractiveAsciiFace,
  InteractiveSnakeGrid: () => InteractiveSnakeGrid,
  LiquidGlassButton: () => LiquidGlassButton,
  LorenzoGridCursor: () => GooeyGridCursor,
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
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      onClick: () => onCardClick == null ? void 0 : onCardClick(item),
      style: {
        width: cardWidth,
        height: cardHeight
      },
      className: "group relative shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 shadow-xl transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-black/60"
    },
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black",
        style: {
          backgroundImage: imgError ? `radial-gradient(circle at 50% 30%, ${accent}25, transparent 70%), linear-gradient(to bottom, #18181b, #09090b)` : void 0
        }
      }
    ),
    !imgError && src && // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ import_react.default.createElement(
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
    imgError && /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center" }, /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm",
        style: { color: accent }
      },
      /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Image, { className: "size-5" })
    ), /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono text-xs uppercase tracking-wider text-zinc-400" }, title)),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90" }),
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
        style: {
          boxShadow: `inset 0 0 0 1px ${accent}66, 0 0 24px -6px ${accent}40`
        }
      }
    ),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute inset-x-0 bottom-0 flex flex-col justify-end p-3 sm:p-4" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between gap-2" }, /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        className: "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-white backdrop-blur-md",
        style: { borderLeftColor: accent, borderLeftWidth: "2.5px" }
      },
      category
    ), /* @__PURE__ */ import_react.default.createElement("span", { className: "flex size-6 sm:size-7 items-center justify-center rounded-full bg-white/10 text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" }, /* @__PURE__ */ import_react.default.createElement(import_lucide_react.ArrowUpRight, { className: "size-3 sm:size-3.5" }))), /* @__PURE__ */ import_react.default.createElement("h4", { className: "mt-1.5 line-clamp-1 font-sans text-xs sm:text-sm font-bold tracking-wide text-white drop-shadow" }, title))
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
  return /* @__PURE__ */ import_react.default.createElement(
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
      `
    },
    /* @__PURE__ */ import_react.default.createElement("style", { dangerouslySetInnerHTML: { __html: EMBEDDED_SCROLL_STYLES } }),
    /* @__PURE__ */ import_react.default.createElement("div", { className: tilt ? styles.tiltInner : "" }, isVertical ? (
      /* ================= VERTICAL COLUMNS ================= */
      /* @__PURE__ */ import_react.default.createElement("div", { className: styles.verticalWrapper }, trackItemGroups.map((group, colIdx) => {
        const isColReverse = staggerDirection ? colIdx % 2 === 1 ? !reverse : reverse : reverse;
        const colSpeed = staggerDirection ? baseDuration * (1 + colIdx % 3 * 0.15) : baseDuration;
        const trackItems = prepareTrackItems(group);
        return /* @__PURE__ */ import_react.default.createElement(
          "div",
          {
            key: `col-${colIdx}`,
            className: isColReverse ? styles.verticalTrackReverse : styles.verticalTrack,
            style: {
              animationDuration: `${colSpeed}s`
            }
          },
          trackItems.map((item, itemIdx) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, { key: `v-item-${colIdx}-${itemIdx}` }, renderItem ? renderItem(item, itemIdx) : /* @__PURE__ */ import_react.default.createElement(
            DefaultImageCard,
            {
              item,
              cardWidth: defaultWidth,
              cardHeight: defaultHeight,
              onCardClick
            }
          )))
        );
      }))
    ) : (
      /* ================= HORIZONTAL ROWS ================= */
      /* @__PURE__ */ import_react.default.createElement("div", { className: styles.horizontalWrapper }, trackItemGroups.map((group, rowIdx) => {
        const isRowReverse = staggerDirection ? rowIdx % 2 === 1 ? !reverse : reverse : reverse;
        const rowSpeed = staggerDirection ? baseDuration * (1 + rowIdx % 3 * 0.15) : baseDuration;
        const trackItems = prepareTrackItems(group);
        return /* @__PURE__ */ import_react.default.createElement(
          "div",
          {
            key: `row-${rowIdx}`,
            className: isRowReverse ? styles.horizontalTrackReverse : styles.horizontalTrack,
            style: {
              animationDuration: `${rowSpeed}s`
            }
          },
          trackItems.map((item, itemIdx) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, { key: `h-item-${rowIdx}-${itemIdx}` }, renderItem ? renderItem(item, itemIdx) : /* @__PURE__ */ import_react.default.createElement(
            DefaultImageCard,
            {
              item,
              cardWidth: defaultWidth,
              cardHeight: defaultHeight,
              onCardClick
            }
          )))
        );
      }))
    ))
  );
}
var InfiniteImageScroll = ImageScroll;

// src/components/ui/interactive-ascii-face.jsx
var import_react4 = __toESM(require("react"), 1);

// src/components/ui/interactive-ascii-face.module.css
var interactive_ascii_face_default = {};

// src/components/ui/ascii-object.tsx
var import_react2 = __toESM(require("react"), 1);
var import_react3 = require("react");
var THREE = __toESM(require("three"), 1);
var import_OrbitControls = require("three/addons/controls/OrbitControls.js");
var import_DRACOLoader = require("three/addons/loaders/DRACOLoader.js");
var import_GLTFLoader = require("three/addons/loaders/GLTFLoader.js");
var canvasDimensionLimits = /* @__PURE__ */ new WeakMap();
function getCanvasPixelRatio(element, context) {
  var _a;
  const scale = ((_a = window.visualViewport) == null ? void 0 : _a.scale) || 1;
  const requested = Math.min(window.devicePixelRatio || 1, 2) * scale;
  const width = Math.max(element.clientWidth, 1);
  const height = Math.max(element.clientHeight, 1);
  let maxDimension = 8192;
  if (context) {
    let limit = canvasDimensionLimits.get(context);
    if (limit === void 0) {
      limit = Math.min(
        maxDimension,
        context.getParameter(context.MAX_TEXTURE_SIZE),
        context.getParameter(context.MAX_RENDERBUFFER_SIZE)
      );
      canvasDimensionLimits.set(context, limit);
    }
    maxDimension = limit;
  }
  return Math.min(
    requested,
    maxDimension / Math.max(width, height),
    Math.sqrt(16777216 / (width * height))
  );
}
function createCanvasResizeObserver(onResize) {
  const viewport = window.visualViewport;
  let frame = 0;
  let disconnected = false;
  const schedule = () => {
    if (frame || disconnected) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      onResize();
    });
  };
  const observer = new ResizeObserver(schedule);
  window.addEventListener("resize", schedule, { passive: true });
  viewport == null ? void 0 : viewport.addEventListener("resize", schedule, { passive: true });
  return {
    observe(element, options) {
      observer.observe(element, options);
    },
    unobserve(element) {
      observer.unobserve(element);
    },
    disconnect() {
      disconnected = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
      viewport == null ? void 0 : viewport.removeEventListener("resize", schedule);
    }
  };
}
function resolveOptions(defaults, options) {
  const resolved = {};
  for (const key of Object.keys(options)) {
    const value = options[key];
    resolved[key] = value === void 0 ? defaults[key] : value;
  }
  return resolved;
}
var PRINTABLE_ASCII = Array.from(
  { length: 95 },
  (_, i) => String.fromCharCode(32 + i)
).join("");
var DEFAULTS = {
  src: "",
  ascii: true,
  cellSize: 10,
  cellAspect: 0.6,
  charset: PRINTABLE_ASCII,
  colored: true,
  color: "#ffffff",
  contrast: 1.5,
  edgeContrast: 3,
  exposure: 1,
  invert: false,
  background: "",
  highlight: "#066aff",
  environmentIntensity: 1,
  roughness: -1,
  scale: 3,
  xOffset: 0,
  yOffset: 0,
  floatIntensity: 2,
  rotationIntensity: 1,
  floatSpeed: 2,
  orbit: true,
  zoom: false,
  autoRotate: false,
  autoRotateSpeed: 2,
  fov: 65,
  cameraDistance: 4.2,
  dracoDecoderPath: "https://www.gstatic.com/draco/versioned/decoders/1.5.7/",
  onLoad: null,
  onError: null
};
var POST_VERT = `
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;
var SRGB_ENCODE = `
vec3 toSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}
`;
var CELL_FRAG = `
precision highp float;
out vec4 outColor;
uniform sampler2D tScene;
uniform sampler2D tShapes;
uniform vec2 uResolution;
uniform vec2 uCellPx;
uniform int uGlyphCount;
uniform float uContrast;
uniform float uEdgeContrast;
uniform float uExposure;
uniform float uInvert;
${SRGB_ENCODE}
const vec2 INNER[6] = vec2[6](
  vec2(0.28, 0.26), vec2(0.72, 0.14),
  vec2(0.28, 0.56), vec2(0.72, 0.44),
  vec2(0.28, 0.86), vec2(0.72, 0.74)
);
const vec2 OUTER[10] = vec2[10](
  vec2(0.28, -0.2), vec2(0.72, -0.2),
  vec2(-0.22, 0.25), vec2(1.22, 0.25),
  vec2(-0.22, 0.5), vec2(1.22, 0.5),
  vec2(-0.22, 0.75), vec2(1.22, 0.75),
  vec2(0.28, 1.2), vec2(0.72, 1.2)
);
const vec2 RING[6] = vec2[6](
  vec2(1.0, 0.0), vec2(0.5, 0.8660254), vec2(-0.5, 0.8660254),
  vec2(-1.0, 0.0), vec2(-0.5, -0.8660254), vec2(0.5, -0.8660254)
);
vec2 cellBase;
vec4 fetchTap(vec2 p) {
  vec2 uv = p / uResolution;
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return vec4(0.0);
  return texture(tScene, uv);
}
vec4 sampleCircle(vec2 c) {
  vec2 middle = cellBase + vec2(c.x, 1.0 - c.y) * uCellPx;
  float r = uCellPx.y * 0.161;
  vec4 acc = fetchTap(middle);
  for (int k = 0; k < 6; k++) acc += fetchTap(middle + RING[k] * r);
  return acc / 7.0;
}
float circleLum(vec4 acc) {
  vec3 straight = toSrgb(acc.rgb / max(acc.a, 1e-4));
  float level = clamp(dot(straight, vec3(0.2126, 0.7152, 0.0722)) * uExposure, 0.0, 1.0);
  level = mix(level, 1.0 - level, uInvert);
  return level * acc.a;
}
float dirContrast(float value, float ext) {
  float peak = max(value, ext);
  if (peak < 1e-4) return value;
  return pow(value / peak, uEdgeContrast) * peak;
}
void main() {
  cellBase = floor(gl_FragCoord.xy) * uCellPx;
  float v[6];
  vec3 colAcc = vec3(0.0);
  float alphaAcc = 0.0;
  for (int i = 0; i < 6; i++) {
    vec4 acc = sampleCircle(INNER[i]);
    v[i] = circleLum(acc);
    colAcc += acc.rgb;
    alphaAcc += acc.a;
  }
  float e[10];
  for (int i = 0; i < 10; i++) e[i] = circleLum(sampleCircle(OUTER[i]));
  v[0] = dirContrast(v[0], max(max(e[0], e[1]), max(e[2], e[4])));
  v[1] = dirContrast(v[1], max(max(e[0], e[1]), max(e[3], e[5])));
  v[2] = dirContrast(v[2], max(e[2], max(e[4], e[6])));
  v[3] = dirContrast(v[3], max(e[3], max(e[5], e[7])));
  v[4] = dirContrast(v[4], max(max(e[4], e[6]), max(e[8], e[9])));
  v[5] = dirContrast(v[5], max(max(e[5], e[7]), max(e[8], e[9])));
  float peak = max(max(max(v[0], v[1]), max(v[2], v[3])), max(v[4], v[5]));
  if (peak > 1e-4) {
    for (int i = 0; i < 6; i++) v[i] = pow(v[i] / peak, uContrast) * peak;
  }
  int best = 0;
  float bestD = 1e9;
  for (int g = 0; g < uGlyphCount; g++) {
    float d = 0.0;
    for (int i = 0; i < 6; i++) {
      float diff = v[i] - texelFetch(tShapes, ivec2(i, g), 0).r;
      d += diff * diff;
    }
    if (d < bestD) {
      bestD = d;
      best = g;
    }
  }
  vec3 cellColor = toSrgb(colAcc / max(alphaAcc, 1e-4));
  outColor = vec4(cellColor, float(best) / 255.0);
}`;
var POST_FRAG = `
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D tScene;
uniform sampler2D tCells;
uniform sampler2D tAtlas;
uniform vec2 uResolution;
uniform vec2 uCellPx;
uniform vec2 uGrid;
uniform vec2 uAtlasGrid;
uniform vec2 uAtlasPad;
uniform vec2 uAtlasInner;
uniform float uAscii;
uniform float uColored;
uniform vec3 uColor;
uniform vec3 uBackground;
uniform float uHasBg;
${SRGB_ENCODE}
void main() {
  if (uAscii < 0.5) {
    vec4 raw = texture(tScene, vUv);
    vec3 rawColor = toSrgb(raw.rgb);
    if (uHasBg > 0.5) {
      outColor = vec4(uBackground * (1.0 - raw.a) + rawColor, 1.0);
    } else {
      outColor = vec4(rawColor * raw.a, raw.a);
    }
    return;
  }
  vec2 fragCoord = vUv * uResolution;
  vec2 cellPos = fragCoord / uCellPx;
  vec2 cell = clamp(floor(cellPos), vec2(0.0), uGrid - 1.0);
  vec4 info = texelFetch(tCells, ivec2(cell), 0);
  float glyph = floor(info.a * 255.0 + 0.5);
  vec2 local = clamp(cellPos - cell, 0.0, 1.0);
  float gx = mod(glyph, uAtlasGrid.x);
  float gy = floor(glyph / uAtlasGrid.x);
  vec2 atlasUv = vec2(
    (gx + uAtlasPad.x + local.x * uAtlasInner.x) / uAtlasGrid.x,
    (uAtlasGrid.y - gy - 1.0 + uAtlasPad.y + local.y * uAtlasInner.y) /
      uAtlasGrid.y
  );
  vec2 atlasStep = uAtlasInner / uAtlasGrid;
  float mask = textureGrad(
    tAtlas,
    atlasUv,
    dFdx(cellPos) * atlasStep,
    dFdy(cellPos) * atlasStep
  ).a;
  vec3 glyphColor = mix(uColor, info.rgb, uColored);
  if (uHasBg > 0.5) {
    outColor = vec4(mix(uBackground, glyphColor, mask), 1.0);
  } else {
    outColor = vec4(glyphColor * mask, mask);
  }
}`;
var ROOM_BLOCKS = [
  {
    position: [-10.906, -1, 1.846],
    rotation: [0, -0.195, 0],
    scale: [2.328, 7.905, 4.651]
  },
  {
    position: [-5.607, -0.754, -0.758],
    rotation: [0, 0.994, 0],
    scale: [1.97, 1.534, 3.955]
  },
  {
    position: [6.167, -0.16, 7.803],
    rotation: [0, 0.561, 0],
    scale: [3.927, 6.285, 3.687]
  },
  {
    position: [-2.017, 0.018, 6.124],
    rotation: [0, 0.333, 0],
    scale: [2.002, 4.566, 2.064]
  },
  {
    position: [2.291, -0.756, -2.621],
    rotation: [0, -0.286, 0],
    scale: [1.546, 1.552, 1.496]
  },
  {
    position: [-2.193, -0.369, -5.547],
    rotation: [0, 0.516, 0],
    scale: [3.875, 3.487, 2.986]
  }
];
var ROOM_FORMERS = [
  {
    kind: "ring",
    intensity: 15,
    position: [2, 3, -2],
    scale: [10, 10, 10],
    lookAtCenter: true
  },
  {
    kind: "box",
    intensity: 80,
    position: [-14, 10, 8],
    scale: [0.1, 2.5, 2.5]
  },
  {
    kind: "box",
    intensity: 80,
    position: [-14, 14, -4],
    scale: [0.1, 2.5, 2.5],
    withLight: true
  },
  {
    kind: "box",
    intensity: 23,
    position: [14, 12, 0],
    scale: [0.1, 5, 5],
    withLight: true
  },
  {
    kind: "box",
    intensity: 16,
    position: [0, 9, 14],
    scale: [5, 5, 0.1],
    withLight: true
  },
  {
    kind: "box",
    intensity: 80,
    position: [7, 8, -14],
    scale: [2.5, 2.5, 0.1],
    withLight: true
  },
  {
    kind: "box",
    intensity: 80,
    position: [-7, 16, -14],
    scale: [2.5, 2.5, 0.1],
    withLight: true
  },
  {
    kind: "box",
    intensity: 1,
    position: [0, 20, 0],
    scale: [0.1, 0.1, 0.1],
    withLight: true
  },
  {
    kind: "box",
    intensity: 20,
    position: [0, 15, 0],
    scale: [10, 1, 10],
    withLight: true
  }
];
var CAMERA_DIR = new THREE.Vector3(0, 0.45, 3.8).normalize();
function fitFov(fov, aspect) {
  if (aspect >= 1) return fov;
  const half = THREE.MathUtils.degToRad(fov) / 2;
  const margin = 1 + 0.25 * (1 - aspect);
  return THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(half) * margin / aspect));
}
var MODEL_LIFT = 0;
var RASTER_SIZE = 2048;
var TRACE_SIZE = 512;
var ALPHA_CUTOFF = 127;
var SIMPLIFY_TOLERANCE = 1;
var MIN_AREA = 6;
var MAX_CONTOURS = 64;
var EXTRUDE_DEPTH = 0.08;
var BEVEL_SIZE = 6e-3;
var ATLAS_CELL = 64;
var ATLAS_PAD = 8;
var MAX_GLYPHS = 255;
var INNER_CIRCLES = [
  [0.28, 0.26],
  [0.72, 0.14],
  [0.28, 0.56],
  [0.72, 0.44],
  [0.28, 0.86],
  [0.72, 0.74]
];
function clampAspect(aspect) {
  return Math.min(Math.max(aspect || 0.6, 0.35), 1.25);
}
function buildGlyphList(charset) {
  const seen = /* @__PURE__ */ new Set([" "]);
  const glyphs = [" "];
  for (const ch of charset) {
    if (glyphs.length >= MAX_GLYPHS) break;
    if (ch === "\n" || ch === "\r" || ch === "	" || seen.has(ch)) continue;
    seen.add(ch);
    glyphs.push(ch);
  }
  return glyphs;
}
function glyphShapes(image, cols, cellW, cellH, count) {
  const vectors = new Float32Array(count * 6);
  const radius = cellH * 0.26;
  const padW = cellW + ATLAS_PAD * 2;
  const padH = cellH + ATLAS_PAD * 2;
  for (let g = 0; g < count; g++) {
    const originX = g % cols * padW + ATLAS_PAD;
    const originY = Math.floor(g / cols) * padH + ATLAS_PAD;
    for (let c = 0; c < 6; c++) {
      const cx = INNER_CIRCLES[c][0] * cellW;
      const cy = INNER_CIRCLES[c][1] * cellH;
      let sum = 0;
      let total = 0;
      for (let y = Math.floor(cy - radius); y <= Math.ceil(cy + radius); y++) {
        for (let x = Math.floor(cx - radius); x <= Math.ceil(cx + radius); x++) {
          const dx = x + 0.5 - cx;
          const dy = y + 0.5 - cy;
          if (dx * dx + dy * dy > radius * radius) continue;
          total += 1;
          if (x < -ATLAS_PAD || y < -ATLAS_PAD || x >= cellW + ATLAS_PAD || y >= cellH + ATLAS_PAD)
            continue;
          sum += image.data[((originY + y) * image.width + originX + x) * 4 + 3];
        }
      }
      vectors[g * 6 + c] = total ? sum / (total * 255) : 0;
    }
  }
  for (let c = 0; c < 6; c++) {
    let peak = 0;
    for (let g = 0; g < count; g++) {
      peak = Math.max(peak, vectors[g * 6 + c]);
    }
    if (peak > 0) {
      for (let g = 0; g < count; g++) vectors[g * 6 + c] /= peak;
    }
  }
  return vectors;
}
function sniffKind(bytes) {
  if (bytes.length < 4) return null;
  const ascii = (start, text) => {
    for (let i = 0; i < text.length; i++) {
      if (bytes[start + i] !== text.charCodeAt(i)) return false;
    }
    return true;
  };
  if (ascii(0, "glTF")) return "glb";
  if (bytes[0] === 137 && ascii(1, "PNG")) return "bitmap";
  if (bytes[0] === 255 && bytes[1] === 216) return "bitmap";
  if (ascii(0, "RIFF") && ascii(8, "WEBP")) return "bitmap";
  if (ascii(0, "GIF8")) return "bitmap";
  let head = "";
  try {
    head = new TextDecoder().decode(bytes.subarray(0, 2048)).replace(/^\uFEFF/, "").trimStart();
  } catch {
    return null;
  }
  if (head.startsWith("{")) return "gltf";
  if (head.startsWith("<")) return head.includes("<svg") ? "svg" : null;
  return null;
}
function makeCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width));
  canvas.height = Math.max(1, Math.round(height));
  return canvas;
}
function drawToCanvas(source, width, height) {
  const canvas = makeCanvas(width, height);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2d context unavailable");
  ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  return canvas;
}
function decodeWithImage(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not decode the image"));
    };
    image.src = url;
  });
}
async function decodeWithBitmap(blob) {
  if (typeof createImageBitmap !== "function") return null;
  try {
    const bitmap = await createImageBitmap(blob);
    const longest = Math.max(bitmap.width, bitmap.height, 1);
    const scale = Math.min(1, RASTER_SIZE / longest);
    const canvas = drawToCanvas(
      bitmap,
      bitmap.width * scale,
      bitmap.height * scale
    );
    bitmap.close();
    return canvas;
  } catch {
    return null;
  }
}
async function decodeImage(blob, kind) {
  const vector = kind === "svg";
  if (!vector) {
    const decoded = await decodeWithBitmap(blob);
    if (decoded) return decoded;
  }
  const image = await decodeWithImage(blob);
  const width = image.naturalWidth || RASTER_SIZE;
  const height = image.naturalHeight || RASTER_SIZE;
  const longest = Math.max(width, height, 1);
  const scale = vector ? RASTER_SIZE / longest : Math.min(1, RASTER_SIZE / longest);
  return drawToCanvas(image, width * scale, height * scale);
}
function traceContours(inside, width, height) {
  const segments = [];
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 1; x++) {
      const base = y * width + x;
      const code = inside[base] | inside[base + 1] << 1 | inside[base + width + 1] << 2 | inside[base + width] << 3;
      if (code === 0 || code === 15) continue;
      const top = x + 0.5;
      const right = y + 0.5;
      switch (code) {
        case 1:
        case 14:
          segments.push(x, right, top, y);
          break;
        case 2:
        case 13:
          segments.push(top, y, x + 1, right);
          break;
        case 3:
        case 12:
          segments.push(x, right, x + 1, right);
          break;
        case 4:
        case 11:
          segments.push(x + 1, right, top, y + 1);
          break;
        case 6:
        case 9:
          segments.push(top, y, top, y + 1);
          break;
        case 7:
        case 8:
          segments.push(x, right, top, y + 1);
          break;
        case 5:
          segments.push(x, right, top, y, x + 1, right, top, y + 1);
          break;
        default:
          segments.push(top, y, x + 1, right, x, right, top, y + 1);
          break;
      }
    }
  }
  const count = segments.length / 4;
  const stride = width * 2 + 1;
  const ends = /* @__PURE__ */ new Map();
  const keyAt = (index) => segments[index * 2 + 1] * 2 * stride + segments[index * 2] * 2;
  for (let i = 0; i < count; i++) {
    for (const end of [i * 2, i * 2 + 1]) {
      const key = keyAt(end);
      const bucket = ends.get(key);
      if (bucket) bucket.push(i);
      else ends.set(key, [i]);
    }
  }
  const used = new Uint8Array(count);
  const contours = [];
  for (let start = 0; start < count; start++) {
    if (used[start]) continue;
    const points = [];
    let current = start;
    let x = segments[start * 4];
    let y = segments[start * 4 + 1];
    while (current >= 0 && !used[current]) {
      used[current] = 1;
      const head = current * 4;
      const forward = segments[head] === x && segments[head + 1] === y;
      x = forward ? segments[head + 2] : segments[head];
      y = forward ? segments[head + 3] : segments[head + 1];
      points.push(x, y);
      const bucket = ends.get(y * 2 * stride + x * 2);
      let next = -1;
      if (bucket) {
        for (const candidate of bucket) {
          if (!used[candidate]) {
            next = candidate;
            break;
          }
        }
      }
      current = next;
    }
    if (points.length >= 8) contours.push(points);
  }
  return contours;
}
function simplify(points, tolerance) {
  const count = points.length / 2;
  if (count < 4) return points;
  const keep = new Uint8Array(count);
  keep[0] = 1;
  keep[count - 1] = 1;
  const stack = [0, count - 1];
  const toleranceSq = tolerance * tolerance;
  while (stack.length) {
    const last = stack.pop();
    const first = stack.pop();
    if (last - first < 2) continue;
    const ax = points[first * 2];
    const ay = points[first * 2 + 1];
    const dx = points[last * 2] - ax;
    const dy = points[last * 2 + 1] - ay;
    const lengthSq = dx * dx + dy * dy;
    let farthest = -1;
    let farthestSq = toleranceSq;
    for (let i = first + 1; i < last; i++) {
      const px = points[i * 2] - ax;
      const py = points[i * 2 + 1] - ay;
      const t = lengthSq > 0 ? (px * dx + py * dy) / lengthSq : 0;
      const clamped = t < 0 ? 0 : t > 1 ? 1 : t;
      const ox = px - dx * clamped;
      const oy = py - dy * clamped;
      const distanceSq = ox * ox + oy * oy;
      if (distanceSq > farthestSq) {
        farthest = i;
        farthestSq = distanceSq;
      }
    }
    if (farthest < 0) continue;
    keep[farthest] = 1;
    stack.push(first, farthest, farthest, last);
  }
  const result = [];
  for (let i = 0; i < count; i++) {
    if (keep[i]) result.push(points[i * 2], points[i * 2 + 1]);
  }
  return result;
}
function ringArea(points) {
  let area = 0;
  for (let i = 0, j = points.length - 2; i < points.length; j = i, i += 2) {
    area += (points[j] - points[i]) * (points[j + 1] + points[i + 1]);
  }
  return Math.abs(area) / 2;
}
function ringContains(points, x, y) {
  let inside = false;
  for (let i = 0, j = points.length - 2; i < points.length; j = i, i += 2) {
    const yi = points[i + 1];
    const yj = points[j + 1];
    if (yi > y === yj > y) continue;
    const t = (y - yi) / (yj - yi);
    if (x < points[i] + t * (points[j] - points[i])) inside = !inside;
  }
  return inside;
}
function buildShapes(canvas, aspectW, aspectH) {
  const rectangle = () => new THREE.Shape([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(aspectW, 0),
    new THREE.Vector2(aspectW, aspectH),
    new THREE.Vector2(0, aspectH)
  ]);
  const scale = Math.min(
    1,
    TRACE_SIZE / Math.max(canvas.width, canvas.height, 1)
  );
  const trace = scale < 1 ? drawToCanvas(canvas, canvas.width * scale, canvas.height * scale) : canvas;
  const ctx = trace.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [rectangle()];
  const traceW = trace.width;
  const traceH = trace.height;
  const data = ctx.getImageData(0, 0, traceW, traceH).data;
  const width = traceW + 2;
  const height = traceH + 2;
  const inside = new Uint8Array(width * height);
  let covered = 0;
  for (let y = 0; y < traceH; y++) {
    for (let x = 0; x < traceW; x++) {
      const on = data[(y * traceW + x) * 4 + 3] >= ALPHA_CUTOFF ? 1 : 0;
      inside[(y + 1) * width + x + 1] = on;
      covered += on;
    }
  }
  if (covered >= traceW * traceH * 0.995) return [rectangle()];
  const rings = traceContours(inside, width, height).map((points) => simplify(points, SIMPLIFY_TOLERANCE)).filter((points) => points.length >= 6 && ringArea(points) >= MIN_AREA).map((points) => ({ points, area: ringArea(points), depth: 0 })).sort((a, b) => b.area - a.area).slice(0, MAX_CONTOURS);
  if (!rings.length) return [rectangle()];
  for (const ring of rings) {
    for (const other of rings) {
      if (other !== ring && other.area > ring.area && ringContains(other.points, ring.points[0], ring.points[1])) {
        ring.depth += 1;
      }
    }
  }
  const toPath = (points) => {
    const path = [];
    for (let i = 0; i < points.length; i += 2) {
      path.push(
        new THREE.Vector2(
          (points[i] - 0.5) / traceW * aspectW,
          (1 - (points[i + 1] - 0.5) / traceH) * aspectH
        )
      );
    }
    return path;
  };
  const shapes = /* @__PURE__ */ new Map();
  for (const ring of rings) {
    if (ring.depth % 2 === 0)
      shapes.set(ring, new THREE.Shape(toPath(ring.points)));
  }
  for (const ring of rings) {
    if (ring.depth % 2 === 0) continue;
    let parent = null;
    for (const other of rings) {
      if (other.depth !== ring.depth - 1) continue;
      if (!ringContains(other.points, ring.points[0], ring.points[1])) continue;
      if (!parent || other.area < parent.area) parent = other;
    }
    const shape = parent ? shapes.get(parent) : void 0;
    if (shape) shape.holes.push(new THREE.Path(toPath(ring.points)));
  }
  const result = [...shapes.values()];
  return result.length ? result : [rectangle()];
}
function createImageObject(canvas, anisotropy) {
  const longest = Math.max(canvas.width, canvas.height, 1);
  const aspectW = canvas.width / longest;
  const aspectH = canvas.height / longest;
  const geometry = new THREE.ExtrudeGeometry(
    buildShapes(canvas, aspectW, aspectH),
    {
      depth: EXTRUDE_DEPTH,
      bevelEnabled: true,
      bevelThickness: BEVEL_SIZE,
      bevelSize: BEVEL_SIZE,
      bevelOffset: 0,
      bevelSegments: 2,
      steps: 1,
      curveSegments: 1
    }
  );
  const position = geometry.getAttribute("position");
  const uv = new Float32Array(position.count * 2);
  for (let i = 0; i < position.count; i++) {
    uv[i * 2] = position.getX(i) / aspectW;
    uv[i * 2 + 1] = position.getY(i) / aspectH;
  }
  geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = anisotropy;
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.6,
    metalness: 0
  });
  return new THREE.Mesh(geometry, material);
}
function disposeObject(root) {
  root.traverse((node) => {
    const mesh = node;
    if (mesh.geometry) mesh.geometry.dispose();
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const material of materials) {
      if (!material) continue;
      for (const value of Object.values(material)) {
        if (!(value instanceof THREE.Texture)) continue;
        value.dispose();
      }
      material.dispose();
    }
  });
}
function createAsciiObject(elements, options = {}) {
  const { canvas } = elements;
  const config = { ...DEFAULTS, ...resolveOptions(DEFAULTS, options) };
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance"
    });
  } catch {
    return null;
  }
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.setClearColor(0, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(config.fov, 1, 0.1, 200);
  camera.position.copy(CAMERA_DIR).multiplyScalar(config.cameraDistance);
  const ambientLight = new THREE.AmbientLight(16777215, 2.2);
  scene.add(ambientLight);
  const keyLight = new THREE.DirectionalLight(16777215, 3.4);
  keyLight.position.set(6, 8, 8);
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(9684477, 2);
  fillLight.position.set(-6, 3, -4);
  scene.add(fillLight);
  const rimLight = new THREE.DirectionalLight(6093959, 2.8);
  rimLight.position.set(0, -5, -6);
  scene.add(rimLight);
  const topPointLight = new THREE.PointLight(16777215, 35, 25);
  topPointLight.position.set(0, 5, 2);
  scene.add(topPointLight);
  const floatGroup = new THREE.Group();
  floatGroup.position.y = MODEL_LIFT;
  const fitGroup = new THREE.Group();
  floatGroup.add(fitGroup);
  scene.add(floatGroup);
  const controls = new import_OrbitControls.OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  const target = new THREE.WebGLRenderTarget(1, 1, { samples: 4 });
  target.texture.colorSpace = THREE.SRGBColorSpace;
  const sharedResolution = new THREE.Vector2(1, 1);
  const sharedCellPx = new THREE.Vector2(6, 10);
  const sharedGrid = new THREE.Vector2(1, 1);
  const cellTarget = new THREE.WebGLRenderTarget(1, 1, {
    depthBuffer: false,
    stencilBuffer: false,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter
  });
  const postMaterial = new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    vertexShader: POST_VERT,
    fragmentShader: POST_FRAG,
    uniforms: {
      tScene: { value: target.texture },
      tCells: { value: cellTarget.texture },
      tAtlas: { value: null },
      uResolution: { value: sharedResolution },
      uCellPx: { value: sharedCellPx },
      uGrid: { value: sharedGrid },
      uAtlasGrid: { value: new THREE.Vector2(1, 1) },
      uAtlasPad: { value: new THREE.Vector2(0, 0) },
      uAtlasInner: { value: new THREE.Vector2(1, 1) },
      uAscii: { value: 1 },
      uColored: { value: 1 },
      uColor: { value: new THREE.Color(1, 1, 1) },
      uBackground: { value: new THREE.Color(0, 0, 0) },
      uHasBg: { value: 0 }
    },
    depthTest: false,
    depthWrite: false,
    blending: THREE.NoBlending
  });
  const postGeometry = new THREE.BufferGeometry();
  postGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
      3
    )
  );
  const postMesh = new THREE.Mesh(postGeometry, postMaterial);
  postMesh.frustumCulled = false;
  const postScene = new THREE.Scene();
  postScene.add(postMesh);
  const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const cellMaterial = new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    vertexShader: POST_VERT,
    fragmentShader: CELL_FRAG,
    uniforms: {
      tScene: { value: target.texture },
      tShapes: { value: null },
      uResolution: { value: sharedResolution },
      uCellPx: { value: sharedCellPx },
      uGlyphCount: { value: 1 },
      uContrast: { value: 1.5 },
      uEdgeContrast: { value: 3 },
      uExposure: { value: 1 },
      uInvert: { value: 0 }
    },
    depthTest: false,
    depthWrite: false,
    blending: THREE.NoBlending
  });
  const cellMesh = new THREE.Mesh(postGeometry, cellMaterial);
  cellMesh.frustumCulled = false;
  const cellScene = new THREE.Scene();
  cellScene.add(cellMesh);
  let atlasTexture = null;
  let shapeTexture = null;
  let builtCharset = null;
  let builtAspect = 0;
  const pmrem = new THREE.PMREMGenerator(renderer);
  let roomScene = null;
  let ringMaterial = null;
  let envTarget = null;
  let envDirty = true;
  function buildRoom() {
    roomScene = new THREE.Scene();
    const room = new THREE.Group();
    room.position.set(0, -0.5, 0);
    roomScene.add(room);
    for (const [x, z] of [
      [-15, 15],
      [15, 15],
      [15, -15],
      [-15, -15]
    ]) {
      const spot = new THREE.SpotLight(16777215, 2, 0, 0.2, 1, 0);
      spot.position.set(x, 20, z);
      room.add(spot, spot.target);
    }
    const center = new THREE.PointLight(16777215, 100, 28, 2);
    center.position.set(0.5, 14, 0.5);
    room.add(center);
    const box = new THREE.BoxGeometry();
    const shell = new THREE.Mesh(
      box,
      new THREE.MeshStandardMaterial({ color: "gray", side: THREE.BackSide })
    );
    shell.position.set(0, 13.2, 0);
    shell.scale.set(31.5, 28.5, 31.5);
    room.add(shell);
    const white = new THREE.MeshStandardMaterial({ color: 16777215 });
    for (const def of ROOM_BLOCKS) {
      const mesh = new THREE.Mesh(box, white);
      mesh.position.set(...def.position);
      mesh.rotation.set(...def.rotation);
      mesh.scale.set(...def.scale);
      room.add(mesh);
    }
    for (const def of ROOM_FORMERS) {
      const geometry = def.kind === "ring" ? new THREE.RingGeometry(0.5, 1, 64) : new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        toneMapped: false
      });
      material.color.set(def.kind === "ring" ? config.highlight : "#ffffff").multiplyScalar(def.intensity);
      if (def.kind === "ring") ringMaterial = material;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...def.position);
      mesh.scale.set(...def.scale);
      if (def.lookAtCenter) mesh.lookAt(0, 0, 0);
      room.add(mesh);
      if (def.withLight) {
        const light = new THREE.PointLight(16777215, 100, 28, 2);
        light.position.set(...def.position);
        room.add(light);
      }
    }
  }
  function refreshEnvironment() {
    if (!roomScene) buildRoom();
    if (ringMaterial) {
      ringMaterial.color.set(config.highlight).multiplyScalar(15);
    }
    envTarget == null ? void 0 : envTarget.dispose();
    envTarget = pmrem.fromScene(roomScene, 0, 0.1, 1e3);
    scene.environment = envTarget.texture;
  }
  let model = null;
  let modelMaxDim = 1;
  let loadedSrc = null;
  let loadToken = 0;
  let disposed = false;
  const loader = new import_GLTFLoader.GLTFLoader();
  const draco = new import_DRACOLoader.DRACOLoader();
  draco.setDecoderPath(config.dracoDecoderPath);
  loader.setDRACOLoader(draco);
  function applyRoughness() {
    if (!model) return;
    model.traverse((node) => {
      const mesh = node;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const material of materials) {
        const standard = material;
        if (!standard || typeof standard.roughness !== "number") continue;
        if (standard.userData.baseRoughness === void 0) {
          standard.userData.baseRoughness = standard.roughness;
        }
        standard.roughness = config.roughness >= 0 ? config.roughness : standard.userData.baseRoughness;
      }
    });
  }
  function applyFit() {
    if (!model) return;
    fitGroup.scale.setScalar(config.scale / modelMaxDim);
  }
  function clearModel() {
    if (!model) return;
    fitGroup.remove(model);
    disposeObject(model);
    model = null;
  }
  function adoptModel(object) {
    clearModel();
    model = object;
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const offset = bounds.getCenter(new THREE.Vector3());
    modelMaxDim = Math.max(size.x, size.y, size.z, 1e-4);
    model.position.sub(offset);
    applyRoughness();
    applyFit();
    fitGroup.add(model);
  }
  function createAntModel() {
    const group = new THREE.Group();
    const armorMat = new THREE.MeshStandardMaterial({
      color: 2278750,
      // Vibrant Emerald Cyber Green
      roughness: 0.25,
      metalness: 0.65
    });
    const darkPlateMat = new THREE.MeshStandardMaterial({
      color: 3359061,
      // Sleek Titanium Slate
      roughness: 0.3,
      metalness: 0.75
    });
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 15857145,
      // Polished Mirror Chrome
      roughness: 0.15,
      metalness: 0.95
    });
    const neonGlowMat = new THREE.MeshStandardMaterial({
      color: 6093959,
      // Bright Phosphor Green
      emissive: 2278750,
      emissiveIntensity: 0.95,
      roughness: 0.1
    });
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 2282478,
      // Radiant Cyan Eyes
      emissive: 440020,
      emissiveIntensity: 1.2,
      roughness: 0.1
    });
    const headGeo = new THREE.SphereGeometry(0.68, 24, 24);
    headGeo.scale(0.9, 0.85, 1.2);
    const head = new THREE.Mesh(headGeo, armorMat);
    head.position.set(0, 0.05, 1.15);
    group.add(head);
    const crestGeo = new THREE.BoxGeometry(0.7, 0.18, 0.85);
    const crest = new THREE.Mesh(crestGeo, chromeMat);
    crest.position.set(0, 0.42, 1.1);
    crest.rotation.x = -Math.PI / 10;
    group.add(crest);
    const eyeGeo = new THREE.SphereGeometry(0.3, 16, 16);
    eyeGeo.scale(0.9, 1.25, 0.95);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.48, 0.22, 1.35);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.48, 0.22, 1.35);
    group.add(leftEye, rightEye);
    for (const side of [-1, 1]) {
      const antBaseGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.65, 8);
      const antBase = new THREE.Mesh(antBaseGeo, darkPlateMat);
      antBase.position.set(side * 0.22, 0.48, 1.45);
      antBase.rotation.x = Math.PI / 4;
      antBase.rotation.z = -side * (Math.PI / 6);
      const antKneeGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const antKnee = new THREE.Mesh(antKneeGeo, chromeMat);
      antKnee.position.set(side * 0.38, 0.76, 1.72);
      const antTipGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.85, 8);
      const antTip = new THREE.Mesh(antTipGeo, armorMat);
      antTip.position.set(side * 0.52, 1.1, 2.05);
      antTip.rotation.x = Math.PI / 3;
      antTip.rotation.z = -side * (Math.PI / 3.5);
      const antBulbGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const antBulb = new THREE.Mesh(antBulbGeo, neonGlowMat);
      antBulb.position.set(side * 0.72, 1.38, 2.38);
      group.add(antBase, antKnee, antTip, antBulb);
      const mandibleGeo = new THREE.ConeGeometry(0.16, 0.58, 10);
      const mandible = new THREE.Mesh(mandibleGeo, chromeMat);
      mandible.position.set(side * 0.22, -0.28, 1.75);
      mandible.rotation.x = Math.PI / 2.2;
      mandible.rotation.z = side * (Math.PI / 3.8);
      group.add(mandible);
    }
    const thoraxGeo = new THREE.SphereGeometry(0.68, 24, 24);
    thoraxGeo.scale(0.95, 0.9, 1.35);
    const thorax = new THREE.Mesh(thoraxGeo, armorMat);
    thorax.position.set(0, 0, 0.05);
    group.add(thorax);
    const conduitGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.9, 12);
    const conduit = new THREE.Mesh(conduitGeo, neonGlowMat);
    conduit.position.set(0, 0.45, 0.05);
    conduit.rotation.x = Math.PI / 2;
    group.add(conduit);
    const waistGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.48, 12);
    const waist = new THREE.Mesh(waistGeo, chromeMat);
    waist.position.set(0, -0.05, -0.72);
    waist.rotation.x = Math.PI / 2;
    group.add(waist);
    const gasterGeo = new THREE.SphereGeometry(1.1, 28, 28);
    gasterGeo.scale(1, 0.95, 1.65);
    const gaster = new THREE.Mesh(gasterGeo, armorMat);
    gaster.position.set(0, 0.2, -1.8);
    gaster.rotation.x = -Math.PI / 16;
    group.add(gaster);
    const ring1Geo = new THREE.TorusGeometry(1.02, 0.09, 16, 36);
    const stripe1 = new THREE.Mesh(ring1Geo, neonGlowMat);
    stripe1.position.set(0, 0.2, -1.45);
    const ring2Geo = new THREE.TorusGeometry(0.95, 0.08, 16, 36);
    const stripe2 = new THREE.Mesh(ring2Geo, neonGlowMat);
    stripe2.position.set(0, 0.2, -1.85);
    const ring3Geo = new THREE.TorusGeometry(0.8, 0.07, 16, 36);
    const stripe3 = new THREE.Mesh(ring3Geo, neonGlowMat);
    stripe3.position.set(0, 0.2, -2.25);
    const stingerGeo = new THREE.ConeGeometry(0.26, 0.52, 12);
    const stinger = new THREE.Mesh(stingerGeo, chromeMat);
    stinger.position.set(0, 0.15, -2.95);
    stinger.rotation.x = -Math.PI / 2;
    group.add(stripe1, stripe2, stripe3, stinger);
    const legPairs = [
      { z: 0.45, xAngle: -0.25, zAngle: 0.35, len: 1.25 },
      { z: 0.05, xAngle: 0.05, zAngle: 0.45, len: 1.4 },
      { z: -0.38, xAngle: 0.45, zAngle: 0.5, len: 1.55 }
    ];
    legPairs.forEach(({ z, xAngle, zAngle, len }) => {
      for (const side of [-1, 1]) {
        const hipGeo = new THREE.SphereGeometry(0.16, 12, 12);
        const hip = new THREE.Mesh(hipGeo, chromeMat);
        hip.position.set(side * 0.58, 0.1, z);
        const femurGeo = new THREE.CylinderGeometry(0.12, 0.15, len * 0.75, 10);
        const femur = new THREE.Mesh(femurGeo, armorMat);
        femur.position.set(side * 0.85, 0.35, z + side * xAngle * 0.2);
        femur.rotation.z = -side * (0.65 + zAngle);
        femur.rotation.y = side * xAngle;
        const kneeGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.22, 12);
        const knee = new THREE.Mesh(kneeGeo, chromeMat);
        knee.position.set(side * (0.75 + len * 0.55), 0.65, z + side * xAngle * 0.35);
        knee.rotation.x = Math.PI / 2;
        const kneeCapGeo = new THREE.SphereGeometry(0.12, 10, 10);
        const kneeCap = new THREE.Mesh(kneeCapGeo, neonGlowMat);
        kneeCap.position.copy(knee.position);
        const tibiaGeo = new THREE.CylinderGeometry(0.09, 0.12, len * 0.9, 10);
        const tibia = new THREE.Mesh(tibiaGeo, darkPlateMat);
        tibia.position.set(side * (0.95 + len * 0.65), -0.05, z + side * xAngle * 0.5);
        tibia.rotation.z = side * 0.52;
        const clawGeo = new THREE.ConeGeometry(0.1, 0.32, 8);
        const claw = new THREE.Mesh(clawGeo, chromeMat);
        claw.position.set(side * (1.15 + len * 0.75), -0.65, z + side * xAngle * 0.6);
        claw.rotation.z = -side * Math.PI / 2;
        group.add(hip, femur, knee, kneeCap, tibia, claw);
      }
    });
    return group;
  }
  function createTorusKnotModel() {
    const group = new THREE.Group();
    const knotMat = new THREE.MeshStandardMaterial({
      color: 440020,
      // Cyan Iridescent
      roughness: 0.18,
      metalness: 0.85
    });
    const knotGeo = new THREE.TorusKnotGeometry(1.25, 0.36, 128, 32, 2, 3);
    const knot = new THREE.Mesh(knotGeo, knotMat);
    group.add(knot);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 6093959,
      emissive: 2278750,
      emissiveIntensity: 0.8,
      roughness: 0.1
    });
    const ringGeo = new THREE.TorusGeometry(1.75, 0.06, 16, 64);
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 4;
    group.add(ring);
    return group;
  }
  function createCrystalModel() {
    const group = new THREE.Group();
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 3718648,
      roughness: 0.15,
      metalness: 0.85,
      flatShading: true
    });
    const coreMat = new THREE.MeshStandardMaterial({
      color: 6809849,
      emissive: 165063,
      emissiveIntensity: 0.9,
      roughness: 0.1
    });
    const ringMat = new THREE.MeshStandardMaterial({
      color: 12616956,
      emissive: 8141549,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.7
    });
    const gemGeo = new THREE.IcosahedronGeometry(1.3, 0);
    const gem = new THREE.Mesh(gemGeo, crystalMat);
    group.add(gem);
    const coreGeo = new THREE.OctahedronGeometry(0.7, 0);
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);
    const ringGeo1 = new THREE.TorusGeometry(1.95, 0.09, 16, 64);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    group.add(ring1);
    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.08, 16, 64);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    group.add(ring2);
    return group;
  }
  function createDroneModel() {
    const group = new THREE.Group();
    const hullMat = new THREE.MeshStandardMaterial({
      color: 4674921,
      // Titanium Slate
      roughness: 0.25,
      metalness: 0.85
    });
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 15680580,
      emissive: 14427686,
      emissiveIntensity: 1.1,
      roughness: 0.15
    });
    const ringMat = new THREE.MeshStandardMaterial({
      color: 3718648,
      emissive: 165063,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8
    });
    const bodyGeo = new THREE.SphereGeometry(1.05, 32, 32);
    const body = new THREE.Mesh(bodyGeo, hullMat);
    group.add(body);
    const sensorGeo = new THREE.CylinderGeometry(0.45, 0.48, 0.32, 32);
    const sensor = new THREE.Mesh(sensorGeo, eyeMat);
    sensor.rotation.x = Math.PI / 2;
    sensor.position.set(0, 0, 1);
    group.add(sensor);
    const ringGeo = new THREE.TorusGeometry(0.52, 0.08, 16, 32);
    const sensorRing = new THREE.Mesh(ringGeo, ringMat);
    sensorRing.position.set(0, 0, 1.02);
    group.add(sensorRing);
    const angles = [Math.PI / 4, 3 * Math.PI / 4, 5 * Math.PI / 4, 7 * Math.PI / 4];
    angles.forEach((angle) => {
      const armGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.3, 12);
      const arm = new THREE.Mesh(armGeo, hullMat);
      arm.position.set(Math.cos(angle) * 1.05, Math.sin(angle) * 1.05, 0);
      arm.rotation.z = angle - Math.PI / 2;
      const nacelleGeo = new THREE.CylinderGeometry(0.28, 0.32, 0.7, 16);
      const nacelle = new THREE.Mesh(nacelleGeo, ringMat);
      nacelle.position.set(Math.cos(angle) * 1.7, Math.sin(angle) * 1.7, 0);
      nacelle.rotation.x = Math.PI / 2;
      group.add(arm, nacelle);
    });
    return group;
  }
  function createMonolithModel() {
    const group = new THREE.Group();
    const monolithMat = new THREE.MeshStandardMaterial({
      color: 3900150,
      // Cyber Cobalt
      roughness: 0.25,
      metalness: 0.8
    });
    const runeMat = new THREE.MeshStandardMaterial({
      color: 11032055,
      emissive: 8141549,
      emissiveIntensity: 0.9,
      roughness: 0.15
    });
    const shaftGeo = new THREE.CylinderGeometry(0.65, 0.95, 2.8, 4);
    const shaft = new THREE.Mesh(shaftGeo, monolithMat);
    shaft.rotation.y = Math.PI / 4;
    group.add(shaft);
    const apexGeo = new THREE.ConeGeometry(0.7, 0.8, 4);
    const apex = new THREE.Mesh(apexGeo, runeMat);
    apex.position.set(0, 1.95, 0);
    apex.rotation.y = Math.PI / 4;
    group.add(apex);
    const baseGeo = new THREE.BoxGeometry(2.3, 0.3, 2.3);
    const base = new THREE.Mesh(baseGeo, monolithMat);
    base.position.set(0, -1.5, 0);
    group.add(base);
    return group;
  }
  function createDuckModel() {
    const group = new THREE.Group();
    const duckYellow = new THREE.MeshStandardMaterial({
      color: 16436245,
      // Golden Yellow
      roughness: 0.25,
      metalness: 0.15
    });
    const beakOrange = new THREE.MeshStandardMaterial({
      color: 16347926,
      // Orange
      roughness: 0.3,
      metalness: 0.1
    });
    const eyeBlack = new THREE.MeshStandardMaterial({
      color: 592139,
      roughness: 0.2,
      metalness: 0.8
    });
    const eyeWhite = new THREE.MeshStandardMaterial({
      color: 16777215,
      roughness: 0.2
    });
    const bodyGeo = new THREE.SphereGeometry(1.05, 28, 28);
    bodyGeo.scale(1, 0.88, 1.35);
    const body = new THREE.Mesh(bodyGeo, duckYellow);
    group.add(body);
    const headGeo = new THREE.SphereGeometry(0.72, 24, 24);
    const head = new THREE.Mesh(headGeo, duckYellow);
    head.position.set(0, 0.95, 0.65);
    group.add(head);
    const beakGeo = new THREE.ConeGeometry(0.36, 0.75, 16);
    beakGeo.scale(1.3, 0.5, 1);
    const beak = new THREE.Mesh(beakGeo, beakOrange);
    beak.position.set(0, 0.85, 1.4);
    beak.rotation.x = Math.PI / 2;
    group.add(beak);
    for (const side of [-1, 1]) {
      const eyeGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const eye = new THREE.Mesh(eyeGeo, eyeBlack);
      eye.position.set(side * 0.36, 1.12, 1.1);
      const pupilGeo = new THREE.SphereGeometry(0.045, 12, 12);
      const pupil = new THREE.Mesh(pupilGeo, eyeWhite);
      pupil.position.set(side * 0.38, 1.15, 1.18);
      group.add(eye, pupil);
    }
    for (const side of [-1, 1]) {
      const wingGeo = new THREE.SphereGeometry(0.55, 16, 16);
      wingGeo.scale(0.3, 0.75, 1.15);
      const wing = new THREE.Mesh(wingGeo, duckYellow);
      wing.position.set(side * 1.02, 0.1, 0.05);
      wing.rotation.y = side * 0.15;
      wing.rotation.z = -side * 0.2;
      group.add(wing);
    }
    const tailGeo = new THREE.ConeGeometry(0.38, 0.7, 16);
    const tail = new THREE.Mesh(tailGeo, duckYellow);
    tail.position.set(0, 0.48, -1.35);
    tail.rotation.x = -Math.PI / 3;
    group.add(tail);
    return group;
  }
  function createFaceModel() {
    const group = new THREE.Group();
    const faceMat = new THREE.MeshStandardMaterial({
      color: 3718648,
      // Light Blue Titanium
      roughness: 0.25,
      metalness: 0.8
    });
    const armorMat = new THREE.MeshStandardMaterial({
      color: 1976635,
      // Deep Slate
      roughness: 0.3,
      metalness: 0.7
    });
    const visorMat = new THREE.MeshStandardMaterial({
      color: 6093959,
      // Glowing Emerald Visor
      emissive: 2278750,
      emissiveIntensity: 1.1,
      roughness: 0.1
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 16498468,
      roughness: 0.2,
      metalness: 0.9
    });
    const craniumGeo = new THREE.SphereGeometry(1, 24, 24);
    craniumGeo.scale(0.85, 1.15, 1);
    const cranium = new THREE.Mesh(craniumGeo, faceMat);
    group.add(cranium);
    const crestGeo = new THREE.ConeGeometry(0.4, 0.9, 4);
    const crest = new THREE.Mesh(crestGeo, goldMat);
    crest.position.set(0, 1.35, 0.2);
    crest.rotation.y = Math.PI / 4;
    group.add(crest);
    const visorGeo = new THREE.CylinderGeometry(0.88, 0.92, 0.38, 24, 1, false, -Math.PI / 3, 2 * Math.PI / 3);
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 0.18, 0.18);
    visor.rotation.y = Math.PI / 2;
    group.add(visor);
    for (const side of [-1, 1]) {
      const cheekGeo = new THREE.BoxGeometry(0.35, 0.6, 0.45);
      const cheek = new THREE.Mesh(cheekGeo, armorMat);
      cheek.position.set(side * 0.68, -0.25, 0.65);
      cheek.rotation.y = side * 0.35;
      cheek.rotation.z = -side * 0.2;
      group.add(cheek);
    }
    const jawGeo = new THREE.BoxGeometry(0.85, 0.65, 0.75);
    const jaw = new THREE.Mesh(jawGeo, armorMat);
    jaw.position.set(0, -0.75, 0.4);
    group.add(jaw);
    for (let i = -2; i <= 2; i++) {
      const grilleGeo = new THREE.BoxGeometry(0.04, 0.28, 0.08);
      const grille = new THREE.Mesh(grilleGeo, visorMat);
      grille.position.set(i * 0.12, -0.72, 0.78);
      group.add(grille);
    }
    return group;
  }
  function getProceduralKey(src) {
    if (!src) return null;
    const s = src.toLowerCase().trim();
    if (s.startsWith("procedural:")) return s.slice(11).trim();
    if (s.startsWith("#")) return s.slice(1).trim();
    if (s.startsWith("http://") || s.startsWith("https://") || s.startsWith("blob:") || s.startsWith("data:")) {
      return null;
    }
    if (s === "ant" || s.includes("ant")) return "ant";
    if (s.includes("knot") || s.includes("torus")) return "torus-knot";
    if (s === "crystal" || s.includes("crystal") || s.includes("gem")) return "crystal";
    if (s === "drone" || s.includes("drone") || s.includes("orb")) return "drone";
    if (s === "monolith" || s.includes("monolith") || s.includes("obelisk")) return "monolith";
    if (s === "duck" || s.includes("duck")) return "duck";
    if (s === "face" || s.includes("portrait") || s.includes("mask")) return "face";
    if (s === "bolt") return "crystal";
    if (s === "logo") return "ant";
    return null;
  }
  function createProceduralModel(key) {
    switch (key) {
      case "ant":
        return createAntModel();
      case "torus-knot":
      case "knot":
      case "torus":
        return createTorusKnotModel();
      case "crystal":
      case "gem":
      case "bolt":
        return createCrystalModel();
      case "drone":
      case "orb":
        return createDroneModel();
      case "monolith":
      case "obelisk":
        return createMonolithModel();
      case "duck":
        return createDuckModel();
      case "face":
      case "mask":
      case "portrait":
      default:
        return createFaceModel();
    }
  }
  async function loadAsset() {
    var _a, _b, _c, _d;
    const src = config.src;
    if (src === loadedSrc) return;
    loadedSrc = src;
    const token = ++loadToken;
    if (!src) {
      clearModel();
      return;
    }
    const proceduralKey = getProceduralKey(src);
    if (proceduralKey) {
      try {
        const model2 = createProceduralModel(proceduralKey);
        if (disposed || token !== loadToken) {
          disposeObject(model2);
          return;
        }
        adoptModel(model2);
        (_a = config.onLoad) == null ? void 0 : _a.call(config);
        return;
      } catch (error) {
        if (disposed || token !== loadToken) return;
        (_b = config.onError) == null ? void 0 : _b.call(config, error);
        return;
      }
    }
    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const buffer = await response.arrayBuffer();
      if (disposed || token !== loadToken) return;
      const bytes = new Uint8Array(buffer);
      const kind = sniffKind(bytes);
      if (!kind) throw new Error("Unrecognized asset format");
      if (kind === "glb" || kind === "gltf") {
        draco.setDecoderPath(config.dracoDecoderPath);
        const resourcePath = src.slice(0, src.lastIndexOf("/") + 1);
        const data = kind === "glb" ? buffer : new TextDecoder().decode(bytes);
        const gltf = await loader.parseAsync(data, resourcePath);
        if (disposed || token !== loadToken) {
          disposeObject(gltf.scene);
          return;
        }
        adoptModel(gltf.scene);
      } else {
        const blob = new Blob([buffer], {
          type: kind === "svg" ? "image/svg+xml" : ""
        });
        const source = await decodeImage(blob, kind);
        if (disposed || token !== loadToken) return;
        adoptModel(
          createImageObject(source, renderer.capabilities.getMaxAnisotropy())
        );
      }
      (_c = config.onLoad) == null ? void 0 : _c.call(config);
    } catch (error) {
      if (disposed || token !== loadToken) return;
      (_d = config.onError) == null ? void 0 : _d.call(config, error);
    }
  }
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reducedMotion = motionQuery.matches;
  const onMotionChange = () => {
    reducedMotion = motionQuery.matches;
    if (reducedMotion) floatGroup.rotation.set(0, 0, 0);
    applyOptions();
  };
  motionQuery.addEventListener("change", onMotionChange);
  function rebuildAtlas() {
    const aspect = clampAspect(config.cellAspect);
    if (builtCharset === config.charset && builtAspect === aspect) return;
    const glyphs = buildGlyphList(config.charset);
    const cellH = ATLAS_CELL;
    const cellW = Math.max(Math.round(cellH * aspect), 8);
    const padW = cellW + ATLAS_PAD * 2;
    const padH = cellH + ATLAS_PAD * 2;
    const cols = Math.ceil(Math.sqrt(glyphs.length));
    const rows = Math.ceil(glyphs.length / cols);
    const surface = makeCanvas(cols * padW, rows * padH);
    const ctx = surface.getContext("2d");
    if (!ctx) return;
    builtCharset = config.charset;
    builtAspect = aspect;
    ctx.clearRect(0, 0, surface.width, surface.height);
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const fontPx = Math.floor(Math.min(cellH * 0.92, cellW / 0.58));
    ctx.font = `600 ${fontPx}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
    for (let g = 0; g < glyphs.length; g++) {
      ctx.fillText(
        glyphs[g],
        g % cols * padW + padW / 2,
        Math.floor(g / cols) * padH + padH / 2
      );
    }
    const image = ctx.getImageData(0, 0, surface.width, surface.height);
    const vectors = glyphShapes(image, cols, cellW, cellH, glyphs.length);
    atlasTexture == null ? void 0 : atlasTexture.dispose();
    shapeTexture == null ? void 0 : shapeTexture.dispose();
    atlasTexture = new THREE.CanvasTexture(surface);
    atlasTexture.minFilter = THREE.LinearMipmapLinearFilter;
    atlasTexture.magFilter = THREE.LinearFilter;
    atlasTexture.wrapS = THREE.ClampToEdgeWrapping;
    atlasTexture.wrapT = THREE.ClampToEdgeWrapping;
    shapeTexture = new THREE.DataTexture(
      vectors,
      6,
      glyphs.length,
      THREE.RedFormat,
      THREE.FloatType
    );
    shapeTexture.needsUpdate = true;
    postMaterial.uniforms.tAtlas.value = atlasTexture;
    postMaterial.uniforms.uAtlasGrid.value.set(cols, rows);
    postMaterial.uniforms.uAtlasPad.value.set(
      ATLAS_PAD / padW,
      ATLAS_PAD / padH
    );
    postMaterial.uniforms.uAtlasInner.value.set(
      cellW / padW,
      cellH / padH
    );
    cellMaterial.uniforms.tShapes.value = shapeTexture;
    cellMaterial.uniforms.uGlyphCount.value = glyphs.length;
  }
  function syncCellGrid() {
    const pr = renderer.getPixelRatio();
    const cellH = Math.max(config.cellSize, 3) * pr;
    const cellW = cellH * clampAspect(config.cellAspect);
    sharedCellPx.set(cellW, cellH);
    const cols = Math.max(Math.ceil(sharedResolution.x / cellW), 1);
    const rows = Math.max(Math.ceil(sharedResolution.y / cellH), 1);
    sharedGrid.set(cols, rows);
    if (cellTarget.width !== cols || cellTarget.height !== rows) {
      cellTarget.setSize(cols, rows);
    }
  }
  function applyOptions() {
    scene.environmentIntensity = config.environmentIntensity;
    if (rimLight && config.highlight) {
      rimLight.color.setStyle(config.highlight);
    }
    controls.enableRotate = config.orbit;
    controls.enableZoom = config.zoom;
    controls.autoRotate = config.autoRotate && !reducedMotion;
    controls.autoRotateSpeed = config.autoRotateSpeed;
    camera.fov = fitFov(config.fov, camera.aspect);
    camera.updateProjectionMatrix();
    floatGroup.position.x = config.xOffset;
    floatGroup.position.y = MODEL_LIFT + config.yOffset;
    cellMaterial.uniforms.uContrast.value = Math.max(config.contrast, 0.05);
    cellMaterial.uniforms.uEdgeContrast.value = Math.max(
      config.edgeContrast,
      0.05
    );
    cellMaterial.uniforms.uExposure.value = Math.max(config.exposure, 0);
    cellMaterial.uniforms.uInvert.value = config.invert ? 1 : 0;
    postMaterial.uniforms.uAscii.value = config.ascii ? 1 : 0;
    postMaterial.uniforms.uColored.value = config.colored ? 1 : 0;
    postMaterial.uniforms.uColor.value.setStyle(
      config.color || "#ffffff",
      THREE.NoColorSpace
    );
    postMaterial.uniforms.uHasBg.value = config.background ? 1 : 0;
    if (config.background) {
      postMaterial.uniforms.uBackground.value.setStyle(
        config.background,
        THREE.NoColorSpace
      );
    }
    rebuildAtlas();
    syncCellGrid();
    applyRoughness();
    applyFit();
  }
  function resize() {
    const width = Math.max(canvas.clientWidth, 1);
    const height = Math.max(canvas.clientHeight, 1);
    const pr = getCanvasPixelRatio(canvas, renderer.getContext());
    renderer.setPixelRatio(pr);
    renderer.setSize(width, height, false);
    const deviceW = Math.round(width * pr);
    const deviceH = Math.round(height * pr);
    target.setSize(deviceW, deviceH);
    sharedResolution.set(deviceW, deviceH);
    camera.aspect = width / height;
    camera.fov = fitFov(config.fov, camera.aspect);
    camera.updateProjectionMatrix();
    syncCellGrid();
  }
  const observer = createCanvasResizeObserver(resize);
  observer.observe(canvas);
  resize();
  applyOptions();
  loadAsset();
  let inView = true;
  let pageVisible = typeof document === "undefined" || document.visibilityState !== "hidden";
  let loopRunning = false;
  function tick(time) {
    if (!inView || !pageVisible) {
      lastTime = 0;
      stopLoop();
      return;
    }
    const delta = lastTime ? Math.min((time - lastTime) / 1e3, 0.1) : 0;
    lastTime = time;
    if (envDirty) {
      envDirty = false;
      refreshEnvironment();
    }
    controls.update();
    if (!reducedMotion) {
      elapsed += delta * config.floatSpeed;
      floatGroup.rotation.x = Math.cos(elapsed / 4) / 8 * config.rotationIntensity;
      floatGroup.rotation.y = Math.sin(elapsed / 4) / 8 * config.rotationIntensity;
      floatGroup.rotation.z = Math.sin(elapsed / 4) / 20 * config.rotationIntensity;
      floatGroup.position.y = MODEL_LIFT + config.yOffset + Math.sin(elapsed / 1.5) / 10 * config.floatIntensity;
    }
    renderer.setRenderTarget(target);
    renderer.render(scene, camera);
    if (config.ascii) {
      renderer.setRenderTarget(cellTarget);
      renderer.render(cellScene, postCamera);
    }
    renderer.setRenderTarget(null);
    renderer.render(postScene, postCamera);
  }
  function startLoop() {
    if (loopRunning || !inView || !pageVisible || disposed) return;
    loopRunning = true;
    renderer.setAnimationLoop(tick);
  }
  function stopLoop() {
    if (!loopRunning) return;
    loopRunning = false;
    renderer.setAnimationLoop(null);
  }
  const viewObserver = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver((entries) => {
    var _a;
    inView = ((_a = entries[entries.length - 1]) == null ? void 0 : _a.isIntersecting) ?? true;
    if (inView) {
      startLoop();
    } else {
      stopLoop();
    }
  }) : null;
  viewObserver == null ? void 0 : viewObserver.observe(canvas);
  const onVisibilityChange = () => {
    pageVisible = document.visibilityState !== "hidden";
    if (pageVisible) {
      lastTime = 0;
      startLoop();
    } else {
      stopLoop();
    }
  };
  document.addEventListener("visibilitychange", onVisibilityChange);
  let lastTime = 0;
  let elapsed = Math.random() * 100;
  startLoop();
  return {
    setOptions(next) {
      next = resolveOptions(DEFAULTS, next);
      let changed = false;
      for (const [key, value] of Object.entries(next)) {
        if (typeof value === "function") continue;
        if (config[key] !== value) {
          changed = true;
          break;
        }
      }
      if (!changed) {
        Object.assign(config, next);
        return;
      }
      const previousHighlight = config.highlight;
      const previousDistance = config.cameraDistance;
      Object.assign(config, next);
      if (config.highlight !== previousHighlight) envDirty = true;
      if (config.cameraDistance !== previousDistance) {
        camera.position.copy(CAMERA_DIR).multiplyScalar(config.cameraDistance);
      }
      applyOptions();
      resize();
      loadAsset();
      startLoop();
    },
    resize,
    destroy() {
      disposed = true;
      loadToken += 1;
      stopLoop();
      observer.disconnect();
      viewObserver == null ? void 0 : viewObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionQuery.removeEventListener("change", onMotionChange);
      controls.dispose();
      ambientLight.dispose();
      keyLight.dispose();
      fillLight.dispose();
      rimLight.dispose();
      topPointLight.dispose();
      clearModel();
      if (roomScene) disposeObject(roomScene);
      envTarget == null ? void 0 : envTarget.dispose();
      pmrem.dispose();
      draco.dispose();
      target.dispose();
      cellTarget.dispose();
      cellMaterial.dispose();
      atlasTexture == null ? void 0 : atlasTexture.dispose();
      shapeTexture == null ? void 0 : shapeTexture.dispose();
      postGeometry.dispose();
      postMaterial.dispose();
      renderer.dispose();
    }
  };
}
function AsciiObject({
  className,
  style,
  ...options
}) {
  const canvasRef = (0, import_react3.useRef)(null);
  const instanceRef = (0, import_react3.useRef)(null);
  const [initialOptions] = (0, import_react3.useState)(options);
  (0, import_react3.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    instanceRef.current = createAsciiObject({ canvas }, initialOptions);
    return () => {
      var _a;
      (_a = instanceRef.current) == null ? void 0 : _a.destroy();
      instanceRef.current = null;
    };
  }, [initialOptions]);
  (0, import_react3.useEffect)(() => {
    var _a;
    (_a = instanceRef.current) == null ? void 0 : _a.setOptions(options);
  });
  return /* @__PURE__ */ import_react2.default.createElement("div", { className, style: { position: "relative", ...style } }, /* @__PURE__ */ import_react2.default.createElement(
    "canvas",
    {
      ref: canvasRef,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        touchAction: "none"
      }
    }
  ));
}

// src/components/ui/interactive-ascii-face.jsx
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
var GLYPHS = [".:;|`", "il/+=:", "xovucz", "7TZH28", "NWM#@%"];
var DEFAULT_MODELS = {
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
  logo: "procedural:ant"
};
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
      const trailRows = 12 + i * 7 % 14;
      const speed = 75 + i * 31 % 110;
      const x = i * cellW + cellW / 2;
      const headY = -Math.random() * (height * 1.5) - trailRows * cellH;
      columns.push({
        x,
        headY,
        trailLength: trailRows * cellH,
        speed,
        mutationTick: Math.random() * 100
      });
    }
  }
  function paint(delta = 1e3 / 60) {
    var _a, _b, _c, _d;
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
      mouseSpeed = 0.8
    } = settings.current;
    context.globalAlpha = 1;
    context.clearRect(0, 0, width, height);
    if (mode === "face") return;
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
    const mouseX = (_b = (_a = pointer.current) == null ? void 0 : _a.position) == null ? void 0 : _b.x;
    const mouseY = (_d = (_c = pointer.current) == null ? void 0 : _c.position) == null ? void 0 : _d.y;
    const repulsionRadius = 55 * Math.min(1.4, Math.max(0.3, mouseSpeed || 0.8));
    const speedMultiplier = Number(settings.current.speed ?? settings.current.lineSpeed ?? 1);
    const dt = delta / 1e3;
    for (let c = 0; c < columns.length; c++) {
      const col = columns[c];
      col.headY += col.speed * dt * Math.max(0.1, speedMultiplier);
      col.mutationTick += delta;
      if (col.headY - col.trailLength > height) {
        const trailRows = 12 + c * 7 % 14;
        col.trailLength = trailRows * cellH;
        col.speed = 75 + c * 31 % 110;
        col.headY = -Math.random() * 180 - col.trailLength;
      }
      const startRow = Math.max(0, Math.floor((col.headY - col.trailLength) / cellH));
      const endRow = Math.min(Math.floor(height / cellH), Math.floor(col.headY / cellH));
      if (startRow > endRow) continue;
      for (let r = startRow; r <= endRow; r++) {
        const y = r * cellH + cellH / 2;
        const distFromHead = col.headY - y;
        if (distFromHead < 0 || distFromHead > col.trailLength) continue;
        const progress = 1 - distFromHead / col.trailLength;
        let densityFactor = 1;
        if (mode === "face-rain") {
          const dxCenter = Math.abs(col.x - width / 2) / (width * 0.35);
          const dyCenter = Math.abs(y - height / 2) / (height * 0.35);
          if (dxCenter < 1 && dyCenter < 1) {
            densityFactor = 0.35;
          }
        }
        let drawX = col.x;
        let drawY = y;
        if (mouseX !== void 0 && mouseY !== void 0) {
          const dx = col.x - mouseX;
          const dy = y - mouseY;
          const dist = Math.hypot(dx, dy);
          if (dist < repulsionRadius && dist > 0) {
            const push = (1 - dist / repulsionRadius) * 6 * Math.min(1.4, Math.max(0.3, mouseSpeed || 0.8));
            drawX += dx / dist * push;
            drawY += dy / dist * push;
          }
        }
        const mutateCycle = Math.floor(col.mutationTick / 120);
        const rainSeed = Math.imul(c + 1, 374761393) ^ Math.imul(r + mutateCycle, 668265263);
        let rainChar = "";
        if (customChars) {
          const glyphSeed = ((rainSeed ^ rainSeed >>> 13) >>> 0) % customChars.length;
          rainChar = customChars[glyphSeed];
        } else {
          const group = Math.min(GLYPHS.length - 1, Math.floor(progress * GLYPHS.length));
          const glyphs = GLYPHS[group];
          const glyph = ((rainSeed ^ rainSeed >>> 13) >>> 0) % glyphs.length;
          rainChar = glyphs[glyph];
        }
        const isHead = distFromHead < cellH * 1.15;
        if (isHead) {
          context.fillStyle = "#ffffff";
          context.shadowColor = activeRainColor;
          context.shadowBlur = 8;
          context.globalAlpha = 1 * densityFactor;
        } else {
          context.shadowBlur = 0;
          if (parsedGradient && parsedGradient.length >= 2) {
            context.fillStyle = interpolateGradient(1 - progress, parsedGradient);
          } else {
            context.fillStyle = activeRainColor;
          }
          context.globalAlpha = Math.max(0.06, Math.min(0.85, progress ** 1.3 * 0.85)) * densityFactor;
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
    const delta = Number.isFinite(lastPaint) ? Math.min(34, time - lastPaint) : 1e3 / 60;
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
    }
  };
}
function InteractiveAsciiFace({
  model = "ant",
  // "ant" (3D Cyber Ant) | "crystal" | "drone" | "monolith" | "duck" | "face"
  src,
  alt = "3D ASCII Object simulation",
  mode = "face",
  // "face" (pure 3D object) | "face-rain" | "rain"
  colored = true,
  color = "#5cfc87",
  rainColor,
  autoRotate = true,
  speed = 1,
  lineSpeed = 1,
  contrast = 1.5,
  imageClarity = 1.5,
  edgeContrast = 2,
  dropSize = 8,
  cellSize,
  characters,
  charset = "full",
  rainOnly = false,
  dropType = "characters",
  gradient,
  mouseSpeed = 0.8,
  className = ""
}) {
  const rainCanvasRef = (0, import_react4.useRef)(null);
  const pointer = (0, import_react4.useRef)({ position: null });
  const [modelLoaded, setModelLoaded] = (0, import_react4.useState)(false);
  const effectiveMode = rainOnly ? "rain" : mode;
  const effectiveSpeed = Number(speed ?? lineSpeed ?? 1);
  const effectiveContrast = Number(contrast ?? imageClarity ?? 1.5);
  const effectiveCellSize = Number(cellSize ?? dropSize ?? 8);
  const effectiveRainColor = rainColor || color || "#5cfc87";
  const resolvedSrc = src ?? (DEFAULT_MODELS[model] || "procedural:ant");
  const settings = (0, import_react4.useRef)({
    color,
    rainColor: effectiveRainColor,
    mode: effectiveMode,
    dropType,
    gradient,
    characters,
    dropSize: effectiveCellSize,
    speed: effectiveSpeed,
    mouseSpeed
  });
  (0, import_react4.useEffect)(() => {
    settings.current = {
      color,
      rainColor: effectiveRainColor,
      mode: effectiveMode,
      dropType,
      gradient,
      characters,
      dropSize: effectiveCellSize,
      speed: effectiveSpeed,
      mouseSpeed
    };
  }, [color, effectiveRainColor, effectiveMode, dropType, gradient, characters, effectiveCellSize, effectiveSpeed, mouseSpeed]);
  (0, import_react4.useEffect)(() => {
    if (effectiveMode !== "face" && rainCanvasRef.current) {
      const animation = animateRainOverlay(rainCanvasRef.current, pointer, settings);
      return () => animation == null ? void 0 : animation.dispose();
    }
  }, [effectiveMode]);
  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    if (!(bounds == null ? void 0 : bounds.width) || !bounds.height) return;
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    pointer.current.position = { x, y };
  }
  function handlePointerLeave() {
    pointer.current.position = null;
  }
  return /* @__PURE__ */ import_react4.default.createElement(
    "div",
    {
      className: [styles2.stage, className].filter(Boolean).join(" "),
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave
    },
    /* @__PURE__ */ import_react4.default.createElement("style", { dangerouslySetInnerHTML: { __html: EMBEDDED_ASCII_STYLES } }),
    effectiveMode !== "rain" && /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute inset-0 z-0 h-full w-full" }, /* @__PURE__ */ import_react4.default.createElement(
      AsciiObject,
      {
        src: resolvedSrc,
        cellSize: effectiveCellSize,
        cellAspect: 0.6,
        charset: characters || charset,
        colored,
        color,
        contrast: effectiveContrast,
        edgeContrast,
        autoRotate,
        autoRotateSpeed: effectiveSpeed * 2.2,
        orbit: true,
        zoom: true,
        scale: model === "duck" ? 3.2 : model === "ant" ? 3.3 : model === "torus-knot" || model === "knot" ? 3.1 : model === "crystal" ? 3 : model === "drone" ? 3 : 2.8,
        highlight: colored ? "#066aff" : color,
        onLoad: () => setModelLoaded(true),
        className: "h-full w-full",
        style: { position: "absolute", inset: 0 }
      }
    )),
    effectiveMode !== "face" && /* @__PURE__ */ import_react4.default.createElement(
      "canvas",
      {
        ref: rainCanvasRef,
        className: `${styles2.field} pointer-events-none z-10`,
        role: "img",
        "aria-label": alt
      }
    ),
    /* @__PURE__ */ import_react4.default.createElement("div", { className: styles2.scanlines }),
    /* @__PURE__ */ import_react4.default.createElement("div", { className: styles2.vignette })
  );
}

// src/components/ui/blob-morph-hero.jsx
var import_react5 = __toESM(require("react"), 1);
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
  const [autoHead, setAutoHead] = (0, import_react5.useState)(null);
  const hb = {
    ...DEFAULT_HEAD_BOX,
    ...active.headBox || {},
    ...autoFitHead && autoHead || {},
    ...headBox || {}
  };
  const rootRef = (0, import_react5.useRef)(null);
  const topoRef = (0, import_react5.useRef)(null);
  const ambRef = (0, import_react5.useRef)(null);
  const revRef = (0, import_react5.useRef)(null);
  const spdRef = (0, import_react5.useRef)(null);
  const covRef = (0, import_react5.useRef)(null);
  const eqImgRef = (0, import_react5.useRef)(null);
  const wipeRef = (0, import_react5.useRef)(null);
  const scanRef = (0, import_react5.useRef)(null);
  const mouseRef = (0, import_react5.useRef)({
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
    active: false,
    intensity: 0
  });
  const uid = (0, import_react5.useId)().replace(/:/g, "");
  const shellId = "bmh-shell-" + uid;
  const wipeId = "bmh-wipe-" + uid;
  const [size, setSize] = (0, import_react5.useState)({ w: 0, h: 0 });
  const [aspect, setAspect] = (0, import_react5.useState)(0.8);
  const box = (0, import_react5.useMemo)(() => {
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
  const propsRef = (0, import_react5.useRef)({});
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
  const sizeRef = (0, import_react5.useRef)(size);
  sizeRef.current = size;
  const boxRef = (0, import_react5.useRef)(box);
  boxRef.current = box;
  (0, import_react5.useEffect)(() => {
    const el = rootRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: Math.round(width), h: Math.round(height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  (0, import_react5.useEffect)(() => {
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
  (0, import_react5.useEffect)(() => {
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
  (0, import_react5.useEffect)(() => {
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
  return /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      ref: rootRef,
      onPointerMove: handlePointerMove,
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
      className: `relative h-full w-full overflow-hidden ${className}`,
      style: { background: bg }
    },
    /* @__PURE__ */ import_react5.default.createElement("canvas", { ref: topoRef, className: "absolute inset-0 h-full w-full" }),
    /* @__PURE__ */ import_react5.default.createElement(
      "canvas",
      {
        ref: ambRef,
        className: "pointer-events-none absolute inset-0 h-full w-full",
        style: { opacity: 1 }
      }
    ),
    showHeadline && /* @__PURE__ */ import_react5.default.createElement("div", { className: "pointer-events-none absolute inset-0 flex select-none items-center justify-center" }, /* @__PURE__ */ import_react5.default.createElement(
      "span",
      {
        className: "font-black uppercase leading-none",
        style: {
          fontSize: "clamp(80px, 20vw, 280px)",
          color: "transparent",
          WebkitTextStroke: `1px ${wire}66`
        }
      },
      headline
    )),
    /* @__PURE__ */ import_react5.default.createElement(
      "div",
      {
        className: "absolute overflow-hidden",
        style: {
          left: box.x,
          top: box.y,
          width: box.w,
          height: box.h,
          borderRadius: `${radius}px`
        }
      },
      /* @__PURE__ */ import_react5.default.createElement(
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
      /* @__PURE__ */ import_react5.default.createElement(
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
      showHud && /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(
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
          shapeRendering: "geometricPrecision"
        },
        /* @__PURE__ */ import_react5.default.createElement("defs", null, /* @__PURE__ */ import_react5.default.createElement("clipPath", { id: shellId }, /* @__PURE__ */ import_react5.default.createElement("path", { d: HELMET.shell })), /* @__PURE__ */ import_react5.default.createElement("clipPath", { id: wipeId }, /* @__PURE__ */ import_react5.default.createElement("rect", { ref: wipeRef, x: HEAD_VB.x, y: HEAD_VB.y, width: HEAD_VB.w, height: "0" }))),
        /* @__PURE__ */ import_react5.default.createElement("g", { clipPath: `url(#${wipeId})` }, customSvgMarkup ? /* @__PURE__ */ import_react5.default.createElement("g", { dangerouslySetInnerHTML: { __html: customSvgMarkup } }) : /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement("path", { d: HELMET.shell, fill: "#ffffff", fillOpacity: "0.16", stroke: "none" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: HELMET.visor, fill: wire, fillOpacity: "0.07", stroke: "none" }), /* @__PURE__ */ import_react5.default.createElement("g", { clipPath: `url(#${shellId})`, opacity: "0.5", strokeWidth: "0.6" }, HELMET.latitudes.map((d, i) => /* @__PURE__ */ import_react5.default.createElement("path", { key: "la" + i, d, ...VE })), HELMET.meridians.map((d, i) => /* @__PURE__ */ import_react5.default.createElement("path", { key: "me" + i, d, ...VE }))), /* @__PURE__ */ import_react5.default.createElement("path", { d: HELMET.shell, strokeWidth: "1.2", ...VE }), /* @__PURE__ */ import_react5.default.createElement("path", { d: HELMET.visor, strokeWidth: "1", ...VE }), HELMET.details.map((d, i) => /* @__PURE__ */ import_react5.default.createElement("path", { key: "de" + i, d, opacity: "0.6", ...VE })))),
        /* @__PURE__ */ import_react5.default.createElement("g", { ref: scanRef, opacity: "0" }, /* @__PURE__ */ import_react5.default.createElement("line", { x1: HEAD_VB.x, x2: HEAD_VB.x + HEAD_VB.w, y1: "0", y2: "0", stroke: wire, strokeWidth: "4", opacity: "0.18", ...VE }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: HEAD_VB.x, x2: HEAD_VB.x + HEAD_VB.w, y1: "0", y2: "0", stroke: wire, strokeWidth: "1.2", opacity: "0.9", ...VE }))
      ), showTelemetry && /* @__PURE__ */ import_react5.default.createElement(
        "div",
        {
          className: "pointer-events-none absolute left-3 top-3 font-mono text-[11px] leading-4",
          style: { color: wire }
        },
        /* @__PURE__ */ import_react5.default.createElement("div", null, "SPD ", /* @__PURE__ */ import_react5.default.createElement("span", { ref: spdRef }, "0 KM/H")),
        /* @__PURE__ */ import_react5.default.createElement("div", null, "LIVERY ", /* @__PURE__ */ import_react5.default.createElement("span", { ref: covRef }, "0%"))
      ))
    )
  );
}

// src/components/ui/infinite-tunnel-hero.jsx
var import_react6 = __toESM(require("react"), 1);
var import_gsap = __toESM(require("gsap"), 1);
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
  const rootRef = (0, import_react6.useRef)(null);
  const hLines = (0, import_react6.useRef)([]);
  const shapesBottom = (0, import_react6.useRef)([]);
  const shapesTop = (0, import_react6.useRef)([]);
  const dotsBottom = (0, import_react6.useRef)([]);
  const dotsTop = (0, import_react6.useRef)([]);
  (0, import_react6.useEffect)(() => {
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
  return /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      className: `relative h-screen w-full overflow-hidden  ${className}`,
      style: { background: backgroundColor }
    },
    /* @__PURE__ */ import_react6.default.createElement(
      "svg",
      {
        ref: rootRef,
        className: "pointer-events-none absolute inset-0 h-full w-full",
        viewBox: `0 0 ${W} ${H}`,
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": "true"
      },
      /* @__PURE__ */ import_react6.default.createElement("defs", null, /* @__PURE__ */ import_react6.default.createElement("linearGradient", { id: "slabBottom", x1: "0", y1: "1", x2: "0", y2: "0" }, /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0", stopColor: color, stopOpacity: "0.9" }), /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "1", stopColor: color, stopOpacity: "0.35" })), /* @__PURE__ */ import_react6.default.createElement("linearGradient", { id: "slabTop", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0", stopColor: color, stopOpacity: "0.9" }), /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "1", stopColor: color, stopOpacity: "0.35" })), /* @__PURE__ */ import_react6.default.createElement(
        "linearGradient",
        {
          id: "gridStroke",
          gradientUnits: "userSpaceOnUse",
          x1: "0",
          y1: BOTTOM_EDGE,
          x2: "0",
          y2: "1100"
        },
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0", stopColor: color, stopOpacity: "1" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.08", stopColor: color, stopOpacity: "0.95" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.2", stopColor: color, stopOpacity: "0.8" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.45", stopColor: color, stopOpacity: "0.9" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "1", stopColor: color, stopOpacity: "0.45" })
      ), /* @__PURE__ */ import_react6.default.createElement(
        "linearGradient",
        {
          id: "gridFade",
          gradientUnits: "userSpaceOnUse",
          x1: "-480",
          y1: "0",
          x2: "2400",
          y2: "0"
        },
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.02", stopColor: "#292929" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.05", stopColor: "#565656" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.09", stopColor: "#7E7E7E" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.12", stopColor: "#A1A1A1" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.2", stopColor: "#D6D6D6" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.3", stopColor: "#F5F5F5" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.54", stopColor: "#FFFFFF" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.74", stopColor: "#E2E2E2" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.88", stopColor: "#8B8B8B" }),
        /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.96", stopColor: "#323232" })
      ), /* @__PURE__ */ import_react6.default.createElement(
        "mask",
        {
          id: "gridMask",
          maskUnits: "userSpaceOnUse",
          x: "-480",
          y: "0",
          width: "2880",
          height: "1300"
        },
        /* @__PURE__ */ import_react6.default.createElement("rect", { x: "-480", y: "0", width: "2880", height: "1300", fill: "url(#gridFade)" })
      ), /* @__PURE__ */ import_react6.default.createElement("radialGradient", { id: "glow", cx: "50%", cy: "50%", r: "50%" }, /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.02", stopColor: color, stopOpacity: "1" }), /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.07", stopColor: color, stopOpacity: "0.95" }), /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.19", stopColor: color, stopOpacity: "0.8" }), /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "0.45", stopColor: color, stopOpacity: "0.45" }), /* @__PURE__ */ import_react6.default.createElement("stop", { offset: "1", stopColor: color, stopOpacity: "0" }))),
      /* @__PURE__ */ import_react6.default.createElement("g", { transform: `translate(0 ${GAP})` }, GLOW_ON && /* @__PURE__ */ import_react6.default.createElement("g", { className: "tunnel-glow" }, /* @__PURE__ */ import_react6.default.createElement(
        "rect",
        {
          x: VX - 1400,
          y: BOTTOM_EDGE + 60,
          width: 2800,
          height: 60,
          fill: "url(#glow)"
        }
      ), /* @__PURE__ */ import_react6.default.createElement(
        "rect",
        {
          x: VX - 1e3,
          y: BOTTOM_EDGE - 110,
          width: 2e3,
          height: 220,
          fill: "url(#glow)",
          opacity: "0.22"
        }
      )), /* @__PURE__ */ import_react6.default.createElement("g", { stroke: "url(#gridStroke)", strokeWidth: "0.8", mask: "url(#gridMask)" }, RADIAL_X.map((x) => /* @__PURE__ */ import_react6.default.createElement("line", { key: `rb-${x}`, x1: x, y1: RADIAL_Y0, x2: radialEnd(x), y2: H })), Array.from({ length: GRID_Y.length + 1 }).map((_, i) => /* @__PURE__ */ import_react6.default.createElement(
        "line",
        {
          key: `hb-${i}`,
          ref: (el) => {
            hLines.current[i] = el;
          },
          x1: -480,
          x2: 2400,
          y1: GRID_Y[0],
          y2: GRID_Y[0],
          opacity: "0"
        }
      ))), /* @__PURE__ */ import_react6.default.createElement("g", { style: { mixBlendMode: "screen" } }, Array.from({ length: shapeCount }).map((_, k) => /* @__PURE__ */ import_react6.default.createElement(
        "polygon",
        {
          key: `sb-${k}`,
          ref: (el) => {
            shapesBottom.current[k] = el;
          },
          points: toPoints(SHAPES[Math.floor(k / SHAPE_COPIES)], false),
          fill: "url(#slabBottom)",
          stroke: color,
          strokeWidth: "1.5",
          vectorEffect: "non-scaling-stroke",
          opacity: "0"
        }
      )), PARTICLES.map((d, i) => /* @__PURE__ */ import_react6.default.createElement(
        "circle",
        {
          key: `pb-${i}`,
          ref: (el) => {
            dotsBottom.current[i] = el;
          },
          cx: d.x,
          cy: VY + d.dy,
          r: d.r,
          fill: d.color === "#FFFFFF" ? "#FFFFFF" : color,
          opacity: "0"
        }
      )))),
      /* @__PURE__ */ import_react6.default.createElement("g", { transform: `translate(0 ${-GAP})` }, GLOW_ON && /* @__PURE__ */ import_react6.default.createElement("g", { className: "tunnel-glow" }, /* @__PURE__ */ import_react6.default.createElement(
        "rect",
        {
          x: VX - 1400,
          y: TOP_EDGE - 130,
          width: 2800,
          height: 60,
          fill: "url(#glow)"
        }
      ), /* @__PURE__ */ import_react6.default.createElement(
        "rect",
        {
          x: VX - 1e3,
          y: TOP_EDGE - 110,
          width: 2e3,
          height: 220,
          fill: "url(#glow)",
          opacity: "0.22"
        }
      )), /* @__PURE__ */ import_react6.default.createElement("g", { style: { mixBlendMode: "screen" } }, Array.from({ length: shapeCount }).map((_, k) => /* @__PURE__ */ import_react6.default.createElement(
        "polygon",
        {
          key: `st-${k}`,
          ref: (el) => {
            shapesTop.current[k] = el;
          },
          points: toPoints(SHAPES[Math.floor(k / SHAPE_COPIES)], true),
          fill: "url(#slabTop)",
          stroke: color,
          strokeWidth: "1.5",
          vectorEffect: "non-scaling-stroke",
          opacity: "0"
        }
      )), PARTICLES.map((d, i) => /* @__PURE__ */ import_react6.default.createElement(
        "circle",
        {
          key: `pt-${i}`,
          ref: (el) => {
            dotsTop.current[i] = el;
          },
          cx: W - d.x,
          cy: VY - d.dy,
          r: d.r,
          fill: d.color === "#FFFFFF" ? "#FFFFFF" : color,
          opacity: "0"
        }
      ))))
    ),
    /* @__PURE__ */ import_react6.default.createElement("div", { className: "relative z-10  flex h-full w-full items-center justify-center" }, children)
  );
}

// src/components/ui/scrollsmoothprovider.jsx
var import_react7 = __toESM(require("react"), 1);
var import_lenis = __toESM(require("lenis"), 1);
function SmoothScrollProvider({ children, pathname: propPathname }) {
  const lenisRef = (0, import_react7.useRef)(null);
  const [currentPath, setCurrentPath] = (0, import_react7.useState)(
    () => typeof window !== "undefined" ? window.location.pathname : ""
  );
  (0, import_react7.useEffect)(() => {
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
  (0, import_react7.useEffect)(() => {
    if (!lenisRef.current) return;
    lenisRef.current.scrollTo(0, { immediate: true });
    const timeout = setTimeout(() => {
      var _a;
      (_a = lenisRef.current) == null ? void 0 : _a.resize();
    }, 50);
    return () => clearTimeout(timeout);
  }, [activePath]);
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, children);
}

// src/components/ui/liquidGlassButton.jsx
var import_react8 = __toESM(require("react"), 1);
function LiquidGlassButton({
  children = "Liquid Glass Button",
  className = "",
  onClick,
  ...props
}) {
  return /* @__PURE__ */ import_react8.default.createElement(
    "button",
    {
      type: "button",
      onClick,
      className: `relative inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${className}`,
      ...props
    },
    children
  );
}
var liquidGlassButton = LiquidGlassButton;

// src/components/ui/stacked-cards-scroll.jsx
var import_react9 = __toESM(require("react"), 1);
var import_lucide_react2 = require("lucide-react");
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
  const [activeIndex, setActiveIndex] = (0, import_react9.useState)(initialIndex);
  const [isHovered, setIsHovered] = (0, import_react9.useState)(false);
  const containerRef = (0, import_react9.useRef)(null);
  const pinTrackRef = (0, import_react9.useRef)(null);
  const lastScrollTime = (0, import_react9.useRef)(0);
  const totalCards = cards.length;
  const currentCard = cards[activeIndex] || cards[0];
  const handleNext = (0, import_react9.useCallback)(() => {
    setActiveIndex((prev) => {
      const next = prev < totalCards - 1 ? prev + 1 : 0;
      if (onChange) onChange(next, cards[next]);
      return next;
    });
  }, [totalCards, cards, onChange]);
  const handlePrev = (0, import_react9.useCallback)(() => {
    setActiveIndex((prev) => {
      const next = prev > 0 ? prev - 1 : totalCards - 1;
      if (onChange) onChange(next, cards[next]);
      return next;
    });
  }, [totalCards, cards, onChange]);
  const handleSelect = (0, import_react9.useCallback)(
    (index) => {
      if (index >= 0 && index < totalCards) {
        setActiveIndex(index);
        if (onChange) onChange(index, cards[index]);
        if (pin && pinTrackRef.current) {
          const track = pinTrackRef.current;
          const rect = track.getBoundingClientRect();
          const scrollTop = window.scrollY || window.pageYOffset;
          const trackTop = scrollTop + rect.top;
          const windowHeight = window.innerHeight;
          const totalDistance = track.offsetHeight - windowHeight;
          if (totalDistance > 0) {
            const startOffset = 96;
            const targetScroll = trackTop - startOffset + index / (totalCards - 1) * totalDistance;
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
          }
        }
      }
    },
    [totalCards, cards, onChange, pin]
  );
  const handleWheel = (0, import_react9.useCallback)(
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
  (0, import_react9.useEffect)(() => {
    if (!pin) return;
    const track = pinTrackRef.current;
    if (!track) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = track.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const startOffset = 96;
          const totalDistance = rect.height - windowHeight;
          if (totalDistance > 0) {
            const scrolled = startOffset - rect.top;
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
  (0, import_react9.useEffect)(() => {
    if (pin || !autoPlay || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [pin, autoPlay, isHovered, autoPlayInterval, handleNext]);
  const deckNode = /* @__PURE__ */ import_react9.default.createElement(
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
      className: `relative w-full rounded-3xl border border-purple-500/20 bg-[#070512]/95 backdrop-blur-2xl p-6 sm:p-8 md:p-10 select-none overflow-hidden outline-none shadow-[0_0_50px_rgba(168,85,247,0.15)] ${className}`
    },
    /* @__PURE__ */ import_react9.default.createElement("div", { className: "pointer-events-none absolute -top-24 -left-24 size-96 rounded-full blur-3xl opacity-30 bg-purple-600 transition-all duration-700" }),
    /* @__PURE__ */ import_react9.default.createElement("div", { className: "pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full blur-3xl opacity-25 bg-violet-500 transition-all duration-700" }),
    /* @__PURE__ */ import_react9.default.createElement("div", { className: "relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-purple-500/15 pb-4 mb-8" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "size-8 rounded-lg border border-purple-500/30 bg-purple-500/15 flex items-center justify-center text-purple-400" }, /* @__PURE__ */ import_react9.default.createElement(import_lucide_react2.Layers, { size: 16 })), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("h3", { className: "font-sans font-bold text-base text-white flex items-center gap-2" }, /* @__PURE__ */ import_react9.default.createElement("span", null, "3D Stacked Cards Deck"), pin && /* @__PURE__ */ import_react9.default.createElement("span", { className: "inline-flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30" }, /* @__PURE__ */ import_react9.default.createElement(import_lucide_react2.Pin, { size: 10 }), /* @__PURE__ */ import_react9.default.createElement("span", null, "Pinned"))), /* @__PURE__ */ import_react9.default.createElement("p", { className: "font-mono text-xs text-purple-300/70" }, "Top Stack Layered Fan \u2022 Odd/Even Alternating Rotation"))), /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "hidden sm:inline-flex text-[11px] font-mono text-purple-300/60 bg-purple-950/40 px-2.5 py-1 rounded-full border border-purple-500/20" }, pin ? "Scroll down to flip" : "Scroll wheel or click"), /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center gap-1.5 bg-black/50 border border-purple-500/20 rounded-lg p-1" }, /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        type: "button",
        onClick: handlePrev,
        className: "p-1.5 rounded text-purple-300 hover:text-white hover:bg-purple-500/20 transition-colors cursor-pointer",
        "aria-label": "Previous card"
      },
      /* @__PURE__ */ import_react9.default.createElement(import_lucide_react2.ChevronLeft, { size: 16 })
    ), /* @__PURE__ */ import_react9.default.createElement("span", { className: "font-mono text-xs px-2 text-white font-semibold" }, String(activeIndex + 1).padStart(2, "0"), "/", totalCards), /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        type: "button",
        onClick: handleNext,
        className: "p-1.5 rounded text-purple-300 hover:text-white hover:bg-purple-500/20 transition-colors cursor-pointer",
        "aria-label": "Next card"
      },
      /* @__PURE__ */ import_react9.default.createElement(import_lucide_react2.ChevronRight, { size: 16 })
    )))),
    /* @__PURE__ */ import_react9.default.createElement("div", { className: "relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "lg:col-span-6 flex items-center justify-center py-10 px-2" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "relative w-full max-w-[340px] sm:max-w-[370px] h-[380px] flex items-center justify-center perspective-[1000px]" }, cards.map((card, index) => {
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
      return /* @__PURE__ */ import_react9.default.createElement(
        "div",
        {
          key: card.id,
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
          className: "absolute top-0 w-full h-full rounded-2xl p-6 cursor-pointer border flex flex-col justify-between overflow-hidden backdrop-blur-md"
        },
        /* @__PURE__ */ import_react9.default.createElement("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent pointer-events-none" }),
        /* @__PURE__ */ import_react9.default.createElement("div", { className: "relative z-10 flex items-center justify-between" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-xs font-mono font-bold px-2.5 py-1 rounded-md border text-purple-300 bg-purple-950/60 border-purple-400/40" }, "CARD ", card.number), /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-[10px] font-mono tracking-widest uppercase text-purple-200/90 font-semibold" }, card.tag)),
        /* @__PURE__ */ import_react9.default.createElement("div", { className: "relative z-10 my-auto flex flex-col items-center justify-center py-4" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "size-16 rounded-2xl flex items-center justify-center border border-purple-400/40 bg-purple-950/50 shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-transform duration-500 hover:scale-110" }, /* @__PURE__ */ import_react9.default.createElement(import_lucide_react2.Sparkles, { size: 28, className: "text-purple-300" })), /* @__PURE__ */ import_react9.default.createElement("h4", { className: "mt-4 font-sans font-bold text-lg text-white text-center tracking-tight" }, card.title), /* @__PURE__ */ import_react9.default.createElement("p", { className: "mt-1 text-xs font-mono text-purple-300/80 text-center" }, card.subtitle))
      );
    }))), /* @__PURE__ */ import_react9.default.createElement("div", { className: "lg:col-span-6 flex flex-col justify-center py-4 px-2 sm:px-6" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center justify-between pb-4 border-b border-purple-500/20 mb-4" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-xs font-mono font-bold tracking-widest uppercase text-purple-400" }, "STAGE ", currentCard.number, " / ", String(totalCards).padStart(2, "0")), /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-zinc-600" }, "\u2022"), /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-[11px] font-mono uppercase tracking-wider text-purple-300/80 font-semibold truncate max-w-[150px] sm:max-w-[200px]" }, currentCard.tag)), /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        type: "button",
        onClick: handlePrev,
        "aria-label": "Previous topic",
        className: "size-7 rounded-lg border border-purple-500/30 bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
      },
      /* @__PURE__ */ import_react9.default.createElement(import_lucide_react2.ChevronLeft, { size: 14 })
    ), /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        type: "button",
        onClick: handleNext,
        "aria-label": "Next topic",
        className: "size-7 rounded-lg border border-purple-500/30 bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
      },
      /* @__PURE__ */ import_react9.default.createElement(import_lucide_react2.ChevronRight, { size: 14 })
    ))), /* @__PURE__ */ import_react9.default.createElement(
      "div",
      {
        className: "relative h-[340px] sm:h-[380px] overflow-hidden select-none",
        style: {
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
        }
      },
      /* @__PURE__ */ import_react9.default.createElement(
        "div",
        {
          className: "flex flex-col gap-4 sm:gap-5",
          style: {
            transform: `translateY(${-(activeIndex * 58) + 150}px)`,
            transition: "transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1)"
          }
        },
        cards.map((cardItem, idx) => {
          const isActive = idx === activeIndex;
          const distance = Math.abs(idx - activeIndex);
          const opacity = isActive ? 1 : Math.max(0.18, 0.65 - distance * 0.18);
          const scale = isActive ? 1 : Math.max(0.88, 1 - distance * 0.035);
          return /* @__PURE__ */ import_react9.default.createElement(
            "button",
            {
              key: cardItem.id || idx,
              type: "button",
              onClick: () => handleSelect(idx),
              className: "group text-left flex items-start sm:items-center gap-3.5 sm:gap-4 py-1.5 px-2 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none",
              style: {
                opacity,
                transform: `scale(${scale})`,
                transformOrigin: "left center"
              }
            },
            /* @__PURE__ */ import_react9.default.createElement("div", { className: "shrink-0 mt-2 sm:mt-0 flex items-center justify-center size-4" }, isActive ? /* @__PURE__ */ import_react9.default.createElement(
              "span",
              {
                className: "size-2.5 rounded-full animate-pulse transition-all duration-300 shadow-[0_0_14px_var(--brand-accent,#a855f7)]",
                style: {
                  backgroundColor: "var(--brand-accent, #a855f7)"
                }
              }
            ) : /* @__PURE__ */ import_react9.default.createElement("span", { className: "size-1.5 rounded-full bg-zinc-600 group-hover:bg-purple-400 group-hover:scale-125 transition-all" })),
            /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react9.default.createElement(
              "span",
              {
                className: `font-sans tracking-tight transition-all duration-300 ${isActive ? "text-xl font-extrabold text-white" : "text-lg sm:text-xl font-medium text-zinc-400 group-hover:text-purple-200"}`,
                style: isActive ? {
                  textShadow: "0 0 25px rgba(168, 85, 247, 0.45)"
                } : void 0
              },
              cardItem.title
            ), isActive && /* @__PURE__ */ import_react9.default.createElement(
              "span",
              {
                className: "font-mono text-[10px] tracking-widest uppercase font-bold px-2 py-0.5 rounded-full border bg-purple-950/80 border-purple-400/50 text-purple-200 animate-[fadeIn_0.3s_ease-out]",
                style: {
                  boxShadow: "0 0 12px rgba(168, 85, 247, 0.35)"
                }
              },
              cardItem.oneWord
            )), isActive && /* @__PURE__ */ import_react9.default.createElement("span", { className: "font-mono text-xs sm:text-sm text-purple-300/80 mt-1 animate-[fadeIn_0.35s_ease-out]" }, cardItem.subtitle, " \u2022 ", cardItem.tag))
          );
        })
      )
    )))
  );
  if (pin) {
    return /* @__PURE__ */ import_react9.default.createElement(
      "div",
      {
        ref: pinTrackRef,
        style: { minHeight: pinHeight },
        className: "relative w-full"
      },
      /* @__PURE__ */ import_react9.default.createElement("div", { className: "sticky top-24 w-full z-20" }, deckNode)
    );
  }
  return deckNode;
}

// src/components/ui/lorenzo-grid-cursor.jsx
var import_react10 = __toESM(require("react"), 1);
function GooeyGridCursor({
  color = "auto",
  // "auto" uses var(--brand-accent), or custom hex/rgb
  gridSize = 28,
  // balanced ~50px squares
  cellSize = 50,
  // default exact 50px x 50px square
  borderRadius = "20%",
  // clean squircle curvature
  trailDuration = 240,
  // fluid, responsive trail duration (ms)
  speed = 1,
  // speed multiplier
  blurAmount = 7,
  // liquid gooey merge strength
  blendMode = "screen",
  // vibrant neon luminosity on dark backgrounds
  showGridLines = true,
  // subtle background grid mesh
  gridLineColor = "rgba(255, 255, 255, 0.035)",
  zIndex = 30,
  className = ""
}) {
  const containerRef = (0, import_react10.useRef)(null);
  const cursorInnerRef = (0, import_react10.useRef)(null);
  const rawId = (0, import_react10.useId)();
  const filterId = `lorenzo-gooey-${rawId.replace(/:/g, "")}`;
  const lastPosRef = (0, import_react10.useRef)({ bx: -1, by: -1 });
  const activeCellsRef = (0, import_react10.useRef)(/* @__PURE__ */ new Map());
  const [computedCellSize, setComputedCellSize] = (0, import_react10.useState)(cellSize || 50);
  (0, import_react10.useEffect)(() => {
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
  (0, import_react10.useEffect)(() => {
    const inner = cursorInnerRef.current;
    const container = containerRef.current;
    if (!inner || !container) return;
    const actualDuration = Math.max(100, Math.round(trailDuration / speed));
    const fadeDuration = Math.round(actualDuration * 1);
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
    const appendCursorBlock = (bx, by) => {
      if (bx < 0 || by < 0) return;
      const cellKey = `${bx},${by}`;
      const now = performance.now();
      const lastSpawned = activeCellsRef.current.get(cellKey);
      if (lastSpawned && now - lastSpawned < 30) {
        return;
      }
      activeCellsRef.current.set(cellKey, now);
      const size = computedCellSize;
      const bleed = 4;
      const blockSize = size + bleed;
      const block = document.createElement("div");
      block.className = "lorenzo-cursor-block";
      const fillBg = getActiveColor();
      const radiusValue = typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;
      block.style.position = "absolute";
      block.style.left = `${bx * size - bleed / 2}px`;
      block.style.top = `${by * size - bleed / 2}px`;
      block.style.width = `${blockSize}px`;
      block.style.height = `${blockSize}px`;
      block.style.backgroundColor = fillBg;
      block.style.borderRadius = radiusValue;
      block.style.pointerEvents = "none";
      block.style.boxShadow = `0 0 16px ${fillBg}45`;
      block.style.opacity = "1";
      block.style.willChange = "opacity";
      block.style.transition = `opacity ${fadeDuration}ms ease-out`;
      inner.appendChild(block);
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
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      if (mx < 0 || my < 0 || mx > rect.width || my > rect.height) {
        lastPosRef.current.bx = -1;
        lastPosRef.current.by = -1;
        return;
      }
      const bx = Math.floor(mx / computedCellSize);
      const by = Math.floor(my / computedCellSize);
      const last = lastPosRef.current;
      if (last.bx === -1 || last.by === -1) {
        appendCursorBlock(bx, by);
      } else if (last.bx !== bx || last.by !== by) {
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
  return /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      ref: containerRef,
      className: `fixed inset-0 pointer-events-none select-none overflow-hidden ${className}`,
      style: {
        zIndex,
        mixBlendMode: blendMode
      },
      "aria-hidden": "true"
    },
    showGridLines && /* @__PURE__ */ import_react10.default.createElement(
      "div",
      {
        className: "absolute inset-0 pointer-events-none transition-opacity duration-500",
        style: {
          backgroundImage: `
              linear-gradient(to right, ${gridLineColor} 1px, transparent 1px),
              linear-gradient(to bottom, ${gridLineColor} 1px, transparent 1px)
            `,
          backgroundSize: `${computedCellSize}px ${computedCellSize}px`
        }
      }
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "svg",
      {
        className: "fixed top-0 left-0 w-0 h-0 pointer-events-none opacity-0 overflow-hidden",
        "aria-hidden": "true"
      },
      /* @__PURE__ */ import_react10.default.createElement("defs", null, /* @__PURE__ */ import_react10.default.createElement("filter", { id: filterId, x: "-20%", y: "-20%", width: "140%", height: "140%" }, /* @__PURE__ */ import_react10.default.createElement(
        "feGaussianBlur",
        {
          in: "SourceGraphic",
          stdDeviation: blurAmount,
          result: "blur"
        }
      ), /* @__PURE__ */ import_react10.default.createElement(
        "feColorMatrix",
        {
          in: "blur",
          mode: "matrix",
          values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
          result: "gooeyFilter"
        }
      ), /* @__PURE__ */ import_react10.default.createElement("feComposite", { in: "SourceGraphic", in2: "gooeyFilter", operator: "atop" })))
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "div",
      {
        ref: cursorInnerRef,
        className: "w-full h-full relative",
        style: {
          filter: `url(#${filterId})`,
          WebkitFilter: `url(#${filterId})`
        }
      }
    )
  );
}

// src/components/ui/curved-grid-canvas.jsx
var import_react11 = __toESM(require("react"), 1);
function CurvedGridCanvas({
  cellSize = 60,
  accentColor: propAccentColor,
  fadeSpeed = 0.65,
  // energy decay per second
  className = ""
}) {
  const canvasRef = (0, import_react11.useRef)(null);
  const activeSquaresRef = (0, import_react11.useRef)(/* @__PURE__ */ new Map());
  const trailRef = (0, import_react11.useRef)([]);
  const mouseRef = (0, import_react11.useRef)({
    x: -9999,
    y: -9999,
    isDown: false,
    lastCol: -1,
    lastRow: -1
  });
  (0, import_react11.useEffect)(() => {
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
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      if (mx < 0 || my < 0 || mx > rect.width || my > rect.height) {
        mouseRef.current.lastCol = -1;
        mouseRef.current.lastRow = -1;
        return;
      }
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
  return /* @__PURE__ */ import_react11.default.createElement(
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
var import_react12 = __toESM(require("react"), 1);
var import_lucide_react3 = require("lucide-react");
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
  (0, import_react12.useEffect)(() => {
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
  const [selectedAccent, setSelectedAccent] = (0, import_react12.useState)("violet");
  (0, import_react12.useEffect)(() => {
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
  return /* @__PURE__ */ import_react12.default.createElement("div", { className: `flex flex-col gap-2 ${className}` }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "flex items-center gap-1.5 p-1.5 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md" }, ACCENT_PRESETS.map((preset) => {
    const isSelected = selectedAccent === preset.id;
    return /* @__PURE__ */ import_react12.default.createElement(
      "button",
      {
        key: preset.id,
        type: "button",
        onClick: () => handleSelect(preset.id),
        style: { backgroundColor: preset.color },
        title: `Switch accent to ${preset.name}`,
        className: `size-5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${isSelected ? "ring-2 ring-white scale-110 shadow-[0_0_12px_var(--brand-accent)]" : "opacity-60 hover:opacity-100 hover:scale-105"}`
      },
      isSelected && /* @__PURE__ */ import_react12.default.createElement(import_lucide_react3.Check, { size: 11, className: "text-white drop-shadow stroke-[3]" })
    );
  })), !compact && /* @__PURE__ */ import_react12.default.createElement("span", { className: "text-[10px] font-mono text-zinc-400 capitalize" }, "Active: ", selectedAccent));
}

// src/components/ui/interactive-snake-grid.jsx
var import_react13 = __toESM(require("react"), 1);
var import_lucide_react4 = require("lucide-react");
var GRID_COLS = 20;
var GRID_ROWS = 20;
var MAX_TRAIL_LENGTH = 16;
function InteractiveSnakeGrid({
  accentColor = "var(--brand-accent, #a855f7)",
  className = "",
  showControls = true
}) {
  const [trail, setTrail] = (0, import_react13.useState)([]);
  const [food, setFood] = (0, import_react13.useState)({ x: 14, y: 8 });
  const [score, setScore] = (0, import_react13.useState)(0);
  const [isHovered, setIsHovered] = (0, import_react13.useState)(false);
  const decayTimerRef = (0, import_react13.useRef)(null);
  const autoSnakeRef = (0, import_react13.useRef)({
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
  const spawnFood = (0, import_react13.useCallback)(() => {
    setFood({
      x: Math.floor(Math.random() * (GRID_COLS - 4)) + 2,
      y: Math.floor(Math.random() * (GRID_ROWS - 4)) + 2
    });
  }, []);
  const handleCellHover = (0, import_react13.useCallback)(
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
  (0, import_react13.useEffect)(() => {
    decayTimerRef.current = setInterval(() => {
      setTrail((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(0, prev.length - 1);
      });
    }, 75);
    return () => clearInterval(decayTimerRef.current);
  }, []);
  (0, import_react13.useEffect)(() => {
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
  const trailMap = import_react13.default.useMemo(() => {
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
  return /* @__PURE__ */ import_react13.default.createElement(
    "div",
    {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      className: `relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl border border-white/10 bg-[#060913]/90 backdrop-blur-xl shadow-2xl select-none ${className}`
    },
    /* @__PURE__ */ import_react13.default.createElement(
      "div",
      {
        className: "pointer-events-none absolute inset-0 rounded-2xl blur-3xl opacity-20 transition-all duration-500",
        style: {
          background: `radial-gradient(circle at 50% 50%, ${accentColor}, transparent 70%)`
        }
      }
    ),
    showControls && /* @__PURE__ */ import_react13.default.createElement("div", { className: "relative z-10 w-full flex items-center justify-between pb-3 mb-3 border-b border-white/8 text-xs font-mono" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "flex items-center gap-2 text-white" }, /* @__PURE__ */ import_react13.default.createElement(import_lucide_react4.Gamepad2, { size: 15, style: { color: accentColor } }), /* @__PURE__ */ import_react13.default.createElement("span", { className: "font-semibold tracking-wide" }, "20\xD720 Interactive Snake Grid")), /* @__PURE__ */ import_react13.default.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ import_react13.default.createElement("span", { className: "text-zinc-400" }, "Score:", " ", /* @__PURE__ */ import_react13.default.createElement("strong", { className: "text-white font-mono", style: { color: accentColor } }, score)), /* @__PURE__ */ import_react13.default.createElement("span", { className: "text-[10px] text-zinc-500 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5" }, isHovered ? "Mouse Active" : "Auto Wandering"))),
    /* @__PURE__ */ import_react13.default.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
          aspectRatio: "1 / 1"
        },
        className: "relative z-10 w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] gap-[3px] p-2 rounded-xl bg-black/60 border border-white/8 shadow-inner"
      },
      Array.from({ length: GRID_ROWS }).map(
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
          return /* @__PURE__ */ import_react13.default.createElement(
            "div",
            {
              key,
              onMouseEnter: () => handleCellHover(c, r),
              style: {
                backgroundColor: trailInfo ? trailInfo.isHead ? accentColor : `${accentColor}${Math.floor(trailInfo.ratio * 255).toString(16).padStart(2, "0")}` : isFood ? "#ffffff" : void 0,
                transform: `scale(${scale})`,
                boxShadow: shadow,
                borderColor: (trailInfo == null ? void 0 : trailInfo.isHead) ? accentColor : void 0,
                transition: "transform 0.12s ease-out, background-color 0.15s ease"
              },
              className: `w-full h-full rounded-[4px] border ${trailInfo ? "border-transparent" : cellBorder} ${!trailInfo && !isFood ? cellBg : ""} ${isFood ? "animate-pulse shadow-[0_0_12px_#ffffff]" : ""} cursor-crosshair`
            }
          );
        })
      )
    ),
    showControls && /* @__PURE__ */ import_react13.default.createElement("div", { className: "relative z-10 mt-3 text-[11px] font-mono text-zinc-400 flex items-center justify-between w-full" }, /* @__PURE__ */ import_react13.default.createElement("span", null, "Move mouse across squares to control the worm trail"), /* @__PURE__ */ import_react13.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          setTrail([]);
          setScore(0);
          spawnFood();
        },
        className: "flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
      },
      /* @__PURE__ */ import_react13.default.createElement(import_lucide_react4.RotateCcw, { size: 11 }),
      /* @__PURE__ */ import_react13.default.createElement("span", null, "Reset")
    ))
  );
}

// src/components/ui/code-typewriter.jsx
var import_react14 = __toESM(require("react"), 1);
var import_lucide_react5 = require("lucide-react");
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
  const [activeTab, setActiveTab] = (0, import_react14.useState)(0);
  const [displayedLineCount, setDisplayedLineCount] = (0, import_react14.useState)(0);
  const [displayedCharCount, setDisplayedCharCount] = (0, import_react14.useState)(0);
  const [isTypingPaused, setIsTypingPaused] = (0, import_react14.useState)(false);
  const [copied, setCopied] = (0, import_react14.useState)(false);
  const snippet = CODE_SNIPPETS[activeTab];
  const fullText = snippet.lines.join("\n");
  (0, import_react14.useEffect)(() => {
    setDisplayedLineCount(0);
    setDisplayedCharCount(0);
  }, [activeTab]);
  (0, import_react14.useEffect)(() => {
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
  return /* @__PURE__ */ import_react14.default.createElement(
    "div",
    {
      className: `relative rounded-2xl border border-white/10 bg-[#070b14]/95 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs select-none ${className}`
    },
    /* @__PURE__ */ import_react14.default.createElement("div", { className: "flex items-center justify-between px-4 py-3 border-b border-white/8 bg-black/40" }, /* @__PURE__ */ import_react14.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react14.default.createElement("div", { className: "size-3 rounded-full bg-rose-500/80 border border-rose-600/40" }), /* @__PURE__ */ import_react14.default.createElement("div", { className: "size-3 rounded-full bg-amber-500/80 border border-amber-600/40" }), /* @__PURE__ */ import_react14.default.createElement("div", { className: "size-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" })), /* @__PURE__ */ import_react14.default.createElement("div", { className: "flex items-center gap-1" }, CODE_SNIPPETS.map((item, idx) => /* @__PURE__ */ import_react14.default.createElement(
      "button",
      {
        key: item.fileName,
        type: "button",
        onClick: () => setActiveTab(idx),
        className: `px-3 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${activeTab === idx ? "bg-white/10 text-emerald-400 font-medium" : "text-zinc-500 hover:text-zinc-300"}`
      },
      item.fileName
    ))), /* @__PURE__ */ import_react14.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react14.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setIsTypingPaused((p) => !p),
        className: "p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer",
        title: isTypingPaused ? "Resume typing" : "Pause typing"
      },
      isTypingPaused ? /* @__PURE__ */ import_react14.default.createElement(import_lucide_react5.Play, { size: 12 }) : /* @__PURE__ */ import_react14.default.createElement(import_lucide_react5.Pause, { size: 12 })
    ), /* @__PURE__ */ import_react14.default.createElement(
      "button",
      {
        type: "button",
        onClick: handleRestart,
        className: "p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer",
        title: "Restart typing"
      },
      /* @__PURE__ */ import_react14.default.createElement(import_lucide_react5.RotateCcw, { size: 12 })
    ), /* @__PURE__ */ import_react14.default.createElement(
      "button",
      {
        type: "button",
        onClick: handleCopy,
        className: "p-1 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer",
        title: "Copy snippet"
      },
      copied ? /* @__PURE__ */ import_react14.default.createElement(import_lucide_react5.Check, { size: 12, className: "text-emerald-400" }) : /* @__PURE__ */ import_react14.default.createElement(import_lucide_react5.Copy, { size: 12 })
    ))),
    /* @__PURE__ */ import_react14.default.createElement("div", { className: "p-4 sm:p-6 overflow-x-auto min-h-[300px]" }, snippet.lines.map((line, lIdx) => {
      if (lIdx > displayedLineCount) return null;
      const isCurrentTypingLine = lIdx === displayedLineCount;
      const textToRender = isCurrentTypingLine ? line.slice(0, displayedCharCount) : line;
      return /* @__PURE__ */ import_react14.default.createElement("div", { key: lIdx, className: "flex leading-6" }, /* @__PURE__ */ import_react14.default.createElement("span", { className: "w-8 shrink-0 text-right pr-4 text-zinc-600 select-none" }, lIdx + 1), /* @__PURE__ */ import_react14.default.createElement("span", { className: "text-zinc-300 whitespace-pre" }, colorizeLine(textToRender), isCurrentTypingLine && /* @__PURE__ */ import_react14.default.createElement("span", { className: "inline-block w-2 h-4 bg-emerald-400 ml-0.5 align-middle animate-pulse" })));
    })),
    /* @__PURE__ */ import_react14.default.createElement("div", { className: "px-4 py-2 border-t border-white/5 bg-black/60 flex items-center justify-between text-[10px] text-zinc-500" }, /* @__PURE__ */ import_react14.default.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ import_react14.default.createElement("span", { className: "size-1.5 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ import_react14.default.createElement("span", null, "TypeScript / React 19 JSX")), /* @__PURE__ */ import_react14.default.createElement("span", null, "UTF-8 \u2022 60 FPS Engine"))
  );
}
function colorizeLine(text) {
  if (text.startsWith("//") || text.startsWith("/*") || text.includes("{/*")) {
    return /* @__PURE__ */ import_react14.default.createElement("span", { className: "text-zinc-500 italic" }, text);
  }
  if (text.startsWith("import ") || text.startsWith("export ") || text.startsWith("return")) {
    const parts = text.split(" ");
    return /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement("span", { className: "text-fuchsia-400 font-semibold" }, parts[0], " "), /* @__PURE__ */ import_react14.default.createElement("span", null, parts.slice(1).join(" ")));
  }
  if (text.includes("pin={true}") || text.includes("enableWheelScroll={true}")) {
    return /* @__PURE__ */ import_react14.default.createElement("span", { className: "text-amber-300" }, text);
  }
  if (text.includes("<") && text.includes(">")) {
    return /* @__PURE__ */ import_react14.default.createElement("span", { className: "text-cyan-300" }, text);
  }
  return text;
}

// src/components/ui/install-tabs.jsx
var import_react15 = __toESM(require("react"), 1);
var import_react16 = require("motion/react");
var import_lucide_react6 = require("lucide-react");
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
  const id = (0, import_react15.useId)();
  const manager = (0, import_react15.useSyncExternalStore)(subscribe, read, () => "npm");
  const [copied, setCopied] = (0, import_react15.useState)(false);
  const [mode, setMode] = (0, import_react15.useState)(component ? "cli" : "package");
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
  return /* @__PURE__ */ import_react15.default.createElement(
    "div",
    {
      className: `w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950/90 shadow-2xl backdrop-blur-md ${className}`
    },
    /* @__PURE__ */ import_react15.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-zinc-900/60 px-3 py-2" }, /* @__PURE__ */ import_react15.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react15.default.createElement("div", { role: "tablist", "aria-label": "Package manager", className: "flex items-center gap-1" }, managers.map((option, index) => {
      const isSelected = manager === option;
      return /* @__PURE__ */ import_react15.default.createElement(
        "button",
        {
          key: option,
          id: `${id}-${option}`,
          role: "tab",
          "aria-selected": isSelected,
          "aria-controls": `${id}-panel`,
          tabIndex: isSelected ? 0 : -1,
          onClick: () => choose(option),
          onKeyDown: (event) => onKey(event, index),
          className: `relative flex cursor-pointer items-center gap-1 rounded-lg px-2.5 py-1 font-mono text-xs transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-emerald-400 ${isSelected ? "text-white font-semibold" : "text-zinc-400 hover:text-white"}`
        },
        isSelected && /* @__PURE__ */ import_react15.default.createElement(
          import_react16.motion.span,
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
        /* @__PURE__ */ import_react15.default.createElement("span", { className: "relative z-10" }, option)
      );
    })), component && /* @__PURE__ */ import_react15.default.createElement("div", { className: "ml-2 hidden items-center rounded-lg border border-white/10 bg-black/40 p-0.5 sm:flex" }, /* @__PURE__ */ import_react15.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setMode("cli"),
        className: `flex cursor-pointer items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-mono transition ${mode === "cli" ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30" : "text-zinc-400 hover:text-white"}`
      },
      /* @__PURE__ */ import_react15.default.createElement(import_lucide_react6.Terminal, { className: "size-3" }),
      "CLI"
    ), /* @__PURE__ */ import_react15.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setMode("package"),
        className: `flex cursor-pointer items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-mono transition ${mode === "package" ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30" : "text-zinc-400 hover:text-white"}`
      },
      /* @__PURE__ */ import_react15.default.createElement(import_lucide_react6.Package, { className: "size-3" }),
      "NPM"
    ))), /* @__PURE__ */ import_react15.default.createElement(
      "button",
      {
        type: "button",
        onClick: copyCommand,
        className: "flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300 transition hover:bg-white/15 hover:text-white",
        "aria-label": "Copy install command"
      },
      copied ? /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(import_lucide_react6.Check, { className: "size-3.5 text-emerald-400" }), /* @__PURE__ */ import_react15.default.createElement("span", { className: "text-emerald-400 font-medium" }, "Copied!")) : /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("span", { className: "text-zinc-400" }, "Copy"))
    )),
    /* @__PURE__ */ import_react15.default.createElement(
      "div",
      {
        id: `${id}-panel`,
        role: "tabpanel",
        "aria-labelledby": `${id}-${manager}`,
        className: "relative overflow-hidden px-4 py-3.5 font-mono text-xs sm:text-sm bg-black/40"
      },
      /* @__PURE__ */ import_react15.default.createElement(import_react16.AnimatePresence, { mode: "wait", initial: false }, /* @__PURE__ */ import_react15.default.createElement(
        import_react16.motion.div,
        {
          key: `${manager}-${mode}`,
          initial: { opacity: 0, x: -28 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 28 },
          transition: { duration: 0.22, ease: "easeOut" },
          className: "flex items-center gap-2.5 whitespace-nowrap text-zinc-200"
        },
        /* @__PURE__ */ import_react15.default.createElement("span", { className: "select-none font-bold text-emerald-400" }, "$"),
        /* @__PURE__ */ import_react15.default.createElement("span", { className: "tracking-wide" }, currentText)
      )),
      /* @__PURE__ */ import_react15.default.createElement("span", { role: "status", className: "sr-only" }, copied ? "Copied" : "")
    )
  );
}

// src/components/ui/props-table.jsx
var import_react17 = __toESM(require("react"), 1);
var import_lucide_react7 = require("lucide-react");
function PropsTable({
  data = [],
  title = "Props Reference",
  description = "Complete reference of all customizable properties and parameters.",
  className = ""
}) {
  const [searchQuery, setSearchQuery] = (0, import_react17.useState)("");
  const [copiedProp, setCopiedProp] = (0, import_react17.useState)(null);
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
  return /* @__PURE__ */ import_react17.default.createElement("div", { className: `space-y-4 w-full ${className}` }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3" }, /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement("h3", { className: "text-xl md:text-2xl font-bold font-sans text-white flex items-center gap-2" }, /* @__PURE__ */ import_react17.default.createElement(import_lucide_react7.SlidersHorizontal, { className: "w-5 h-5 text-lime-400" }), /* @__PURE__ */ import_react17.default.createElement("span", null, title)), description && /* @__PURE__ */ import_react17.default.createElement("p", { className: "mt-1 text-xs md:text-sm text-gray-400 font-sans" }, description)), /* @__PURE__ */ import_react17.default.createElement("div", { className: "relative w-full sm:w-64" }, /* @__PURE__ */ import_react17.default.createElement(import_lucide_react7.Search, { className: "w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" }), /* @__PURE__ */ import_react17.default.createElement(
    "input",
    {
      type: "text",
      value: searchQuery,
      onChange: (e) => setSearchQuery(e.target.value),
      placeholder: "Search props, types...",
      className: "w-full bg-zinc-900/80 border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400/50 transition font-sans"
    }
  ), searchQuery && /* @__PURE__ */ import_react17.default.createElement(
    "button",
    {
      onClick: () => setSearchQuery(""),
      className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs font-mono"
    },
    "\xD7"
  ))), /* @__PURE__ */ import_react17.default.createElement("div", { className: "rounded-2xl border border-white/10 overflow-hidden bg-zinc-950 shadow-xl" }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ import_react17.default.createElement("table", { className: "w-full text-left text-xs font-sans" }, /* @__PURE__ */ import_react17.default.createElement("thead", { className: "bg-zinc-900/70 border-b border-white/10 font-mono text-zinc-400" }, /* @__PURE__ */ import_react17.default.createElement("tr", null, /* @__PURE__ */ import_react17.default.createElement("th", { className: "py-3 px-4 font-semibold w-1/4" }, "Prop"), /* @__PURE__ */ import_react17.default.createElement("th", { className: "py-3 px-4 font-semibold w-1/5" }, "Type"), /* @__PURE__ */ import_react17.default.createElement("th", { className: "py-3 px-4 font-semibold w-1/6" }, "Default"), /* @__PURE__ */ import_react17.default.createElement("th", { className: "py-3 px-4 font-semibold" }, "Description"))), /* @__PURE__ */ import_react17.default.createElement("tbody", { className: "divide-y divide-white/5 text-zinc-300" }, filteredData.length > 0 ? filteredData.map((item, idx) => /* @__PURE__ */ import_react17.default.createElement(
    "tr",
    {
      key: item.prop || idx,
      className: "hover:bg-white/[0.02] transition-colors group"
    },
    /* @__PURE__ */ import_react17.default.createElement("td", { className: "py-3.5 px-4 font-mono" }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ import_react17.default.createElement(
      "button",
      {
        onClick: () => copyPropName(item.prop),
        className: "font-semibold text-lime-400 hover:text-lime-300 transition flex items-center gap-1 cursor-pointer",
        title: "Click to copy prop name"
      },
      /* @__PURE__ */ import_react17.default.createElement("span", null, item.prop),
      copiedProp === item.prop ? /* @__PURE__ */ import_react17.default.createElement(import_lucide_react7.Check, { className: "w-3 h-3 text-emerald-400 shrink-0" }) : /* @__PURE__ */ import_react17.default.createElement(import_lucide_react7.Copy, { className: "w-3 h-3 text-zinc-600 opacity-0 group-hover:opacity-100 transition shrink-0" })
    ), item.required && /* @__PURE__ */ import_react17.default.createElement("span", { className: "text-[10px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-sans" }, "required"))),
    /* @__PURE__ */ import_react17.default.createElement("td", { className: "py-3.5 px-4 font-mono text-[11px]" }, /* @__PURE__ */ import_react17.default.createElement("span", { className: "inline-block px-2 py-0.5 rounded-md bg-zinc-900 text-cyan-300 border border-white/5" }, item.type)),
    /* @__PURE__ */ import_react17.default.createElement("td", { className: "py-3.5 px-4 font-mono text-[11px] text-zinc-400" }, item.default ? /* @__PURE__ */ import_react17.default.createElement("code", { className: "bg-zinc-900 px-1.5 py-0.5 rounded text-amber-300/90 border border-white/5" }, item.default) : /* @__PURE__ */ import_react17.default.createElement("span", { className: "text-zinc-600" }, "\u2014")),
    /* @__PURE__ */ import_react17.default.createElement("td", { className: "py-3.5 px-4 text-gray-300 leading-relaxed font-sans" }, item.description)
  )) : /* @__PURE__ */ import_react17.default.createElement("tr", null, /* @__PURE__ */ import_react17.default.createElement(
    "td",
    {
      colSpan: 4,
      className: "py-8 text-center text-zinc-500 font-mono text-xs"
    },
    'No matching props found for "',
    searchQuery,
    '".'
  )))))));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACCENT_PRESETS,
  AsciiObject,
  BlobMorphHero,
  CodeTypewriter,
  CurvedGridCanvas,
  DEFAULT_PRESETS,
  DEFAULT_SCROLL_IMAGES,
  DEFAULT_STACKED_CARDS,
  FullpageCurvedGrid,
  GooeyGridCursor,
  GridCursorTrail,
  ImageScroll,
  InfiniteImageScroll,
  InfiniteTunnelHero,
  InstallTabs,
  InteractiveAsciiFace,
  InteractiveSnakeGrid,
  LiquidGlassButton,
  LorenzoGridCursor,
  PropsTable,
  SmoothScrollProvider,
  StackedCardsScroll,
  ThemeCustomizer,
  applyAccent,
  liquidGlassButton,
  useAutoCycleAccent
});
//# sourceMappingURL=index.cjs.map