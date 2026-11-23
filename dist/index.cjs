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
  BlobMorphHero: () => BlobMorphHero,
  DEFAULT_PRESETS: () => DEFAULT_PRESETS,
  DEFAULT_SCROLL_IMAGES: () => DEFAULT_SCROLL_IMAGES,
  ImageScroll: () => ImageScroll,
  InfiniteImageScroll: () => InfiniteImageScroll,
  InfiniteTunnelHero: () => InfiniteTunnelHero,
  InstallTabs: () => InstallTabs,
  InteractiveAsciiFace: () => InteractiveAsciiFace,
  LiquidGlassButton: () => LiquidGlassButton,
  PropsTable: () => PropsTable,
  SmoothScrollProvider: () => SmoothScrollProvider,
  liquidGlassButton: () => liquidGlassButton
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/image-scroll.jsx
var import_react = __toESM(require("react"));

// src/components/ui/image-scroll.module.css
var image_scroll_default = {};

// src/components/ui/image-scroll.jsx
var import_lucide_react = require("lucide-react");
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
        ${image_scroll_default.container}
        ${tilt ? image_scroll_default.tiltPerspective : ""}
        ${pauseOnHover ? image_scroll_default.pauseHover : ""}
        ${isVertical && blurEdges ? image_scroll_default.fadeMaskVertical : ""}
        ${!isVertical && blurEdges ? image_scroll_default.fadeMaskHorizontal : ""}
        ${className}
      `
    },
    /* @__PURE__ */ import_react.default.createElement("div", { className: tilt ? image_scroll_default.tiltInner : "" }, isVertical ? (
      /* ================= VERTICAL COLUMNS ================= */
      /* @__PURE__ */ import_react.default.createElement("div", { className: image_scroll_default.verticalWrapper }, trackItemGroups.map((group, colIdx) => {
        const isColReverse = staggerDirection ? colIdx % 2 === 1 ? !reverse : reverse : reverse;
        const colSpeed = staggerDirection ? baseDuration * (1 + colIdx % 3 * 0.15) : baseDuration;
        const trackItems = prepareTrackItems(group);
        return /* @__PURE__ */ import_react.default.createElement(
          "div",
          {
            key: `col-${colIdx}`,
            className: isColReverse ? image_scroll_default.verticalTrackReverse : image_scroll_default.verticalTrack,
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
      /* @__PURE__ */ import_react.default.createElement("div", { className: image_scroll_default.horizontalWrapper }, trackItemGroups.map((group, rowIdx) => {
        const isRowReverse = staggerDirection ? rowIdx % 2 === 1 ? !reverse : reverse : reverse;
        const rowSpeed = staggerDirection ? baseDuration * (1 + rowIdx % 3 * 0.15) : baseDuration;
        const trackItems = prepareTrackItems(group);
        return /* @__PURE__ */ import_react.default.createElement(
          "div",
          {
            key: `row-${rowIdx}`,
            className: isRowReverse ? image_scroll_default.horizontalTrackReverse : image_scroll_default.horizontalTrack,
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
var import_react2 = require("react");

// src/components/ui/interactive-ascii-face.module.css
var interactive_ascii_face_default = {};

// src/components/ui/interactive-ascii-face.jsx
var REFERENCE = "/images/ascii-portrait.png";
var GLYPHS = [".:;|`", "il/+=:", "xovucz", "7TZH28", "NWM#@%"];
var MASK_WIDTH = 360;
var MASK_HEIGHT = 432;
var CELL_WIDTH = 5;
var CELL_HEIGHT = 7;
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
    var _a;
    if (!context) return;
    const width = renderWidth;
    const height = renderHeight;
    const portraitWidth = portrait.offsetWidth;
    const portraitHeight = portrait.offsetHeight;
    const { color, imageClarity, mouseSpeed } = settings.current;
    const interaction = pointer.current;
    const response = Math.min(1.8, Math.max(0.3, mouseSpeed || 1));
    const follow = 1 - Math.exp(-delta * 0.011 * response);
    offsetX += (((interaction == null ? void 0 : interaction.offset.x) ?? 0) - offsetX) * follow;
    offsetY += (((interaction == null ? void 0 : interaction.offset.y) ?? 0) - offsetY) * follow;
    const left = (width - portraitWidth) / 2 + offsetX;
    const top = (height - portraitHeight) / 2 + offsetY;
    context.globalAlpha = 1;
    context.clearRect(0, 0, width, height);
    const mask = image == null ? void 0 : image.tones;
    context.fillStyle = color;
    context.font = "6px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";
    for (let x = CELL_WIDTH / 2, column = 0; x < width; x += CELL_WIDTH, column++) {
      const speed = 42 + column * 17 % 28;
      const trail = 160 + column * 41 % 66;
      const cycle = trail + 72 + column * 13 % 45;
      const travel = rainTime * speed / 1e3 + column * 137;
      const head = travel % cycle;
      const traveledRows = Math.floor(travel / CELL_HEIGHT);
      const maskX = Math.floor((x - left) / portraitWidth * MASK_WIDTH);
      for (let y = CELL_HEIGHT / 2, row = 0; y < height; y += CELL_HEIGHT, row++) {
        const maskY = Math.floor((y - top) / portraitHeight * MASK_HEIGHT);
        const tone = mask && maskX >= 0 && maskX < MASK_WIDTH && maskY >= 0 && maskY < MASK_HEIGHT ? mask[maskY * MASK_WIDTH + maskX] : 0;
        const distance = (head - y % cycle + cycle) % cycle;
        const strength = Math.max(0, 1 - distance / trail) ** 1.25;
        const glyphRow = row - traveledRows;
        const seed = Math.imul(column + 1, 374761393) ^ Math.imul(glyphRow, 668265263);
        const imageIndex = maskX >= 0 && maskX < MASK_WIDTH && maskY >= 0 && maskY < MASK_HEIGHT ? maskY * MASK_WIDTH + maskX : -1;
        const belongsToUpload = imageIndex >= 0 && ((_a = image == null ? void 0 : image.foreground) == null ? void 0 : _a[imageIndex]) === 1;
        const belongsToPortrait = imageIndex >= 0 && (belongsToUpload || !(image == null ? void 0 : image.foreground) && tone > 0.035);
        const imageTone = belongsToUpload ? Math.min(1, 0.36 + tone * Math.max(0.5, imageClarity)) : Math.min(1, tone * Math.max(0.5, imageClarity));
        if (!belongsToPortrait && strength < 0.09) continue;
        const visualTone = belongsToPortrait ? imageTone : strength * 0.78;
        const group = Math.round(visualTone * (GLYPHS.length - 1));
        const glyphs = GLYPHS[group];
        const glyph = ((seed ^ seed >>> 13 ^ Math.imul(traveledRows, 1274126177)) >>> 0) % glyphs.length;
        context.globalAlpha = belongsToPortrait ? Math.min(1, 0.28 + imageTone * 0.72) : Math.min(0.7, 0.06 + strength * 0.62);
        context.fillText(glyphs[glyph], x, y);
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
  maxOffset = 22,
  color = "#60ed83",
  lineSpeed = 1,
  mouseSpeed = 1,
  imageClarity = 1.35,
  className = ""
}) {
  const fieldRef = (0, import_react2.useRef)(null);
  const portraitRef = (0, import_react2.useRef)(null);
  const pointer = (0, import_react2.useRef)(null);
  const settings = (0, import_react2.useRef)({ color, imageClarity, lineSpeed, mouseSpeed });
  const renderer = (0, import_react2.useRef)(void 0);
  const source = src ?? REFERENCE;
  const [result, setResult] = (0, import_react2.useState)();
  const current = (result == null ? void 0 : result.source) === source ? result : void 0;
  const mask = current == null ? void 0 : current.mask;
  (0, import_react2.useEffect)(() => {
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
  }, [source]);
  (0, import_react2.useEffect)(() => {
    if (fieldRef.current && portraitRef.current) {
      const animation = animateRain(fieldRef.current, portraitRef.current, mask, pointer, settings);
      renderer.current = animation;
      return () => {
        animation == null ? void 0 : animation.dispose();
        renderer.current = void 0;
      };
    }
  }, [mask]);
  (0, import_react2.useEffect)(() => {
    var _a;
    settings.current = { color, imageClarity, lineSpeed, mouseSpeed };
    (_a = renderer.current) == null ? void 0 : _a.paint();
  }, [color, imageClarity, lineSpeed, mouseSpeed]);
  function movePortrait(event) {
    var _a;
    if (!followPointer || event.pointerType === "touch") return;
    const bounds = (_a = fieldRef.current) == null ? void 0 : _a.getBoundingClientRect();
    if (!(bounds == null ? void 0 : bounds.width) || !bounds.height) return;
    const offset = Number.isFinite(maxOffset) ? Math.max(0, maxOffset) : 22;
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    pointer.current = { position: { x, y }, offset: { x: (x / bounds.width * 2 - 1) * offset, y: (y / bounds.height * 2 - 1) * offset } };
  }
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: [interactive_ascii_face_default.stage, className].filter(Boolean).join(" "),
      onPointerMove: movePortrait,
      onPointerLeave: () => {
        pointer.current = null;
      }
    },
    /* @__PURE__ */ React.createElement(
      "canvas",
      {
        ref: fieldRef,
        className: interactive_ascii_face_default.field,
        role: mask ? "img" : void 0,
        "aria-label": mask ? alt : void 0,
        "aria-hidden": !mask
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: portraitRef,
        className: interactive_ascii_face_default.frame
      },
      !mask && /* @__PURE__ */ React.createElement("p", { className: interactive_ascii_face_default.status, role: "status" }, current ? "Couldn\u2019t read this image. Try a PNG, JPEG, or WebP." : "Converting image to ASCII\u2026")
    )
  );
}

