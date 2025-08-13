import { PostsState } from "@/interface";
import { getPosts } from "@/lib/api";
import { create } from "zustand";

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({
      loading: true,
      error: null,
    });
    try {
      const data = await getPosts();
      // console.log("Fetched posts:", data);
      set({
        posts: data,
        loading: false,
      });
    } catch (err: any) {
      set({
        error: err.message || "Error fetching posts",
        loading: false,
      });
    }
  },
}));
