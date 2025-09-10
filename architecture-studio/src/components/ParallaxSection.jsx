import React from "react";
import "./ParallaxSection.scss";

const ParallaxSection = ({ image, title, subtitle }) => {
  return (
    <section className="parallax-section" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default ParallaxSection;
