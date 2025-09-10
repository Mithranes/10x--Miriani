// src/pages/About.jsx
import React from "react";
import "./About.scss";
import vision from "../assets/vision.jpeg";
import mission from "../assets/mission.jpeg";
import projects from "../components/assets/projects.jpg";


const aboutSections = [
  {
    id: 1,
    title: "Our Mission",
    text: "We strive to deliver sustainable and innovative architecture solutions.",
    image: mission,
  },
  {
    id: 2,
    title: "Our Vision",
    text: "Transform urban and residential landscapes with creativity and sustainability.",
    image: vision,
  },
  {
    id: 3,
    title: "Our Projects",
    text: "Explore some of our recent projects showcasing creativity, quality, and sustainability.",
    image: projects,
  },
];

export default function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Learn more about our company, values, and the amazing work we do in architecture and design.
        </p>
      </div>

      <div className="about-content">
        {aboutSections.map((section) => (
          <div key={section.id} className="about-section">
            <img src={section.image} alt={section.title} />
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
