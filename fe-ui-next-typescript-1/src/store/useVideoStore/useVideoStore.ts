import { VideoState } from "@/interface";
import { create } from "zustand";

export const useVideoStore = create<VideoState>((set) => ({
  isPlaying: false,
  isMuted: false,
  volume: 1,
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  setVolume: (volume: number) => set({ volume }),
}));
