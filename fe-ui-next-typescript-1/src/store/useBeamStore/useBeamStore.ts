import { BEAM_INITIAL_POSITION, BEAM_SPEED } from "@/constants/constants";
import { BeamState } from "@/interface";
import { create } from "zustand";

interface BeamStore extends BeamState {
  setTargetPosition: (x: number, y: number) => void;
  updateBeamPosition: () => void;
}

export const useBeamStore = create<BeamStore>((set) => ({
  position: BEAM_INITIAL_POSITION, // Starting at 0,0
  target: BEAM_INITIAL_POSITION, // Default target is the same as initial
  isMoving: false,

  setTargetPosition: (x, y) => {
    set({ target: { x, y } });
  },

  updateBeamPosition: () => {
    set((state) => {
      const { position, target } = state;
      let newX = position.x;
      let newY = position.y;

      // Move towards the target position with BEAM_SPEED
      if (position.x < target.x) {
        newX = Math.min(position.x + BEAM_SPEED, target.x);
      } else if (position.x > target.x) {
        newX = Math.max(position.x - BEAM_SPEED, target.x);
      }

      if (position.y < target.y) {
        newY = Math.min(position.y + BEAM_SPEED, target.y);
      } else if (position.y > target.y) {
        newY = Math.max(position.y - BEAM_SPEED, target.y);
      }

      return { position: { x: newX, y: newY } };
    });
  },
}));
