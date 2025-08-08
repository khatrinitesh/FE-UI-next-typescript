export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/service",
  CONTACT: "/contact",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
