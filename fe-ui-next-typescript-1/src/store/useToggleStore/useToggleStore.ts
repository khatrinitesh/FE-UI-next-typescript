import { ToggleState } from "@/interface";
import { create } from "zustand";

export const useToggleStore = create<ToggleState>((set) => ({
  isOn: false,
  toggle: () => set((state) => ({ isOn: !state.isOn })),
}));
