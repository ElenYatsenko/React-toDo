import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { SCHEMA_ENTER } from "../../../utils/schemaValidation";
import styles from "./ToDoForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const ToDoForm = ({ addTask }) => {
  const onSubmit = (value, formikBag) => {
    formikBag.resetForm();
    addTask(value);
  };
  return (
    <div className={styles.form_todo}>
      <Formik
        initialValues={{ body: "", isDone: false }}
        validationSchema={SCHEMA_ENTER}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name="body" className={styles.form_input} />
          <ErrorMessage name="body" component="div" className={styles.error} />
          <button type="submit" value="text" className={styles.form_button}>
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ToDoForm;
