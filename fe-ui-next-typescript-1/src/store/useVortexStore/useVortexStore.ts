import { VortexState } from "@/interface";
import { create } from "zustand";

export const useVortexStore = create<VortexState>((set) => ({
  isSpinning: false,
  speed: 1, // Default speed is 1
  direction: "clockwise", // Default direction is clockwise
  toggleVortex: () => set((state) => ({ isSpinning: !state.isSpinning })),
  changeSpeed: (newSpeed: number) => set({ speed: newSpeed }),
  changeDirection: (newDirection: "clockwise" | "counterclockwise") =>
    set({ direction: newDirection }),
}));
