import React from "react";

function ChildCallback(props) {
  console.log("props", props);

  function handleClick() {
    console.log("click...");

    props.handleTrash("Murad");
  }

  return (
    <div>
      ChildCallback
      <button onClick={handleClick}>Click zibili at</button>
    </div>
  );
}

export default ChildCallback;