// src/components/ui/blob-morph-hero.jsx
var import_react3 = __toESM(require("react"));
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
  return Math.sin(x * 1.1 + t * 0.55) + Math.sin(y * 1.4 - t * 0.45) + Math.sin((x + y) * 0.8 + t * 0.35) + Math.sin(Math.hypot(x - 2.5, y - 1.8) * 1.3 - t * 0.5);
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
function BlobMorphHero({
  preset = "lando-f1",
  baseImage = "",
  equippedImage = "",
  blobMode = "roam",
  speed = 1,
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
  const uid = (0, import_react3.useId)().replace(/:/g, "");
  const shellId = "bmh-shell-" + uid;
  const wipeId = "bmh-wipe-" + uid;
  const [size, setSize] = (0, import_react3.useState)({ w: 0, h: 0 });
  const [aspect, setAspect] = (0, import_react3.useState)(0.8);
  const box = (0, import_react3.useMemo)(() => {
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
      h: Math.round(h)
    };
  }, [size, aspect]);
  const propsRef = (0, import_react3.useRef)({});
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
    const im = new Image();
    im.onload = () => {
      if (im.naturalWidth && im.naturalHeight) {
        setAspect(im.naturalWidth / im.naturalHeight);
      }
    };
    im.src = baseSrc;
  }, [baseSrc]);
  (0, import_react3.useEffect)(() => {
    const im = new Image();
    im.decoding = "async";
    setAutoHead(null);
    im.onload = () => {
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
        const rad = b.r * minD * 1.5 * (1 + 0.18 * Math.sin(t * 0.9 + b.px));
        return {
          x: (0.5 + b.ax * Math.sin(t * b.fx + b.px)) * mw,
          y: (0.5 + b.ay * Math.sin(t * b.fy + b.py)) * mh,
          r2: rad * rad
        };
      });
      if (p.blobMode === "flood") {
        const surge = 0.5 + 0.5 * Math.sin(t * 0.7);
        const rad = minD * (0.16 + 0.24 * surge);
        live.push({
          x: (bx.x + bx.w / 2) / W2 * mw,
          y: (bx.y + bx.h / 2) / H2 * mh,
          r2: rad * rad
        });
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
  return /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      ref: rootRef,
      className: `relative h-full w-full overflow-hidden ${className}`,
      style: { background: bg }
    },
    /* @__PURE__ */ import_react3.default.createElement("canvas", { ref: topoRef, className: "absolute inset-0 h-full w-full" }),
    /* @__PURE__ */ import_react3.default.createElement(
      "canvas",
      {
        ref: ambRef,
        className: "pointer-events-none absolute inset-0 h-full w-full",
        style: { opacity: 1 }
      }
    ),
    showHeadline && /* @__PURE__ */ import_react3.default.createElement("div", { className: "pointer-events-none absolute inset-0 flex select-none items-center justify-center" }, /* @__PURE__ */ import_react3.default.createElement(
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
    /* @__PURE__ */ import_react3.default.createElement(
      "div",
      {
        className: "absolute",
        style: { left: box.x, top: box.y, width: box.w, height: box.h }
      },
      /* @__PURE__ */ import_react3.default.createElement(
        "img",
        {
          src: baseSrc,
          alt: "",
          draggable: false,
          className: "absolute inset-0 h-full w-full select-none",
          style: flipBase ? { transform: "scaleX(-1)" } : void 0
        }
      ),
      /* @__PURE__ */ import_react3.default.createElement(
        "canvas",
        {
          ref: revRef,
          className: "absolute inset-0 h-full w-full",
          style: debugAlign ? { opacity: 0.5 } : void 0
        }
      ),
      showHud && /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
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
        /* @__PURE__ */ import_react3.default.createElement("defs", null, /* @__PURE__ */ import_react3.default.createElement("clipPath", { id: shellId }, /* @__PURE__ */ import_react3.default.createElement("path", { d: HELMET.shell })), /* @__PURE__ */ import_react3.default.createElement("clipPath", { id: wipeId }, /* @__PURE__ */ import_react3.default.createElement("rect", { ref: wipeRef, x: HEAD_VB.x, y: HEAD_VB.y, width: HEAD_VB.w, height: "0" }))),
        /* @__PURE__ */ import_react3.default.createElement("g", { clipPath: `url(#${wipeId})` }, customSvgMarkup ? /* @__PURE__ */ import_react3.default.createElement("g", { dangerouslySetInnerHTML: { __html: customSvgMarkup } }) : /* @__PURE__ */ import_react3.default.createElement("g", null, /* @__PURE__ */ import_react3.default.createElement("path", { d: HELMET.shell, fill: "#ffffff", fillOpacity: "0.16", stroke: "none" }), /* @__PURE__ */ import_react3.default.createElement("path", { d: HELMET.visor, fill: wire, fillOpacity: "0.07", stroke: "none" }), /* @__PURE__ */ import_react3.default.createElement("g", { clipPath: `url(#${shellId})`, opacity: "0.5", strokeWidth: "0.6" }, HELMET.latitudes.map((d, i) => /* @__PURE__ */ import_react3.default.createElement("path", { key: "la" + i, d, ...VE })), HELMET.meridians.map((d, i) => /* @__PURE__ */ import_react3.default.createElement("path", { key: "me" + i, d, ...VE }))), /* @__PURE__ */ import_react3.default.createElement("path", { d: HELMET.shell, strokeWidth: "1.2", ...VE }), /* @__PURE__ */ import_react3.default.createElement("path", { d: HELMET.visor, strokeWidth: "1", ...VE }), HELMET.details.map((d, i) => /* @__PURE__ */ import_react3.default.createElement("path", { key: "de" + i, d, opacity: "0.6", ...VE })))),
        /* @__PURE__ */ import_react3.default.createElement("g", { ref: scanRef, opacity: "0" }, /* @__PURE__ */ import_react3.default.createElement("line", { x1: HEAD_VB.x, x2: HEAD_VB.x + HEAD_VB.w, y1: "0", y2: "0", stroke: wire, strokeWidth: "4", opacity: "0.18", ...VE }), /* @__PURE__ */ import_react3.default.createElement("line", { x1: HEAD_VB.x, x2: HEAD_VB.x + HEAD_VB.w, y1: "0", y2: "0", stroke: wire, strokeWidth: "1.2", opacity: "0.9", ...VE }))
      ), showTelemetry && /* @__PURE__ */ import_react3.default.createElement(
        "div",
        {
          className: "pointer-events-none absolute left-3 top-3 font-mono text-[11px] leading-4",
          style: { color: wire }
        },
        /* @__PURE__ */ import_react3.default.createElement("div", null, "SPD ", /* @__PURE__ */ import_react3.default.createElement("span", { ref: spdRef }, "0 KM/H")),
        /* @__PURE__ */ import_react3.default.createElement("div", null, "LIVERY ", /* @__PURE__ */ import_react3.default.createElement("span", { ref: covRef }, "0%"))
      ))
    ),
    showNextRace && /* @__PURE__ */ import_react3.default.createElement(
      "div",
      {
        className: "pointer-events-none absolute left-6 top-6 text-xs",
        style: { color: "#111111" }
      },
      /* @__PURE__ */ import_react3.default.createElement("div", { className: "opacity-60" }, "Next race"),
      /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-sm font-semibold" }, "Las Vegas GP")
    )
  );
}

