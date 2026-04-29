"use client";
import MainLayout from "@/components/layout/MainLayout";
import Loader from "@/components/UI/Loader";
import { useProductStore } from "@/store/useProductStore";
import Link from "next/link";
import { useEffect } from "react";

const Product = () => {
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  return (
    <MainLayout>
      <div className="productPage py-5">
        <div className="container mx-auto">
          <div className="innerContent">
            <h2>Product</h2>
            {products.map((p, i) => (
              <Link key={i} href={`/product/${i}`}>
                <div>{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
