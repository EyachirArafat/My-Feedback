import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const Ratings =({currentRating, reviews}) => {
  
  return (
    <div className="flex items-center overflow-hidden gap-2 max-w-[232px]">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            size={30}
            className={`w-[22px] h-[22px] p-[3px] rounded-sm cursor-pointer text-white ${index < currentRating ? "bg-star" : "bg-aStar"}`}
          />
        ))}
      </div>
      <div className="flex gap-1 items-center">
        <div className="font-lexend text-txtP font-bold">{currentRating}</div>
        <div className="font-lexend text-txtS text-nowrap">{reviews}</div>
      </div>
    </div>
  );
}
