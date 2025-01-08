import React, { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const SortComponent = ({ data, options, onSorted, initialLabel = "Sort", itemIcon }) => {
  const [sortedData, setSortedData] = useState(data);

  const handleSort = (key) => {
    const selectedOption = options.find((option) => option.key === key);

    if (selectedOption && selectedOption.sortFunction) {
      const sorted = selectedOption.sortFunction([...data]);
      setSortedData(sorted);
      onSorted(sorted);
    } else {
      setSortedData(data);
      onSorted(data); // Notify parent of unsorted data
    }
  };

  return (
    <div>
      <DropdownComponent
        options={options}
        onSelect={handleSort}
        initialLabel={initialLabel}
        itemIcon={itemIcon}
      />
    </div>
  );
};

export default SortComponent;
