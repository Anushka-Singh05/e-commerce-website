import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import UserHome from "./Pages/usersPage/UserHome";
import UserNav from "./Pages/usersPage/UserNav";
import UserProductDetail from "./Pages/usersPage/UserProductDetail";

import Home from "./Pages/Home";
import AddProducts from "./Pages/AddProducts";
import ProductDetail from "./Pages/ProductDetail";
import UpdateProduct from "./Pages/UpdateProduct";
import Payment from "./Pages/Payment";

import CartSidebar from "./components/CartSidebar";
import { CartProvider } from "./context/CartContext";
import Login from "./Pages/login";

function App() {
  const location = useLocation();

  // FILTER STATES
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [minPrice, setMinPrice] = useState(300);
  const [maxPrice, setMaxPrice] = useState(150000);

  const [sortOption, setSortOption] = useState("Sort By: Default");
const [searchTerm, setSearchTerm] = useState("");
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isLoginPage = location.pathname === "/login";

  return (
    <CartProvider>
      {!isAdminRoute && !isLoginPage && (
        <UserNav
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sortOption={sortOption}
          setSortOption={setSortOption}
          setSearchTerm={setSearchTerm}
        />
      )}

      {!isAdminRoute && !isLoginPage && <CartSidebar />}

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <UserHome
              selectedCategories={selectedCategories}
              selectedBrands={selectedBrands}
              minPrice={minPrice}
              maxPrice={maxPrice}
              sortOption={sortOption}   
              searchTerm={searchTerm}
            />
          }
        />

        <Route path="/product/:productId" element={<UserProductDetail />} />

        <Route path="/admin" element={<Home />} />
        <Route path="/admin/products/add" element={<AddProducts />} />
        <Route path="/admin/products/update/:productId" element={<UpdateProduct />} />
        <Route path="/admin/products/detail/:productId" element={<ProductDetail />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </CartProvider>
  );
}

export default App;