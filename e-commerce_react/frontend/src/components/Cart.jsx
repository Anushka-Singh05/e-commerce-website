import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../context/CartContext";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = ({ isOpen, onClose }) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

 const handleBuyNow = () => {
  navigate("/payment", {
    state: { amount: totalPrice }   // 👈 THIS IS REQUIRED
  });
  onClose();
};

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={onClose} className="close-btn">
          <X />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.title} />

                <div className="cart-details">
                  <h4>{item.title}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL + BUY BUTTON */}
          <div style={{ padding: "10px" }}>
            <h3>Total: ₹{totalPrice}</h3>

            <button
              onClick={handleBuyNow}
              style={{
                width: "100%",
                padding: "10px",
                background: "black",
                color: "white",
                border: "none",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;