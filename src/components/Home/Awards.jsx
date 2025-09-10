import React from "react";
import "./Awards.scss"

const awards = [
  { id: 1, title: "Best Modern Design 2024", organization: "Global Architecture Awards" },
  { id: 2, title: "Sustainable Project of the Year", organization: "EcoBuild Awards" },
  { id: 3, title: "Innovative Interiors", organization: "Interior Design Expo" },
];

export default function Awards() {
  return (
    <section className="awards section">
      <div className="container">
        <h2>Our Awards</h2>
        <div className="awards-grid">
          {awards.map((award) => (
            <div key={award.id} className="award-card">
              <h3>{award.title}</h3>
              <p>{award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
