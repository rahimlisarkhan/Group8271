import React, { useEffect, useState } from "react";
import { withFormWrapper } from "../HOC/withFormWrapper";

function HomeForm(props) {
  console.log("props", props);

  //   const [form, setForm] = useState({});
  //   const [show, setShow] = useState(false);

  //   useEffect(() => {
  //     // Your logic
  //   }, []);

  //   const handleSubmit = () => {
  //     console.log("handleSubmit Logic....");
  //   };

  //   const handleChange = () => {
  //     console.log("handleChange Logic....");
  //   };

  //   const handleTime = () => {
  //     console.log("handleTime Logic....");
  //   };

  const handleConver = () => {};

  return (
    <div>
      HomeForm
      <br />
      <input placeholder="name" />
      <input placeholder="age" />
      <br />
      <hr />
      <button>Submit</button>
      <button>Change</button>
    </div>
  );
}

// export default withFexDriver(withFormWrapper(HomeForm));
export default withFormWrapper(HomeForm);
