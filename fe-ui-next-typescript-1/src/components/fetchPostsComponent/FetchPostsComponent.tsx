"use client";
import { usePostsStore } from "@/store/usePostsStore/usePostsStore";
import React, { useEffect } from "react";

const FetchPostsComponent = () => {
  const { posts, loading, error, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul className="grid gap-[10px]">
        {posts.map((post) => (
          <li
            key={post.id}
            className="grid gap-[5px] bg-gray-200 p-[10px] rounded-[10px]"
          >
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchPostsComponent;
