import { create } from "zustand";
import { fetchByPost, fetchByPostId, Product } from "../services/api";

interface Store {
  products: Product[];
  selected: Product | null;
  loading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  setByIndex: (id: number) => void;
}

export const useProductStore = create<Store>((set, get) => ({
  products: [],
  selected: null,
  loading: false,
  error: null,

  fetchProducts: async () => {
    try {
      set({ loading: true, error: null });

      const data = await fetchByPost();

      set({
        products: data,
        loading: false,
      });
    } catch {
      set({
        error: "Failed to fetch",
        loading: false,
      });
    }
  },

  setByIndex: (id) => {
    const product = fetchByPostId(id, get().products);
    set({ selected: product });
  },
}));
