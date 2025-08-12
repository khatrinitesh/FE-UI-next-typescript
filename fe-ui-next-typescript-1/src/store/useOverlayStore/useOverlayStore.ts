import { IMAGE_URL } from "@/constants/constants";
import { OverlayState } from "@/interface";
import { create } from "zustand";

interface OverlayStore extends OverlayState {
  setImageUrl: (url: string) => void;
  setOverlayText: (text: string) => void;
}

export const useOverlayStore = create<OverlayStore>((set) => ({
  imageUrl: IMAGE_URL, // default image
  overlayText: "This is an example overlay text.", // default overlay text

  setImageUrl: (url) => set({ imageUrl: url }),
  setOverlayText: (text) => set({ overlayText: text }),
}));
