import React from "react";
import "./TestimonialsSection.scss";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Homeowner",
    text: "The team transformed our house into a modern masterpiece. Their attention to detail is incredible.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "Business Owner",
    text: "Our office redesign improved both aesthetics and productivity. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Sofia Lee",
    role: "Client",
    text: "Professional, creative, and punctual. The project exceeded all expectations.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <img src={t.avatar} alt={t.name} className="avatar" />
              <p className="testimonial-text">"{t.text}"</p>
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
