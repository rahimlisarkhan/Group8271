import React, { useState } from "react";
import styles from "./advance.module.css";

const arr = ["Tofiq", "Seymur", "Aydan"];

function AdvanceComponent() {
  const [show, setShow] = useState(false); // [false,f]

  const [index, setIndex] = useState(0);

  const [text, setText] = useState("Hello");

  console.log("show", show);
  console.log("index", arr[index]);

  const handleShowPassword = () => {
    console.log("click me");

    const newShow = !show;
    setShow(newShow);
  };

  const hadnlePrevIndex = () => {
    const newIndex = 0 == index ? 0 : index - 1;

    setIndex(newIndex);
  };

  const hadnleNextIndex = () => {
    const newIndex = arr.length - 1 == index ? index : index + 1;
    setIndex(newIndex);
  };

  return (
    <div>
      <hr />
      AdvanceComponent
      {text}
      <h2 className={show ? styles.danger : styles.warning}>
        Random Name:{arr[index]}
      </h2>
      <button onClick={() => setText("Goodbye")}> Say hello</button>
      <button onClick={handleShowPassword}>Show</button>
      {/* {show ? (
        <div>
          <button onClick={hadnlePrevIndex}>Prev</button>
          <button onClick={hadnleNextIndex}>Next</button>
        </div>
      ) : null} */}
      {show && (
        <div>
          <button onClick={hadnlePrevIndex}>Prev</button>
          <button onClick={hadnleNextIndex}>Next</button>
        </div>
      )}
      <hr />
    </div>
  );
}

export default AdvanceComponent;
