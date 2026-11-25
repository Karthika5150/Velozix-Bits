import * as React from 'react';

/* ===================================================================== */
/* ImageScroll & InfiniteImageScroll                                     */
/* ===================================================================== */

interface ScrollImageItem {
  id?: string | number;
  src: string;
  title?: string;
  category?: string;
  accent?: string;
}

interface ImageScrollProps {
  /** Scrolling direction: "vertical" (columns) or "horizontal" (rows). Default: "vertical" */
  direction?: "vertical" | "horizontal";
  /** Array of image items or URL strings */
  images?: Array<ScrollImageItem | string>;
  /** Speed multiplier (1 = normal 1x, 2 = 2x faster, 0.5 = 0.5x slower). Default: 1 */
  speed?: number;
  /** Inverts the base scrolling direction. Default: false */
  reverse?: boolean;
  /** Pauses the scroll animation when hovering over items. Default: true */
  pauseOnHover?: boolean;
  /** Number of vertical tracks/columns. Default: 3 */
  columns?: number;
  /** Number of horizontal tracks/rows. Default: 3 */
  rows?: number;
  /** Alternates scroll directions of adjacent columns/rows. Default: true */
  staggerDirection?: boolean;
  /** Gap between cards in pixels. Default: 18 */
  gap?: number;
  /** Applies soft gradient fade masks to edges. Default: true */
  blurEdges?: boolean;
  /** Height of container in vertical mode. Default: "560px" */
  height?: string;
  /** Applies 3D perspective tilt. Default: false */
  tilt?: boolean;
  /** Card width override */
  cardWidth?: string;
  /** Card height override */
  cardHeight?: string;
  /** Custom render function for card items */
  renderItem?: (item: ScrollImageItem | string, index: number) => React.ReactNode;
  /** Callback fired when a card is clicked */
  onCardClick?: (item: ScrollImageItem | string) => void;
  /** Additional CSS class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

declare const DEFAULT_SCROLL_IMAGES: ScrollImageItem[];
declare const ImageScroll: React.FC<ImageScrollProps>;
declare const InfiniteImageScroll: React.FC<ImageScrollProps>;

/* ===================================================================== */
/* InteractiveAsciiFace                                                  */
/* ===================================================================== */

interface InteractiveAsciiFaceProps {
  /** 3D ASCII Object model: "ant" (3D Cyber Ant), "torus-knot" (Canvas UI Knot), "crystal", "drone", "monolith", "duck", "face", "bolt", or "logo". Default: "ant" */
  model?: "ant" | "torus-knot" | "crystal" | "drone" | "monolith" | "duck" | "face" | "bolt" | "logo" | string;
  /** Source image URL, 3D model (.glb/.gltf) URL, File, or Blob */
  src?: string | Blob | File;
  /** Whether to tint characters with the 3D scene colors (e.g. cyber armor or yellow duck). Default: true */
  colored?: boolean;
  /** Alt text for accessibility. Default: "3D ASCII Object simulation" */
  alt?: string;
  /** Whether the object shifts interactively on pointer move. Default: true */
  followPointer?: boolean;
  /** Whether the 3D model automatically rotates when not dragging. Default: true */
  autoRotate?: boolean;
  /** Maximum pixel offset for pointer parallax. Default: 6 */
  maxOffset?: number;
  /** Rendering mode: "face" (pure 3D ASCII Object), "face-rain" (3D face with matrix rainfall), or "rain" (digital rainfall). Default: "face" */
  mode?: "face" | "face-rain" | "rain";
  /** Hex or CSS color of the ASCII characters. Default: "#5cfc87" */
  color?: string;
  /** Matrix rainfall stream color. Earlier top letters hide progressively as the drop moves downward. Default: "#5cfc87" */
  rainColor?: string;
  /** Falling particle style: "characters" (matrix alphanumeric code) or "lines" (sleek falling cyber light streaks). Default: "characters" */
  dropType?: "characters" | "lines";
  /** Array of colors for raindrop trail gradient from head to tail. E.g. ["#ffffff", "#5cfc87", "#056526"] */
  gradient?: string[];
  /** Custom characters or letters string for falling digital rain. E.g. "01" or "MATRIX" */
  characters?: string;
  /** Size in pixels for rain drops and character glyphs. Default: 8 */
  dropSize?: number;
  /** Alias for dropSize */
  cellSize?: number;
  /** Edge contour snap contrast. Default: 2.0 */
  edgeContrast?: number;
  /** When true, renders pure matrix digital rain without the facial portrait. Default: false */
  rainOnly?: boolean;
  /** Animation speed multiplier for falling digital rain. Default: 1 */
  lineSpeed?: number;
  /** Alias for lineSpeed */
  speed?: number;
  /** Sensitivity to pointer movements. Default: 1 */
  mouseSpeed?: number;
  /** Contrast/clarity factor for face sampling. Default: 1.35 */
  imageClarity?: number;
  /** Alias for imageClarity */
  contrast?: number;
  /** Additional CSS class names */
  className?: string;
}

declare const InteractiveAsciiFace: React.FC<InteractiveAsciiFaceProps>;

/* ===================================================================== */
/* BlobMorphHero                                                         */
/* ===================================================================== */

interface PresetItem {
  id: string;
  title: string;
  accentColor: string;
  bgColor: string;
  blobColor: string;
  topoColor: string;
  wireColor: string;
  baseImage: string;
  equippedImage: string;
  headBox?: { x: number; y: number; w: number; h: number };
}

interface BlobMorphHeroProps {
  /** Visual preset identifier. Default: "lando-f1" */
  preset?: "lando-f1" | "monza-stealth" | "stride-carbon" | string;
  /** URL for the base character/subject image */
  baseImage?: string;
  /** URL for the equipped/helmet overlay image */
  equippedImage?: string;
  /** Metaball movement mode: "roam" or "flood". Default: "roam" */
  blobMode?: "roam" | "flood";
  /** Animation speed multiplier. Default: 1.0 */
  speed?: number;
  /** Whether the animation runs automatically. Default: true */
  autoPlay?: boolean;
  /** Enable mouse entry and cursor blob reveal. Default: true */
  interactive?: boolean;
  /** Corner radius in pixels applied to the subject image card. Default: 25 */
  cornerRadius?: number;
  /** Alias for cornerRadius */
  borderRadius?: number;
  /** Aspect ratio of the image card ("square", 1, or number). Default: 1 */
  aspectRatio?: number | "square" | "auto";
  /** Target percentage scale of the image card relative to banner (0.1 to 1.0). Default: 0.75 (75%) */
  imageScale?: number;
  /** Minimum scale percentage on low-width / mobile screens (0.05 to 1.0). Default: 0.30 (30%) */
  minImageScale?: number;
  /** Toggle background topographic contour lines. Default: true */
  showTopography?: boolean;
  /** Toggle ambient background blobs. Default: true */
  showAmbientBlobs?: boolean;
  /** Toggle helmet HUD wireframe overlay. Default: true */
  showHud?: boolean;
  /** Custom accent color override */
  accentColor?: string;
  /** Custom topography line color override */
  topoColor?: string;
  /** Custom container background color override */
  bgColor?: string;
  /** Custom metaball fill color override */
  blobColor?: string;
  /** Custom wireframe stroke color override */
  wireColor?: string;
  /** Display telemetry overlay (SPD, LIVERY). Default: false */
  showTelemetry?: boolean;
  /** Display big background headline. Default: false */
  showHeadline?: boolean;
  /** Automatically calculate head bounding box. Default: true */
  autoFitHead?: boolean;
  /** Stretch HUD overlay to fill box. Default: false */
  stretchHud?: boolean;
  /** Show alignment debugging opacity. Default: false */
  debugAlign?: boolean;
  /** Custom SVG markup for HUD replacement */
  customSvgMarkup?: string;
  /** Custom head bounding box fractions {x, y, w, h} */
  headBox?: { x: number; y: number; w: number; h: number };
  /** Show debug outline around head box. Default: false */
  debugHead?: boolean;
  /** Mirror the base image horizontally. Default: false */
  flipBase?: boolean;
  /** Mirror the equipped overlay image horizontally. Default: false */
  flipEquipped?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Progress change callback (0 to 1) */
  onProgressChange?: (progress: number) => void;
}

declare const DEFAULT_PRESETS: PresetItem[];
declare const BlobMorphHero: React.FC<BlobMorphHeroProps>;

/* ===================================================================== */
/* InfiniteTunnelHero                                                    */
/* ===================================================================== */

interface InfiniteTunnelHeroProps {
  /** Neon grid and shape stroke color. Default: "#FF52EF" */
  color?: string;
  /** Scene background color. Default: "#1F0038" */
  backgroundColor?: string;
  /** Speed multiplier for the infinite tunnel loop. Default: 1 */
  speed?: number;
  /** Additional CSS class names */
  className?: string;
  /** Optional content rendered in the center of the tunnel */
  children?: React.ReactNode;
}

declare const InfiniteTunnelHero: React.FC<InfiniteTunnelHeroProps>;

/* ===================================================================== */
/* SmoothScrollProvider                                                  */
/* ===================================================================== */

interface SmoothScrollProviderProps {
  children: React.ReactNode;
  /** Optional pathname passed to trigger immediate scroll-to-top on route changes */
  pathname?: string;
}

declare const SmoothScrollProvider: React.FC<SmoothScrollProviderProps>;


/* ===================================================================== */
/* LiquidGlassButton                                                     */
/* ===================================================================== */

interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

declare const LiquidGlassButton: React.FC<LiquidGlassButtonProps>;
declare const liquidGlassButton: React.FC<LiquidGlassButtonProps>;

/* ===================================================================== */
/* Documentation / Helper Components                                     */
/* ===================================================================== */

interface InstallTabsProps {
  packages?: string;
  component?: string;
  dev?: boolean;
  className?: string;
}

declare const InstallTabs: React.FC<InstallTabsProps>;

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description?: string;
  required?: boolean;
}

