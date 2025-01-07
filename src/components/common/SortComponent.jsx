// import React, { useState } from "react";
// import DropdownComponent from "./DropdownComponent";

// const SortComponent = ({ data, onSorted, options, initialLabel, itemIcon }) => {
//   const [sortedData, setSortedData] = useState(data);

//   const handleSort = (key) => {
//     let sorted = [];
//     switch (key) {
//       case "highest-rated":
//         sorted = [...data].sort((a, b) => b.rating - a.rating);
//         break;
//       case "oldest-rated":
//         sorted = [...data].sort((a, b) => a.rating - b.rating);
//         break;
//       default:
//         sorted = data;
//     }
//     setSortedData(sorted);
//     onSorted(sorted);
//   };

//   return (
//     <div>
//       <DropdownComponent
//         options={options}
//         onSelect={handleSort}
//         initialLabel={initialLabel}
//         itemIcon={itemIcon}
//       />
//     </div>
//   );
// };

// export default SortComponent;

import React, { useState } from "react";
import DropdownComponent from "./DropdownComponent";

const SortComponent = ({ 
  data, 
  onSorted, 
  options, 
  initialLabel = "Sort", 
  itemIcon 
}) => {
  const [sortedData, setSortedData] = useState(data);

  const handleSort = (key) => {
    const selectedOption = options.find((option) => option.key === key);

    if (selectedOption && selectedOption.sortFunction) {
      const sorted = selectedOption.sortFunction([...data]);
      setSortedData(sorted);
      onSorted(sorted);
    } else {
      setSortedData(data);
      onSorted(data);  // Notify parent component of sorted data
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
