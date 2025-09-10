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
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first to book a service.");
      navigate("/login"); // redirect to login page
      return;
    }

    // If logged in, go to checkout page with service ID
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
