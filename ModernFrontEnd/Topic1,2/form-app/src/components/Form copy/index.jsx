import React from "react";

import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const crtProduct = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(crtProduct)}>
      <input {...register("firstName")} />
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register("age", { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}

export default Form;
