import React from "react";
import "./ProjectsSection.scss";
import luxury from "../assets/luxury.jpg"

const projects = [
  { id: 1, title: "Modern Villa", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
  { id: 2, title: "Urban Office", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80" },
  { id: 3, title: "Luxury Apartment", image: luxury },
  { id: 4, title: "Eco-friendly House", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80" },
];

export default function ProjectsSection() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
