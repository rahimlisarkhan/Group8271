import React from "react";
import MenuList from "../Menu/MenuList";
import MenuItem from "../Menu/MenuItem";

function LeftSide() {
  return (
    <div className="bg-green-100 border-r-2 p-6 border-green-800 w-full lg:w-1/5 ">
      <MenuList className="flex-col">
        <MenuItem className="text-green-800">Topic 1</MenuItem>
        <MenuItem className="text-green-800">Topic 2</MenuItem>
        <MenuItem className="text-green-800">Topic 3</MenuItem>
        <MenuItem className="text-green-800">Topic 4</MenuItem>
        <MenuItem className="text-green-800">Topic 5</MenuItem>
        <MenuItem className="text-green-800">Topic 6</MenuItem>
      </MenuList>
    </div>
  );
}

export default LeftSide;
