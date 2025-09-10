// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Checkout.scss";

const services = [
  { id: 1, title: "Residential Design", price: "$500" },
  { id: 2, title: "Commercial Design", price: "$1200" },
  { id: 3, title: "Landscape Design", price: "$800" },
];

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === parseInt(id));

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!service) return <p>Service not found</p>;

  const handleBooking = (e) => {
    e.preventDefault();

    // Check user details
    if (!userName || !email) {
      alert("Please fill all fields!");
      return;
    }

    // Card validation
    if (paymentMethod === "card") {
      const digitsOnly = cardNumber.replace(/\D/g, ""); // remove spaces or non-digits

      if (!digitsOnly || !expiry || !cvv) {
        alert("Please fill all card details!");
        return;
      }

      if (digitsOnly.length < 16) {
        alert("Card number must be 16 digits!");
        return;
      }

      if (cvv.length < 3 || cvv.length > 4) {
        alert("CVV must be 3 or 4 digits!");
        return;
      }

      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        alert("Expiry must be in MM/YY format!");
        return;
      }
    }

    setBookingConfirmed(true);

    // Simulate delay before redirect
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {!bookingConfirmed ? (
        <div className="checkout-form">
          <h2>{service.title}</h2>
          <p>Price: {service.price}</p>

          <form onSubmit={handleBooking}>
            <input
              type="text"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="payment-method">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                PayPal
              </label>
            </div>

            {paymentMethod === "card" && (
              <>
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength={19} // allows spaces for readability
                />
                <div className="card-row">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    maxLength={5}
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={4}
                  />
                </div>
              </>
            )}

            {paymentMethod === "paypal" && (
              <p>You will be redirected to PayPal to complete the payment.</p>
            )}

            <button type="submit" className="btn">
              Pay {service.price}
            </button>
          </form>
        </div>
      ) : (
        <div className="booking-success">
          <h2>Payment & Booking Confirmed!</h2>
          <p>Redirecting you to the dashboard...</p>
        </div>
      )}

      <div className="back-home">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}
