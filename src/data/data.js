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
                name: 'Frame work',
                href: '/installation/framework'
            },
        ]
    },
    {
        id: 1,
        title: 'COMPONENTS',
        items: [
            {
                id: 0,
                name: 'Liquid Blob Hero',
                href: '/installation/components/blob-banner'
            },
            {
                id: 1,
                name: 'Interactive ASCII Face',
                href: '/installation/components/interactive-ascii-face'
            },
            {
                id: 2,
                name: 'Infinite Tunnel Hero',
                href: '/installation/components/infinite-tunnel'
            },
            {
                id: 3,
                name: 'Image Scroll',
                href: '/installation/components/image-scroll'
            },
        ]
    },
]


export const IntroductionData = [
    { id: 0, title: 'Reusable Components', content: 'Ready-to-use UI elements' },
    { id: 1, title: 'Smooth Animations', content: 'Interactice motion effects' },
    { id: 2, title: 'Developers Friendly', content: 'Simple Implementation.' },
    { id: 3, title: 'Customizable', content: 'Adapt to your design' }
]

export const PrerequisitesData = [
    {
        id: 0,
        title: 'React',
        status: 'Required',
        content: 'A React project is required to use Adaptive UI Components',
    },
    {
        id: 1,
        title: 'Node.js',
        status: 'Required',
        content: 'Required to run your project and package manager commands . LTS version recommended.',
    },
    {
        id: 2,
        title: 'Tailwind CSS',
        status: 'Required',
        content: 'Required only for componenents that use Tailwind CSS styling',
    },
    {
        id: 3,
        title: 'Next.js',
        status: 'Optional',
        content: 'You can use Adaptive UI with a Next.js application too. App Router supported.',
    },
]

export const frameWorkDaa = [
    {
        id: 0,
        title: 'Next.js',
        status: 'available',
        steps: [
            {
                id: 0,
                step: 1,
                topic: 'Create Next.js project',
                content: 'npx create-next-app@latest my-app'
            },
            {
                id: 1,
                step: 2,
                topic: 'Navigate to your project',
                content: 'cd my-app'
            },
            {
                id: 2,
                step: 3,
                topic: 'Start development server',
                content: 'npm run dev'
            },
        ]
    },
    {
        id: 1,
        title: 'Vite',
        status: 'Coming soon',
        steps: [

        ]
    },
]
