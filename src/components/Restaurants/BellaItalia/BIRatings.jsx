import React, { useState } from "react";
import { BIRatingData } from "../../../lib/data/apiData";
import { FaStar } from "react-icons/fa";
import { Ratings } from "../../Home/Ratings";
import { Button } from "@nextui-org/react";
import Container from "../../common/Container";
import FilterComponent from "../../common/FilterComponent";
import SortComponent from "../../common/SortComponent";
import { IoFilter } from "react-icons/io5";
import { MdOutlineSort } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";

const BIRatings = () => {
  const [filteredData, setFilteredData] = useState(BIRatingData);
  const [sortedData, setSortedData] = useState(BIRatingData);


  const sortOptions = [
    {
      key: "highest-rated",
      label: "Highest Rated",
      sortFunction: (data) => [...data].sort((a, b) => b.rating - a.rating),
    },
    {
      key: "lowest-rated",
      label: "Lowest Rated",
      sortFunction: (data) => [...data].sort((a, b) => a.rating - b.rating),
    },
    {
      key: "alphabetical",
      label: "Alphabetical Order",
      sortFunction: (data) =>
        [...data].sort((a, b) => a.name.localeCompare(b.name)),
    },
  ];

  const filterOptions = [
    {
      key: "5-stars",
      label: "5 Stars",
      icon: (
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
      ),
      filterFunction: (data) => data.filter((item) => item.rating === 5),
    },
    {
      key: "4-stars",
      label: "4 & Above",
      icon: (
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
      ),
      filterFunction: (data) => data.filter((item) => item.rating >= 4),
    },
    {
      key: "3-stars",
      label: "3 & Below",
      icon: (
        <div className="flex">
          {[...Array(3)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
      ),
      filterFunction: (data) => data.filter((item) => item.rating <= 3),
    },
    {
      key: "all",
      label: "All Ratings",
      filterFunction: () => BIRatingData,
    },
  ];

  const handleFilter = (filtered) => {
    setFilteredData(filtered);
    setSortedData(filtered);
  };

  const handleSort = (sorted) => {
    setSortedData(sorted);
  };

  return (
    <Container>
      <div className="flex flex-wrap items-center gap-2 pt-5">
        {/* Filter Component */}
        <FilterComponent
          options={filterOptions}
          data={BIRatingData}
          onFiltered={handleFilter}
          initialLabel="Filter"
          itemIcon={<IoFilter/>}
        />
        {/* Sort Component */}
        <SortComponent
          options={sortOptions}
          data={filteredData}
          onSorted={handleSort}
          initialLabel="Sort"
          itemIcon={<MdOutlineSort/>}
        />
      </div>

      {/* Render sorted and filtered data */}
      <div className="flex flex-col mt-10 gap-7">
        {sortedData.map((item, id) => (
          <div
            key={id}
            className="flex flex-col p-5 rounded-lg gap-4 bg-bgS max-w-[1055px] "
          >
            <div className="flex flex-wrap gap-2">
              <div className="bg-white p-4 rounded-full flex justify-center items-center">{item.user}</div>
              <div>
                <h3 className="font-semibold text-xl">{item.name}</h3>
                <p className="text-txtS">{item.location}</p>
              </div>
            </div>
            <div>
              

              <Ratings currentRating={item.rating} reviews={item.reviews} />
              <p className="max-w-[511px] w-full text-txtS pt-7">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-4">
        <Button className="rounded-full" color="primary">
          Show more
        </Button>
      </div>
    </Container>
  );
};

export default BIRatings;
