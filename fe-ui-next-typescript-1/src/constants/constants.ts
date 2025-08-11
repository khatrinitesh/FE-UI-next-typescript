import { ZigZagItem } from "@/interface";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/service",
  CONTACT: "/contact",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

export const ADD_ITEM = "ADD_ITEM";

export const CONCAT_ITEMS = "CONCAT_ITEMS";

// store/constants.ts
export const TOGGLE_ACCORDION = "TOGGLE_ACCORDION";
export const SET_OPEN_ACCORDION = "SET_OPEN_ACCORDION";

export const DEFAULT_ZOOM_SCALE = 1.1;
export const TRANSITION_DURATION = "300ms";

export const ZIGZAG_DIRECTION_LEFT = "left";
export const ZIGZAG_DIRECTION_RIGHT = "right";

export const ZIGZAGDATA: ZigZagItem[] = [
  {
    id: "1",
    title: "Fast Performance",
    text: "Our app runs fast and smooth.",
    imageUrl:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fHww",
    direction: ZIGZAG_DIRECTION_LEFT,
  },
  {
    id: "2",
    title: "Secure by Design",
    text: "Built with security in mind from the ground up.",
    imageUrl:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fHww",
    direction: ZIGZAG_DIRECTION_RIGHT,
  },
  {
    id: "3",
    title: "Intuitive UI",
    text: "Easy to use, beautifully designed.",
    imageUrl:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fHww",
    direction: ZIGZAG_DIRECTION_LEFT,
  },
];

export const SELECT_ROW = "SELECT_ROW";

export const zebraDataTable = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "David", email: "david@example.com" },
];

export const MAX_RATING = 5;
export const MIN_RATING = 1;

export const DEVICE_BREAKPOINTS = {
  mobile: 0,
  tablet: 640,
  smallLaptop: 1024,
  desktop: 1280,
  largeDesktop: 1536,
} as const;

export type BreakpointKey = keyof typeof DEVICE_BREAKPOINTS;
