import React, { useState } from "react";

function Form() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const disableBtn = !fullname.trim().length || !email.trim().length;

  function handleSubmit() {
    const form = {
      fullname,
      email,
      password,
    };
    console.log("form", form);

    setFullname("");
    setEmail("");
    setPassword("");
  }

  console.log('"showPassword', showPassword);

  const handleShowPassword = () => {
    // const newValue = !showPassword;

    // setShowPassword(newValue);

    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <input
        value={fullname}
        placeholder="Fullname"
        onChange={(e) => setFullname(e.target.value)}
      />
      <br />

      {!fullname.trim().length && <span> Bura bos ola bilmez</span>}
      <br />

      <input
        value={email}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        value={password}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <button onClick={()=>setShowPassword(!setShowPassword)}>gizlet</button> */}
      {/* <button onClick={() => setShowPassword((prevValue) => !prevValue)}> */}
      <button onClick={handleShowPassword}>
        {showPassword ? "gizlet" : "goster"}
      </button>
      <br />

      {!email.trim().length && <span> Bura bos ola bilmez</span>}

      <br />

      <button disabled={disableBtn} onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}

export default Form;
