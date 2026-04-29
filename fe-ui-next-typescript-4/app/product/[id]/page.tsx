"use client";

import MainLayout from "@/components/layout/MainLayout";
import { useProductStore } from "@/store/useProductStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const ProductDetail = () => {
  const params = useParams();
  const id = Number(params.id);

  const { products, setByIndex, selected, fetchProducts } = useProductStore();

  useEffect(() => {
    if (!products.length) fetchProducts();
    else setByIndex(id);
  }, [id, products]);

  if (!selected) return <p>No data</p>;
  return (
    <MainLayout>
      <div className="productDetail py-5">
        <div className="innerContent">
          <h2>Product Detail</h2>

          <div className="text-2xl font-bold">{selected.title}</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
