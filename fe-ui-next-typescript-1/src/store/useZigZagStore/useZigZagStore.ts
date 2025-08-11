import { ZigZagState } from "@/interface";
import { create } from "zustand";

export const useZigZagStore = create<ZigZagState>((set) => ({
  activeId: null,
  setActiveId: (id) => set({ activeId: id }),
}));
