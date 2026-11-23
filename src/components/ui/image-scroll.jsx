"use client";

import React, { useState } from "react";
import styles from "./image-scroll.module.css";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

export const DEFAULT_SCROLL_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
    title: "Quantum Fluidity",
    category: "3D ART",
    accent: "#6366f1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=700&q=80",
    title: "Prism Dimensions",
    category: "GEOMETRY",
    accent: "#ec4899",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=700&q=80",
    title: "Holographic Veil",
    category: "SYNTH",
    accent: "#10b981",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=700&q=80",
    title: "Neon Nexus",
    category: "CYBER",
    accent: "#06b6d4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=700&q=80",
    title: "Chromatic Wave",
    category: "GRADIENT",
    accent: "#f59e0b",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=700&q=80",
    title: "Iridescent Orbit",
    category: "SPATIAL",
    accent: "#8b5cf6",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=700&q=80",
    title: "Vortex Singularity",
    category: "MOTION",
    accent: "#14b8a6",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=700&q=80",
    title: "Monolith Monad",
    category: "ABSTRACT",
    accent: "#e11d48",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=80",
    title: "Cyber Horizon",
    category: "CITY",
    accent: "#38bdf8",
  },
];

/**
 * Standard image card item
 */
function DefaultImageCard({ item, cardWidth, cardHeight, onCardClick }) {
  const [imgError, setImgError] = useState(false);

  const src = typeof item === "string" ? item : item?.src;
  const title = typeof item === "string" ? "Creative Asset" : item?.title || "Visual Frame";
  const category = typeof item === "string" ? "ASSET" : item?.category || "GALLERY";
  const accent = typeof item === "object" && item?.accent ? item.accent : "#10b981";

  return (
    <div
      onClick={() => onCardClick?.(item)}
      style={{
        width: cardWidth,
        height: cardHeight,
      }}
      className="group relative shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 shadow-xl transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Fallback gradient background if image is offline or failing */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black"
        style={{
          backgroundImage: imgError
            ? `radial-gradient(circle at 50% 30%, ${accent}25, transparent 70%), linear-gradient(to bottom, #18181b, #09090b)`
            : undefined,
        }}
      />

      {/* Actual Image */}
      {!imgError && src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={title}
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
      )}

      {/* Fallback emblem icon when image is unavailable */}
      {imgError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <div
            className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            style={{ color: accent }}
          >
            <ImageIcon className="size-5" />
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
            {title}
          </span>
        </div>
      )}

      {/* Gradient vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

      {/* Hover glow highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1px ${accent}66, 0 0 24px -6px ${accent}40`,
        }}
      />

      {/* Card Info Overlay */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-white backdrop-blur-md"
            style={{ borderLeftColor: accent, borderLeftWidth: "2.5px" }}
          >
            {category}
          </span>
          <span className="flex size-6 sm:size-7 items-center justify-center rounded-full bg-white/10 text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
            <ArrowUpRight className="size-3 sm:size-3.5" />
          </span>
        </div>
        <h4 className="mt-1.5 line-clamp-1 font-sans text-xs sm:text-sm font-bold tracking-wide text-white drop-shadow">
          {title}
        </h4>
      </div>
    </div>
  );
}

/**
 * Ensures items are duplicated cleanly so the 50% translation produces a mathematically
 * seamless continuous loop with zero seam jerk or blank gap.
 */
function prepareTrackItems(items) {
  if (!items || items.length === 0) return [];
  let base = [...items];
  while (base.length < 6) {
    base = [...base, ...items];
  }
  return [...base, ...base];
}

/**
 * Distribute a list of items into N tracks (columns or rows)
 */
function distributeItems(items, count) {
  const tracks = Array.from({ length: count }, () => []);
  items.forEach((item, index) => {
    tracks[index % count].push(item);
  });
  return tracks;
}

/**
 * ImageScroll Component (also exported as InfiniteImageScroll)
 *
 * An adaptive infinite loop scrolling component for images or cards.
 * Supports both vertical and horizontal scroll directions with seamless looping,
 * multi-column / multi-row staggering, speed adjustments, and edge fade masks.
 *
 * @param {"vertical" | "horizontal"} direction - Scrolling direction
 * @param {Array} images - Array of image objects or URL strings
 * @param {number} speed - Speed multiplier (1 = normal 1x, 2 = 2x faster, 0.5 = 0.5x slower)
 * @param {boolean} reverse - Inverts base scrolling direction
 * @param {boolean} pauseOnHover - Pauses animation when hovering over items (default: true)
 * @param {number} columns - Number of vertical columns (default: 3)
 * @param {number} rows - Number of horizontal rows (default: 3)
 * @param {boolean} staggerDirection - Alternates scroll directions of adjacent tracks
 * @param {number} gap - Spacing between items in pixels (default: 18)
 * @param {boolean} blurEdges - Applies gradient fade mask to container edges (default: true)
 * @param {string} height - Container height in vertical mode (default: "560px")
 * @param {boolean} tilt - Enables 3D perspective skew aesthetic (default: false)
 * @param {string} cardWidth - Width of individual cards
 * @param {string} cardHeight - Height of individual cards
 * @param {Function} renderItem - Custom item render function (item, index) => ReactNode
 * @param {Function} onCardClick - Callback when a card is clicked
 * @param {string} className - Additional CSS classes for root container
 */
