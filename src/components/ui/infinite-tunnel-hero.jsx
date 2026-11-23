'use client'
import React, { useEffect, useRef } from "react";

import gsap from "gsap";

const SHAPES = [

  [[523.9, 887.7], [391.2, 887.7], [520.1, 824.0], [624.3, 824.0]],

  [[137.3, 845.2], [0.0, 886.1], [0.0, 923.1], [24.2, 923.1], [250.9, 845.2]],

  [[402.1, 861.6], [281.1, 861.6], [422.9, 807.6], [519.7, 807.6]],

  [[678.9, 848.9], [563.5, 848.9], [645.6, 799.3], [738.8, 799.3]],

  [[747.6, 1053.5], [310.7, 1053.5], [633.0, 834.2], [862.7, 834.2]],

  [[0.0, 992.0], [0.0, 1080.0], [180.8, 1080.0], [326.5, 992.0]],

  [[376.6, 843.5], [0.0, 998.4], [0.0, 1028.3], [418.6, 843.5]],

  [[760.4, 843.5], [802.4, 843.5], [864.4, 760.2], [836.3, 760.2]],

  [[372.6, 795.5], [0.0, 918.8], [0.0, 931.1], [19.4, 931.1], [406.6, 795.5]],

  [[1364.5, 862.3], [1664.8, 1080.0], [1746.1, 1080.0], [1409.6, 862.3]],

  [[108.2, 908.8], [0.0, 947.8], [0.0, 1005.5], [231.4, 1005.5], [408.5, 908.8]],

  [[975.2, 878.9], [703.3, 878.9], [806.5, 775.5], [980.7, 775.5]],

  [[1064.8, 804.3], [940.8, 804.3], [950.9, 760.9], [1049.7, 760.9]],

  [[1261.3, 803.3], [1138.0, 803.3], [1108.0, 760.2], [1206.3, 760.2]],

  [[1410.6, 817.1], [1307.3, 817.1], [1239.7, 768.9], [1321.0, 768.9]],

  [[1368.7, 804.3], [1271.2, 804.3], [1214.0, 760.9], [1291.6, 760.9]],

  [[1459.5, 785.9], [1370.5, 785.9], [1320.3, 760.2], [1397.6, 760.2]],

  [[1564.7, 844.8], [1508.1, 844.8], [1379.6, 781.8], [1422.2, 781.8]],

  [[475.7, 959.8], [308.0, 1080.0], [531.4, 1080.0], [644.2, 959.8]],

  [[480.3, 826.2], [372.8, 826.2], [508.7, 774.5], [592.5, 774.5]],

  [[509.7, 803.3], [412.7, 803.3], [530.0, 760.2], [607.3, 760.2]],

  [[377.9, 811.7], [249.6, 811.7], [422.5, 760.2], [520.9, 760.2]],

  [[783.4, 953.1], [710.7, 1080.0], [995.0, 1080.0], [993.8, 953.1]],

  [[1070.8, 1011.5], [872.1, 1011.5], [906.5, 889.3], [1047.4, 889.3]],

  [[1116.1, 951.4], [1161.0, 1080.0], [1472.5, 1080.0], [1345.7, 951.4]],

  [[1576.9, 1040.7], [1290.5, 1040.7], [1199.0, 903.7], [1398.1, 903.7]],

  [[707.4, 795.8], [576.9, 795.8], [645.7, 761.7], [754.5, 761.7]],

  [[1186.3, 925.9], [1028.1, 925.9], [1013.7, 797.9], [1111.5, 797.9]],

  [[1477.3, 886.1], [1187.3, 886.1], [1134.9, 807.5], [1347.5, 807.5]],

  [[0.0, 959.8], [0.0, 968.2], [21.8, 959.8]],

  [[1234.9, 864.1], [1065.4, 864.1], [1056.5, 831.6], [1205.8, 831.6]],

  [[599.2, 806.7], [465.3, 806.7], [515.9, 785.9], [636.9, 785.9]],

  [[1291.4, 909.8], [1317.9, 909.8], [1296.8, 889.3], [1272.0, 889.3]],

  [[1059.7, 1054.2], [1063.5, 1080.0], [1104.2, 1080.0], [1098.2, 1054.2]],

  [[1504.4, 1041.6], [1548.3, 1080.0], [1588.9, 1080.0], [1541.9, 1041.6]],

  [[1081.7, 781.1], [1097.5, 781.1], [1093.2, 773.6], [1078.1, 773.6]],

  [[1349.6, 817.1], [1368.4, 817.1], [1350.8, 806.6], [1332.9, 806.6]],

  [[898.3, 766.6], [912.8, 766.6], [915.7, 760.2], [901.6, 760.2]],

  [[528.7, 827.3], [548.4, 827.3], [569.8, 815.9], [551.1, 815.9]],

  [[764.6, 781.1], [780.4, 781.1], [788.7, 773.6], [773.5, 773.6]],

  [[338.1, 965.3], [369.3, 965.3], [415.7, 937.3], [386.9, 937.3]],

  [[174.8, 897.3], [200.3, 897.3], [249.3, 878.3], [225.4, 878.3]],

  [[168.2, 840.8], [188.9, 840.8], [229.9, 828.0], [210.2, 828.0]],

  [[699.4, 844.8], [720.5, 844.8], [734.6, 831.6], [714.5, 831.6]],

  [[1672.0, 900.6], [1533.5, 900.6], [1412.8, 831.8], [1520.5, 831.8]],

  [[1524.4, 876.0], [1906.8, 1080.0], [1920.0, 1080.0], [1920.0, 920.8], [1793.6, 876.0]],

  [[1905.9, 903.7], [1920.0, 908.5], [1920.0, 903.7]],

  [[1744.5, 892.8], [1794.7, 892.8], [1496.8, 781.1], [1465.2, 781.1]],

  [[1495.6, 800.5], [1844.3, 945.0], [1920.0, 945.0], [1920.0, 867.9], [1693.5, 800.5]],

  [[1712.7, 817.1], [1609.4, 817.1], [1477.3, 768.9], [1558.6, 768.9]],

  [[1471.7, 807.7], [1489.7, 807.7], [1467.4, 798.0], [1450.2, 798.0]],

  [[1677.6, 894.7], [1702.8, 894.7], [1659.0, 876.0], [1635.3, 876.0]],

];



