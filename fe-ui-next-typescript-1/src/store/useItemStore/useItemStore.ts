import { ADD_ITEM } from "@/constants/constants";
import { Item, ItemState } from "@/interface";
import { create } from "zustand";

export const useItemStore = create<ItemState>((set) => ({
  items: [],
  addItem: (item: Item) => {
    console.log(ADD_ITEM, item);
    set((state) => ({
      items: [...state.items, item],
    }));
  },
}));
