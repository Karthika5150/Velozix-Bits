import { IBM_Plex_Mono, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import NavComponent from "@/components/layout/topnav";
import SmoothScrollProvider from "@/components/ui/scrollsmoothprovider";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Velozix Bits - High-Velocity 60FPS React UI Library",
  description:
    "Hardware-accelerated components, interactive ASCII art, 20x20 snake grid, liquid blob heroes, and 3D stacked cards for React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plexMono.variable} ${inter.variable} antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-[#030712] text-white selection:bg-emerald-500/20 selection:text-emerald-300 font-mono">
        <SmoothScrollProvider>
          <NavComponent />
          <div className="flex-1 mt-14">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
