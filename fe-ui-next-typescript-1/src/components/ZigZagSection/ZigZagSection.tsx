"use client";
import { ZIGZAG_DIRECTION_LEFT } from "@/constants/constants";
import { ZigZagSectionProps } from "@/interface";
import { useZigZagStore } from "@/store/useZigZagStore/useZigZagStore";

const ZigZagSection: React.FC<ZigZagSectionProps> = ({ item }) => {
  const { activeId, setActiveId } = useZigZagStore();
  const isActive = activeId === item.id;

  const isLeft = item.direction === ZIGZAG_DIRECTION_LEFT;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 my-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      onMouseEnter={() => setActiveId(item.id)}
    >
      <div className="w-full">
        <img
          src={item.imageUrl}
          alt={item.title}
          className={`w-full rounded shadow transition-transform duration-300 ${
            isActive ? "scale-105" : ""
          }`}
        />
      </div>
      <div className="w-full">
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray-700">{item.text}</p>
      </div>
    </div>
  );
};

export default ZigZagSection;
