"use client";
import { useVerticalLineStore } from "@/store/useVerticalLineStore/useVerticalLineStore";

const VerticalLine: React.FC = () => {
  const { visible, color, height, width } = useVerticalLineStore();

  if (!visible) return null;

  return (
    <div
      className="vertical-line mx-auto"
      style={{
        backgroundColor: color,
        height,
        width,
      }}
    />
  );
};

export default VerticalLine;
