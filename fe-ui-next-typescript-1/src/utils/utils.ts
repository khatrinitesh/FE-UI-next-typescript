"use client";
import { useDeviceStore } from "@/store/useDeviceStore/useDeviceStore";
import { useEffect } from "react";

export const useDeviceListener = () => {
  const setWidth = useDeviceStore((state) => state.setWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Initial load
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setWidth]);
};