interface PropsTableProps {
  data?: PropItem[];
  title?: string;
  description?: string;
  className?: string;
}

interface StackedCardSpec {
  label: string;
  value: string;
}

interface StackedCardItem {
  id: string | number;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  gradient?: string;
  borderGlow?: string;
  specs?: StackedCardSpec[];
}

interface StackedCardsScrollProps {
  /** Array of 10 card items. Defaults to built-in 10-card deck */
  cards?: StackedCardItem[];
  /** Initially active card index (0-9). Default: 0 */
  initialIndex?: number;
  /** Enables mouse wheel trigger to flip through cards. Default: true */
  enableWheelScroll?: boolean;
  /** Enables ScrollTrigger sticky pinning behavior during page scroll. Default: false */
  pin?: boolean;
  /** Height of the pin scroll track (e.g. '280vh'). Default: '280vh' */
  pinHeight?: string;
  /** Enables auto-playing transitions across the deck. Default: false */
  autoPlay?: boolean;
  /** Interval in milliseconds between autoplay steps. Default: 4000 */
  autoPlayInterval?: number;
  /** Additional CSS class name */
  className?: string;
  /** Callback fired when the active card changes */
  onChange?: (index: number, card: StackedCardItem) => void;
}

declare const StackedCardsScroll: React.FC<StackedCardsScrollProps>;
declare const DEFAULT_STACKED_CARDS: StackedCardItem[];

