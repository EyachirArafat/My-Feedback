import React, { useState } from "react";
import Container from "../common/Container";
import ComponentTitle from "../common/ComponentTitle";
import { RestaurantsData } from "../../lib/data/apiData";
import MyCarousel from "../common/MyCarousel";
import { Ratings } from "../Home/Ratings";
import { MdSort } from "react-icons/md";
import SortComponent from "../common/SortComponent";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const AllRestaurants = () => {
  const [sortedFeedbacks, setSortedFeedbacks] = useState(RestaurantsData);
  
  const sortOptions = [
    {
      key: "all-feedbacks", 
      label: "All Feedbacks",
      sortFunction: (data) => data.sort((a, b) => b.rating - a.rating),
    },
    {
      key: "highest-rated",
      label: "Highest Rated",
      sortFunction: (data) => data.sort((a, b) => b.rating - a.rating),
    },
    {
      key: "lowest-rated",
      label: "Lowest Rated",
      sortFunction: (data) => data.sort((a, b) => a.rating - b.rating),
    },
    {
      key: "alphabetical",
      label: "Alphabetical Order",
      sortFunction: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
    },
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
              <SortComponent
                data={RestaurantsData}
                options={sortOptions}
                onSorted={(sortedData) => setSortedFeedbacks(sortedData)}
                initialLabel="Sort"
                itemIcon={<MdSort/>}
              />
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
                  <NavLink
                  to={`/${restaurant.name
                    ?.toLowerCase()
                    .replace(/[^a-z0-9\s]/g, "")
                    .replace(/\s+/g, "-")}`}
                  >
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
                  </NavLink>
                </div>
              ))}
            </div>
            <div className="my-4">
              <Button className="rounded-full" color="primary">
                Show more
              </Button>
            </div>
          </div>
          <div className="mb-4">
            <img className="rounded-2xl" src="/map-1.png" alt="map" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllRestaurants;
