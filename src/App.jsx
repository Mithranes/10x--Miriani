import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth/AuthContext"; 
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