interface GooeyGridCursorProps {
  /** Fill color of the grid blocks. "auto" uses CSS var(--brand-accent), or pass hex/rgb. Default: "auto" */
  color?: string;
  /** Number of columns across the viewport. Default: 30 */
  gridSize?: number;
  /** Optional explicit pixel width and height for each grid cell. Default: calculated from gridSize */
  cellSize?: number;
  /** Corner radius of the grid square (e.g. "18%", "8px", 8). Default: "18%" */
  borderRadius?: string | number;
  /** Time in milliseconds each square stays visible before fading out. Default: 260 */
  trailDuration?: number;
  /** Speed multiplier for duration / fade. Default: 1.0 */
  speed?: number;
  /** Gaussian blur strength for the SVG gooey merge filter. Default: 4.5 */
  blurAmount?: number;
  /** CSS mix-blend-mode. Default: "normal" ("difference" for inverted high-contrast effect) */
  blendMode?: "normal" | "difference" | "screen" | "multiply" | string;
  /** Whether to render the smooth lerp-following cursor pointer. Default: true */
  showFollower?: boolean;
  /** Smoothing interpolation factor for follower cursor (0.05 to 0.3). Default: 0.12 */
  smoothing?: number;
  /** Whether to draw underlying subtle grid lines. Default: true */
  showGridLines?: boolean;
  /** Stroke color for the underlying grid lines. Default: "rgba(255, 255, 255, 0.03)" */
  gridLineColor?: string;
  /** CSS z-index for the cursor container. Default: 30 */
  zIndex?: number;
  /** Additional CSS class name */
  className?: string;
}

