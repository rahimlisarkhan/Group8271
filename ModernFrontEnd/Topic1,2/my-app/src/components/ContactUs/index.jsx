import React, { useRef, useState } from "react";

function ContactUs() {
  const [text, setText] = useState("");

  const inputRef = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  console.log("inputRef", inputRef);

  function handleSearch(e) {
    const value = e.target.value;
    setText(value);
  }

  function handleSubmit() {
    console.log("text", text);

    // el.value = ""
    setText("");

    console.log("inputRef", inputRef);

    // inputRef.current?.focus();
    inputRef.current?.blur();

    console.log(inputRef.current.value);

    inputRef.current.value = "";
  }

  return (
    <div>
      ContactUs
      <br />
      {/* For Search Area */}
      <input placeholder="Search" value={text} onChange={handleSearch} />
      <br />
      <h2>{text.length}/100</h2>
      <h3>{text.length < 10 ? "Asagi guvenlik" : "Parol eladir!"}</h3>
      <hr />
      {/* For Search Area with Ref */}
      <input ref={inputRef} placeholder="Search" />
      {/* <input ref={inputRef2} placeholder="fullname" />
      <input ref={inputRef3} placeholder="age" /> */}
      <hr />
      <br />
      <br />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default ContactUs;
