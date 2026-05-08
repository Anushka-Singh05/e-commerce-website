import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import 'remixicon/fonts/remixicon.css';

const UserNav = ({
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sortOption,
  setSortOption,
  setSearchTerm
}) => {

  const { toggleCart, cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // UI STATES 
  const [showFilter, setShowFilter] = useState(false);
  const [showPrice, setShowPrice] = useState(true);
  const [showBrand, setShowBrand] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [search, setSearch] = useState("");
  // PRICE RANGE LIMITS
  const MIN_LIMIT = 300;
  const MAX_LIMIT = 150000;

  const getPercent = (value) =>
    Math.round(
      ((value - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100
    );

  return (
    <>
      <style>{`
        .slider-container {
          position: relative;
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
        }

        .thumb,
        .thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
        }

        .thumb {
          pointer-events: none;
          position: absolute;
          height: 0;
          width: 100%;
          outline: none;
          background: none;
          z-index: 3;
        }

        .thumb--left {
          z-index: 3;
        }

        .thumb--right {
          z-index: 4;
        }

        .thumb::-webkit-slider-thumb {
          background-color: '#fffafa'
          border: none;
          border-radius: 50%;
          cursor: pointer;
          height: 18px;
          width: 18px;
          margin-top: 2px;
          pointer-events: all;
          position: relative;
        }

        .thumb::-moz-range-thumb {
          background-color: #1a1a1a;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          height: 18px;
          width: 18px;
          pointer-events: all;
        }

        .filter-section {
          border: 1px solid #b98f67;
          border-radius: 8px;
          margin-bottom: 12px;
          background: #f7e4cc;
          overflow: hidden;
        }

        .filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          background: #e5b07c;
        }

        .filter-content {
          padding: 12px;
          max-height: 200px;
          overflow-y: auto;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 13px;
          cursor: pointer;
        }
      `}</style>

      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 25px',
          backgroundColor: '#dfd4d4',
          position: 'relative'
        }}
      >

        {/* LOGO */}
        <Link
          to="/home"
          style={{
            textDecoration: 'none',
            color: 'black'
          }}
        >
          <h2
            style={{
              fontSize: '28px',
              margin: 0
            }}
          >
            UrbanCove
          </h2>
        </Link>

        {/* SEARCH */}
        <div>
       <input
    type="text"
    placeholder="Search..."
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
      setSearchTerm(e.target.value); 
    }}  
      />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            position: 'relative'
          }}
        >

          {/* FILTER BUTTON */}
          <button
            onClick={() => setShowFilter(!showFilter)}
            style={{
              padding: '8px 15px',
              cursor: 'pointer',
              border: '1px solid #999',
              borderRadius: '6px',
              background: '#fffafa',
              fontSize: '14px'
            }}
          >
            <i className="ri-filter-3-line"></i> Filter
          </button>

          {/* SORT */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #999',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            <option>Sort By: Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>

          {/* CART */}
          <div style={{ position: 'relative' }}>

            <i
              className="ri-shopping-cart-fill"
              style={{
                fontSize: '28px',
                cursor: 'pointer'
              }}
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
                  padding: '2px 7px'
                }}
              >
                {totalQuantity}
              </span>

            )}

          </div>

          {/* FILTER DROPDOWN */}
          {showFilter && (

            <div
              style={{
                position: 'absolute',
                top: '42px',
                right: '0px',
                width: '300px',
                background: '#f5dbbd',
                border: '1px solid #b98f67',
                borderRadius: '10px',
                padding: '15px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                zIndex: 100,
                fontFamily: 'Arial'
              }}
            >

              {/* PRICE */}
              <div className="filter-section">

                <div
                  className="filter-header"
                  onClick={() => setShowPrice(!showPrice)}
                >
                  <span>Price Range</span>

                  <i
                    className={
                      showPrice
                        ? 'ri-arrow-up-s-line'
                        : 'ri-arrow-down-s-line'
                    }
                  ></i>
                </div>

                {showPrice && (

                  <div className="filter-content">

                    <div className="slider-container">

                      <div
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '4px',
                          background: '#d4b08a',
                          borderRadius: '4px'
                        }}
                      />

                      <div
                        style={{
                          position: 'absolute',
                          height: '4px',
                          background: '#1a1a1a',
                          borderRadius: '4px',
                          left: `${getPercent(minPrice)}%`,
                          right: `${100 - getPercent(maxPrice)}%`
                        }}
                      />

                      <input
                        type="range"
                        min={MIN_LIMIT}
                        max={MAX_LIMIT}
                        step="10"
                        value={minPrice}
                        onChange={(e) =>
                          setMinPrice(
                            Math.min(
                              Number(e.target.value),
                              maxPrice - 1000
                            )
                          )
                        }
                        className="thumb thumb--left"
                      />

                      <input
                        type="range"
                        min={MIN_LIMIT}
                        max={MAX_LIMIT}
                        step="10"
                        value={maxPrice}
                        onChange={(e) =>
                          setMaxPrice(
                            Math.max(
                              Number(e.target.value),
                              minPrice + 1000
                            )
                          )
                        }
                        className="thumb thumb--right"
                      />

                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                      }}
                    >

                      <input
                        type="text"
                        value={`₹${minPrice}`}
                        readOnly
                        style={{
                          width: '45%',
                          padding: '6px',
                          border: '1px solid #fff',
                          borderRadius: '4px',
                          background: '#fff',
                          fontSize: '13px'
                        }}
                      />

                      <span
                        style={{
                          fontSize: '12px',
                          color: '#666'
                        }}
                      >
                        to
                      </span>

                      <input
                        type="text"
                        value={`₹${maxPrice}`}
                        readOnly
                        style={{
                          width: '45%',
                          padding: '6px',
                          border: '1px solid #fff',
                          borderRadius: '4px',
                          background: '#fff',
                          fontSize: '13px'
                        }}
                      />

                    </div>

                  </div>

                )}

              </div>

              {/* BRANDS */}
              <div className="filter-section">

                <div
                  className="filter-header"
                  onClick={() => setShowBrand(!showBrand)}
                >
                  <span>Brands</span>

                  <i
                    className={
                      showBrand
                        ? 'ri-arrow-up-s-line'
                        : 'ri-arrow-down-s-line'
                    }
                  ></i>
                </div>

                {showBrand && (

                  <div className="filter-content">

                    {[
                      'Adidas',
                      'Apple',
                      'Nike',
                      'Samsung',
                      'Joker & Witch',
                      'Renne',
                      'Fjällräven Kånken',
                      'Lakme',
                      'Maybelline'
                    ].map((brand) => (

                      <label
                        key={brand}
                        className="checkbox-label"
                      >

                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={(e) => {

                            if (e.target.checked) {

                              setSelectedBrands([
                                ...selectedBrands,
                                brand
                              ]);

                            }

                            else {

                              setSelectedBrands(
                                selectedBrands.filter(
                                  (item) => item !== brand
                                )
                              );

                            }

                          }}
                        />

                        {brand}

                      </label>

                    ))}

                  </div>

                )}

              </div>

              {/* CATEGORIES */}
              <div className="filter-section">

                <div
                  className="filter-header"
                  onClick={() => setShowCategory(!showCategory)}
                >
                  <span>Categories</span>

                  <i
                    className={
                      showCategory
                        ? 'ri-arrow-up-s-line'
                        : 'ri-arrow-down-s-line'
                    }
                  ></i>
                </div>

                {showCategory && (

                  <div className="filter-content">

                    {[
                      'Accessories',
                      'Makeup Products',
                      'Bags',
                      'Skin Care',
                      'Electronics',
                      'Footwear',
                      'Watches'
                    ].map((cat) => (

                      <label
                        key={cat}
                        className="checkbox-label"
                      >

                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={(e) => {

                            if (e.target.checked) {

                              setSelectedCategories([
                                ...selectedCategories,
                                cat
                              ]);

                            }

                            else {

                              setSelectedCategories(
                                selectedCategories.filter(
                                  (item) => item !== cat
                                )
                              );

                            }

                          }}
                        />

                        {cat}

                      </label>

                    ))}

                  </div>

                )}

              </div>

            </div>

          )}

        </div>

      </nav>
    </>
  );
};

export default UserNav;