import React from "react";

function MenuItem({ children, className, ...attr }) {
  return (
    <li
      {...attr}
      className={`text-base text-green-50 font-semibold transition-all hover:text-orange-300 cursor-pointer ${className}`}
    >
      {children}
    </li>
  );
}

export default MenuItem;
