import { TRUNCATE_LENGTH } from "@/constants/constants";
import { StringState } from "@/interface";
import { create } from "zustand";

interface StringStore extends StringState {
  setOriginal: (text: string) => void;
  truncateText: (text: string, length?: number) => string;
}

export const useStringStore = create<StringStore>((set) => ({
  original: "",
  truncated: "",

  setOriginal: (text) => {
    const truncated =
      text.length > TRUNCATE_LENGTH
        ? `${text.slice(0, TRUNCATE_LENGTH)}...`
        : text;

    set({ original: text, truncated });
  },

  truncateText: (text, length = TRUNCATE_LENGTH) => {
    return text.length > length ? `${text.slice(0, length)}...` : text;
  },
}));
