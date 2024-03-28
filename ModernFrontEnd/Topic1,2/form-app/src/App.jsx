import HeartIcon from "./assets/icons/heart.svg";
import { FaBeer, FaEye, FaRegEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";
import Card from "./components/Card";
import ProductCard from "./components/ProductCard";
import { Alert } from "react-bootstrap";
import Form from "./components/Form";
import Coins from "./components/Coins";
import Todo from "./components/Todo";

import crypto from "crypto";

// Now you can use the headers object in your API request
console.log(headers);

function App() {
  // Calculate the MD5 hash
  const hash = crypto
    .createHash("md5")
    .update("Valantis_20240304")
    .digest("hex");

  // Create the headers object with the X-Auth header
  const headers = {
    "X-Auth": hash,
  };

  
  return (
    <div>
      <Todo />
      {/* <Coins /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
