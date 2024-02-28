import React, { useRef, useState } from "react";

const numbers = [1, 2, 3, 4, 5];

//? onClick
//? onChange same oninput
//? onFocus
//? onBlur
//? onLoad

function EventsComponent() {
  const [state, setState] = useState("Hello");
  const [show, setShow] = useState(false);

  const [disable, setDisable] = useState(false);

  //   const divRef = useRef();

  //   const total = numbers.reduce. ...

  function converTime() {
    console.log("....");

    return new Date().getFullYear();
  }

  function handleSubmit(e) {
    console.log("clickmee", e);

    setState("");
  }

  function handleChange(e) {
    console.log("e", e.target.value);
  }

  function handleFocus() {
    console.log('"foucs...');
    setDisable(true);
  }

  function handleBlur() {
    console.log("blur....");
    setDisable(false);
  }

  function handleEnterArea() {
    console.log("Enter....");
  }

  function handleLeaveArea() {
    console.log("Leave....");

    // divRef.current.scrollTo(500);
  }

  return (
    <div
      //   ref={divRef}
      style={{ background: "red" }}
      onMouseEnter={handleEnterArea}
      onMouseLeave={handleLeaveArea}
    >
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {disable ? <h6>xanalari doldurdugunuzdan emin olun</h6> : null}
      <br />
      <br />
      EventsComponent
      <button onClick={handleSubmit} disabled={disable}>
        Click me
      </button>
    </div>
  );
}

export default EventsComponent;
