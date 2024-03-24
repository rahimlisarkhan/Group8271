import { useState } from "react";

export const useBoolean = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, { setTrue, setFalse, toggle }];
};
