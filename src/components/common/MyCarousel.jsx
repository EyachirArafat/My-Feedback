import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { cnn } from "../../lib/utils/cnn";

const MyCarousel = ({images,  interval = 3000, children, imgClass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(autoplay);
  }, [images.length, interval]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };



  return (
    <div className="relative">
      {/* Carousel Content */}
      <div className={cnn("overflow-hidden relative ", imgClass)}>
      <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full overflow-hidden flex-shrink-0 object-cover"
            />
          ))}
        </div>
          <div>{children}</div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute z-10 top-1/2  left-5 transform -translate-y-1/2 bg-black/10 text-white/10 hover:bg-black/50 hover:text-white/100 transition-colors duration-200 rounded-full sm3:flex hidden justify-center items-center size-8 p-2"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute z-10 top-1/2 right-5 transform -translate-y-1/2 bg-black/10 text-white/10 hover:bg-black/50 hover:text-white/100 transition-colors duration-200 rounded-full sm3:flex hidden justify-center items-center size-8 p-2"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>

      {/* Indicators */}
      <div className="absolute z-10 bottom-2  transform -translate-x-1/2 left-1/2 flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`sm:w-3 w-2 sm:h-3 h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-[#D9D9D9]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
