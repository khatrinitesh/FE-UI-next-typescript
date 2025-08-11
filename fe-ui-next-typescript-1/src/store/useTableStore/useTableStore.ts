import { SELECT_ROW } from "@/constants/constants";
import { TableState } from "@/interface";
import { create } from "zustand";

export const useTableStore = create<TableState>((set) => ({
  selectedRowId: null,
  selectRow: (id: number) => {
    console.log(SELECT_ROW, id);
    set({ selectedRowId: id });
  },
}));
