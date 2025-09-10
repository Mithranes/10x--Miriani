import React from "react";
import "./BlogSection.scss";
import sustainableTrend from "../assets/sustainable-trend.jpg";
import urbanPlanning from '../assets/urban-planning.jpg'
const blogPosts = [
  { 
    id: 1, 
    title: "Sustainable Architecture Trends 2025", 
    date: "Sep 5, 2025", 
    image: sustainableTrend
  },
  { 
    id: 2, 
    title: "Top 10 Modern Interiors", 
    date: "Aug 20, 2025", 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
  },
  { 
    id: 3, 
    title: "Urban Planning for the Future", 
    date: "Jul 15, 2025", 
    image: urbanPlanning
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section section">
      <div className="container">
        <h2>Latest Blog</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} />
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p className="date">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
