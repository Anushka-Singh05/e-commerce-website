import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link
import { CartContext } from '../context/CartContext';
import './CartSidebar.css';

const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isCartOpen) return null;

  return (
    <div className="cart-sidebar">
      <button className="close-btn" onClick={toggleCart}>×</button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ marginTop: "2rem" }}>Cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h4>
                  <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: '#5c2c75' }}>
                    {item.title}
                  </Link>
                </h4>
                <p>₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
