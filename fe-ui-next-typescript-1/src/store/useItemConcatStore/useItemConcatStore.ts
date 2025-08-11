import { CONCAT_ITEMS } from "@/constants/constants";
import { ItemConcatState } from "@/interface";
import { create } from "zustand";

export const useItemConcatStore = create<ItemConcatState>((set) => ({
  items: [],
  concatItems: (newItems) => {
    console.log(CONCAT_ITEMS, newItems);
    set((state) => ({
      items: state.items.concat(newItems),
    }));
  },
}));
