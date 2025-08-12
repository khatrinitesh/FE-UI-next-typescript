import { TooltipData } from "@/interface";
import { create } from "zustand";

interface TooltipStore extends TooltipData {
  showTooltip: (text: string, x: number, y: number) => void;
  hideTooltip: () => void;
}

export const useTooltipStore = create<TooltipStore>((set) => ({
  text: "",
  visible: false,
  position: { x: 0, y: 0 },

  showTooltip: (text, x, y) =>
    set({
      text,
      visible: true,
      position: { x, y },
    }),

  hideTooltip: () => set({ visible: false }),
}));
