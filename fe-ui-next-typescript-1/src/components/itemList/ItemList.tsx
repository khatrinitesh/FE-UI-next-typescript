"use client";
import { useItemStore } from "@/store/useItemStore/useItemStore";
import React, { useState } from "react";

const ItemList = () => {
  const { items, addItem } = useItemStore();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addItem({ id: Date.now(), name: input });
    setInput("");
  };

  return (
    <div className="p-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add item..."
        className="border px-2 py-1 mr-2"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-3 py-1 cursor-pointer"
      >
        Add
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

export default ItemList;
