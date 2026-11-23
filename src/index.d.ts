import * as React from "react";

/* ===================================================================== */
/* ImageScroll & InfiniteImageScroll                                     */
/* ===================================================================== */

export interface ScrollImageItem {
  id?: string | number;
  src: string;
  title?: string;
  category?: string;
  accent?: string;
}

export interface ImageScrollProps {
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

export declare const DEFAULT_SCROLL_IMAGES: ScrollImageItem[];
export declare const ImageScroll: React.FC<ImageScrollProps>;
export declare const InfiniteImageScroll: React.FC<ImageScrollProps>;

/* ===================================================================== */
/* InteractiveAsciiFace                                                  */
/* ===================================================================== */

export interface InteractiveAsciiFaceProps {
  /** Source image URL, File, or Blob to render as ASCII portrait */
  src?: string | Blob | File;
  /** Alt text for accessibility. Default: "Human portrait formed from green ASCII characters" */
  alt?: string;
  /** Whether the portrait shifts interactively on pointer move. Default: true */
  followPointer?: boolean;
  /** Maximum pixel offset for pointer parallax. Default: 22 */
  maxOffset?: number;
  /** Hex or CSS color of the ASCII characters. Default: "#60ed83" */
  color?: string;
  /** Animation speed multiplier for falling digital rain. Default: 1 */
  lineSpeed?: number;
  /** Sensitivity to pointer movements. Default: 1 */
  mouseSpeed?: number;
  /** Contrast/clarity factor for face sampling. Default: 1.35 */
  imageClarity?: number;
  /** Additional CSS class names */
  className?: string;
}

export declare const InteractiveAsciiFace: React.FC<InteractiveAsciiFaceProps>;

/* ===================================================================== */
/* BlobMorphHero                                                         */
/* ===================================================================== */

export interface PresetItem {
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

export interface BlobMorphHeroProps {
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
  /** Toggle background topographic contour lines. Default: true */
  showTopography?: boolean;
  /** Toggle ambient background blobs. Default: true */
  showAmbientBlobs?: boolean;
  /** Toggle helmet HUD wireframe overlay. Default: true */
  showHud?: boolean;
  /** Show next race info banner. Default: false */
  showNextRace?: boolean;
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

export declare const DEFAULT_PRESETS: PresetItem[];
export declare const BlobMorphHero: React.FC<BlobMorphHeroProps>;

/* ===================================================================== */
/* InfiniteTunnelHero                                                    */
/* ===================================================================== */

export interface InfiniteTunnelHeroProps {
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

export declare const InfiniteTunnelHero: React.FC<InfiniteTunnelHeroProps>;

/* ===================================================================== */
/* SmoothScrollProvider                                                  */
/* ===================================================================== */

export interface SmoothScrollProviderProps {
  children: React.ReactNode;
  /** Optional pathname passed to trigger immediate scroll-to-top on route changes */
  pathname?: string;
}

export declare const SmoothScrollProvider: React.FC<SmoothScrollProviderProps>;
export default SmoothScrollProvider;

/* ===================================================================== */
/* LiquidGlassButton                                                     */
/* ===================================================================== */

export interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export declare const LiquidGlassButton: React.FC<LiquidGlassButtonProps>;
export declare const liquidGlassButton: React.FC<LiquidGlassButtonProps>;

/* ===================================================================== */
/* Documentation / Helper Components                                     */
/* ===================================================================== */

export interface InstallTabsProps {
  packages?: string;
  component?: string;
  dev?: boolean;
  className?: string;
}

export declare const InstallTabs: React.FC<InstallTabsProps>;

export interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description?: string;
  required?: boolean;
}

export interface PropsTableProps {
  data?: PropItem[];
  title?: string;
  description?: string;
  className?: string;
}

export declare const PropsTable: React.FC<PropsTableProps>;
