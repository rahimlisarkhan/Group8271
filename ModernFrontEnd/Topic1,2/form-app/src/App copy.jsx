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

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const Icon = showPassword ? FaEye : FaRegEyeSlash;

  return (
    <div>
      <h1>
        Form
        {/* <img src={HeartIcon} />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          <Icon />
        </span>
        <FaRegHeart style={{ color: "red" }} />
        <IoMdHeartEmpty />
        <FaRegUser />
        <FaBeer /> */}
        {/* <Alert variant="danger">This is a alert—check it out!</Alert>
        <ProductCard
          title="Monitor"
          subtitle="$999"
          btnTitle="Read more"
          photo={
            "https://strgimgr.umico.az/sized/840/443768-64e298998f74e67c957a383a7660100a.jpg"
          }
        /> */}
        {/* <Card
          title="Monitor"
          subtitle="$999"
          btnTitle="Read more"
          photo={
            "https://strgimgr.umico.az/sized/840/443768-64e298998f74e67c957a383a7660100a.jpg"
          }
        /> */}
      </h1>
    </div>
  );
}

export default App;
