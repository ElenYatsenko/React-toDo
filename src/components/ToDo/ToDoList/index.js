import React from "react";
import UseToDo from "../../../hooks/useToDo";

const ToDoList = () => {
  const { tasks, addTask, setDoneTask, deleteTask } = UseToDo([
    {
      id: Date.now(),
      body: "test task",
      isDone: false,
    },
  ]);
  console.log(tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.body}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
