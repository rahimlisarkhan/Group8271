import React from "react";
import style from "./aboutus.module.css";
import ImageAyaz1 from "../../assets/images/image1.svg";
import { data, time } from "../../constants/data";
import moviesData from "../../constants/movies.json";

// import "./style.css";

const inlineStyle = { color: "red" };

function AboutUs() {
  console.log("style", style);

  console.log("data", data);
  console.log("moviesData", moviesData);
  console.log("time", time);

  //   return <div className="box_about">AboutUs</div>;

  return (
    <div className={`${style.box} ${style.box_size}`}>
      AboutUs
      <img src={ImageAyaz1} className={style.img} alt="sdaaasdsa" />
      <img
        alt="sdsadsa"
        className={style.img}
        src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg"
      />
      <p style={inlineStyle}>Lorem</p>
    </div>
  );
}

export default AboutUs;
