import { useState } from "react";

const UseToDo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);

  return {
    tasks,
    addTask: (value) => {
      const newTask = {
        id: Date.now(),
        body: value.body,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
    },
    setDoneTask: () => {},
    deleteTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
  };
};

export default UseToDo;
