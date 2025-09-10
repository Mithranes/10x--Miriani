import React from "react";
import "./Careers.scss";

const careers = [
  { id: 1, title: "Junior Architect", location: "New York, USA" },
  { id: 2, title: "Interior Designer", location: "London, UK" },
  { id: 3, title: "Project Manager", location: "Berlin, Germany" },
];

export default function Careers() {
  return (
    <section className="careers-section section">
      <div className="container">
        <h2>Join Our Team</h2>
        <div className="careers-grid">
          {careers.map((job) => (
            <div key={job.id} className="career-card">
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
