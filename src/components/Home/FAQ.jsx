import React, { useState } from "react";
import "./FAQ.scss";

const faqs = [
  { id: 1, question: "Do you handle residential projects?", answer: "Yes, we design both residential and commercial projects tailored to client needs." },
  { id: 2, question: "Can I request a custom design?", answer: "Absolutely! We specialize in custom architecture and interior designs." },
  { id: 3, question: "What is your typical project timeline?", answer: "Depending on the project size, timelines usually range from 3 to 12 months." },
  { id: 4, question: "Do you offer sustainable design solutions?", answer: "Yes, sustainability is at the core of our designs, including energy efficiency and eco-friendly materials." },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`faq-item ${openId === faq.id ? "open" : ""}`}
              onClick={() => toggleFAQ(faq.id)}
            >
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
