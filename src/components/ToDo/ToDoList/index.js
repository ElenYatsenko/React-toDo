import React from "react";
import UseToDo from "../../../hooks/useToDo";

const ToDoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.body}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
