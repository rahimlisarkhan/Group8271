import { useEffect, useState } from "react";

export const useLocalStorage = (defaultKey) => {
  const [value, setValue] = useState();

  useEffect(() => {
    const v = localStorage.getItem(defaultKey);
    setValue(v);
  }, []);

  const handleSetStore = (key, value) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  return { handleSetStore, value };
};
