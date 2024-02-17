import React from "react";
import style from "./Button.module.css";

function Button({ children, color = "success", size = "md", disabled }) {
  console.log("style", style);

  return (
    <button
      className={`${style.btn} ${style[color]} ${style[size]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
