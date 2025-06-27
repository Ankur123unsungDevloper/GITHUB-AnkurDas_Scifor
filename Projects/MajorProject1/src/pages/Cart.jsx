import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => {
    if (cartList.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    navigate("/checkout");
  };

  return (
    <section className="cart-items">
      <Container>
        <Row>
          {/* Left Section: Cart List */}
          <Col md={8}>
            <div className="cart-left-section">
              <h2 className="cart-title">Shopping Cart</h2>
              {cartList.length === 0 ? (
                <h4 className="no-items">No Items are added in Cart</h4>
              ) : (
                cartList.map((item) => {
                  const productQty = item.qty * item.price;
                  return (
                    <div className="cart-product-box" key={item.id}>
                      <Row>
                        <Col xs={4}>
                          <img
                            src={item.imgUrl}
                            alt={item.productName}
                            className="cart-product-img"
                          />
                        </Col>
                        <Col xs={8}>
                          <h5 className="product-name">{item.productName}</h5>
                          <p className="product-price">
                            ₹{item.price} × {item.qty} ={" "}
                            <span>₹{productQty}</span>
                          </p>
                          <div className="product-actions">
                            <button
                              onClick={() =>
                                dispatch(addToCart({ product: item, num: 1 }))
                              }
                              className="action-btn"
                            >
                              +
                            </button>
                            <span>{item.qty}</span>
                            <button
                              onClick={() => dispatch(decreaseQty(item))}
                              className="action-btn"
                            >
                              -
                            </button>
                            <button
                              onClick={() => dispatch(deleteProduct(item))}
                              className="remove-btn"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  );
                })
              )}
            </div>
          </Col>

          {/* Right Section: Cart Summary */}
          <Col md={4}>
            <div className="cart-summary-box">
              <h4>Subtotal ({cartList.length} item{cartList.length !== 1 ? "s" : ""}):</h4>
              <h3>₹{totalPrice}</h3>
              <button className="checkout-now-btn" onClick={handleCheckout}>
                Proceed to Buy
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
