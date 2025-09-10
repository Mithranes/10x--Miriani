import React, { useState, useEffect } from "react";
import "./Profile.scss";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Load user info from localStorage or defaults
    const savedUser = JSON.parse(localStorage.getItem("user")) || {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "",
    };
    setUser(savedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile updated!");
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Update your account information below</p>
      </div>

      <div className="profile-form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
