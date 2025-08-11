"use client";
import { useRatingStore } from "@/store/useRatingStore/useRatingStore";
import React from "react";
import { FaStar } from "react-icons/fa";

const UserRatingSection = () => {
  const { rating, setRating, resetRating } = useRatingStore();
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`cursor-pointer w-6 h-6 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
      <button
        onClick={resetRating}
        className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
      >
        Reset Rating
      </button>
    </div>
  );
};

export default UserRatingSection;
