export const SideNavData = [
    {
        id: 0,
        title: 'GETTING STARTED',
        items: [
            {
                id: 0,
                name: 'Installation',
                href: '/installation'
            },
            {
                id: 1,
                name: 'Frameworks',
                href: '/installation/framework'
            },
        ]
    },
    {
        id: 1,
        title: 'HERO & BACKGROUNDS',
        items: [
            {
                id: 0,
                name: 'Gooey Grid Cursor',
                href: '/installation/components/lorenzo-grid-cursor',
                badge: 'Trending',
            },
            {
                id: 1,
                name: 'Liquid Blob Hero',
                href: '/installation/components/blob-banner',
                badge: 'Popular',
            },
            {
                id: 2,
                name: 'Interactive ASCII Face',
                href: '/installation/components/interactive-ascii-face',
                badge: 'Physics',
            },
            {
                id: 3,
                name: 'Infinite Tunnel Hero',
                href: '/installation/components/infinite-tunnel',
            },
        ]
    },
    {
        id: 2,
        title: 'SCROLL & MARQUEE',
        items: [
            {
                id: 0,
                name: 'Stacked Cards 3D',
                href: '/installation/components/stacked-cards',
                badge: 'New',
            },
            {
                id: 1,
                name: 'Image Scroll',
                href: '/installation/components/image-scroll',
                badge: '60fps',
            },
        ]
    },
    {
        id: 3,
        title: 'CAROUSELS',
        items: [
            {
                id: 0,
                name: 'All Carousels',
                href: '/installation/components/image-scroll',
                badge: 'Planned',
            },
        ]
    },
]


export const IntroductionData = [
    {
        id: 0,
        title: 'Reusable Components',
        content: 'Battle-tested UI elements ready to drop directly into your React & Next.js projects.',
        badge: 'Zero Config',
        icon: 'Layers'
    },
    {
        id: 1,
        title: 'Hardware-Accelerated 60FPS',
        content: 'Silky smooth animations powered by WebGL, Canvas, and GPU compositing.',
        badge: 'Performant',
        icon: 'Sparkles'
    },
    {
        id: 2,
        title: 'Developer Experience First',
        content: 'Typed props, comprehensive autocomplete, and copy-paste ready documentation.',
        badge: 'TypeScript',
        icon: 'Code2'
    },
    {
        id: 3,
        title: 'Theme & Style Adaptive',
        content: 'Fully customizable colors, durations, easing, and CSS variables tailored to your brand.',
        badge: 'Tailwind v4',
        icon: 'Palette'
    }
];

export const ArchitectureData = [
    {
        id: 0,
        title: 'Zero Runtime Overhead',
        content: 'Components are tree-shakeable. You only bundle what you import into your client bundles.',
        tag: 'CORE ENGINE'
    },
    {
        id: 1,
        title: 'Self-Contained Embedded CSS',
        content: 'Keyframes and base layout rules are auto-injected so animations work immediately without missing stylesheet bugs.',
        tag: 'STYLING'
    },
    {
        id: 2,
        title: 'Physics & Spring Math',
        content: 'Natural damping, particle dispersion, and cursor interaction algorithms calculated in performant requestAnimationFrame loops.',
        tag: 'PHYSICS'
    },
    {
        id: 3,
        title: 'Server & Client Compatibility',
        content: 'Built from the ground up for Next.js App Router (React 19) and traditional React 18 / Vite applications.',
        tag: 'COMPATIBILITY'
    }
];

export const PrerequisitesData = [
    {
        id: 0,
        title: 'React',
        status: 'Required',
        content: 'React 18.0.0 or React 19.0.0+ is required to render Adaptive UI components.',
    },
    {
        id: 1,
        title: 'Node.js',
        status: 'Required',
        content: 'Node.js v18.0.0 or higher is required for package managers and bundling.',
    },
    {
        id: 2,
        title: 'Tailwind CSS',
        status: 'Recommended',
        content: 'Components integrate cleanly with Tailwind CSS v3 or Tailwind CSS v4.',
    },
    {
        id: 3,
        title: 'Next.js / Vite',
        status: 'Supported',
        content: 'Works out of the box in Next.js App Router, Vite, Astro, Remix, and Create React App.',
    },
];

export const frameWorkDaa = [
    {
        id: 0,
        title: 'Next.js (App Router)',
        status: 'available',
        steps: [
            {
                id: 0,
                step: 1,
                topic: 'Install Velozix Bits package',
                content: 'npm install velozix-bits'
            },
            {
                id: 1,
                step: 2,
                topic: 'Import component in client file',
                content: 'import { StackedCardsScroll, InteractiveSnakeGrid } from "velozix-bits";'
            },
            {
                id: 2,
                step: 3,
                topic: 'Add "use client" directive to your page',
                content: '"use client";\n\nexport default function Page() {\n  return <ImageScroll />;\n}'
            },
        ]
    },
    {
        id: 1,
        title: 'Vite (React + Tailwind)',
        status: 'available',
        steps: [
            {
                id: 0,
                step: 1,
                topic: 'Install package in Vite app',
                content: 'npm install velozix-bits'
            },
            {
                id: 1,
                step: 2,
                topic: 'Import component anywhere in App.jsx',
                content: 'import { BlobMorphHero } from "velozix-bits";'
            },
            {
                id: 2,
                step: 3,
                topic: 'Render directly with custom props',
                content: 'function App() {\n  return <BlobMorphHero imageScale={0.85} />;\n}'
            },
        ]
    },
]
