"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Activity,
  Compass,
  ArrowUpRight,
  Eye,
  Sliders,
  Pin,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* 10 Cards Dataset with Purple/Violet Theme & Single Punchy Word       */
/* ------------------------------------------------------------------ */
export const DEFAULT_STACKED_CARDS = [
  {
    id: 1,
    number: "01",
    oneWord: "LIQUID",
    tag: "FLUID DYNAMICS",
    title: "Liquid Morph",
    subtitle: "Organic Fluid Simulation",
    description: "Multi-layer fluid mesh with real-time marching squares topography.",
    accent: "#c084fc", // Light Purple / Violet
    cardBg: "linear-gradient(145deg, rgba(88, 28, 135, 0.9) 0%, rgba(20, 8, 38, 0.96) 100%)",
    borderGlow: "rgba(192, 132, 252, 0.5)",
  },
  {
    id: 2,
    number: "02",
    oneWord: "PHOSPHOR",
    tag: "PARTICLE OPTICS",
    title: "Phosphor CRT",
    subtitle: "Terminal ASCII Dispersion",
    description: "High-contrast character matrix with spring physics return.",
    accent: "#a855f7", // Vibrant Violet
    cardBg: "linear-gradient(145deg, rgba(107, 33, 168, 0.9) 0%, rgba(23, 7, 43, 0.96) 100%)",
    borderGlow: "rgba(168, 85, 247, 0.5)",
  },
  {
    id: 3,
    number: "03",
    oneWord: "TUNNEL",
    tag: "GEOMETRIC SPACE",
    title: "Infinite Tunnel",
    subtitle: "Recursive Wireframe Warp",
    description: "Hypnotic depth-field rings warping with mouse acceleration.",
    accent: "#9333ea", // Deep Purple
    cardBg: "linear-gradient(145deg, rgba(88, 28, 135, 0.9) 0%, rgba(18, 5, 36, 0.96) 100%)",
    borderGlow: "rgba(147, 51, 234, 0.5)",
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
    borderGlow: "rgba(192, 132, 252, 0.5)",
  },
  {
    id: 5,
    number: "05",
    oneWord: "VELOCITY",
    tag: "SPRING MECHANICS",
    title: "Elastic Velocity",
    subtitle: "Harmonic Damping Equations",
    description: "Physical simulation engine modeling mass and stiffness.",
    accent: "#d8b4fe", // Lavender Purple
    cardBg: "linear-gradient(145deg, rgba(76, 29, 149, 0.9) 0%, rgba(18, 7, 40, 0.96) 100%)",
    borderGlow: "rgba(216, 180, 254, 0.5)",
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
    borderGlow: "rgba(168, 85, 247, 0.5)",
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
    borderGlow: "rgba(233, 213, 255, 0.5)",
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
    borderGlow: "rgba(192, 132, 252, 0.5)",
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
    borderGlow: "rgba(216, 180, 254, 0.5)",
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
    borderGlow: "rgba(168, 85, 247, 0.5)",
  },
];

