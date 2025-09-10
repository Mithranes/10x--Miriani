// src/pages/Services.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.scss";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    { id: 1, name: "Interior Design", price: "$500" },
    { id: 2, name: "Architectural Planning", price: "$1200" },
    { id: 3, name: "Landscape Design", price: "$800" },
  ];

  const handleBook = (serviceId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first to book a service.");
      navigate("/login");
      return;
    }

    // Store a temporary booking with user info (paid = false)
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({
      serviceId,
      service: services.find((s) => s.id === serviceId).name,
      price: services.find((s) => s.id === serviceId).price.replace("$", ""),
      name: user.fullName || user.email,
      email: user.email,
      paymentMethod: null,
      paid: false,
      bookedAt: new Date().toLocaleString(),
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Navigate to Checkout for payment
    navigate(`/checkout/${serviceId}`);
  };

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.name}</h2>
            <p>Price: {service.price}</p>
            <button className="btn" onClick={() => handleBook(service.id)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
