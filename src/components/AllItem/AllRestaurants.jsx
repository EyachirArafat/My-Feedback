import React, { useState } from "react";
import Container from "../common/Container";
import ComponentTitle from "../common/ComponentTitle";
import { RestaurantsData } from "../../lib/data/apiData";
import MyCarousel from "../common/MyCarousel";
import { Ratings } from "../Home/Ratings";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { MdSort } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const AllRestaurants = () => {
  const [sortedFeedbacks, setSortedFeedbacks] = useState(RestaurantsData);
  const [sortOption, setSortOption] = useState("Sort");
  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSortActive = () => {
    setIsActive((prev) => !prev);
    setIsDropdownOpen(true)
  };

  const handleSort = (key) => {
    let sortedData = [];
    switch (key) {
      case "highest-rated":
        sortedData = [...RestaurantsData].sort((a, b) => b.rating - a.rating);
        setSortOption("Highest Rated");
        break;
      case "oldest-rated":
        sortedData = [...RestaurantsData].sort((a, b) => a.rating - b.rating);
        setSortOption("Oldest-Rated");
        break;
      case "all-feedbacks":
      default:
        sortedData = RestaurantsData;
        setSortOption("All Feedbacks");
        break;
    }
    setSortedFeedbacks(sortedData);
  };

  const items = [
    { key: "all-feedbacks", label: "All Feedbacks" },
    { key: "highest-rated", label: "Highest Rated" },
    { key: "oldest-rated", label: "Oldest Rated" },
  ];

  return (
    <div className="lg:pl-[100px] md:pl-10 sm:pl-6 pl-1">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 pt-5 md:gap-[30px] sm:gap-4">
          <div>
            <p className="font-semibold text-medium py-3">
              Home / All restaurants
            </p>
            <div className="flex flex-wrap justify-between items-center">
              <ComponentTitle
                className="md:text-xl text-[18px] mb-0"
                children="best restaurants in singapore"
              />
              <div>
                <Dropdown className="min-w-[150px]" isOpen={isDropdownOpen}>
                  <DropdownTrigger>
                    <Button
                      onClick={handleSortActive}
                      className={`border-2  rounded-full ${
                        isActive
                          ? "bg-[#5E5E5E] text-white"
                          : "bg-white border-[#5E5E5E]"
                      }`}
                    >
                      <MdSort />
                      Sort
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    className="relative"
                    aria-label="Sort Feedbacks"
                    items={items}
                    onAction={(key) => handleSort(key)}
                  >
                    {items.map((item) => (
                      <DropdownItem
                        key={item.key}
                        className={`${
                          sortOption === item.label
                            ? "font-bold text-blue-500"
                            : ""
                        }`}
                      >
                        {item.label}
                      </DropdownItem>
                    ))}

                    {/* Cross Icon to reset */}
                    <DropdownItem
                      key="close"
                      onPress={() => setIsDropdownOpen(false)}
                    >
                      <IoClose size={18} />
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="flex flex-col">
              {sortedFeedbacks.map((restaurant, id) => (
                <div
                  key={id}
                  className="flex sm:flex-row flex-col border-b py-8 gap-4"
                >
                  <MyCarousel
                    images={restaurant.images}
                    imgClass="max-h-[189px] max-w-[209px]"
                  />
                  <div className="space-y-7">
                    <div>
                      <h3 className="font-semibold text-xl">
                        {restaurant.name}
                      </h3>
                      <p className=" md:w-[280px] sm3:w-full text-[16px] text-txtS">
                        {restaurant.des}
                      </p>
                    </div>
                    <Ratings
                      currentRating={restaurant.rating}
                      reviews={restaurant.reviews}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="my-4">
              <Button className="rounded-full" color="primary">
                Show more
              </Button>
            </div>
          </div>
          <div>
            <img src="/map-1.png" alt="map" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllRestaurants;
