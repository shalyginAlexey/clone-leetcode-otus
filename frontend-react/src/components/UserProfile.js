import React, { useState } from "react";

const UserProfile = ({ user, onSave }) => {
  const [rating, setRating] = useState(user?.rating || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...user, rating });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfile;
