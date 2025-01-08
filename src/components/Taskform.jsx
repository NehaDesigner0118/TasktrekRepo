import React, { useState } from "react";
import "./Taskform.css";
import Tag from "../components/Tag";

const Taskform = ({ setTasks }) => {
  // Destructuring props correctly
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (checkTag(tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => ({
        ...prev,
        tags: filterTags,
      }));
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  //console.log(taskData.tags);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("data", taskData);

    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <div className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          value={taskData.task}
          className="task_input"
          placeholder="Enter the task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              Tagname="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              Tagname="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              Tagname="Javascript"
              selectTag={selectTag}
              selected={checkTag("Javascript")}
            />
            <Tag
              Tagname="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              className="form_status"
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Taskform;
