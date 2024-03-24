import React, { useEffect, useState } from "react";
import { withFormWrapper } from "../HOC/withFormWrapper";

const paragraph = `<html> <body> <p>In Azerbaijan, you can reach me at +994511234567 for general inquiries, or if it's urgent, try +994551234365. For business matters, contact me at +994501734567. Remember to dial the country code +994 before the operator code and phone number for all calls within Azerbaijan. Our office numbers are +994461234567 and +994471234567. If you're having trouble reaching us, our support team is available at +994491234567. Thank you! </p> </body> </html>`;

const word = "HeLlo";

// const newWord = word.replaceAll("l", "d");
const newWord = word.replace(/l/gi, "d");

console.log("newWord", newWord);

const regex = /\+994\d{2}\d{7}/g;

const phoneNumbers = paragraph.match(regex);
// console.log(phoneNumbers);

function ContactForm(props) {
  console.log("ContactForm props", props);

  const [email, setEmail] = useState("2112seymur@gmail.ru");
  const [phone, setPhone] = useState("2112seymur@gmail.ru");

  // const regex = new RegExp() //? //
  // const arr = new Array(12,3,4) //? [12,3,4]

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
  const regexPhone = /^\+994\d{2}\d{7}$/gi;

  const result = regexEmail.test(email);
  const result2 = regexPhone.test(phone);

  // console.log("result2", result2);

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
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="phone"
        value={phone}
        type="phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <hr />
      <button disabled={!result}>Submit</button>
    </div>
  );
}

export default withFormWrapper(ContactForm);
