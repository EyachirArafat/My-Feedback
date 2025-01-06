import React, { useState } from 'react'
import { SearchIcon } from '../Icons';

const SearchFunction = () => {
  const [query, setQuery] = useState({
    category: "",
    location: "",
  });
  const [results, setResults] = useState([]);

  const mockResults = [
    { name: "Restaurant A", location: "Singapour" },
    { name: "Hotel B", location: "Singapour" },
    { name: "Spa C", location: "Malaysia" },
    { name: "Restaurant D", location: "Bangkok" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const categoryQuery = query.category.toLowerCase();
    const locationQuery = query.location.toLowerCase();

    const filteredResults = mockResults.filter(
      (item) =>
        item.name.toLowerCase().includes(categoryQuery) || 
        item.location.toLowerCase().includes(locationQuery)
    );

    setResults(filteredResults);
  };
  return (
    <div>
    <div className="sm2:flex hidden justify-center items-center border rounded-full gap-1 px-0.5">
      <div className="flex">
        <input
          type="text"
          name="category"
          value={query.category}
          onChange={handleInputChange}
          placeholder="restaurant, hotel, service...."
          className="w-full rounded-s-full p-2 focus:outline-none border-r-1 h-9 font-roboto"
        />
        <input
          type="text"
          name="location"
          value={query.location}
          onChange={handleInputChange}
          placeholder="Singapour..."
          className="w-full p-2 h-9 focus:outline-none font-roboto"
        />
      </div>
      <button className="p-1 bg-bgP text-white rounded-full" onClick={handleSearch}>
        <SearchIcon size={20} className="" />
      </button>
    </div>
    </div>

  )
}

export default SearchFunction
