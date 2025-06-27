/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);
  const [selectedMethod, setSelectedMethod] = useState("Saved RuPay (****2613)");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const itemsTotal = cartList.reduce((total, item) => total + item.qty * item.price, 0);
  const deliveryFee = itemsTotal > 0 ? 40 : 0;
  const marketplaceFee = itemsTotal > 0 ? 5 : 0;
  const discount = promoApplied ? 40 : 0;

  const finalTotal = itemsTotal + deliveryFee + marketplaceFee - discount;

  const applyPromo = () => {
    if (promoCode.trim().toLowerCase() === "save40") {
      setPromoApplied(true);
    } else {
      alert("Invalid promo code");
    }
  };

  const handleFinalPayment = () => {
    alert("Order Placed!");
    navigate("/");
  };

  return (
    <section className="payment-page">
      <Container>
        <Row>
          {/* Left Column */}
          <Col md={8}>
            {/* Address */}
            <div className="payment-box">
              <h5><strong>Delivering to Ankur Das</strong></h5>
              <p>house no.38, Millennium City Colony, Karim Nagar, Chargawan Gorakhpur, UTTAR PRADESH, 273013, India</p>
              <a href="#">Add delivery instructions</a>
            </div>

            {/* Payment Method Display */}
            <div className="payment-box">
              <h5><strong>Paying with {selectedMethod}</strong></h5>
              <a href="#">Change</a>
            </div>

            {/* Promo code */}
            <div className="payment-box">
              <h5>Use a gift card, voucher or promo code</h5>
              <div className="d-flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="form-control"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className="btn btn-outline-primary" onClick={applyPromo}>
                  Apply
                </button>
              </div>
            </div>

            {/* Delivery Estimate */}
            <div className="payment-box">
              <h5><strong>Arriving 28 Jun 2025</strong></h5>
              <p>If you order in the next 1 hour and 5 minutes</p>

              {cartList.map((item) => (
                <Row key={item.id} className="order-item align-items-center">
                  <Col md={2}>
                    <img src={item.imgUrl} alt={item.productName} className="img-fluid rounded" />
                  </Col>
                  <Col md={7}>
                    <p className="mb-0">{item.productName}</p>
                    <p className="text-muted small">Qty: {item.qty} × ₹{item.price}</p>
                  </Col>
                  <Col md={3}>
                    <p className="text-end fw-bold">₹{item.qty * item.price}</p>
                  </Col>
                </Row>
              ))}
            </div>
          </Col>

          {/* Right Column */}
          <Col md={4}>
            <div className="cart-total">
              <button className="checkout-btn mb-3 w-100" onClick={handleFinalPayment}>
                Pay ₹{finalTotal.toFixed(2)}
              </button>

              <div className="summary-item">
                <h4>Items:</h4>
                <span>₹{itemsTotal.toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <h4>Delivery:</h4>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <h4>Marketplace Fee:</h4>
                <span>₹{marketplaceFee.toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <h4>Promotion Applied:</h4>
                <span>₹{-discount}</span>
              </div>
              <div className="summary-total">
                <h4>Order Total:</h4>
                <h3>₹{finalTotal.toFixed(2)}</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Payment;
