import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <h1 className="hero-title">Architecture Studio</h1>
        <p className="hero-subtitle">Designing the future with elegance</p>
        <div className="hero-buttons">
          <a href="#services" className="hero-btn">Explore Services</a>
          <a href="#projects" className="hero-btn hero-btn-secondary">Our Projects</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
