import { RatingState } from "@/interface";
import { create } from "zustand";

export const useRatingStore = create<RatingState>((set) => ({
  rating: 0,
  setRating: (value: number) => set({ rating: value }),
  resetRating: () => set({ rating: 0 }),
}));
