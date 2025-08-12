"use client";
import { useStringStore } from "@/store/useStringStore/useStringStore";
import React, { useEffect } from "react";

const TruncatedTextComponent = ({ text }: { text: string }) => {
  const { setOriginal, truncated } = useStringStore();

  useEffect(() => {
    setOriginal(text);
  }, [text, setOriginal]);
  return <p>{truncated}</p>;
};

export default TruncatedTextComponent;
