import React, { useState } from "react";
import MyCarousel from "../common/MyCarousel";
import { HomeHeroData } from "../../lib/data/apiData";
import Container from "../common/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Ratings } from "./Ratings";

const HeroSection = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const prevGroup = () => {
    setCurrentGroup((prev) =>
      prev === 0 ? HomeHeroData.length - 1 : prev - 1
    );
  };

  const nextGroup = () => {
    setCurrentGroup((prev) =>
      prev === HomeHeroData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Container className="bg-bgP rounded-lg max-w-[1330px] md:mb-24 mb-10">
      <div className="sm:px-[23px] sm:py-5 py-4 rounded-lg text-white">
        <h1 className="text-xl sm:text-2xl md:text-[32px] font-lexend mb-4">
          Find the best restaurant ratings below
        </h1>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            className="absolute z-10 top-1/3  left-1 transform -translate-y-1/2 bg-white/60 text-[#232323] hover:bg-white/100 transition-all duration-200 md:hover:scale-125 rounded-full sm3:flex hidden justify-center items-center md:size-[59px] p-2"
            onClick={prevGroup}
          >
            <FaArrowLeft size={28}/>
          </button>
          <button
            className="absolute z-10 top-1/3 right-1 transform -translate-y-1/2 bg-white/60 text-[#232323] hover:bg-white/100 transition-all duration-200 md:hover:scale-125 rounded-full sm3:flex hidden justify-center items-center md:size-[59px] p-2"
            onClick={nextGroup}
          >
            <FaArrowRight size={28}/>
          </button>

          {/* Group Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentGroup * 100}%)`,
              }}
            >
              {HomeHeroData.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="w-full flex-shrink-0"
                  style={{
                    width: `${100}%`, // Ensure proper dynamic width for each group
                  }}
                >
                  <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[33px] gap-5">
                    {group.map((item) => (
                      <div key={item.id} className=" mx-auto bg-bgS rounded-xl">
                        <MyCarousel images={item.images} />
                        <div className="pt-[13px] pl-[14px] overflow-hidden pb-5 ">
                          <h2 className="text-lg sm:text-xl font-semibold font-roboto text-txtP">
                            {item.title}
                          </h2>
                          <p className="text-txtS font-roboto text-[14px]">
                            {item.des}
                          </p>
                          <div className="pt-[27px]">
                            <Ratings
                              currentRating='5'
                              reviews={item.reviews}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {HomeHeroData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGroup(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  currentGroup === index
                    ? "bg-white scale-110"
                    : "bg-[#D9D9D9]"
                } transition-transform`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
