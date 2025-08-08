import HeadTitle from "@/components/headTitle/HeadTitle";
import MainLayout from "@/layout/mainLayoutSection/MainLayout";
import React from "react";

const AboutPageSection = () => {
  return (
    <MainLayout>
      <div className="innerContent">
        <div className="container mx-auto">
          <HeadTitle>About Us page</HeadTitle>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPageSection;
