# Adaptive UI

A collection of beautifully crafted, production-ready interactive React and Next.js animated components. Built with high-performance CSS transforms, HTML5 Canvas, GSAP, Lenis, and Motion.

---

## Installation

Install `adaptive-ui-react` and its peer dependencies in your React or Next.js project:

```bash
npm install adaptive-ui-react
```

Or with your preferred package manager:

```bash
# pnpm
pnpm add adaptive-ui-react

# yarn
yarn add adaptive-ui-react

# bun
bun add adaptive-ui-react
```

---

## Setup Styles

Import the component stylesheet once in your application root (e.g. `app/layout.jsx` or `main.jsx`):

```javascript
import "adaptive-ui-react/style.css";
```

> **Note on Styling & Tailwind CSS:**
> `adaptive-ui` works out of the box with or without Tailwind CSS. All keyframe animations, mask gradients, CSS Modules, and required utility classes are compiled into `adaptive-ui/style.css`. If your project already uses Tailwind CSS (v3 or v4), you can freely pass custom `className` props to override or extend styles.

---

## Components & Usage Examples

### 1. ImageScroll (Infinite Image Scroll)

An adaptive, seamless infinite scrolling track for image galleries and cards. Supports vertical columns, horizontal rows, organic speed staggering, and gradient edge masks.

```jsx
import { ImageScroll } from "adaptive-ui-react";

export default function GalleryPage() {
  return (
    <div className="w-full">
      {/* Vertical 3-Column Scrolling */}
      <ImageScroll
        direction="vertical"
        columns={3}
        speed={1}
        height="600px"
        blurEdges={true}
        pauseOnHover={true}
      />

      {/* Horizontal Multi-Row Scrolling */}
      <ImageScroll
        direction="horizontal"
        rows={3}
        speed={1.2}
        blurEdges={true}
      />
    </div>
  );
}
```

#### Custom Images
```jsx
const myImages = [
  { id: 1, src: "https://example.com/art1.jpg", title: "Artwork 1", category: "DESIGN", accent: "#6366f1" },
  { id: 2, src: "https://example.com/art2.jpg", title: "Artwork 2", category: "CYBER", accent: "#ec4899" },
];

<ImageScroll images={myImages} columns={3} />
```

---

### 2. InteractiveAsciiFace

Interactive ASCII art portrait generator. Dynamically samples image luminance to render animated matrix-style digital rain that responds smoothly to pointer movements.

```jsx
import { InteractiveAsciiFace } from "adaptive-ui-react";

export default function AsciiDemo() {
  return (
    <div className="h-[600px] w-full">
      <InteractiveAsciiFace
        src="/path/to/portrait.png"
        color="#60ed83"
        followPointer={true}
        lineSpeed={1}
        imageClarity={1.35}
      />
    </div>
  );
}
```

---

### 3. BlobMorphHero

A high-tech hero banner combining marching-squares topographic contour lines, organic metaball simulations, dynamic HUD wireframes, and progressive image reveals.

```jsx
import { BlobMorphHero } from "adaptive-ui-react";

export default function HeroSection() {
  return (
    <div className="h-[650px] w-full">
      <BlobMorphHero
        preset="lando-f1"
        blobMode="roam"
        speed={1.0}
        showTopography={true}
        showAmbientBlobs={true}
        showHud={true}
      />
    </div>
  );
}
```

You can pass custom base and overlay images:
```jsx
<BlobMorphHero
  baseImage="/images/character-base.png"
  equippedImage="/images/character-armor.png"
  accentColor="#22d3ee"
/>
```

---

### 4. InfiniteTunnelHero

Retro-futuristic 3D perspective infinite tunnel animation driven by GSAP, featuring responsive neon perspective slabs and floating starry particles.

```jsx
import { InfiniteTunnelHero } from "adaptive-ui-react";

export default function TunnelDemo() {
  return (
    <InfiniteTunnelHero color="#FF52EF" backgroundColor="#1F0038" speed={1}>
      <div className="text-center text-white">
        <h1 className="text-5xl font-black tracking-tight">ADAPTIVE UI</h1>
        <p className="mt-2 text-zinc-300">Infinite Neon Grid Tunnel</p>
      </div>
    </InfiniteTunnelHero>
  );
}
```

---

### 5. SmoothScrollProvider

A universal Lenis smooth-scrolling provider that recalculates bounds dynamically and handles route changes seamlessly across Next.js and pure React apps.

```jsx
// Next.js App Router (app/layout.jsx)
import { SmoothScrollProvider } from "adaptive-ui-react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
```

---

## Compatibility

- **React**: React 18 & React 19
- **Next.js**: Next.js 14, 15, and 16 (App Router & Pages Router)
- **Vite / SPA**: Full compatibility with Vite, Create React App, Remix, and Astro
- **TypeScript**: First-class TypeScript declarations included (`index.d.ts`)
- **Server Components (RSC)**: All interactive components include `"use client"` directives

---

## License

MIT © Adaptive UI
