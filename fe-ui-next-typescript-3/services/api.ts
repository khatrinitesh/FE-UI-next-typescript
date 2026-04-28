const BASE_URL = process.env.NEXT_PUBLIC_API_JSON_POSTS;

if (!BASE_URL) {
  throw new Error("API base URL is missing");
}

// 🔁 Generic fetch handler
async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("API Error");
  }
  return res.json();
}

// 📦 Get all posts
export const getPosts = async () => {
  return fetcher<any[]>(BASE_URL!);
};

// 📦 Get post by ID
export const getPostById = async (id: number) => {
  return fetcher<any>(`${BASE_URL}/${id}`);
};
