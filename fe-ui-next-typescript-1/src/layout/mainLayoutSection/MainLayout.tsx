"use client";
import React, { useEffect, useState } from "react";
import Header from "../headerSection/HeaderSection";
import FooterSection from "../footerSection/FooterSection";
import { MainLayoutProps } from "@/interface";
import ErrorBoundary from "@/app/ErrorBoundary";
import PreloaderSection from "@/components/preloaderSection/PreloaderSection";

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <PreloaderSection />;
  }

  return (
    <>
      <ErrorBoundary>
        <div className="appLayout grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Header />
          <div className="mainLayout">{children}</div>
          <FooterSection />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default MainLayout;
