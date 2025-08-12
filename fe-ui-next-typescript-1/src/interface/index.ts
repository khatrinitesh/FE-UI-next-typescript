import { BreakpointKey } from "@/constants/constants";

export interface MainLayoutProps {
  children: React.ReactNode;
}
export interface ButtonProps {
  label: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  variant?:
    | "yellow"
    | "outline"
    | "darkblue"
    | "whiteBorder"
    | "white"
    | "whiteBlueBorder";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export interface HeadTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface SubTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface Item {
  id: number;
  name: string;
}

export interface ItemState {
  items: Item[];
  addItem: (item: Item) => void;
}

export interface ItemConcat {
  id: number;
  name: string;
}

export interface ItemConcatState {
  items: ItemConcat[];
  concatItems: (newItems: ItemConcat[]) => void;
}

export interface AccordionState {
  openItem: string | null;
  toggleAccordion: (id: string) => void;
  setOpenAccordion: (id: string | null) => void;
}

export interface AccordionProps {
  id: string;
  title: string;
  content: string;
}

export interface ZoomHoverProps {
  src: string;
  alt: string;
  zoomScale?: number;
  className?: string;
}

export interface ZigZagItem {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  direction: "left" | "right";
}
export interface ZigZagState {
  activeId: string | null;
  setActiveId: (id: string) => void;
}

export interface ZigZagSectionProps {
  item: ZigZagItem;
}

export interface TableRow {
  id: number;
  name: string;
  email: string;
}
export interface ZebraTableProps {
  rows: TableRow[];
}

export interface TableState {
  selectedRowId: number | null;
  selectRow: (id: number) => void;
}

export interface VortexState {
  isSpinning: boolean; // Whether the vortex is spinning
  speed: number; // Speed of the vortex (e.g., rotation speed)
  direction: "clockwise" | "counterclockwise"; // Direction of the vortex
  toggleVortex: () => void; // Function to start or stop the vortex
  changeSpeed: (newSpeed: number) => void; // Function to change the speed
  changeDirection: (newDirection: "clockwise" | "counterclockwise") => void; // Function to change the direction
}

export interface VideoState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  play: () => void;
  pause: () => void;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
}
export interface VerticalLineState {
  visible: boolean;
  color: string;
  height: string;
  width: string;
  toggleLine: () => void;
  setStyle: (color: string, height: string, width: string) => void;
}

export interface RatingState {
  rating: number;
  setRating: (value: number) => void;
  resetRating: () => void;
}

export interface DeviceState {
  width: number;
  breakpoint: BreakpointKey;
  setWidth: (width: number) => void;
}

export interface TypewriterState {
  currentPhraseIndex: number;
  displayedText: string;
  isDeleting: boolean;
}
export interface StringState {
  original: string;
  truncated: string;
}

export interface OverlayState {
  imageUrl: string;
  overlayText: string;
}

export interface BeamState {
  position: { x: number; y: number };
  target: { x: number; y: number };
  isMoving: boolean;
  setTargetPosition: (x: number, y: number) => void;
  updateBeamPosition: () => void;
}

export interface TooltipData {
  text: string;
  visible: boolean;
  position: { x: number; y: number };
}
export const TOOLTIP_DELAY = 200; // ms before showing
export const TOOLTIP_OFFSET = 10; // px offset from target