const LOOP_SECONDS = 8 / 1.05; // it's denote speed of that loop rectangle

const GAP = 120; // top & bottom glow between gap

const SHAPE_COPIES = 4; // each shape how many time venu nu copy pottu irukkom

const PARTICLE_COUNT = 300; // otal particles count

const GLOW_ON = true; // rectangle animation starting place la irukkura gradient venum aa venaam aanu decide panndrathu vena na (false) podanum

const SIDE_STEP = 600;



const W = 1920;

const H = 1080;

const VX = 960; // glow gradient oda end point

const VY = 540; // loop rectangle oda end point

const PINK = "#FF52EF";

const BG = "#1F0038";

// Horizontal grid lines (bottom only)

const GRID_Y = [

  760.234, 761.142, 763.949, 768.853, 776.024, 785.614, 797.775, 812.701,

  830.564, 851.494, 875.708, 903.334, 934.568, 969.56, 1008.46, 1051.49,

];

const GRID_Y_EXIT = 1100; //gridbottom animation screen vittu veliya poga y angle ku set panna edn point

const RADIAL_X = Array.from({ length: 12 }, (_, i) => 126.298 + i * 151.6); //line animation start x angle 151.5

const RADIAL_Y0 = 760.234;  //line animation y angle start point

const BOTTOM_EDGE = 560.234; // bottom la glow graident aa set panndra

const TOP_EDGE = H - BOTTOM_EDGE; // glow line ya top la set panndra

/* ---------- helpers ---------- */

const mirrorY = (y) => H - y; //y namakku vara value va animation oda height la irunthu set panndrom

