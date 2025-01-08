import React, { useState } from 'react'
import { SearchIcon } from '../Icons';
import { cnn } from '../../lib/utils/cnn';
import { LatestTrendsData } from '../../lib/data/apiData';

const SearchFunction = ({onSearch, className}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [query, setQuery] = useState({
    category: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    onSearch(query);
    setIsDropdownVisible(false);
    // const categoryQuery = query.category.toLowerCase();
    // const locationQuery = query.location.toLowerCase();

    // const filteredResults = mockResults.filter(
    //   (item) =>
    //     item.name.toLowerCase().includes(categoryQuery) || 
    //     item.location.toLowerCase().includes(locationQuery)
    // );

    // setResults(filteredResults);
  };

  const handleFocus = () => {
    setIsDropdownVisible(true); // Show dropdown on focus
  };

  const handleBlur = () => {
    setTimeout(() => setIsDropdownVisible(false), 2000);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery({
      category: suggestion.title,
      location: suggestion.location,
    });
    setIsDropdownVisible(false);
  };
  
  return (
    <div>
    <div className={cnn("border rounded-full gap-1 px-0.5",className)}>
      <div className="w-full sm:w-auto flex-1 sm:mr-2">
        <input
          type="text"
          name="category"
          value={query.category}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="restaurant, hotel, service...."
          className="relative w-full rounded-s-full p-2 focus:outline-none border-r-1 h-9 font-roboto"
        />
      </div>
      <div className='relative w-full sm:w-auto flex-1 sm:mr-2 sm:mt-0'>
        <input
          type="text"
          name="location"
          value={query.location}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Singapour..."
          className="relative w-full p-2 h-9 focus:outline-none font-roboto"
        />
      </div>
      <button className="p-1 bg-bgP text-white rounded-full" onClick={handleSearch}>
        <SearchIcon size={20} className="" />
      </button>
    </div>

    {/* Dropdown for category suggestions */}
    {isDropdownVisible && (
      <ul className="absolute left-0 w-full bg-white px-6 border rounded-md shadow-lg z-40 max-h-64 overflow-y-auto">
        {LatestTrendsData.map((item, index) => (
          <li
            key={index}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSuggestionClick(item)}
          >
            {item.title} - {item.location}
          </li>
        ))}
      </ul>
    )}
    </div>

  )
}

export default SearchFunction
