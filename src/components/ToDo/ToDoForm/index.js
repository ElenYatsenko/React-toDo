import { Field, Form, Formik } from "formik";
import React from "react";
import styles from "./ToDoForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const ToDoForm = ({ addTask }) => {
  return (
    <div className={styles.form_todo}>
      <Formik initialValues={{ body: "" }} onSubmit={addTask}>
        <Form>
          <Field name="body" className={styles.form_input} />
          <button type="submit" className={styles.form_button}>
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ToDoForm;
