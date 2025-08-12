"use client";
import { MAX_TEXT_LENGTH } from "@/constants/constants";
import { useOverlayStore } from "@/store/useOverlayStore/useOverlayStore";
import React, { useEffect } from "react";

const OverlayImageComponent = () => {
  const { imageUrl, overlayText, setOverlayText } = useOverlayStore();

  useEffect(() => {
    // Optionally, you can limit text length to prevent overflowing.
    if (overlayText.length > MAX_TEXT_LENGTH) {
      setOverlayText(`${overlayText.slice(0, MAX_TEXT_LENGTH)}...`);
    }
  }, [overlayText, setOverlayText]);
  return (
    <div className="relative max-w-full max-h-96 overflow-hidden">
      {/* Image with transparency */}
      <img
        src={imageUrl}
        alt="Overlay Image"
        className="w-full h-full object-cover opacity-80"
      />

      {/* Text overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-xl p-4">
        {overlayText}
      </div>
    </div>
  );
};

export default OverlayImageComponent;
