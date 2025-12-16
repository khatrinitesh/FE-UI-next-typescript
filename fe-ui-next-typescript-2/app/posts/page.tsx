"use client";

import { getPosts } from "@/api/jsonApi";
import { useEffect, useState } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch posts");
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (!posts.length) return <p>Loading…</p>;
  return (
    <div>
      {" "}
      <h1 className="font-bold text-[2rem]">Posts</h1>
      <ul className="list-disc list-inside ms-2">
        {posts.map((post) => (
          <li key={post.id} className="grid gap-2">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
