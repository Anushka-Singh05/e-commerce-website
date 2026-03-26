import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/");
      setProductData(res.data.products); 
    } catch (err) {
      console.log("Error fetching products:", err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {productData.map((elem, index) => (
          <div className="card" key={index}>
            <div className="top">
              <img src={elem.image} alt={elem.title} />
            </div>
            <div className="bottom">
              <Link to={`/admin/products/detail/${elem._id}`} className="title-link">
                {elem.title}
              </Link>
              <p className="description">{elem.description}</p>
              <h2 className="price">Price: ₹{elem.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
