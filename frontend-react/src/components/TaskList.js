import React from "react";
import { Link } from "react-router-dom";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
            <button onClick={() => addTag(task.id)}>Add Tag</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const addTag = (taskId) => {
  // Логика для добавления тега
};

export default TaskList;
