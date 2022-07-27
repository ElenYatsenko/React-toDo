import { Field, Form, Formik } from "formik";
import React from "react";
import UseToDo from "../../../hooks/useToDo";

const ToDoForm = () => {
  const { tasks, addTask, setDoneTask, deleteTask } = UseToDo([
    {
      id: Date.now(),
      body: "test task",
      isDone: false,
    },
  ]);
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
