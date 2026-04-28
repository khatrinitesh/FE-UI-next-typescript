"use client";

import MainLayout from "@/layout/MainLayout";
import { usePostStore } from "@/store/usePostStore";
import Link from "next/link";
import { useEffect } from "react";

const Product = () => {
  const { posts, fetchPosts, isLoading, isError } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;

  return (
    <MainLayout>
      <div className="productPage py-5">
        <div className="container mx-auto">
          <div className="innerContent">
            <h2 className="text-2xl">Products</h2>
            <div className="grid-cols-3 grid gap-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-5 rounded-[10px] shadow-2xl bg-orange-300 border-5 border-blue-600"
                >
                  <Link href={`/products/${post.id}`}>
                    {post.id}
                    <h3>{post.title}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
