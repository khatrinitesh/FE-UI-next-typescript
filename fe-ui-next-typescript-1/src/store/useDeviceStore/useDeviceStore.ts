import { DEVICE_BREAKPOINTS } from "@/constants/constants";
import { DeviceState } from "@/interface";
import { create } from "zustand";

function getBreakpoint(width: number): keyof typeof DEVICE_BREAKPOINTS {
  if (width >= DEVICE_BREAKPOINTS.largeDesktop) return "largeDesktop";
  if (width >= DEVICE_BREAKPOINTS.desktop) return "desktop";
  if (width >= DEVICE_BREAKPOINTS.smallLaptop) return "smallLaptop";
  if (width >= DEVICE_BREAKPOINTS.tablet) return "tablet";
  return "mobile";
}

export const useDeviceStore = create<DeviceState>((set) => ({
  width: typeof window !== "undefined" ? window.innerWidth : 0,
  breakpoint:
    typeof window !== "undefined" ? getBreakpoint(window.innerWidth) : "mobile",
  setWidth: (width: number) =>
    set({
      width,
      breakpoint: getBreakpoint(width),
    }),
}));