// src/components/ui/infinite-tunnel-hero.jsx
var import_react4 = require("react");
var import_gsap = __toESM(require("gsap"));
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
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `relative h-screen w-full overflow-hidden  ${className}`,
      style: { background: backgroundColor }
    },
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        ref: rootRef,
        className: "pointer-events-none absolute inset-0 h-full w-full",
        viewBox: `0 0 ${W} ${H}`,
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": "true"
      },
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "slabBottom", x1: "0", y1: "1", x2: "0", y2: "0" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: color, stopOpacity: "0.9" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: color, stopOpacity: "0.35" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "slabTop", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: color, stopOpacity: "0.9" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: color, stopOpacity: "0.35" })), /* @__PURE__ */ React.createElement(
        "linearGradient",
        {
          id: "gridStroke",
          gradientUnits: "userSpaceOnUse",
          x1: "0",
          y1: BOTTOM_EDGE,
          x2: "0",
          y2: "1100"
        },
        /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: color, stopOpacity: "1" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.08", stopColor: color, stopOpacity: "0.95" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.2", stopColor: color, stopOpacity: "0.8" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.45", stopColor: color, stopOpacity: "0.9" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: color, stopOpacity: "0.45" })
      ), /* @__PURE__ */ React.createElement(
        "linearGradient",
        {
          id: "gridFade",
          gradientUnits: "userSpaceOnUse",
          x1: "-480",
          y1: "0",
          x2: "2400",
          y2: "0"
        },
        /* @__PURE__ */ React.createElement("stop", { offset: "0.02", stopColor: "#292929" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.05", stopColor: "#565656" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.09", stopColor: "#7E7E7E" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.12", stopColor: "#A1A1A1" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.2", stopColor: "#D6D6D6" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.3", stopColor: "#F5F5F5" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.54", stopColor: "#FFFFFF" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.74", stopColor: "#E2E2E2" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.88", stopColor: "#8B8B8B" }),
        /* @__PURE__ */ React.createElement("stop", { offset: "0.96", stopColor: "#323232" })
      ), /* @__PURE__ */ React.createElement(
        "mask",
        {
          id: "gridMask",
          maskUnits: "userSpaceOnUse",
          x: "-480",
          y: "0",
          width: "2880",
          height: "1300"
        },
        /* @__PURE__ */ React.createElement("rect", { x: "-480", y: "0", width: "2880", height: "1300", fill: "url(#gridFade)" })
      ), /* @__PURE__ */ React.createElement("radialGradient", { id: "glow", cx: "50%", cy: "50%", r: "50%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0.02", stopColor: color, stopOpacity: "1" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.07", stopColor: color, stopOpacity: "0.95" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.19", stopColor: color, stopOpacity: "0.8" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.45", stopColor: color, stopOpacity: "0.45" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: color, stopOpacity: "0" }))),
      /* @__PURE__ */ React.createElement("g", { transform: `translate(0 ${GAP})` }, GLOW_ON && /* @__PURE__ */ React.createElement("g", { className: "tunnel-glow" }, /* @__PURE__ */ React.createElement(
        "rect",
        {
          x: VX - 1400,
          y: BOTTOM_EDGE + 60,
          width: 2800,
          height: 60,
          fill: "url(#glow)"
        }
      ), /* @__PURE__ */ React.createElement(
        "rect",
        {
          x: VX - 1e3,
          y: BOTTOM_EDGE - 110,
          width: 2e3,
          height: 220,
          fill: "url(#glow)",
          opacity: "0.22"
        }
      )), /* @__PURE__ */ React.createElement("g", { stroke: "url(#gridStroke)", strokeWidth: "0.8", mask: "url(#gridMask)" }, RADIAL_X.map((x) => /* @__PURE__ */ React.createElement("line", { key: `rb-${x}`, x1: x, y1: RADIAL_Y0, x2: radialEnd(x), y2: H })), Array.from({ length: GRID_Y.length + 1 }).map((_, i) => /* @__PURE__ */ React.createElement(
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
      ))), /* @__PURE__ */ React.createElement("g", { style: { mixBlendMode: "screen" } }, Array.from({ length: shapeCount }).map((_, k) => /* @__PURE__ */ React.createElement(
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
      )), PARTICLES.map((d, i) => /* @__PURE__ */ React.createElement(
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
      /* @__PURE__ */ React.createElement("g", { transform: `translate(0 ${-GAP})` }, GLOW_ON && /* @__PURE__ */ React.createElement("g", { className: "tunnel-glow" }, /* @__PURE__ */ React.createElement(
        "rect",
        {
          x: VX - 1400,
          y: TOP_EDGE - 130,
          width: 2800,
          height: 60,
          fill: "url(#glow)"
        }
      ), /* @__PURE__ */ React.createElement(
        "rect",
        {
          x: VX - 1e3,
          y: TOP_EDGE - 110,
          width: 2e3,
          height: 220,
          fill: "url(#glow)",
          opacity: "0.22"
        }
      )), /* @__PURE__ */ React.createElement("g", { style: { mixBlendMode: "screen" } }, Array.from({ length: shapeCount }).map((_, k) => /* @__PURE__ */ React.createElement(
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
      )), PARTICLES.map((d, i) => /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement("div", { className: "relative z-10  flex h-full w-full items-center justify-center" }, children)
  );
}

// src/components/ui/scrollsmoothprovider.jsx
var import_react5 = __toESM(require("react"));
var import_lenis = __toESM(require("lenis"));
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
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, children);
}

// src/components/ui/liquidGlassButton.jsx
var import_react6 = __toESM(require("react"));
function LiquidGlassButton({
  children = "Liquid Glass Button",
  className = "",
  onClick,
  ...props
}) {
  return /* @__PURE__ */ import_react6.default.createElement(
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

// src/components/ui/install-tabs.jsx
var import_react7 = require("react");
var import_react8 = require("motion/react");
var import_lucide_react2 = require("lucide-react");
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
  const id = (0, import_react7.useId)();
  const manager = (0, import_react7.useSyncExternalStore)(subscribe, read, () => "npm");
  const [copied, setCopied] = (0, import_react7.useState)(false);
  const [mode, setMode] = (0, import_react7.useState)(component ? "cli" : "package");
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
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950/90 shadow-2xl backdrop-blur-md ${className}`
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-zinc-900/60 px-3 py-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { role: "tablist", "aria-label": "Package manager", className: "flex items-center gap-1" }, managers.map((option, index) => {
      const isSelected = manager === option;
      return /* @__PURE__ */ React.createElement(
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
        isSelected && /* @__PURE__ */ React.createElement(
          import_react8.motion.span,
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
        /* @__PURE__ */ React.createElement("span", { className: "relative z-10" }, option)
      );
    })), component && /* @__PURE__ */ React.createElement("div", { className: "ml-2 hidden items-center rounded-lg border border-white/10 bg-black/40 p-0.5 sm:flex" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setMode("cli"),
        className: `flex cursor-pointer items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-mono transition ${mode === "cli" ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30" : "text-zinc-400 hover:text-white"}`
      },
      /* @__PURE__ */ React.createElement(import_lucide_react2.Terminal, { className: "size-3" }),
      "CLI"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setMode("package"),
        className: `flex cursor-pointer items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-mono transition ${mode === "package" ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30" : "text-zinc-400 hover:text-white"}`
      },
      /* @__PURE__ */ React.createElement(import_lucide_react2.Package, { className: "size-3" }),
      "NPM"
    ))), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: copyCommand,
        className: "flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300 transition hover:bg-white/15 hover:text-white",
        "aria-label": "Copy install command"
      },
      copied ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_lucide_react2.Check, { className: "size-3.5 text-emerald-400" }), /* @__PURE__ */ React.createElement("span", { className: "text-emerald-400 font-medium" }, "Copied!")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "text-zinc-400" }, "Copy"))
    )),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        id: `${id}-panel`,
        role: "tabpanel",
        "aria-labelledby": `${id}-${manager}`,
        className: "relative overflow-hidden px-4 py-3.5 font-mono text-xs sm:text-sm bg-black/40"
      },
      /* @__PURE__ */ React.createElement(import_react8.AnimatePresence, { mode: "wait", initial: false }, /* @__PURE__ */ React.createElement(
        import_react8.motion.div,
        {
          key: `${manager}-${mode}`,
          initial: { opacity: 0, x: -28 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 28 },
          transition: { duration: 0.22, ease: "easeOut" },
          className: "flex items-center gap-2.5 whitespace-nowrap text-zinc-200"
        },
        /* @__PURE__ */ React.createElement("span", { className: "select-none font-bold text-emerald-400" }, "$"),
        /* @__PURE__ */ React.createElement("span", { className: "tracking-wide" }, currentText)
      )),
      /* @__PURE__ */ React.createElement("span", { role: "status", className: "sr-only" }, copied ? "Copied" : "")
    )
  );
}

