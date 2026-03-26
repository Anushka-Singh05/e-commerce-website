import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    features: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/${productId}")
      .then((res) => {
        const { title, image, description, features } = res.data;
        setFormData({
          title,
          image,
          description,
          features: features ? features.join("\n") : "",
        });
      })
      .catch((err) => console.log("Error fetching product:", err));
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      features: formData.features.split("\n"),
    };

    axios
      .put(`http://localhost:3000/products/${productId}`, updatedData)
      .then(() => {
        alert("Product updated successfully!");
        navigate(`/admin/products/detail/${productId}`);
      })
      .catch((err) => console.log("Update error:", err));
  };

  return (
    <div className="update-form-container">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <textarea
          name="features"
          placeholder="Features (one per line)"
          value={formData.features}
          onChange={handleChange}
          rows="4"
        ></textarea>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
