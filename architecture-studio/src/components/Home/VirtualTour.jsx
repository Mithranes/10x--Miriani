import React from "react";
import "./VirtualTour.scss";
import modenVilla from '/home/mithranes/Desktop/Final-Project/architecture-studio/src/assets/modern-villa.jpg'
import officeSpace from '/home/mithranes/Desktop/Final-Project/architecture-studio/src/assets/office-space.jpg'
const tours = [
  {
    id: 1,
    title: "Modern Villa",
    description: "Explore our contemporary villa project with open spaces and natural light.",
    image: modenVilla,
    link: "#",
  },
  {
    id: 2,
    title: "Office Space Design",
    description: "A modern office with ergonomic design and collaborative spaces.",
    image: officeSpace,
    link: "#",
  },
];

export default function VirtualTour() {
  return (
    <section className="virtual-tour section">
      <div className="container">
        <h2>Virtual Tours</h2>
        <div className="tour-grid">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image} alt={tour.title} />
              <div className="tour-content">
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
                <a href={tour.link} className="tour-btn">Explore</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
