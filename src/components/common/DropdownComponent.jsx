import React, { useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";

const DropdownComponent = ({ options, onSelect, initialLabel, itemIcon }) => {
  const [selectedLabel, setSelectedLabel] = useState(initialLabel || "Select");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState(false)

  const handleSelect = (key, label) => {
    setSelectedLabel(label);
    onSelect(key); // Trigger the callback with the selected key
    setIsDropdownOpen(true);
    setIsActive((prev) => !prev);
  };

  return (
    <Dropdown className="" isOpen={isDropdownOpen}>
      <DropdownTrigger>
        <Button
          onClick={handleSelect}
          className={`border-2 mt-2 sm3:h-8 h-7 rounded-full ${
            isActive
              ? "bg-[#5E5E5E] text-white"
              : "bg-white border-[#5E5E5E]"
          }`}
        >
          <span>{itemIcon}</span>
          <span>{selectedLabel}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {options.map(({ key, label }) => (
          <DropdownItem key={key} onPress={() => handleSelect(key, label)}>
            {label}
          </DropdownItem>
        ))}
        <DropdownItem
          key="close"
          onPress={() => setIsDropdownOpen(false)}
        >
          <IoClose size={18} />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownComponent;
