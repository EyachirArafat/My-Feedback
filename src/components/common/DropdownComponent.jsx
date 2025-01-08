import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoClose } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const DropdownComponent = ({ options, onSelect, initialLabel, itemIcon }) => {
  const [isActive, setIsActive] = useState(false);

  const [selectedOption, setSelectedOption] = useState(
    initialLabel || "Select"
  );

  const handleOptionClick = (key, label) => {
    setSelectedOption(label);
    onSelect(key);
    setIsActive((prev) => !prev);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          onClick={handleOptionClick}
          className={`border-2 mt-2 sm3:h-8 h-7 rounded-full ${
            isActive ? "bg-[#5E5E5E] text-white" : "bg-white border-[#5E5E5E]"
          }`}
        >
          <span>{itemIcon}</span>
          <span>{selectedOption}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Options">
        <DropdownItem
          key="close"
          onPress={() => setSelectedOption(initialLabel)}
        >
          <div className="flex justify-center items-center hover:bg-red-600 hover:text-white transition-all duration-200">
            <IoClose size={16} className="mr-2" /> <span>Reset</span>
          </div>
        </DropdownItem>
        {options.map(({ key, label, icon }) => (
          <DropdownItem key={key} onPress={() => handleOptionClick(key, label)}>
            <div className="flex flex-wrap items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {label}
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownComponent;
