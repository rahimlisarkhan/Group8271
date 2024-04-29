//? Type
//? Number =integer ve float
//?String = stringlerde
//? Boolean = booleanlarda
//? Null
//? Undifened
//? any

import { User } from "@/types/books";

// let a:number | string = 5

// a = true

export const generateTime = (a: number, b: number, c?: User): string => {
  const result = `${a.toFixed(2)}:${b}`;

  return result;
};
