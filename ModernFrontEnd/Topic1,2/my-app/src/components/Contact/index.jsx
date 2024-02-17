import React from "react";
import style from "./contact.module.css";

// import "./style.css";

function Contact() {
  console.log("style", style);

  //   return <div className="box_about">AboutUs</div>;
  return <div className={style.box}>Contact</div>;
}

export default Contact;
