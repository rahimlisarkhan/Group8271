import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calc from "./components/Calc";
import LifeComponent from "./components/LifeComponent";
import Movies from "./components/Movies";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Movies />
      {/* {show && <LifeComponent />} */}

      {/* <button onClick={() => setShow((prev) => !prev)}>Show</button> */}

      {/* <Calc title="Calc App" /> */}
    </>
  );
}

export default App;
