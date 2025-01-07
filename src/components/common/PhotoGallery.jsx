import { Button } from "@nextui-org/react";
import React from "react";

const PhotoGallery = ({ photos }) => {
  return (
    <div className="relative py-10">
      <div className="grid grid-cols-4 grid-rows-2 sm:gap-4 sm3:gap-2 gap-1">
        {/* Large Main Image */}
        <div className="col-span-4 sm:col-span-2 row-span-2 overflow-hidden rounded-lg relative">
          <img
            src={photos[0]}
            alt="Main Photo"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {/* View All Photos Button */}
          <Button className="absolute bottom-2 sm:bottom-4 sm:left-4 left-2 sm:px-4 px-2 h-7 sm:h-12 sm:text-sm text-[12px]  font-medium text-txtP bg-white rounded-full hover:bg-primary-dark transition">
            View all photos ({photos.length})
          </Button>
        </div>

        {/* Smaller Images */}
        {photos.slice(1, 5).map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={photo}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
