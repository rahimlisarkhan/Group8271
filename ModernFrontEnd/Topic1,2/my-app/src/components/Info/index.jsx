import React from "react";

function Info(props) {
  return (
    <div>
      <span>Test2</span>

      {props.children}

      <span>Test5</span>
    </div>
  );
}

export default Info;
