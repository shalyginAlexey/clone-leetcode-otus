import React from "react";
import Link from "next/link";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks }) => {
  return (
    <>
      <div className={styles["home-button"]}>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
      </div>
      <div className={styles["task-list"]}>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Link href={`/tasks/${task.id}`} legacyBehavior>
                <a>{task.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch tasks from your API
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
}

export default TaskList;
