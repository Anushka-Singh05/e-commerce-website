import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./CartSidebar.css";

const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // CLOSE IF NOT OPEN
  if (!isCartOpen) return null;

  // BUY NOW HANDLER
  const handleBuyNow = () => {
    toggleCart(); // close sidebar

    navigate("/payment", {
      state: { amount: totalPrice } // ✅ send total amount
    });
  };

  return (
    <div className="cart-sidebar">

      {/* CLOSE BUTTON */}
      <button className="close-btn" onClick={toggleCart}>
        ×
      </button>

      <h2>Your Cart</h2>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <p style={{ marginTop: "2rem" }}>Cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">

            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">

                {/* IMAGE */}
                <img src={item.image} alt={item.title} />

                {/* DETAILS */}
                <div className="item-details">

                  <h4>
                    <Link
                      to={`/product/${item.id}`}
                      style={{
                        textDecoration: "none",
                        color: "#5c2c75",
                      }}
                    >
                      {item.title}
                    </Link>
                  </h4>

                  <p>₹{item.price}</p>

                  {/* QUANTITY CONTROLS */}
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </div>

                </div>

                {/* REMOVE ITEM */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </button>

              </div>
            ))}

          </div>

          {/* TOTAL + BUY */}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>

            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </>
      )}

    </div>
  );
};

export default CartSidebar;