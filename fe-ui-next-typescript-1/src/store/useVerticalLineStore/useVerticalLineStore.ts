import { VerticalLineState } from "@/interface";
import { create } from "zustand";

export const useVerticalLineStore = create<VerticalLineState>((set) => ({
  visible: true,
  color: "#000000",
  height: "100px",
  width: "2px",
  toggleLine: () =>
    set((state) => ({
      visible: !state.visible,
    })),
  setStyle: (color, height, width) => set({ color, height, width }),
}));
