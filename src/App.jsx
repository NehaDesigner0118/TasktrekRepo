import React, { useState, useEffect } from "react";
import Taskform from "./components/Taskform";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "../src/assets/target.png";
import DoingIcon from "../src/assets/star.png";
import DoneIcon from "../src/assets/check.png";

const savedTasks = localStorage.getItem("tasks");
console.log(savedTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(savedTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const NewIndex = tasks.filter((task, index) => index !== taskIndex);
    setTasks(NewIndex);
  };

  return (
    <div className="app">
      <Taskform setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon={TodoIcon}
          tasks={tasks}
          status={"todo"}
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={DoingIcon}
          tasks={tasks}
          status={"doing"}
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={DoneIcon}
          tasks={tasks}
          status={"done"}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
