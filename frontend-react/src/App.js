import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
import TaskForm from "./components/TaskForm";
import UserProfile from "./components/UserProfile";
import TaskList from "./components/TaskList";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  const tasks = [
    {
      id: 1,
      title: "Sample Task 1",
      description: "Description 1",
      examples: "Examples 1",
      difficulty: "Easy",
      tags: "tag1",
    },
    {
      id: 2,
      title: "Sample Task 2",
      description: "Description 2",
      examples: "Examples 2",
      difficulty: "Medium",
      tags: "tag2",
    },
  ];

  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", rating: 5 },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", rating: 4 },
  ];

  return (
    <Router>
      <div className="container">
        <header>
          <h1>LeetCode Interviews</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Welcome to LeetCode Interviews</h2>
                <TaskForm />
              </>
            }
          />
          <Route path="/tasks" element={<TaskList tasks={tasks} />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/users" element={<UserList users={users} />} />
          <Route path="/users/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
