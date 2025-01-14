import React from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            <input
              type="number"
              value={user.rating}
              onChange={(e) => updateRating(user.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const updateRating = (userId, rating) => {
  // Логика для обновления рейтинга пользователя
};

export default UserList;
