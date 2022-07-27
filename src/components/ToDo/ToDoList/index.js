import React from "react";
import UseToDo from "../../../hooks/useToDo";

const ToDoList = ({ tasks, deleteTask, setDoneTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.body}
          <> </>
          <span
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            -
          </span>
          <> </>
          <span
            onClick={() => {
              setDoneTask(task.id);
            }}
          >
            +
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
