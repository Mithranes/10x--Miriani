import React from "react";
import "./ProcessSection.scss";

const steps = [
  { number: "01", title: "Consultation", text: "We listen carefully to understand your vision." },
  { number: "02", title: "Concept Design", text: "Initial sketches and mood boards capture your ideas." },
  { number: "03", title: "Development", text: "Refining concepts into detailed drawings and visuals." },
  { number: "04", title: "Execution", text: "We ensure quality and precision from start to finish." },
];

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="container">
        <h2>Our Process</h2>
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
