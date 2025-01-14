import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to LeetCode Interviews</h1>
      <nav>
        <ul>
          <li>
            <Link href="/tasks" legacyBehavior>
              <a>Task List</a>
            </Link>
          </li>
          <li>
            <Link href="/users" legacyBehavior>
              <a>User List</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
