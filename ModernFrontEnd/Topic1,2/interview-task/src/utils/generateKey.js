import { md5 } from "js-md5";

export function generateKey() {
  const date = new Date();
  const passwordName = "Valantis_";

  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  const convertM = m < 10 ? "0" + m : m;
  const convertD = d < 10 ? "0" + d : d;

  const password = passwordName + y + convertM + convertD;

  const result = md5(password);

  return result;
}
