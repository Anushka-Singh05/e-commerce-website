import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserHome = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // ✅ Correct API endpoint
      const res = await axios.get("http://localhost:3000/api");
      console.log(res.data.products);
      setProductData(res.data.products);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  return (
    <div className="container">
      {productData.length === 0 ? (
        <p>No products found.</p>
      ) : (
        productData.map((elem) => (
          <div className="card" key={elem._id}>
            <div className="top">
              <img src={elem.image} alt={elem.title} />
            </div>
            <div className="bottom">
              {/* ✅ Fix link path */}
              <Link to={`/product/${elem._id}`}>{elem.title}</Link>
              <p>{elem.description}</p>
              <h2>Price : ₹{elem.price}</h2>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserHome;
