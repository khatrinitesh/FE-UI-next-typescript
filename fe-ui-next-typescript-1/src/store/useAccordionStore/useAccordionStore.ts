import { SET_OPEN_ACCORDION, TOGGLE_ACCORDION } from "@/constants/constants";
import { AccordionState } from "@/interface";
import { create } from "zustand";

export const useAccordionStore = create<AccordionState>((set, get) => ({
  openItem: null,

  toggleAccordion: (id) => {
    const current = get().openItem;
    const newState = current === id ? null : id;
    console.log(TOGGLE_ACCORDION, newState);
    set({ openItem: newState });
  },

  setOpenAccordion: (id) => {
    console.log(SET_OPEN_ACCORDION, id);
    set({ openItem: id });
  },
}));