const toPoints = (pts, mirror) =>

  pts.map(([x, y]) => `${x},${mirror ? mirrorY(y) : y}`).join(" "); //mirror true /false aa irukkuratha poruthu top and bottom rectangle aa decide pannum

const yAt = (u) => {

  const ys = [GRID_Y[0], ...GRID_Y, GRID_Y_EXIT]; //ys denotes collect grid positions

  // GRID_Y[0], ...GRID_Y, GRID_Y_EXIT  first grid position , exsiting all grid postion,last exit position of the rectangle

  const i = Math.max(0, Math.min(ys.length - 2, Math.floor(u + 1))); //current position ku current array index aa find panndratjhu

  // Math.max(0, Math.min(ys.length - 2, Math.floor(u + 1)))  ys.length na array la evlo elements iruko return pannum, athua irunthu minus(-) 2, inga yen -2 na next line position aa access panna
  // ipo u+1  oda value decimal aa vantha atha whole digit aa convert panna math.floor use pannrom  math .min na max index aa onctrol pannu math.max(0,...) na negative aa index pogama protect pannum



  const t = u + 1 - i; //rendu grid positin between progress calculate panndrathu , here t define current intervel al evlo distance travel panndrom nu selected interval index aa find panndathukku
  // minus i tharom and also current i index find panni substract panndrom

  return ys[i] + (ys[i + 1] - ys[i]) * t; //return final y coordinate value

};

const radialEnd = (x0) => {

  const k = (H - RADIAL_Y0) / (RADIAL_Y0 - VY);

  return VX + (x0 - VX) * (1 + k);

};

// seeded random => every render same particles (no flicker)

const mulberry32 = (a) => () => {

  a |= 0;

  a = (a + 0x6d2b79f5) | 0;

  let t = Math.imul(a ^ (a >>> 15), 1 | a);

  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;

  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;

};

const rand = mulberry32(7);

const PARTICLE_COLORS = ["#FFFFFF", "#FFB8F8", PINK, "#FF8DF4"];

const PARTICLES = Array.from({ length: PARTICLE_COUNT }, () => ({

  x: -W * ((3 - 1) / 2) - 200 + rand() * (W * 3 + 400), // -200 + rand() * (W + 400)

  dy: 180 + rand() * 360, // center-la irundhu distance

  r: 0.8 + rand() * 1.8,

  speed: 1 + Math.floor(rand() * 2), // 1,2,3 (integer => seamless loop)

  off: rand(),

  color: PARTICLE_COLORS[Math.floor(rand() * PARTICLE_COLORS.length)],

}));

// perspective: small -> big, fade in/out

const flyState = (q) => {

  const s = 0.45 * Math.pow(4.2, q);

  const o = Math.max(0, Math.min(1, q / 0.15, (1 - q) / 0.2));

  return {

    o,

    tr: `translate(${VX} ${VY}) scale(${s * 1.2} ${s}) translate(${-VX} ${-VY})`,

  };

};

