import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🚪 Redirect user to appropriate dashboard
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user-home");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "5rem auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Welcome to Shopsy</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />

        <div>
          <label style={{ marginRight: "1rem" }}>Select Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" style={{ padding: "0.5rem", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "4px" }}>
          Login
        </button>
      </form>
      <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "1rem", textAlign: "center" }}>
        *This is a demo login. No authentication applied.
      </p>
    </div>
  );
};

export default Login;