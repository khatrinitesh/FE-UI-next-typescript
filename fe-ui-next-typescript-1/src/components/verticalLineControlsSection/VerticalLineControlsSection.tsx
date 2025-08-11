"use client";
import { useVerticalLineStore } from "@/store/useVerticalLineStore/useVerticalLineStore";

const VerticalLineControlsSection = () => {
  const { toggleLine, setStyle } = useVerticalLineStore();

  return (
    <div className="flex flex-col gap-2 mt-4">
      <button
        onClick={toggleLine}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Toggle Line
      </button>
      <button
        onClick={() => setStyle("#e91e63", "200px", "4px")}
        className="bg-pink-500 text-white px-4 py-2 rounded"
      >
        Change Style
      </button>
    </div>
  );
};

export default VerticalLineControlsSection;
