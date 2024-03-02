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

function App() {
  return (
    <div>
      <Todo />
      {/* <Coins /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
