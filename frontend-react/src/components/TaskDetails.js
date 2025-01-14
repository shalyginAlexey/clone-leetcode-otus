import React from "react";

const TaskDetails = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <h3>Examples:</h3>
      <pre>{task.examples}</pre>
      <h3>Code Editor:</h3>
      {/* Интерактивный редактор кода можно добавить позже */}
    </div>
  );
};

export default TaskDetails;