// src/components/ui/props-table.jsx
var import_react9 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");
function PropsTable({
  data = [],
  title = "Props Reference",
  description = "Complete reference of all customizable properties and parameters.",
  className = ""
}) {
  const [searchQuery, setSearchQuery] = (0, import_react9.useState)("");
  const [copiedProp, setCopiedProp] = (0, import_react9.useState)(null);
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
  return /* @__PURE__ */ import_react9.default.createElement("div", { className: `space-y-4 w-full ${className}` }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3" }, /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("h3", { className: "text-xl md:text-2xl font-bold font-sans text-white flex items-center gap-2" }, /* @__PURE__ */ import_react9.default.createElement(import_lucide_react3.SlidersHorizontal, { className: "w-5 h-5 text-lime-400" }), /* @__PURE__ */ import_react9.default.createElement("span", null, title)), description && /* @__PURE__ */ import_react9.default.createElement("p", { className: "mt-1 text-xs md:text-sm text-gray-400 font-sans" }, description)), /* @__PURE__ */ import_react9.default.createElement("div", { className: "relative w-full sm:w-64" }, /* @__PURE__ */ import_react9.default.createElement(import_lucide_react3.Search, { className: "w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" }), /* @__PURE__ */ import_react9.default.createElement(
    "input",
    {
      type: "text",
      value: searchQuery,
      onChange: (e) => setSearchQuery(e.target.value),
      placeholder: "Search props, types...",
      className: "w-full bg-zinc-900/80 border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400/50 transition font-sans"
    }
  ), searchQuery && /* @__PURE__ */ import_react9.default.createElement(
    "button",
    {
      onClick: () => setSearchQuery(""),
      className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs font-mono"
    },
    "\xD7"
  ))), /* @__PURE__ */ import_react9.default.createElement("div", { className: "rounded-2xl border border-white/10 overflow-hidden bg-zinc-950 shadow-xl" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ import_react9.default.createElement("table", { className: "w-full text-left text-xs font-sans" }, /* @__PURE__ */ import_react9.default.createElement("thead", { className: "bg-zinc-900/70 border-b border-white/10 font-mono text-zinc-400" }, /* @__PURE__ */ import_react9.default.createElement("tr", null, /* @__PURE__ */ import_react9.default.createElement("th", { className: "py-3 px-4 font-semibold w-1/4" }, "Prop"), /* @__PURE__ */ import_react9.default.createElement("th", { className: "py-3 px-4 font-semibold w-1/5" }, "Type"), /* @__PURE__ */ import_react9.default.createElement("th", { className: "py-3 px-4 font-semibold w-1/6" }, "Default"), /* @__PURE__ */ import_react9.default.createElement("th", { className: "py-3 px-4 font-semibold" }, "Description"))), /* @__PURE__ */ import_react9.default.createElement("tbody", { className: "divide-y divide-white/5 text-zinc-300" }, filteredData.length > 0 ? filteredData.map((item, idx) => /* @__PURE__ */ import_react9.default.createElement(
    "tr",
    {
      key: item.prop || idx,
      className: "hover:bg-white/[0.02] transition-colors group"
    },
    /* @__PURE__ */ import_react9.default.createElement("td", { className: "py-3.5 px-4 font-mono" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        onClick: () => copyPropName(item.prop),
        className: "font-semibold text-lime-400 hover:text-lime-300 transition flex items-center gap-1 cursor-pointer",
        title: "Click to copy prop name"
      },
      /* @__PURE__ */ import_react9.default.createElement("span", null, item.prop),
      copiedProp === item.prop ? /* @__PURE__ */ import_react9.default.createElement(import_lucide_react3.Check, { className: "w-3 h-3 text-emerald-400 shrink-0" }) : /* @__PURE__ */ import_react9.default.createElement(import_lucide_react3.Copy, { className: "w-3 h-3 text-zinc-600 opacity-0 group-hover:opacity-100 transition shrink-0" })
    ), item.required && /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-[10px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-sans" }, "required"))),
    /* @__PURE__ */ import_react9.default.createElement("td", { className: "py-3.5 px-4 font-mono text-[11px]" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "inline-block px-2 py-0.5 rounded-md bg-zinc-900 text-cyan-300 border border-white/5" }, item.type)),
    /* @__PURE__ */ import_react9.default.createElement("td", { className: "py-3.5 px-4 font-mono text-[11px] text-zinc-400" }, item.default ? /* @__PURE__ */ import_react9.default.createElement("code", { className: "bg-zinc-900 px-1.5 py-0.5 rounded text-amber-300/90 border border-white/5" }, item.default) : /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-zinc-600" }, "\u2014")),
    /* @__PURE__ */ import_react9.default.createElement("td", { className: "py-3.5 px-4 text-gray-300 leading-relaxed font-sans" }, item.description)
  )) : /* @__PURE__ */ import_react9.default.createElement("tr", null, /* @__PURE__ */ import_react9.default.createElement(
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
  BlobMorphHero,
  DEFAULT_PRESETS,
  DEFAULT_SCROLL_IMAGES,
  ImageScroll,
  InfiniteImageScroll,
  InfiniteTunnelHero,
  InstallTabs,
  InteractiveAsciiFace,
  LiquidGlassButton,
  PropsTable,
  SmoothScrollProvider,
  liquidGlassButton
});
//# sourceMappingURL=index.cjs.map