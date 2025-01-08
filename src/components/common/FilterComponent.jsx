import React, { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const FilterComponent = ({ data, options, onFiltered, initialLabel = "Filter", itemIcon }) => {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (key) => {
    const selectedOption = options.find((option) => option.key === key);

    if (selectedOption && selectedOption.filterFunction) {
      const filtered = selectedOption.filterFunction(data);
      setFilteredData(filtered);
      onFiltered(filtered);
    } else {
      setFilteredData(data);
      onFiltered(data); // Notify parent of unfiltered data
    }
  };

  return (
    <div>
      <DropdownComponent
        options={options}
        onSelect={handleFilter}
        initialLabel={initialLabel}
        itemIcon={itemIcon}
      />
    </div>
  );
};

export default FilterComponent;
