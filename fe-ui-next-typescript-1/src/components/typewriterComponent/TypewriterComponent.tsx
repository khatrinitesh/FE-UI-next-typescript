"use client";
import { TYPING_SPEED } from "@/constants/constants";
import { useTypewriterStore } from "@/store/useTypewriterStore/useTypewriterStore";
import React, { useEffect } from "react";

const TypewriterComponent = () => {
  const { displayedText, updateText } = useTypewriterStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      updateText();
    }, TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [displayedText, updateText]);
  return (
    <div className="text-2xl font-mono text-black">
      <span>{displayedText}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypewriterComponent;
