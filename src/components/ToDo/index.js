import React from "react";
import { useToDo } from "../../hooks";
import Header from "./Header/index";
import ToDoForm from "./ToDoForm/index";
import ToDoList from "./ToDoList/index";

const ToDo = () => {
  const { tasks, addTask, setDoneTask, deleteTask } = useToDo([
    {
      id: Date.now(),
      body: "test task",
      isDone: false,
    },
  ]);
  return (
    <div>
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        setDoneTask={setDoneTask}
      />
    </div>
  );
};

export default ToDo;
