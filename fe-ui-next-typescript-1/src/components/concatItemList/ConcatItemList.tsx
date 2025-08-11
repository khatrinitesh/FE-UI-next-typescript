"use client";
import { useItemConcatStore } from "@/store/useItemConcatStore/useItemConcatStore";
import React from "react";

const ConcatItemList = () => {
  const { items, concatItems } = useItemConcatStore();

  const handleAddBatch = () => {
    const newItems = [
      { id: Date.now(), name: "Item A" },
      { id: Date.now() + 1, name: "Item B" },
    ];
    concatItems(newItems);
  };

  return (
    <div className="p-4">
      <button
        onClick={handleAddBatch}
        className="bg-green-600 text-white px-3 py-1"
      >
        Add Multiple Items
      </button>

      <ul className="mt-4">
        {items.map((item) => (
          <li key={item.id} className="py-1">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConcatItemList;
