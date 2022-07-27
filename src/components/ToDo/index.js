import React from "react";
import Header from "./Header/index";
import ToDoForm from "./ToDoForm/index";
import ToDoList from "./ToDoList/index";

const ToDo = () => {
  return (
    <div>
      <Header />
      <ToDoForm />
      <ToDoList />
    </div>
  );
};

export default ToDo;
