import React, { useState } from "react";
import "./Newsletter.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // For now, just simulate submission
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="newsletter-section section">
      <div className="container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest news, project updates, and design tips directly to your inbox.</p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {submitted && <p className="success-message">Thank you for subscribing!</p>}
      </div>
    </section>
  );
}
