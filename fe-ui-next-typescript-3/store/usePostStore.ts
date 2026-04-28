import { Product } from "@/interface";
import { getPostById, getPosts } from "@/services/api";
import { create } from "zustand";

interface PostState {
  posts: Product[];
  post: Product | null;
  isLoading: boolean;
  isError: string | null;
  fetchPosts: () => Promise<void>;
  fetchPostById: (id: number) => Promise<void>;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  post: null,
  isLoading: false,
  isError: null,

  // 📦 Fetch all posts
  fetchPosts: async () => {
    try {
      set({ isLoading: true, isError: null });
      const data = await getPosts();
      set({ posts: data, isLoading: false });
    } catch (error: any) {
      set({ isError: error.message, isLoading: false });
    }
  },

  // 📦 Fetch single post
  fetchPostById: async (id: number) => {
    try {
      set({ isLoading: true, isError: null });
      const data = await getPostById(id);
      set({ post: data, isLoading: false });
    } catch (error: any) {
      set({ isError: error.message, isLoading: false });
    }
  },
}));
