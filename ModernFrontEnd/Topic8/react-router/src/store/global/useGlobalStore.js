import { useContext } from "react";
import { globalContext } from "./GlobalProvider";

export const useGlobalStore = () => {
  const values = useContext(globalContext);

  return values;
};
