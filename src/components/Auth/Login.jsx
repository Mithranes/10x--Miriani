import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/Auth/AuthContext.jsx";
import "./Auth.scss";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (!foundUser) {
      alert("Invalid credentials");
      return;
    }

    login(foundUser);
    navigate("/dashboard"); // redirect to Dashboard
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="auth-btn">Login</button>
          <div className="switch-auth">
            <Link to="/register">Don't have an account? Register</Link>
          </div>
        </form>
        <div className="back-home"><Link to="/">← Back to Home</Link></div>
      </div>
    </div>
  );
}
