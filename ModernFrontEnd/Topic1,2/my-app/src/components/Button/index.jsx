import React from "react";
import style from "./Button.module.css";

function Button({
  children,
  color = "success",
  size = "md",
  disabled,
  onClick,
}) {
  return (
    <button
      className={`${style.btn} ${style[color]} ${style[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
