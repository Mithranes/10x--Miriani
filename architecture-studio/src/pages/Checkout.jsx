import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Checkout.scss";

export default function Checkout() {
  const { id } = useParams(); // serviceId
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const currentBooking = bookings.find(
      (b) => b.serviceId === parseInt(id) && !b.paid
    );
    if (!currentBooking) {
      alert("Service not found or already paid!");
      navigate("/dashboard");
      return;
    }
    setBooking(currentBooking);
    setUserName(currentBooking.name);
    setEmail(currentBooking.email);
  }, [id, navigate]);

  if (!booking) return null;

  const handleBooking = (e) => {
    e.preventDefault();

    if (!userName || !email) {
      alert("Please fill all fields!");
      return;
    }

    if (paymentMethod === "card") {
      const digitsOnly = cardNumber.replace(/\D/g, "");
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

    // Update booking in localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const index = bookings.findIndex((b) => b.serviceId === booking.serviceId && !b.paid);
    if (index !== -1) {
      bookings[index] = {
        ...bookings[index],
        name: userName,
        email,
        paymentMethod,
        cardDetails: paymentMethod === "card" ? { cardNumber, expiry, cvv } : null,
        paid: true,
      };
      localStorage.setItem("bookings", JSON.stringify(bookings));
    }

    setBookingConfirmed(true);
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {!bookingConfirmed ? (
        <div className="checkout-form">
          <h2>{booking.service}</h2>
          <p>Price: ${booking.price}</p>

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
                  maxLength={19}
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
              Pay ${booking.price}
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
