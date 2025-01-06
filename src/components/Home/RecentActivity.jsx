import React, { useState } from "react";
import Container from "../common/Container";
import ComponentTitle from "../common/ComponentTitle";
import { ReActivityData } from "../../lib/data/apiData";
import { Ratings } from "./Ratings";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const RecentActivity = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const prevGroup = () => {
    setCurrentGroup((prev) =>
      prev === 0 ? ReActivityData.length - 1 : prev - 1
    );
  };

  const nextGroup = () => {
    setCurrentGroup((next) =>
      next === ReActivityData.length - 1 ? 0 : next + 1
    );
  };

  return (
    <Container className="lg:px-[52px] md:px-8 sm:px-4 md:mb-24 mb-10">
      <div>
        <ComponentTitle children="Recents avtivities" />
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            className="absolute z-10 top-1/3  left-1 transform -translate-y-1/2 bg-white/60 text-[#232323] hover:bg-white/100 transition-all duration-200 md:hover:scale-125 rounded-full sm3:flex hidden justify-center items-center md:size-[59px] p-2"
            onClick={prevGroup}
          >
            <FaArrowLeft size={28} />
          </button>
          <button
            className="absolute z-10 top-1/3 right-1 transform -translate-y-1/2 bg-white/60 text-[#232323] hover:bg-white/100 transition-all duration-200 md:hover:scale-125 rounded-full sm3:flex hidden justify-center items-center md:size-[59px] p-2"
            onClick={nextGroup}
          >
            <FaArrowRight size={28} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentGroup * 100}%)`,
              }}
            >
              {ReActivityData.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="w-full flex-shrink-0"
                  style={{
                    width: `${100}%`,
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
                    {group.map((activity, id) => (
                      <div
                        key={id}
                        className="bg-bgS rounded-lg flex flex-col justify-between h-full px-3 py-6"
                        style={{
                          width: `${100}%`,
                        }}
                      >
                        <div className="h-full flex flex-col ">
                          <div className="flex items-center gap-2 mb-[23px]">
                            <div className="bg-white flex  items-center p-2 border rounded-full ">
                              {activity.userIcon}
                            </div>
                            <div className="flex flex-col">
                              <h3 className="font-roboto font-semibold text-[20px] leading-none">
                                {activity.userName}
                              </h3>
                              <p className="leading-5 text-[14px] text-txtS">
                                {activity.location}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-1 mb-5">
                            <Ratings
                              currentRating={activity.rating}
                              rattingBoxClass="hidden"
                            />
                            <p className="leading-5 text-[14px] text-txtS">
                              {activity.date}
                            </p>
                          </div>
                          <div className="font-roboto text-txtS mb-8">
                            <div className="pb-4">{activity.des1}</div>
                            <div>{activity.des2}</div>
                          </div>
                          <div className="mt-auto">
                            <div className="flex overflow-x-scroll">
                              {activity.images.map((img, index) => (
                                <img
                                  className="w-28 h-28 object-cover cursor-pointer "
                                  key={index}
                                  src={img}
                                  alt=""
                                />
                              ))}
                            </div>
                            <button className="border-b hover:border-b-2 border-txtP transition-all duration-200 text-lg font-medium font-lexend">
                              Discover
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentActivity;
