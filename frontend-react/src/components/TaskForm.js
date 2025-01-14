import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ task, onSave }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [examples, setExamples] = useState(task?.examples || "");
  const [difficulty, setDifficulty] = useState(task?.difficulty || "");
  const [tags, setTags] = useState(task?.tags || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, examples, difficulty, tags });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Title:</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Description:</label>
        <textarea
          className="form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Examples:</label>
        <textarea
          className="form-textarea"
          value={examples}
          onChange={(e) => setExamples(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Difficulty:</label>
        <input
          type="text"
          className="form-input"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Tags:</label>
        <input
          type="text"
          className="form-input"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="form-button">
        Save
      </button>
    </form>
  );
};

export default TaskForm;
