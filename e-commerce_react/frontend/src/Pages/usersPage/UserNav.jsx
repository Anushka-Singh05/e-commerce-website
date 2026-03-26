import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; // 👈 correct path
import 'remixicon/fonts/remixicon.css';

const UserNav = () => {
  const { toggleCart, cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', position: 'relative' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h2>UrbanCove</h2>
      </Link>

      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      <div style={{ position: 'relative' }}>
        <i
          className="ri-shopping-cart-fill"
          style={{ fontSize: '24px', cursor: 'pointer' }}
          onClick={toggleCart}
        ></i>

        {totalQuantity > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-8px',
              right: '-10px',
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              fontSize: '12px',
              padding: '2px 6px',
            }}
          >
            {totalQuantity}
          </span>
        )}
      </div>
    </nav>
  );
};

export default UserNav;
