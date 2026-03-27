import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import UserHome from "./Pages/usersPage/UserHome";
import UserProductDetail from "./Pages/usersPage/UserProductDetail";
import UserNav from "./Pages/usersPage/UserNav";

import Home from "./Pages/Home";
import AddProducts from "./Pages/AddProducts";
import ProductDetail from "./Pages/ProductDetail"; // Admin detail page

import UpdateProduct from "./Pages/UpdateProduct";
import CartSidebar from "./components/CartSidebar";
import { CartProvider } from "./context/CartContext";
import Login from "./Pages/login"; 

function App() {
  const location = useLocation();
// Logic to hide Navbars/Sidebars
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isLoginPage = location.pathname === "/login"; 

  return (
    <CartProvider>
      {/* Show only on user routes */}
      {!isAdminRoute && !isLoginPage && <UserNav />}
      {!isAdminRoute && !isLoginPage &&<CartSidebar />}


      <Routes>
        {/*  The Entry Point */}
        <Route path="/login" element={<Login />} />

        {/*  User Routes */}
       <Route path="/home" element={<UserHome />} />
        <Route path="/product/:productId" element={<UserProductDetail />} />

        {/*  Admin Routes */}
        <Route path="/admin" element={<Home />} />
        <Route path="/admin/products/add" element={<AddProducts />} />
<Route path="/admin/products/update/:productId" element={<UpdateProduct />} />
        <Route path="/admin/products/detail/:productId" element={<ProductDetail />} />
      </Routes>
    </CartProvider>
  );
}

export default App;