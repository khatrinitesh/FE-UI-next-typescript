"use client";

import BackButton from "@/components/ui/BackButton";
import MainLayout from "@/layout/MainLayout";
import { usePostStore } from "@/store/usePostStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const ProductDetail = () => {
  const { post, fetchPostById, isLoading, isError } = usePostStore();
  const params = useParams();

  const id = Number(params.id);

  useEffect(() => {
    if (id) {
      fetchPostById(id);
    }
  }, [id, fetchPostById]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;
  return (
    <MainLayout>
      <div className="productDetailPage py-5">
        <div className="container mx-auto">
          <div className="innerContent">
            <h2 className="text-2xl">Product Detail</h2>
            <BackButton>Go Back</BackButton>
            <h4>{post?.title}</h4>
            <p>{post?.body}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
