import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [step, setStep] = useState(1); // 1: Role Selection, 2: Login Form
  const [role, setRole] = useState(""); 
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setStep(2); // Agle step par bheje
  };

  const handleFinalLogin = (e) => {
    e.preventDefault();
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card fade-in">
        
        {step === 1 ? (
          /* --- STEP 1: CHOOSE ROLE --- */
          <div className="role-selection">
            <h1>UrbanCove</h1>
            <p className="subtitle">Please select your portal to continue</p>
            
            <div className="role-options">
              <div className="role-card" onClick={() => handleRoleSelect("user")}>
                <div className="role-icon">👤</div>
                <h3>Customer</h3>
                <span>Shop the latest trends</span>
              </div>

              <div className="role-card" onClick={() => handleRoleSelect("admin")}>
                <div className="role-icon">⚙️</div>
                <h3>Administrator</h3>
                <span>Manage products & orders</span>
              </div>
            </div>
          </div>
        ) : (
          /* --- STEP 2: LOGIN FORM --- */
          <div className="login-form-area">
            <button className="back-btn" onClick={() => setStep(1)}>← Back</button>
            <h2>{role === "admin" ? "Admin Login" : "Customer Login"}</h2>
            
            <form onSubmit={handleFinalLogin} className="auth-form">
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" required />
              </div>
              
              <button type="submit" className="submit-btn">
                {role === "admin" ? "Access Dashboard" : "Start Shopping"}
              </button>
              
              <p className="switch-auth">
                Don't have an account? <span>Sign Up</span>
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;