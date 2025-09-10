import React from "react";
import "./ProjectTimeline.scss";

const timelineSteps = [
  { id: 1, title: "Concept", description: "Initial ideas, sketches, and client consultation." },
  { id: 2, title: "Design", description: "Refining concepts into detailed drawings and visuals." },
  { id: 3, title: "Development", description: "Technical planning, materials, and feasibility checks." },
  { id: 4, title: "Execution", description: "Construction and implementation with precision." },
];

export default function ProjectTimeline() {
  return (
    <section className="project-timeline section">
      <div className="container">
        <h2>Project Timeline</h2>
        <div className="timeline">
          {timelineSteps.map((step, index) => (
            <div key={step.id} className="timeline-step">
              <div className="step-number">{step.id}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
