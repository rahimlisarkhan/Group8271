import { useId } from "react";

export function Checkbox() {
  const id = useId();

  //   console.log("id", id);

  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react" />
      <br />
    </>
  );
}
