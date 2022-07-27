import { Field, Form, Formik } from "formik";
import React from "react";

const ToDoForm = ({ addTask }) => {
  return (
    <div>
      <Formik initialValues={{ body: "" }} onSubmit={addTask}>
        <Form>
          <Field name="body" />
          <input type="submit" value="add" />
        </Form>
      </Formik>
    </div>
  );
};

export default ToDoForm;
