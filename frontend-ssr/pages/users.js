import React from "react";
import Link from "next/link";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <>
      <div className={styles["home-button"]}>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
      </div>
      <div className={styles["user-list"]}>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`} legacyBehavior>
                <a>{user.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch users from your API
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default UserList;
