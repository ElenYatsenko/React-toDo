import React from "react";
import styles from "./ToDoList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const ToDoList = ({ tasks, deleteTask, setDoneTask }) => {
  return (
    <ul className={styles.todo_list}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.todo}>
          <span className={task.isDone ? styles.completed : !styles.completed}>
            {task.body}
          </span>
          <button
            onClick={() => {
              setDoneTask(task.id);
            }}
            className={styles.trash_btn}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            onClick={() => {
              deleteTask(task.id);
            }}
            className={styles.complete_btn}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
