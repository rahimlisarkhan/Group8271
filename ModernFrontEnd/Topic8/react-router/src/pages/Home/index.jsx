import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import HomeForm from "../../components/HomeForm";
import { useTitle } from "../../hooks/useTitle";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import { useBoolean } from "../../hooks/useBoolean";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Home() {
  useTitle("Seymur");
  // const { cord } = useCurrentLocation();

  const { value, handleSetStore } = useLocalStorage("name");

  console.log(value);

  const [show, showMethods] = useBoolean(true);
  // const [menu, menuMethods] = useBoolean();

  console.log("show", show);

  // const [state, setState] = useState(false);

  // const setTrue = () => {
  //   setState(true);
  // };

  // const setFalse = () => {
  //   setState(false);
  // };

  // const toggle = () => {
  //   setState((prev) => !prev);
  // };

  // console.log("state", state);

  // const [cord, setCord] = useState({ latitude: 0, longitude: 0 });
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   window.navigator.geolocation.getCurrentPosition(({ coords }) => {
  //     setCord({ latitude: coords.latitude, longitude: coords.longitude });
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <button onClick={showMethods.setTrue}>True</button>
      <button onClick={showMethods.setFalse}>False</button>
      <button onClick={showMethods.toggle}>Toggle</button>
      <button onClick={() => handleSetStore("Siri", Math.random())}>
        Store
      </button>
      {/* <HomeForm title="AboutUS" /> */}
    </div>
  );
}

export default Home;
