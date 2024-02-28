import React from "react";

function Employees({ list }) {
  return (
    <div>
      Employees
      {list?.map((item, index) => (
        <div key={"employee" + index}>
          <hr />
          <p>{item.fullname}</p>
          <p>{item.email}</p>
          <p>{item.sallary}</p>
        </div>
      ))}
    </div>
  );
}

export default Employees;