export function InfiniteTunnelHero({
  color = PINK,
  backgroundColor = BG,
  speed = 1,
  className = "",
  children,
}) {

  const rootRef = useRef(null);

  const hLines = useRef([]);

  const shapesBottom = useRef([]);

  const shapesTop = useRef([]);

  const dotsBottom = useRef([]);

  const dotsTop = useRef([]);

  useEffect(() => {

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const state = { p: 0 }; // 0 -> 1 loop progress

    const apply = (el, tr, o) => {

      if (!el) return;

      el.setAttribute("transform", tr);

      el.setAttribute("opacity", String(o));

    };

    const render = () => {

      const p = state.p;

      /* 1) bottom horizontal grid lines */

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

      /* 2) shapes */

      for (let i = 0; i < SHAPES.length; i++) {

        for (let c = 0; c < SHAPE_COPIES; c++) {

          const idx = i * SHAPE_COPIES + c;

          const base = i * 0.618034 + c / SHAPE_COPIES;

          const dx = (c - (SHAPE_COPIES - 1) / 2) * SIDE_STEP;

          const b = flyState((p + base) % 1, dx);

          const t = flyState((p + base + 0.31) % 1, -dx); // top konjam different timing

          apply(shapesBottom.current[idx], b.tr, b.o);

          apply(shapesTop.current[idx], t.tr, t.o);

        }

      }

      /* 3) particles */

      for (let i = 0; i < PARTICLES.length; i++) {

        const d = PARTICLES[i];

        const b = flyState((p * d.speed + d.off) % 1);

        const t = flyState((p * d.speed + d.off + 0.37) % 1);

        apply(dotsBottom.current[i], b.tr, b.o * 0.9);

        apply(dotsTop.current[i], t.tr, t.o * 0.9);

      }

    };

    // reduced motion: static frame mattum

    if (reduce) {

      state.p = 0.3;

      render();

      return;

    }

    const ctx = gsap.context(() => {

      gsap.to(state, {

        p: 1,

        duration: LOOP_SECONDS / Math.max(0.1, speed),

        ease: "none",

        repeat: -1,

        onUpdate: render,

      });

      // glow lightah breathe aagum

      gsap.to(".tunnel-glow", {

        opacity: 0.65,

        duration: 1,

        ease: "sine.inOut",

        yoyo: true,

        repeat: -1,

      });

    }, rootRef);

    render();

    return () => ctx.revert();

  }, [speed]);

  const shapeCount = SHAPES.length * SHAPE_COPIES;

  return (
    <div

      className={`relative h-screen w-full overflow-hidden  ${className}`}

      style={{ background: backgroundColor }}
    >
      <svg

        ref={rootRef}

        className="pointer-events-none absolute inset-0 h-full w-full"

        viewBox={`0 0 ${W} ${H}`}

        preserveAspectRatio="xMidYMid slice"

        aria-hidden="true"
      >
        <defs>

          {/* bottom shapes: center kitta light, edge la pink */}
          <linearGradient id="slabBottom" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor={color} stopOpacity="0.9" />
            <stop offset="1" stopColor={color} stopOpacity="0.35" />
          </linearGradient>

          {/* top shapes: flipped */}
          <linearGradient id="slabTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={color} stopOpacity="0.9" />
            <stop offset="1" stopColor={color} stopOpacity="0.35" />
          </linearGradient>

          {/* grid line color: glow kitta white-pink -> pink -> fade (keela pogum bodhu) */}
          <linearGradient

            id="gridStroke"

            gradientUnits="userSpaceOnUse"

            x1="0"

            y1={BOTTOM_EDGE}

            x2="0"

            y2="1100"
          >
            <stop offset="0" stopColor={color} stopOpacity="1" />
            <stop offset="0.08" stopColor={color} stopOpacity="0.95" />
            <stop offset="0.2" stopColor={color} stopOpacity="0.8" />
            <stop offset="0.45" stopColor={color} stopOpacity="0.9" />
            <stop offset="1" stopColor={color} stopOpacity="0.45" />
          </linearGradient>

          {/* grid left/right edge fade (designer SVG mask gradient) */}
          <linearGradient

            id="gridFade"

            gradientUnits="userSpaceOnUse"

            x1="-480"

            y1="0"

            x2="2400"

            y2="0"
          >
            <stop offset="0.02" stopColor="#292929" />
            <stop offset="0.05" stopColor="#565656" />
            <stop offset="0.09" stopColor="#7E7E7E" />
            <stop offset="0.12" stopColor="#A1A1A1" />
            <stop offset="0.2" stopColor="#D6D6D6" />
            <stop offset="0.3" stopColor="#F5F5F5" />
            <stop offset="0.54" stopColor="#FFFFFF" />
            <stop offset="0.74" stopColor="#E2E2E2" />
            <stop offset="0.88" stopColor="#8B8B8B" />
            <stop offset="0.96" stopColor="#323232" />
          </linearGradient>
          <mask

            id="gridMask"

            maskUnits="userSpaceOnUse"

            x="-480"

            y="0"

            width="2880"

            height="1300"
          >
            <rect x="-480" y="0" width="2880" height="1300" fill="url(#gridFade)" />
          </mask>

          {/* white -> pink horizontal glow (designer SVG radial gradient) */}
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0.02" stopColor={color} stopOpacity="1" />
            <stop offset="0.07" stopColor={color} stopOpacity="0.95" />
            <stop offset="0.19" stopColor={color} stopOpacity="0.8" />
            <stop offset="0.45" stopColor={color} stopOpacity="0.45" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* bottom */}
        <g transform={`translate(0 ${GAP})`}>

          {GLOW_ON && (
            <g className="tunnel-glow">
              <rect

                x={VX - 1400}

                y={BOTTOM_EDGE + 60}

                width={2800}

                height={60}

                fill="url(#glow)"

              />
              <rect

                x={VX - 1000}

                y={BOTTOM_EDGE - 110}

                width={2000}

                height={220}

                fill="url(#glow)"

                opacity="0.22"

              />
            </g>

          )}

          {/* grid - bottom mattum */}
          <g stroke="url(#gridStroke)" strokeWidth="0.8" mask="url(#gridMask)">

            {RADIAL_X.map((x) => (
              <line key={`rb-${x}`} x1={x} y1={RADIAL_Y0} x2={radialEnd(x)} y2={H} />

            ))}

            {Array.from({ length: GRID_Y.length + 1 }).map((_, i) => (
              <line

                key={`hb-${i}`}

                ref={(el) => {

                  hLines.current[i] = el;

                }}

                x1={-480}

                x2={2400}

                y1={GRID_Y[0]}

                y2={GRID_Y[0]}

                opacity="0"

              />

            ))}
          </g>

          <g style={{ mixBlendMode: "screen" }}>

            {Array.from({ length: shapeCount }).map((_, k) => (
              <polygon

                key={`sb-${k}`}

                ref={(el) => {

                  shapesBottom.current[k] = el;

                }}

                points={toPoints(SHAPES[Math.floor(k / SHAPE_COPIES)], false)}

                fill="url(#slabBottom)"

                stroke={color}

                strokeWidth="1.5"

                vectorEffect="non-scaling-stroke"

                opacity="0"

              />

            ))}

            {PARTICLES.map((d, i) => (
              <circle

                key={`pb-${i}`}

                ref={(el) => {

                  dotsBottom.current[i] = el;

                }}

                cx={d.x}

                cy={VY + d.dy}

                r={d.r}

                fill={d.color === "#FFFFFF" ? "#FFFFFF" : color}

                opacity="0"

              />

            ))}
          </g>
        </g>

        {/* top */}
        <g transform={`translate(0 ${-GAP})`}>

          {GLOW_ON && (
            <g className="tunnel-glow">
              <rect

                x={VX - 1400}

                y={TOP_EDGE - 130}

                width={2800}

                height={60}

                fill="url(#glow)"

              />
              <rect

                x={VX - 1000}

                y={TOP_EDGE - 110}  //110

                width={2000}

                height={220}

                fill="url(#glow)"

                opacity="0.22"

              />
            </g>

          )}

          <g style={{ mixBlendMode: "screen" }}>

            {Array.from({ length: shapeCount }).map((_, k) => (
              <polygon

                key={`st-${k}`}

                ref={(el) => {

                  shapesTop.current[k] = el;

                }}

                points={toPoints(SHAPES[Math.floor(k / SHAPE_COPIES)], true)}

                fill="url(#slabTop)"

                stroke={color}

                strokeWidth="1.5"

                vectorEffect="non-scaling-stroke"

                opacity="0"

              />

            ))}

            {PARTICLES.map((d, i) => (
              <circle

                key={`pt-${i}`}

                ref={(el) => {

                  dotsTop.current[i] = el;

                }}

                cx={W - d.x}

                cy={VY - d.dy}

                r={d.r}

                fill={d.color === "#FFFFFF" ? "#FFFFFF" : color}

                opacity="0"

              />

            ))}
          </g>
        </g>
      </svg>

      {/* page content mela */}
      <div className="relative z-10  flex h-full w-full items-center justify-center">

        {children}
      </div>
    </div>

  );

}
