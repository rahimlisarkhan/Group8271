import React from "react";

import styles from "./TextInput.module.css";

function TextInput({ value, onChange, placeholder, ...props }) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default TextInput;
