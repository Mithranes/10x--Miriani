import React from "react";
import "./ServicesSection.scss";

const services = [
  { icon: "🏛️", title: "Architectural Design", text: "Innovative design solutions for modern spaces." },
  { icon: "🖌️", title: "Interior Design", text: "Beautiful and functional interiors for every client." },
  { icon: "🌿", title: "Sustainable Design", text: "Eco-friendly solutions for a better tomorrow." },
];

export default function ServicesSection() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
