"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Sparkles, Gamepad2, RotateCcw } from "lucide-react";

const GRID_COLS = 20;
const GRID_ROWS = 20;
const MAX_TRAIL_LENGTH = 16;

export function InteractiveSnakeGrid({
  accentColor = "var(--brand-accent, #a855f7)",
  className = "",
  showControls = true,
}) {
  const [trail, setTrail] = useState([]);
  const [food, setFood] = useState({ x: 14, y: 8 });
  const [score, setScore] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const decayTimerRef = useRef(null);
  const autoSnakeRef = useRef({
    x: 5,
    y: 10,
    dx: 1,
    dy: 0,
    body: [
      { x: 5, y: 10 },
      { x: 4, y: 10 },
      { x: 3, y: 10 },
    ],
  });

  // Spawn random food
  const spawnFood = useCallback(() => {
    setFood({
      x: Math.floor(Math.random() * (GRID_COLS - 4)) + 2,
      y: Math.floor(Math.random() * (GRID_ROWS - 4)) + 2,
    });
  }, []);

  // Handle cell mouse enter
  const handleCellHover = useCallback(
    (col, row) => {
      setIsHovered(true);

      setTrail((prev) => {
        // Prevent duplicate consecutive entries
        if (prev.length > 0 && prev[0].x === col && prev[0].y === row) {
          return prev;
        }

        const newTrail = [{ x: col, y: row, id: `${col}-${row}-${Date.now()}` }, ...prev];
        if (newTrail.length > MAX_TRAIL_LENGTH) {
          newTrail.pop();
        }
        return newTrail;
      });

      // Check if food eaten by cursor
      if (col === food.x && row === food.y) {
        setScore((s) => s + 10);
        spawnFood();
      }
    },
    [food, spawnFood]
  );

  // Smooth trail decay loop when mouse stops
  useEffect(() => {
    decayTimerRef.current = setInterval(() => {
      setTrail((prev) => {
        if (prev.length === 0) return prev;
        // Pop last tail segment to fade away like snake
        return prev.slice(0, prev.length - 1);
      });
    }, 75);

    return () => clearInterval(decayTimerRef.current);
  }, []);

  // Autonomous idle snake crawl when not hovered
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const snake = autoSnakeRef.current;
      // Change direction towards food occasionally
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

      // Wrap around grid boundaries
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

  // Convert trail into quick lookup map: key -> { index, ratio }
  const trailMap = React.useMemo(() => {
    const map = new Map();
    trail.forEach((pos, idx) => {
      const key = `${pos.x}-${pos.y}`;
      if (!map.has(key)) {
        map.set(key, {
          index: idx,
          ratio: 1 - idx / Math.max(trail.length, 1),
          isHead: idx === 0,
        });
      }
    });
    return map;
  }, [trail]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl border border-white/10 bg-[#060913]/90 backdrop-blur-xl shadow-2xl select-none ${className}`}
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl blur-3xl opacity-20 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor}, transparent 70%)`,
        }}
      />

      {/* Top Header Bar */}
      {showControls && (
        <div className="relative z-10 w-full flex items-center justify-between pb-3 mb-3 border-b border-white/8 text-xs font-mono">
          <div className="flex items-center gap-2 text-white">
            <Gamepad2 size={15} style={{ color: accentColor }} />
            <span className="font-semibold tracking-wide">20×20 Interactive Snake Grid</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-zinc-400">
              Score:{" "}
              <strong className="text-white font-mono" style={{ color: accentColor }}>
                {score}
              </strong>
            </span>
            <span className="text-[10px] text-zinc-500 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5">
              {isHovered ? "Mouse Active" : "Auto Wandering"}
            </span>
          </div>
        </div>
      )}

      {/* 20x20 Grid Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
          aspectRatio: "1 / 1",
        }}
        className="relative z-10 w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] gap-[3px] p-2 rounded-xl bg-black/60 border border-white/8 shadow-inner"
      >
        {Array.from({ length: GRID_ROWS }).map((_, r) =>
          Array.from({ length: GRID_COLS }).map((_, c) => {
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

            return (
              <div
                key={key}
                onMouseEnter={() => handleCellHover(c, r)}
                style={{
                  backgroundColor: trailInfo
                    ? trailInfo.isHead
                      ? accentColor
                      : `${accentColor}${Math.floor(trailInfo.ratio * 255)
                          .toString(16)
                          .padStart(2, "0")}`
                    : isFood
                    ? "#ffffff"
                    : undefined,
                  transform: `scale(${scale})`,
                  boxShadow: shadow,
                  borderColor: trailInfo?.isHead ? accentColor : undefined,
                  transition: "transform 0.12s ease-out, background-color 0.15s ease",
                }}
                className={`w-full h-full rounded-[4px] border ${
                  trailInfo ? "border-transparent" : cellBorder
                } ${!trailInfo && !isFood ? cellBg : ""} ${
                  isFood ? "animate-pulse shadow-[0_0_12px_#ffffff]" : ""
                } cursor-crosshair`}
              />
            );
          })
        )}
      </div>

      {/* Bottom Hint */}
      {showControls && (
        <div className="relative z-10 mt-3 text-[11px] font-mono text-zinc-400 flex items-center justify-between w-full">
          <span>Move mouse across squares to control the worm trail</span>
          <button
            type="button"
            onClick={() => {
              setTrail([]);
              setScore(0);
              spawnFood();
            }}
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw size={11} />
            <span>Reset</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default InteractiveSnakeGrid;
