import { createContext, useReducer, useState } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Siri" });
  const [basketCount, setBasketCount] = useState(0);

  useReducer();

  const handleIncrementBasket = () => {
    setBasketCount((prev) => prev + 1);
  };

  const values = {
    user,
    setUser,
    basketCount,
    handleIncrementBasket,
  };

  const Component = globalContext.Provider;

  return <Component value={values}>{children}</Component>;
};
