import React from "react";

import { useFormik } from "formik";
import { Button } from "react-bootstrap";

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const initialValues = {
  firstName: "",
  email: "",
  age: "",
};

function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit: crtProduct,
    validationSchema: SignupSchema,
  });

  console.log("formik", formik);

  async function crtProduct(data) {
    console.log("data----", data);

    // await fetch("https://", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });

    formik.resetForm();
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <input
        name="age"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      <br />

      <input
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />

      {formik.errors.email && <span>{formik.errors.email}</span>}
      <br />
      <br />
      <Button type="submit">Send</Button>
    </form>
  );
}

export default Form;
