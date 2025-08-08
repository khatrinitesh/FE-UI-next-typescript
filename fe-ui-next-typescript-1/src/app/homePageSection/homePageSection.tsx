import HeadTitle from "@/components/headTitle/HeadTitle";
import React from "react";

const HomePageSection = () => {
  const sum = (a: any, b: any) => {
    return a + b;
  };
  const result = sum(1, 2);
  return (
    <div className="container mx-auto">
      <HeadTitle>Home page</HeadTitle>
      {result}
    </div>
  );
};

export default HomePageSection;
