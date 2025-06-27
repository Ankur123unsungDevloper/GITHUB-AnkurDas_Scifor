/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart);
  const totalPrice = cartList.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  
const navigate = useNavigate();

const handlePayment = () => {
  navigate("/payment");
};

  return (
    <section className="checkout-page">
      <Container>
        <Row>
          {/* Left Column */}
          <Col md={8}>
            <div className="delivery-section checkout-box">
              <h4 className="section-title">Delivering to Ankur Das</h4>
              <p>
                house no.38, Millennium City Colony, Karim Nagar, Chargawan
                Gorakhpur, GORAKHPUR, UTTAR PRADESH, 273013, India
              </p>
              <a href="#">Add delivery instructions</a>
            </div>

            <div className="payment-section checkout-box">
              <h4 className="section-title">Payment Method</h4>

              <Form>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    label="Use saved RuPay Card ending in 2613"
                    name="paymentMethod"
                    className="mb-3"
                  />
                </Form.Group>

                <h6 className="mt-4 mb-2">Other Payment Methods</h6>

                <Form.Group>
                  <Form.Check
                    type="radio"
                    label="Credit or Debit Card"
                    name="paymentMethod"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Check
                    type="radio"
                    label="Net Banking"
                    name="paymentMethod"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Check
                    type="radio"
                    label="UPI Apps"
                    name="paymentMethod"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Check
                    type="radio"
                    label="Cash on Delivery / Pay on Delivery"
                    name="paymentMethod"
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={4}>
            <div className="cart-total">
              <button className="checkout-btn" onClick={ handlePayment }>
                Proceed to Payment
              </button>
              <div className="summary-item">
                <h4>Items:</h4>
                <span>--</span>
              </div>
              <div className="summary-item">
                <h4>Delivery:</h4>
                <span>--</span>
              </div>
              <div className="summary-item">
                <h4>Promotion Applied:</h4>
                <span>--</span>
              </div>
              <div className="summary-total">
                <h4>Order Total:</h4>
                <h3>₹{totalPrice.toFixed(2)}</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
