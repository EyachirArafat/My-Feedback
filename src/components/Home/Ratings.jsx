import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { cnn } from "../../lib/utils/cnn";

export const Ratings =({currentRating, reviews, rattingBoxClass, cRClass, rClass}) => {
  
  return (
    <div className="flex items-center overflow-hidden gap-2 max-w-[232px]">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            size={30}
            className={`sm:w-5 w-4 h-4 sm:h-5 p-[3px] rounded-sm cursor-pointer text-white ${index < currentRating ? "bg-star" : "bg-aStar"}`}
          />
        ))}
      </div>
      <div className={cnn("flex gap-1 items-center",rattingBoxClass)}>
        <div className={cnn("font-lexend text-txtP font-bold",cRClass)}>{currentRating}</div>
        <div className={cnn("font-lexend text-txtS text-nowrap",rClass)}>{reviews}</div>
      </div>
    </div>
  );
}
