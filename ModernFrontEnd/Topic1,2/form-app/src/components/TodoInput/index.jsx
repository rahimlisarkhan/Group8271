import { useFormik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { generateId } from "../../utils/generateId";

function TodoInput({ onData }) {
  const { resetForm, handleChange, handleSubmit, values } = useFormik({
    initialValues: { title: "", desc: "" },
    onSubmit: (data) => {
      data.id = generateId();

      console.log("data", data);

      onData(data);
      resetForm();
    },
  });

  return (
    <div className="p-5 w-50 mx-auto">
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          name="desc"
          value={values.desc}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="outline-success"
        size="large"
        className="w-100"
        onClick={handleSubmit}
      >
        Add
      </Button>
    </div>
  );
}

export default TodoInput;
