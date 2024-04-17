import React from "react";

function MenuList({ children, className }) {
  return <ul className={`flex items-center gap-3 ${className}`}>{children}</ul>;
}

export default MenuList;
