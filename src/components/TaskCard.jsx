import React from "react";
import Tag from "./Tag";
import deleteIcon from "../assets/trash-bin.png";
import "./TaskCard";

const TaskCard = ({ title, tags = [], handleDelete, index }) => {
  //console.log({ title, tags });

  return (
    <div className="Task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} Tagname={tag} selected={true} />
          ))}
        </div>
        <div className="task_delete">
          <img
            src={deleteIcon}
            onClick={() => handleDelete(index)}
            className="delete_icon"
            alt="delete"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
