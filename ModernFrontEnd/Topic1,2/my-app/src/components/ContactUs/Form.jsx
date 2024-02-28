import React, { useState } from "react";
import TextInput from "../TextInput";
import Button from "../Button";

const initialForm = {
  fullname: "",
  password: "",
  email: "",
  sallary: "",
};

function Form(props) {
  //   const [fullname, setFullname] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [form, setForm] = useState(initialForm);

  const [showPassword, setShowPassword] = useState(false);

  //   const disableBtn = !fullname.trim().length || !email.trim().length;

  function handleSubmit() {
    console.log("form", form);

    form.id = (Math.random() * Date.now()).toString();

    props.onSubmit(form);
    setForm(initialForm);

    // const form = {
    //   fullname,
    //   email,
    //   password,
    // };
    // console.log("form", form);
    // setFullname("");
    // setEmail("");
    // setPassword("");
  }

  console.log('"showPassword', showPassword);

  const handleFormChange = (e) => {
    const dynamicName = e.target.name;
    const dynamicValue = e.target.value;

    let newForm = { ...form };

    newForm[dynamicName] = dynamicValue;

    console.log("newForm", newForm);

    setForm(newForm);
  };

  const handleShowPassword = () => {
    // const newValue = !showPassword;

    // setShowPassword(newValue);

    setShowPassword((prev) => !prev);
  };

  console.log("");

  return (
    <div className="">
      <TextInput
        value={form?.fullname}
        placeholder="Fullname"
        name="fullname"
        onChange={handleFormChange}
      />
      <br />

      {!form?.fullname?.trim()?.length && <span> Bura bos ola bilmez</span>}
      <br />

      <TextInput
        value={form?.email}
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleFormChange}
      />
      <br />

      <TextInput
        value={form?.sallary}
        placeholder="Salary"
        name="sallary"
        onChange={handleFormChange}
      />
      <br />

      <TextInput
        value={form?.password}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        name="password"
        onChange={handleFormChange}
      />

      <br />

      {/* <button onClick={()=>setShowPassword(!setShowPassword)}>gizlet</button> */}
      {/* <button onClick={() => setShowPassword((prevValue) => !prevValue)}> */}
      {/* <Button onClick={handleShowPassword} size="lg">
        {showPassword ? "gizlet" : "goster"}
      </Button> */}
      <br />

      {/* {!email.trim().length && <span> Bura bos ola bilmez</span>} */}

      <br />

      <Button
        //   disabled={disableBtn}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </div>
  );
}

export default Form;

// let myObj = {
//     age:33
// }

// // myObj.age = 45
// // myObj["age"] = 45

// console.log('myObj',myObj);

// const newData = data.filter(item=>item.id !==id)
// const newData = data.filter((_ ,index)=>index !==i)
