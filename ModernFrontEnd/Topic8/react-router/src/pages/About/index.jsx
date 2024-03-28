import React, { useState } from "react";
import { useEffect, useCallback, useMemo } from "react";
import Navbar from "../../components/Navbar";
import { Checkbox } from "../../components/CheckBox";
import { useTitle } from "../../hooks/useTitle";
import { useGlobalStore } from "../../store/global/useGlobalStore";

// const arr = [1, 2, 34, 5];

function About(props) {
  // const  {push} = useRouter()

  const { basketCount } = useGlobalStore();

  useTitle("About Seymur");

  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);

  const arr = useMemo(() => {
    return [1, 2, 34, 5, state];
  }, [state]);

  // const arr = useMemo(() => {
  //   return [1, 2, 34, 5, state];
  // }, []);

  const handleCount = () => {
    setState((prev) => prev + 1);
  };

  const handleError = useCallback(() => {
    //? Bize callback verir
    console.log("errr...", state);

    // axios({ method: "GET", url: `blog/${state}` });
  }, [state]);

  const handleSuccess = useCallback(() => {
    //? Bize callback verir
    console.log("Success...");
  }, []);

  // const handleError = () => {
  //   console.log("errr...");
  // };

  return (
    <div>
      <Navbar />
      <h1>About :{basketCount}</h1>
      <h2>{arr}</h2>
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <button onClick={handleCount}>Count: {state}</button>
      <button onClick={handleError}>Error</button>
      <button onClick={handleSuccess}>Success</button>
      {/* <button onClick={props.back}>Goback</button>
      <button onClick={() => props.push("/blog")}>Blog</button> */}
    </div>
  );
}

// export default withRouter(About);
export default About;