/* ------------------------------------------------------------------ */
/* Half-Ring SVG Progress Gauge with Glowing Arc                       */
/* ------------------------------------------------------------------ */
function HalfRingGauge({
  currentIndex,
  total = 10,
  accentColor = "#a855f7",
}) {
  const radius = 80;
  const cx = 100;
  const cy = 100;
  const arcLength = Math.PI * radius; // ~251.32
  const progress = total > 1 ? currentIndex / (total - 1) : 0;
  const strokeOffset = arcLength * (1 - progress);

  const angle = Math.PI * (1 - progress);
  const dotX = cx + radius * Math.cos(angle);
  const dotY = cy - radius * Math.sin(angle);

  return (
    <div className="relative flex items-center justify-center select-none">
      <svg
        viewBox="0 0 200 120"
        className="w-48 sm:w-56 h-28 sm:h-32 overflow-visible drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
      >
        <defs>
          <linearGradient id="purpleRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#e9d5ff" />
          </linearGradient>

          <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ticks along arc */}
        {Array.from({ length: 19 }).map((_, i) => {
          const tAngle = Math.PI * (1 - i / 18);
          const r1 = radius + 8;
          const r2 = radius + (i % 2 === 0 ? 15 : 12);
          const x1 = cx + r1 * Math.cos(tAngle);
          const y1 = cy - r1 * Math.sin(tAngle);
          const x2 = cx + r2 * Math.cos(tAngle);
          const y2 = cy - r2 * Math.sin(tAngle);
          const isPassed = i / 18 <= progress;

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isPassed ? "#c084fc" : "#27272a"}
              strokeWidth={i % 2 === 0 ? 1.5 : 1}
              strokeOpacity={isPassed ? 1 : 0.4}
              className="transition-colors duration-300"
            />
          );
        })}

        {/* Inactive Track Arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#1e1830"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Active Animated Progress Arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="url(#purpleRingGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={arcLength}
          strokeDashoffset={strokeOffset}
          filter="url(#purpleGlow)"
          className="transition-all duration-500 ease-out"
        />

        {/* Moving Indicator Dot */}
        <circle
          cx={dotX}
          cy={dotY}
          r="6"
          fill="#ffffff"
          className="transition-all duration-500 ease-out drop-shadow-[0_0_10px_#c084fc]"
        />
        <circle
          cx={dotX}
          cy={dotY}
          r="10"
          fill="#a855f7"
          fillOpacity="0.5"
          className="transition-all duration-500 ease-out animate-pulse"
        />
      </svg>

      {/* Center Readout */}
      <div className="absolute bottom-2 flex flex-col items-center">
        <span className="font-mono text-xl sm:text-2xl font-black tracking-tight text-white">
          {String(currentIndex + 1).padStart(2, "0")}
          <span className="text-xs font-normal text-purple-300/60 ml-1">/10</span>
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main StackedCardsScroll Component                                   */
/* ------------------------------------------------------------------ */
export function StackedCardsScroll({
  cards = DEFAULT_STACKED_CARDS,
  initialIndex = 0,
  enableWheelScroll = true,
  pin = false,
  pinHeight = "280vh",
  autoPlay = false,
  autoPlayInterval = 4000,
  className = "",
  onChange,
}) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const pinTrackRef = useRef(null);
  const lastScrollTime = useRef(0);

  const totalCards = cards.length;
  const currentCard = cards[activeIndex] || cards[0];

  // Next & Prev handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      const next = prev < totalCards - 1 ? prev + 1 : 0;
      if (onChange) onChange(next, cards[next]);
      return next;
    });
  }, [totalCards, cards, onChange]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => {
      const next = prev > 0 ? prev - 1 : totalCards - 1;
      if (onChange) onChange(next, cards[next]);
      return next;
    });
  }, [totalCards, cards, onChange]);

  const handleSelect = useCallback(
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
            const targetScroll =
              trackTop - startOffset + (index / (totalCards - 1)) * totalDistance;
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
          }
        }
      }
    },
    [totalCards, cards, onChange, pin]
  );

  // Wheel scroll trigger on container
  const handleWheel = useCallback(
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

  // Page ScrollTrigger with pin: true behavior (GSAP ScrollTrigger style)
  useEffect(() => {
    if (!pin) return;
    const track = pinTrackRef.current;
    if (!track) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = track.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const startOffset = 96; // matches sticky top-24
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

  // AutoPlay effect
  useEffect(() => {
    if (pin || !autoPlay || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [pin, autoPlay, isHovered, autoPlayInterval, handleNext]);

  // Inner Deck Presentation
  const deckNode = (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      style={{
        backgroundAttachment: "fixed",
      }}
      className={`relative w-full rounded-3xl border border-purple-500/20 bg-[#070512]/95 backdrop-blur-2xl p-6 sm:p-8 md:p-10 select-none overflow-hidden outline-none shadow-[0_0_50px_rgba(168,85,247,0.15)] ${className}`}
    >
      {/* Dynamic ambient violet background glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full blur-3xl opacity-30 bg-purple-600 transition-all duration-700" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full blur-3xl opacity-25 bg-violet-500 transition-all duration-700" />

      {/* Header bar: Component Title & Navigation */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-purple-500/15 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg border border-purple-500/30 bg-purple-500/15 flex items-center justify-center text-purple-400">
            <Layers size={16} />
          </div>
          <div>
            <h3 className="font-sans font-bold text-base text-white flex items-center gap-2">
              <span>3D Stacked Cards Deck</span>
              {pin && (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  <Pin size={10} />
                  <span>Pinned</span>
                </span>
              )}
            </h3>
            <p className="font-mono text-xs text-purple-300/70">
              Top Stack Layered Fan • Odd/Even Alternating Rotation
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex text-[11px] font-mono text-purple-300/60 bg-purple-950/40 px-2.5 py-1 rounded-full border border-purple-500/20">
            {pin ? "Scroll down to flip" : "Scroll wheel or click"}
          </span>
          <div className="flex items-center gap-1.5 bg-black/50 border border-purple-500/20 rounded-lg p-1">
            <button
              type="button"
              onClick={handlePrev}
              className="p-1.5 rounded text-purple-300 hover:text-white hover:bg-purple-500/20 transition-colors cursor-pointer"
              aria-label="Previous card"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="font-mono text-xs px-2 text-white font-semibold">
              {String(activeIndex + 1).padStart(2, "0")}/{totalCards}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="p-1.5 rounded text-purple-300 hover:text-white hover:bg-purple-500/20 transition-colors cursor-pointer"
              aria-label="Next card"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout: Left (Top-Layered 3D Stack) & Right (Ring Shape + One Word) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]">
        {/* LEFT COLUMN: 3D Stack of 10 Cards with TOP-STACK LAYERING (Onnu mela onnu top la theriyum!) */}
        <div className="lg:col-span-6 flex items-center justify-center py-10 px-2">
          <div className="relative w-full max-w-[340px] sm:max-w-[370px] h-[380px] flex items-center justify-center perspective-[1000px]">
            {cards.map((card, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;

              let rotateDeg = 0;
              let translateY = 0;
              let scale = 1;
              let zIndex = 30 - Math.abs(offset);
              let opacity = 1;
              let pointerEvents = "auto";

              if (isActive) {
                // Front active card
                rotateDeg = 0;
                translateY = 0;
                scale = 1;
                zIndex = 40;
                opacity = 1;
              } else if (offset > 0) {
                // Cards behind step UPWARDS (-13px each) and tilt so their TOP EDGES & HEADERS are visibly stacked one above another!
                const sign = index % 2 === 0 ? 1 : -1;
                rotateDeg = sign * (3.2 + offset * 1.1);
                translateY = -offset * 13; // Visibly layered above at the TOP!
                scale = Math.max(0.74, 1 - offset * 0.035);
                opacity = Math.max(0.35, 1 - offset * 0.075);
              } else {
                // Past cards swiped down and faded
                const sign = index % 2 === 0 ? -1 : 1;
                rotateDeg = sign * 14;
                translateY = 70 + Math.abs(offset) * 15;
                scale = 1.05;
                opacity = 0;
                pointerEvents = "none";
              }

              return (
                <div
                  key={card.id}
                  onClick={() => handleSelect(index)}
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotateDeg}deg)`,
                    zIndex: zIndex,
                    opacity: opacity,
                    pointerEvents: pointerEvents,
                    background: card.cardBg,
                    borderColor: isActive ? "#c084fc" : "rgba(168, 85, 247, 0.3)",
                    transition:
                      "transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.5s ease, z-index 0.5s ease, border-color 0.4s ease",
                    boxShadow: isActive
                      ? "0 25px 50px -15px rgba(168, 85, 247, 0.5), 0 0 30px -5px rgba(168, 85, 247, 0.4)"
                      : "0 10px 25px -10px rgba(0,0,0,0.7)",
                  }}
                  className="absolute top-0 w-full h-full rounded-2xl p-6 cursor-pointer border flex flex-col justify-between overflow-hidden backdrop-blur-md"
                >
                  {/* Subtle top edge glow so each card layer pops at the top! */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent pointer-events-none" />

                  {/* Card Top: Number badge & Tag (visibly protruding at the top!) */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md border text-purple-300 bg-purple-950/60 border-purple-400/40">
                      CARD {card.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-purple-200/90 font-semibold">
                      {card.tag}
                    </span>
                  </div>

                  {/* Card Center: Visual Monogram & Title */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
                    <div className="size-16 rounded-2xl flex items-center justify-center border border-purple-400/40 bg-purple-950/50 shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-transform duration-500 hover:scale-110">
                      <Sparkles size={28} className="text-purple-300" />
                    </div>
                    <h4 className="mt-4 font-sans font-bold text-lg text-white text-center tracking-tight">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-xs font-mono text-purple-300/80 text-center">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Card Bottom */}
                  <div className="relative z-10 border-t border-purple-500/20 pt-3 flex items-center justify-between text-[11px] font-mono text-purple-300/70">
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-purple-400 animate-ping" />
                      <span className="font-medium text-white">Active Vector</span>
                    </span>
                    <span>
                      Deck {index + 1} of {totalCards}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Means & Methods Vertical Scrollytelling Text List + HUD Gauge */}
        <div className="lg:col-span-6 flex flex-col justify-center py-4 px-2 sm:px-6">
          {/* Top Status HUD with Mini Gauge & Stage Readout */}
          <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-purple-400">
                STAGE {currentCard.number} / {String(totalCards).padStart(2, "0")}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300/80 font-semibold truncate max-w-[150px] sm:max-w-[200px]">
                {currentCard.tag}
              </span>
            </div>

            {/* Micro Nav Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous topic"
                className="size-7 rounded-lg border border-purple-500/30 bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next topic"
                className="size-7 rounded-lg border border-purple-500/30 bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Means & Methods Vertical Text Scroller */}
          <div
            className="relative h-[340px] sm:h-[380px] overflow-hidden select-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            <div
              className="flex flex-col gap-4 sm:gap-5"
              style={{
                transform: `translateY(${-(activeIndex * 58) + 150}px)`,
                transition: "transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1)",
              }}
            >
              {cards.map((cardItem, idx) => {
                const isActive = idx === activeIndex;
                const distance = Math.abs(idx - activeIndex);
                const opacity = isActive
                  ? 1
                  : Math.max(0.18, 0.65 - distance * 0.18);
                const scale = isActive ? 1 : Math.max(0.88, 1 - distance * 0.035);

                return (
                  <button
                    key={cardItem.id || idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className="group text-left flex items-start sm:items-center gap-3.5 sm:gap-4 py-1.5 px-2 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
                    style={{
                      opacity,
                      transform: `scale(${scale})`,
                      transformOrigin: "left center",
                    }}
                  >
                    {/* Glowing Bullet Dot (Means & Methods highlight dot) */}
                    <div className="shrink-0 mt-2 sm:mt-0 flex items-center justify-center size-4">
                      {isActive ? (
                        <span
                          className="size-2.5 rounded-full animate-pulse transition-all duration-300 shadow-[0_0_14px_var(--brand-accent,#a855f7)]"
                          style={{
                            backgroundColor: "var(--brand-accent, #a855f7)",
                          }}
                        />
                      ) : (
                        <span className="size-1.5 rounded-full bg-zinc-600 group-hover:bg-purple-400 group-hover:scale-125 transition-all" />
                      )}
                    </div>

                    {/* Card Topic Text & Details */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-sans tracking-tight transition-all duration-300 ${
                            isActive
                              ? "text-2xl sm:text-3xl md:text-4xl font-extrabold text-white"
                              : "text-lg sm:text-xl font-medium text-zinc-400 group-hover:text-purple-200"
                          }`}
                          style={
                            isActive
                              ? {
                                  textShadow:
                                    "0 0 25px rgba(168, 85, 247, 0.45)",
                                }
                              : undefined
                          }
                        >
                          {cardItem.title}
                        </span>

                        {/* Punchy Stage Badge */}
                        {isActive && (
                          <span
                            className="font-mono text-[10px] tracking-widest uppercase font-bold px-2 py-0.5 rounded-full border bg-purple-950/80 border-purple-400/50 text-purple-200 animate-[fadeIn_0.3s_ease-out]"
                            style={{
                              boxShadow: "0 0 12px rgba(168, 85, 247, 0.35)",
                            }}
                          >
                            {cardItem.oneWord}
                          </span>
                        )}
                      </div>

                      {/* Active Subtitle Readout */}
                      {isActive && (
                        <span className="font-mono text-xs sm:text-sm text-purple-300/80 mt-1 animate-[fadeIn_0.35s_ease-out]">
                          {cardItem.subtitle} • {cardItem.tag}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Arc HUD Progress */}
          <div className="pt-4 border-t border-purple-500/20 mt-4 flex items-center justify-between text-xs font-mono text-purple-300/70">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-purple-400 animate-ping" />
              <span>Means & Methods Active Scrollytelling</span>
            </span>
            <span className="font-bold text-white">
              {Math.round(((activeIndex + 1) / totalCards) * 100)}% Complete
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // If pin={true}, wrap in a tall track so page scroll triggers the deck pin
  if (pin) {
    return (
      <div
        ref={pinTrackRef}
        style={{ minHeight: pinHeight }}
        className="relative w-full"
      >
        <div className="sticky top-24 w-full z-20">{deckNode}</div>
      </div>
    );
  }

  return deckNode;
}

export default StackedCardsScroll;
