"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./infinite-tunnel-hero.module.css";

const W = 1920, H = 1080, CX = 960, CY = 540, START = 760;
const ROWS = [760, 762, 766, 772, 781, 793, 808, 826, 848, 874, 904, 938, 976, 1018, 1064];
const RADIALS = Array.from({ length: 13 }, (_, i) => 80 + i * 147);
const SLABS = ["540,900 410,900 532,834 640,834", "720,878 580,878 660,812 770,812", "1110,890 950,890 1025,820 1160,820", "1400,925 1210,925 1280,845 1440,845", "420,1000 220,1080 570,1080 660,1000", "1250,1010 1110,1080 1530,1080 1430,1010", "170,930 0,1000 0,1050 300,930", "1730,925 1920,1000 1920,1050 1620,925"];
let seed = 17;
const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const PARTICLES = Array.from({ length: 150 }, () => ({ x: -1800 + random() * 5520, d: 150 + random() * 430, r: .7 + random() * 1.8, s: .7 + Math.floor(random() * 3) * .35, o: random() }));
const fly = (p) => ({ opacity: Math.max(0, Math.min(1, p / .14, (1 - p) / .2)), transform: `translate(${CX} ${CY}) scale(${.45 * 4.2 ** p * 1.18} ${.45 * 4.2 ** p}) translate(${-CX} ${-CY})` });
const rgb = (hex) => { const value = hex.replace("#", ""); const full = value.length === 3 ? [...value].map((x) => x + x).join("") : value; return { r: parseInt(full.slice(0, 2), 16) || 255, g: parseInt(full.slice(2, 4), 16) || 82, b: parseInt(full.slice(4, 6), 16) || 239 }; };

export function InfiniteTunnelHero({ color = "#ff52ef", backgroundColor = "#1f0038", backgroundImage = "", imageOpacity = .24, speed = 1, segments = 12, className = "", label = "Animated infinite tunnel" }) {
  const lines = useRef([]), bottom = useRef([]), top = useRef([]), dotsB = useRef([]), dotsT = useRef([]);
  const uid = useId().replace(/:/g, "");
  const copies = Math.max(2, Math.min(6, Math.round(segments / 4))), count = SLABS.length * copies, tint = rgb(color);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)"); let frame = 0, start = 0;
    const set = (node, state) => { if (node) { node.setAttribute("transform", state.transform); node.setAttribute("opacity", String(state.opacity)); } };
    const draw = (time) => {
      if (!start) start = time;
      const p = media.matches ? .32 : ((time - start) / 7600 * Math.max(0, speed)) % 1;
      lines.current.forEach((line, i) => { if (!line) return; const q = i - 1 + p, base = Math.max(0, Math.min(ROWS.length - 2, Math.floor(q + 1))), mix = Math.max(0, Math.min(1, q + 1 - base)), y = ROWS[base] + (ROWS[base + 1] - ROWS[base]) * mix; line.setAttribute("y1", y); line.setAttribute("y2", y); line.setAttribute("opacity", i === 0 ? p : i === ROWS.length ? 1 - p : 1); });
      for (let i = 0; i < count; i++) { const phase = Math.floor(i / copies) * .618 + i % copies / copies; set(bottom.current[i], fly((p + phase) % 1)); set(top.current[i], fly((p + phase + .33) % 1)); }
      PARTICLES.forEach((d, i) => { set(dotsB.current[i], fly((p * d.s + d.o) % 1)); set(dotsT.current[i], fly((p * d.s + d.o + .38) % 1)); });
      if (!media.matches) frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw); return () => cancelAnimationFrame(frame);
  }, [copies, count, speed]);
  const stroke = `grid-${uid}`, glow = `glow-${uid}`, fade = `fade-${uid}`, mask = `mask-${uid}`;
  return <section className={[styles.hero, className].filter(Boolean).join(" ")} style={{ backgroundColor }}><svg className={styles.svg} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}><defs><linearGradient id={stroke} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ffedfd"/><stop offset=".2" stopColor="#ffb8f8"/><stop offset=".6" stopColor={color}/><stop offset="1" stopColor={color} stopOpacity=".35"/></linearGradient><radialGradient id={glow}><stop stopColor="#fff3fe"/><stop offset=".16" stopColor="#ffb8f8"/><stop offset=".48" stopColor={color} stopOpacity=".42"/><stop offset="1" stopColor={color} stopOpacity="0"/></radialGradient><linearGradient id={fade}><stop stopColor="black" stopOpacity="0"/><stop offset=".2" stopColor="white"/><stop offset=".8" stopColor="white"/><stop offset="1" stopColor="black" stopOpacity="0"/></linearGradient><mask id={mask}><rect width={W} height={H} fill={`url(#${fade})`}/></mask></defs>{backgroundImage && <image href={backgroundImage} width={W} height={H} preserveAspectRatio="xMidYMid slice" opacity={Math.max(0, Math.min(1, imageOpacity))}/>} {[false, true].map((mirror) => <g key={String(mirror)} transform={mirror ? `translate(0 ${H}) scale(1 -1)` : undefined}><rect x={CX - 1200} y={CY - 16} width="2400" height="66" fill={`url(#${glow})`} className={styles.glow}/><g stroke={`url(#${stroke})`} strokeWidth="1" mask={`url(#${mask})`}>{RADIALS.map((x) => <line key={x} x1={x} y1={START} x2={CX + (x - CX) * 2.7} y2={H}/>)}{Array.from({ length: ROWS.length + 1 }).map((_, i) => <line key={i} ref={(node) => { if (!mirror) lines.current[i] = node; }} x1="-340" x2="2260" y1={START} y2={START} opacity="0"/>)}</g><g style={{ mixBlendMode: "screen" }}>{Array.from({ length: count }).map((_, i) => <polygon key={i} ref={(node) => { (mirror ? top : bottom).current[i] = node; }} points={SLABS[Math.floor(i / copies)]} fill={`rgba(${tint.r},${tint.g},${tint.b},.22)`} stroke={color} strokeWidth="1.4" opacity="0"/>)}{PARTICLES.map((d, i) => <circle key={i} ref={(node) => { (mirror ? dotsT : dotsB).current[i] = node; }} cx={mirror ? W - d.x : d.x} cy={mirror ? CY - d.d : CY + d.d} r={d.r} fill={i % 3 ? color : "#fff"} opacity="0"/>)}</g></g>)}</svg><div className={styles.vignette}/></section>;
}
