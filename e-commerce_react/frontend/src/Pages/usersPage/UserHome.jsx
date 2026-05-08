import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserHome = ({
  selectedCategories,
  selectedBrands,
  minPrice = 300,
  maxPrice = 150000,
  sortOption,
  searchTerm = ""
}) => {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api");
      setProductData(res.data.products);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  // ================= FILTER LOGIC =================
 const normalizedSearch = (searchTerm || "").trim().toLowerCase();
  const filteredProducts = productData.filter((item) => {

    // CATEGORY
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    // BRAND
    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.some((brand) =>
        item.title?.toLowerCase().includes(brand.toLowerCase())
      );

    // PRICE
    const price = Number(item.price || 0);
    const priceMatch = price >= minPrice && price <= maxPrice;

    // SEARCH 
     const searchMatch =
      normalizedSearch === "" ||
      (item.title || "").toLowerCase().includes(normalizedSearch);

    return categoryMatch && brandMatch && priceMatch && searchMatch;
  });

  // ================= SORT LOGIC =================

  const sortedProducts = [...filteredProducts].sort((a, b) => {

    const priceA = Number(a.price || 0);
    const priceB = Number(b.price || 0);

    switch (sortOption) {

      case "Price: Low to High":
        return priceA - priceB;

      case "Price: High to Low":
        return priceB - priceA;

      case "Newest":
        return b._id?.localeCompare(a._id);

      case "Oldest":
        return a._id?.localeCompare(b._id);

      default:
        return 0;
    }
  });

  // ================= UI =================

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px"
      }}
    >
      {sortedProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        sortedProducts.map((elem) => (
          <div
            className="card"
            key={elem._id}
            style={{
              width: "220px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px"
            }}
          >

            <div className="top">
              <img
                src={elem.image}
                alt={elem.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover"
                }}
              />
            </div>

            <div className="bottom">
              <Link to={`/product/${elem._id}`}>
                {elem.title}
              </Link>

              <p>{elem.description}</p>

              <h3>₹{elem.price}</h3>
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default UserHome;