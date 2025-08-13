import { POSTS_API_URL } from "@/constants/constants";
import { PostData } from "@/interface";

export const getPosts = async (): Promise<PostData[]> => {
  const res = await fetch(POSTS_API_URL);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};
