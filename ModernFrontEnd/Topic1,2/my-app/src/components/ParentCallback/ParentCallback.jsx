import React from "react";
import ChildCallback from "./ChildCallback";

function ParentCallback() {
  function handleTrash(text) {
    console.log("Zibili atdi:", text);
  }

  return (
    <div>
      <hr />
      ParentCallback
      <ChildCallback title="Hello" handleTrash={handleTrash} />
      <hr />
    </div>
  );
}

export default ParentCallback;
