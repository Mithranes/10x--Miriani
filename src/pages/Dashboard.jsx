import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.scss";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/login");
      return;
    }
    setUser(loggedInUser);

    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  const handlePayment = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings[index].paid = true;
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    alert(`Booking for "${updatedBookings[index].service}" is now paid!`);
  };

  if (!user) return null; // Wait until user is loaded

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user.fullName}</h1>
        <p>Here you can view your profile, services, and bookings.</p>
        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-links">
        <Link to="/services" className="btn">
          Explore Services
        </Link>
        <Link to="/profile" className="btn">
          My Profile
        </Link>
      </div>

      <div className="dashboard-bookings">
        <h2>My Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          <ul>
            {bookings.map((b, index) => (
              <li key={index}>
                <strong>{b.service}</strong> booked by {b.name} ({b.email})<br />
                <em>Payment Method:</em> {b.paymentMethod} |{" "}
                <em>Status:</em>{" "}
                <span style={{ color: b.paid ? "green" : "red" }}>
                  {b.paid ? "Paid" : "Pending"}
                </span><br />
                <em>Price:</em> ${b.price} | <em>Booked At:</em> {b.bookedAt}<br />
                {!b.paid && (
                  <button
                    className="btn pay-btn"
                    onClick={() => handlePayment(index)}
                  >
                    Pay Now
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