export function ImageScroll({
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
  style = {},
}) {
  const isVertical = direction === "vertical";
  const numTracks = isVertical ? Math.max(1, columns) : Math.max(1, rows);

  // Distribute items across tracks
  const trackItemGroups = distributeItems(images, numTracks);

  // Speed calculation: HIGHER speed = FASTER animation!
  // In horizontal mode, cards move across a wide screen (1200px+) and 3 opposing rows
  // create high relative shear speed. Calibrating horizontal base duration to 42s and
  // vertical to 28s gives both modes an identical, harmonious visual pace!
  const normalizedSpeed = Number(speed) || 1;
  const baseDuration = isVertical
    ? (normalizedSpeed <= 8 ? 28 / Math.max(0.1, normalizedSpeed) : Math.max(4, 65 - normalizedSpeed))
    : (normalizedSpeed <= 8 ? 42 / Math.max(0.1, normalizedSpeed) : Math.max(6, 90 - normalizedSpeed));

  // Calculate default card dimensions
  const defaultWidth = isVertical
    ? cardWidth || "250px"
    : cardWidth || (numTracks >= 3 ? "240px" : "280px");

  const defaultHeight = isVertical
    ? cardHeight || "280px"
    : cardHeight || (numTracks >= 3 ? "165px" : "210px");

  const containerStyles = {
    "--scroll-gap": `${gap}px`,
    "--container-height": height,
    ...style,
  };

  return (
    <div
      style={containerStyles}
      className={`
        ${styles.container}
        ${tilt ? styles.tiltPerspective : ""}
        ${pauseOnHover ? styles.pauseHover : ""}
        ${isVertical && blurEdges ? styles.fadeMaskVertical : ""}
        ${!isVertical && blurEdges ? styles.fadeMaskHorizontal : ""}
        ${className}
      `}
    >
      <div className={tilt ? styles.tiltInner : ""}>
        {isVertical ? (
          /* ================= VERTICAL COLUMNS ================= */
          <div className={styles.verticalWrapper}>
            {trackItemGroups.map((group, colIdx) => {
              // Stagger direction if enabled: alternate reverse for odd columns
              const isColReverse = staggerDirection
                ? (colIdx % 2 === 1 ? !reverse : reverse)
                : reverse;

              // Stagger speed slightly so columns don't scroll in lockstep
              const colSpeed = staggerDirection
                ? baseDuration * (1 + (colIdx % 3) * 0.15)
                : baseDuration;

              const trackItems = prepareTrackItems(group);

              return (
                <div
                  key={`col-${colIdx}`}
                  className={isColReverse ? styles.verticalTrackReverse : styles.verticalTrack}
                  style={{
                    animationDuration: `${colSpeed}s`,
                  }}
                >
                  {trackItems.map((item, itemIdx) => (
                    <React.Fragment key={`v-item-${colIdx}-${itemIdx}`}>
                      {renderItem ? (
                        renderItem(item, itemIdx)
                      ) : (
                        <DefaultImageCard
                          item={item}
                          cardWidth={defaultWidth}
                          cardHeight={defaultHeight}
                          onCardClick={onCardClick}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              );
            })}
          </div>
        ) : (
          /* ================= HORIZONTAL ROWS ================= */
          <div className={styles.horizontalWrapper}>
            {trackItemGroups.map((group, rowIdx) => {
              // Stagger direction if enabled: alternate reverse for odd rows
              const isRowReverse = staggerDirection
                ? (rowIdx % 2 === 1 ? !reverse : reverse)
                : reverse;

              // Stagger speed across the 3 rows for organic parallax
              const rowSpeed = staggerDirection
                ? baseDuration * (1 + (rowIdx % 3) * 0.15)
                : baseDuration;

              const trackItems = prepareTrackItems(group);

              return (
                <div
                  key={`row-${rowIdx}`}
                  className={isRowReverse ? styles.horizontalTrackReverse : styles.horizontalTrack}
                  style={{
                    animationDuration: `${rowSpeed}s`,
                  }}
                >
                  {trackItems.map((item, itemIdx) => (
                    <React.Fragment key={`h-item-${rowIdx}-${itemIdx}`}>
                      {renderItem ? (
                        renderItem(item, itemIdx)
                      ) : (
                        <DefaultImageCard
                          item={item}
                          cardWidth={defaultWidth}
                          cardHeight={defaultHeight}
                          onCardClick={onCardClick}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// Backwards-compatible aliases
export const InfiniteImageScroll = ImageScroll;
export default ImageScroll;
