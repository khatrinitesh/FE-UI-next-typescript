"use client";
import React from "react";
import Header from "../headerSection/HeaderSection";
import FooterSection from "../footerSection/FooterSection";
import { MainLayoutProps } from "@/interface";
import ErrorBoundary from "@/app/ErrorBoundary";

const MainLayout = ({ children }: MainLayoutProps) => {
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
