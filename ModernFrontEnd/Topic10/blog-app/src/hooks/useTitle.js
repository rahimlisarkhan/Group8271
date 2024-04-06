import { useLayoutEffect } from "react";

export const useTitle = (title = "My Company") => {
  useLayoutEffect(() => {
    document.title = title;
  }, [title]);
};
