import React from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import ProjectTimeline from "./ProjectTimeline";
import Awards from "./Awards";
import BlogSection from "./BlogSection";
import Careers from "./Careers";
import FAQ from "./FAQ";
import VirtualTour from "./VirtualTour";
import TestimonialsSection from "./TestimonialsSection";
import Newsletter from "./Newsletter";
import Contact from "./ContactSection";
import ParallaxSection from "../ParallaxSection";
import About from "../../pages/About";

export default function Home() {
  return (
    <>
      <div id="home"><HeroSection /></div>
      <div id="about"><About/></div>
      <ParallaxSection
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
        title="Innovative Design Solutions"
        subtitle="Creating spaces that inspire and transform"
      />
      
      <div id="projects"><ProjectsSection /></div>
      <ParallaxSection
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
        title="Sustainable Architecture"
        subtitle="Building for a better tomorrow"
      />
      
      <div id="services"><ServicesSection /></div>
      <div id="process"><ProcessSection /></div>
      <div id="timeline"><ProjectTimeline /></div>
      <div id="awards"><Awards /></div>
      <div id="blog"><BlogSection /></div>
      <div id="careers"><Careers /></div>
      <div id="faq"><FAQ /></div>
      <div id="virtualtour"><VirtualTour /></div>
      <div id="testimonials"><TestimonialsSection /></div>
      <div id="newsletter"><Newsletter /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}
