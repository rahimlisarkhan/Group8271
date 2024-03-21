import React, { useEffect, useState } from "react";
import { withFormWrapper } from "../HOC/withFormWrapper";

function ContactForm(props) {
  console.log("ContactForm props", props);

  // const [form, setForm] = useState({});
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   // Your logic
  // }, []);

  // const handleSubmit = () => {
  //   console.log("handleSubmit Logic....");
  // };

  // const handleChange = () => {
  //   console.log("handleChange Logic....");
  // };

  // const handleTime = () => {
  //   console.log("handleTime Logic....");
  // };

  return (
    <div>
      ContactForm
      <br />
      <input placeholder="name" />
      <input placeholder="age" />
      <br />
      <hr />
      <button>Submit</button>
    </div>
  );
}

export default withFormWrapper(ContactForm);
