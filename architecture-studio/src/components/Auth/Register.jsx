import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.scss";

export default function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === email)) {
      alert("Email already exists!");
      return;
    }
    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required value={fullName} onChange={e => setFullName(e.target.value)} />
          <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="auth-btn">Register</button>
          <div className="switch-auth"><Link to="/login">Already have an account? Login</Link></div>
        </form>
        <div className="back-home"><Link to="/">← Back to Home</Link></div>
      </div>
    </div>
  );
}