type LorenzoGridCursorProps = GooeyGridCursorProps;
declare const GooeyGridCursor: React.FC<GooeyGridCursorProps>;
declare const LorenzoGridCursor: React.FC<GooeyGridCursorProps>;
declare const GridCursorTrail: React.FC<GooeyGridCursorProps>;

interface CurvedGridCanvasProps {
  /** Size in pixels of each square cell in the grid. Default: 50 */
  cellSize?: number;
  /** Custom accent color override for grid lines, glowing borders, and curves */
  accentColor?: string;
  /** Energy decay rate per second for trail fading. Default: 0.65 */
  fadeSpeed?: number;
  /** Additional CSS class name */
  className?: string;
}

declare const CurvedGridCanvas: React.FC<CurvedGridCanvasProps>;
declare const FullpageCurvedGrid: React.FC<CurvedGridCanvasProps>;

interface InteractiveSnakeGridProps {
  accentColor?: string;
  className?: string;
  showControls?: boolean;
}

declare const InteractiveSnakeGrid: React.FC<InteractiveSnakeGridProps>;

interface CodeTypewriterProps {
  className?: string;
}

declare const CodeTypewriter: React.FC<CodeTypewriterProps>;

interface ThemeCustomizerProps {
  className?: string;
  compact?: boolean;
}

declare const ThemeCustomizer: React.FC<ThemeCustomizerProps>;
declare function useAutoCycleAccent(enabled?: boolean, intervalMs?: number): void;
declare function applyAccent(accentId: string, persist?: boolean): void;
declare const ACCENT_PRESETS: Array<{
  id: string;
  name: string;
  color: string;
  glow: string;
  muted: string;
  rgb: string;
}>;

declare const PropsTable: React.FC<PropsTableProps>;

export { ACCENT_PRESETS, BlobMorphHero, CodeTypewriter, CurvedGridCanvas, DEFAULT_PRESETS, DEFAULT_SCROLL_IMAGES, DEFAULT_STACKED_CARDS, FullpageCurvedGrid, GooeyGridCursor, GridCursorTrail, ImageScroll, InfiniteImageScroll, InfiniteTunnelHero, InstallTabs, InteractiveAsciiFace, InteractiveSnakeGrid, LiquidGlassButton, LorenzoGridCursor, PropsTable, SmoothScrollProvider, StackedCardsScroll, ThemeCustomizer, applyAccent, SmoothScrollProvider as default, liquidGlassButton, useAutoCycleAccent };
export type { BlobMorphHeroProps, CodeTypewriterProps, CurvedGridCanvasProps, GooeyGridCursorProps, ImageScrollProps, InfiniteTunnelHeroProps, InstallTabsProps, InteractiveAsciiFaceProps, InteractiveSnakeGridProps, LiquidGlassButtonProps, LorenzoGridCursorProps, PresetItem, PropItem, PropsTableProps, ScrollImageItem, SmoothScrollProviderProps, StackedCardItem, StackedCardSpec, StackedCardsScrollProps, ThemeCustomizerProps };
