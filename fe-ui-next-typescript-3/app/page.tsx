"use client";

import Button from "@/components/ui/Button";
import MainLayout from "@/layout/MainLayout";
import { useStore } from "@/store/useStore";

export default function Home() {
  const { increment, decrement, count } = useStore();
  return (
    <MainLayout>
      <div className="homePage py-5">
        <div className="container mx-auto">
          <div className="innerContent">
            <h2 className="text-2xl">Home Page</h2>
            <h3>Count: {count}</h3>

            <Button onClick={increment} variant="primary">
              Increment
            </Button>

            <Button onClick={decrement} variant="secondary">
              Decrement
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
