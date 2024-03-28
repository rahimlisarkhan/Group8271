import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import Navbar from "../../components/Navbar";
import HomeForm from "../../components/HomeForm";
import { useTitle } from "../../hooks/useTitle";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import { useBoolean } from "../../hooks/useBoolean";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useGlobalStore } from "../../store/global/useGlobalStore";

const initialState = {
  user: null,
  basket: null,
  count: 0,
  laoding: false,
};

function reducer(state, action) {
  console.log("state", state);
  console.log("action", action);

  switch (action.type) {
    case "INCREMENT":
      // return { ...state, count: action.payload };
      return { ...state, count: state.count + 1 };

    case "FILL_BASKET":
      // return { ...state, count: action.payload };
      return { ...state, basket: action.payload };

    default:
      return state;
  }
}

function Home() {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  useTitle("Seymur");
  // const { cord } = useCurrentLocation();

  const handleNewIncrement = () => {
    // dispatch({ type: "INCREMENT", payload: 5 });
    // dispatch({ type: "INCREMENT", payload: state.count + 1 });
    dispatch({ type: "INCREMENT" });
  };

  // const { handleIncrementBasket } = useGlobalStore();

  const { value, handleSetStore } = useLocalStorage("name");

  const [show, showMethods] = useBoolean(true);
  // const [menu, menuMethods] = useBoolean();

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
      <h1>Home {state.count}</h1>
      <button onClick={showMethods.setTrue}>True</button>
      <button onClick={showMethods.setFalse}>False</button>
      {/* <button onClick={handleIncrementBasket}>Increment basket</button> */}
      <button onClick={handleNewIncrement}>Increment</button>

      <button onClick={showMethods.toggle}>Toggle</button>
      <button onClick={() => handleSetStore("Siri", Math.random())}>
        Store
      </button>

      {/* <HomeForm title="AboutUS" /> */}
    </div>
  );
}

export default Home;
