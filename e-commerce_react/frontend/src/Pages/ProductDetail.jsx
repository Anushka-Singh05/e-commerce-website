import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/admin/products/update/${productId}`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      alert("Delete functionality will be implemented here.");
    }
  };

  const renderProduct = () => {
  if (productId === "688a2a3b3120ce486f5351fb") {
    return {
      title: "RENEE Prime Matte Lipstick",
      image: "https://ik.imagekit.io/charusoni/Prime-Matte_RUSTIC-RED_02-min_6674faf8-af90-43c9-a684-79e939b91d74_1FmoJdWP2.webp",
      description: "Discover the prime matte-verse! Enter the world of ulti-matte lipsticks with RENEE Prime Matte Lipstick: your ticket to high-definition matte perfection! This luxurious lipstick boasts a rich, intense pigment that delivers a stunning color payoff while pampering your lips with nourishing ingredients. Infused with Shea butter, Almond oil, Jojoba oil, and Vitamin E, it not only glides on effortlessly but also hydrates and protects your lips throughout the day.",
      features: ["Rich color with creamy matte payoff", "Enriched with Vitamin E", "Long-lasting & non-drying"],
      price: 340,
    };
  }

  if (productId === "688a38c33120ce486f535220") {
    return {
      title: "Maybelline Fit Me Foundation",
      image: "https://rukminim2.flixcart.com/image/704/844/xif0q/foundation/c/d/4/-original-imah62bpcz8cgn35.jpeg?q=90&crop=false",
      description: "Get ready on your big day with the Maybelline New York Fit Me Matte + Poreless Liquid Foundation Tube SPF 22 - 128 Warm Nude (18ml). It is a pore-minimizing foundation that visibly blurs out pores for a flawless matte finish. This Maybelline matte foundation blends seamlessly on your skin, making the application easy.",
      features: ["Visibly blurs out pores", "Flawless matte finish", "Lightweight formula", "Blends seamlessly"],
      price: 430,
    };
  }

  if (productId === "688a49983120ce486f53523e") {
    return {
      title: "Joker & Witch Black Watch",
      image: "https://jokerandwitch.com/cdn/shop/products/JWCW299_1_1200x1200.jpg?v=1742142543",
      description: "Sophisticated and refined, this timepiece black watch from Joker & Witch is all you need to elevate your look. Made with care from stainless steel, it features a deployment closure and makes a modish addition to your timepiece collection.",
      features: ["Classic & contemporary design", "Stainless steel material", "Quartz movement", "Signature case"],
      price: 1500,
    };
  }

  if (productId === "688a4a443120ce486f535242") {
    return {
      title: "Dot & Key Vitamin C Sunscreen",
      image: "https://media6.ppl-media.com/static/img/product/393236/dot-and-key-vitamin-c-e-super-bright-sunscreen-spf-50-pa-30-gm_2_display_1736336821_edbe1b8a.jpg",
      description: "Glowing Skin + Strong Sun Protection? Yes, Please! This Dot & Key sunscreen is an absolute must-have in my skincare routine! It has a lightweight, non-greasy texture that blends in effortlessly—no white cast at all! SPF 50 PA+++ gives solid protection even during peak sun hours.",
      features: ["SPF 50 PA+++ broad protection", "No white cast", "Blends under makeup", "Vitamin C & E infused"],
      price: 390,
    };
  }

  // ➕ New Products
  if (productId === "68c075ac95a1c85f1f03c8b6") {
    return {
      title: "Samsung Galaxy Buds Pro",
      image: "https://www.comworksclickstore.ph/media/catalog/product/cache/269427c5a4340c58d1ecc07785bbf9b2/g/a/galaxy_buds_3_pro.png",
      description: "Experience immersive, high-quality sound with rich bass and crisp treble, perfect for every genre. Advanced active noise cancellation keeps distractions away, letting you focus on music or calls. Designed for comfort and a secure fit, they stay in place all day, whether at work, home, or the gym.",
      features: ["Active Noise Cancelling", "IPX7 Waterproof", "Long battery life", "Wireless charging"],
      price: 9000,
    };
  }

  if (productId === "68c0777695a1c85f1f03c8bc") {
    return {
      title: "Nike Air Zoom Pegasus 40",
      image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/n/4/p/-original-imah4ekvhuextayj.jpeg?q=90&crop=false",
      description: "Run with comfort and style with Nike Air Zoom Pegasus,Sleek running shoes with responsive cushioning for everyday runs. Engineered for comfort, breathability, and durability. Perfect for both casual jogs and intense training sessions.",
      features: ["Responsive cushioning", "Breathable upper", "Durable outsole", "Lightweight design"],
      price: 7500,
    };
  }

  if (productId === "68c081f795a1c85f1f03c8f3") {
    return {
      title: "The Ordinary Hyaluronic Acid Serum",
      image: "https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw23e9d8a2/theordinary/pdp-cards/Usage-Details-Disposal-Instructions-Image.jpg",
      description: "Hydrating serum that locks in moisture and plumps skin instantly. Lightweight, non-sticky formula suitable for all skin types. Helps reduce fine lines and improve skin texture over time.",
      features: ["Deep hydration", "Improves skin texture", "Lightweight formula", "Suitable for all skin types"],
      price: 1200,
    };
  }

  if (productId === "68c0825395a1c85f1f03c8f8") {
    return {
      title: "Fjällräven Kånken Backpack",
      image: "https://tse1.mm.bing.net/th/id/OIP.ThIvaS9irus_z3mTG768HgHaJ4?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Durable and stylish backpack designed for everyday use. Compact yet spacious with multiple compartments for easy organization. Lightweight, water-resistant, and perfect for travel, work, or school.",
      features: ["Durable Vinylon F fabric", "Multiple color options", "Comfortable straps", "Spacious interior"],
      price: 4500,
    };
  }
// Apple Watch Series 9
  if (productId === "68c0833995a1c85f1f03c8fc") {
    return {
      title: "Apple Watch Series 9",
      image: "https://b2c-contenthub.com/wp-content/uploads/2023/09/apple-watch-series-9-features.jpg?quality=50&strip=all&w=1200",
      description: "Stay connected and track your fitness with Apple Watch Series 9. Advanced health sensors monitor your heart, sleep, and activity levels. Sleek, lightweight design with customizable watch faces and straps for everyday use.",
      features: ["Heart & Activity Tracking", "Sleep Monitoring", "Lightweight & Sleek Design", "Customizable Watch Faces"],
      price: 45000,
    };
  }

  // Adidas Ultraboost 23
  if (productId === "68c1230f5ee05a27b97e1a0e") {
    return {
      title: "Adidas Ultraboost 23",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRLTxgBp30zHZpKrTlcp_Vjp7EMsguVtdjGDmSytdAe0kOfh2IJm6bKxYuTtbkuOb_X-0Bj3o9a3FNpB7ap4CGeH5oCNnC_FV10kQOdhNSgwvhH1KTg9AlElnCrp3qnqrTZx9Rj2w&usqp=CAc",
      description: "Experience maximum comfort and energy return with Adidas Ultraboost 23. Engineered for running enthusiasts with a responsive Boost midsole. Stylish design that complements casual or athletic outfits.",
      features: ["Boost Midsole for Energy Return", "Comfortable Fit", "Breathable Upper", "Stylish Design"],
      price: 14000,
    };
  }

  return null;
};

  const product = renderProduct();

  if (!product) return <p style={{ margin: "2rem", textAlign: "center" }}>Product not found</p>;

  return (
    <div className="product-container">
      <div className="main">
        <div className="left">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="right">
          <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            {product.features.length > 0 && (
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="buttons">
            <button className="update-btn" onClick={handleUpdate}>
              Update
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
