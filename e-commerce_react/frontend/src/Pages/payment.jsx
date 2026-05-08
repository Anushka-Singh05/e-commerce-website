import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const amount = location.state?.amount || 0;

  const [activeTab, setActiveTab] = useState("card");

  const tax = amount * 0.12;
  const total = amount + tax;

  const handlePayment = async () => {
    try {
      const res = await fetch("http://localhost:3000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const order = await res.json();

      const options = {
        key: "rzp_test_SmTBRr5Y4UFoSi",
        amount: order.amount,
        currency: "INR",
        name: "UrbanCove",
        order_id: order.id,
        handler: function (response) {
          alert(
            "Payment Successful 🎉 Transaction ID: " +
              response.razorpay_payment_id
          );
          navigate("/home");
        },
        theme: { color: "#4a3352" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Order creation failed", err);
    }
  };

  return (
    <div style={{ backgroundColor: "#fdfdfd", minHeight: "100vh" }}>
      {/* ❌ FIX: Removed UserNav → solves double navbar */}

      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "0 20px",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Secure Payment Gateway
        </h1>

        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          
          {/* LEFT */}
          <div
            style={{
              flex: 1.5,
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3>Payment Methods</h3>

            <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
              <button
                onClick={() => setActiveTab("card")}
                style={activeTab === "card" ? styles.activeTab : styles.tab}
              >
                Credit/Debit Card
              </button>

              <button
                onClick={() => setActiveTab("upi")}
                style={activeTab === "upi" ? styles.activeTab : styles.tab}
              >
                Digital Wallets
              </button>

              <button
                onClick={() => setActiveTab("net")}
                style={activeTab === "net" ? styles.activeTab : styles.tab}
              >
                Net Banking
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div>
                <label style={styles.label}>Card Number</label>
                <input
                  type="text"
                  placeholder="xxxx xxxx xxxx xxxx"
                  style={styles.input}
                />
              </div>

              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: 1 }}>
                  <label style={styles.label}>Expiry Date (MM/YY)</label>
                  <input type="text" placeholder="MM/YY" style={styles.input} />
                </div>

                <div style={{ flex: 1 }}>
                  <label style={styles.label}>CVV</label>
                  <input type="password" placeholder="***" style={styles.input} />
                </div>
              </div>

              <div>
                <label style={styles.label}>Name on Card</label>
                <input type="text" placeholder="Enter name" style={styles.input} />
              </div>

              <label
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <input type="checkbox" /> Save Card Details for Future Purchases
              </label>
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              height: "fit-content",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
              Order Summary
            </h3>

            {/* ✅ SEPARATE TAX DISPLAY */}
            <div style={styles.row}>
              <span>Subtotal</span>
              <span>₹{amount}</span>
            </div>

            <div style={styles.row}>
              <span>Tax (12%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <div style={styles.row}>
              <span>Shipping</span>
              <span style={{ color: "green" }}>FREE</span>
            </div>

            <div
              style={{
                ...styles.row,
                fontWeight: "bold",
                fontSize: "22px",
                borderTop: "2px solid #eee",
                marginTop: "15px",
                paddingTop: "15px",
              }}
            >
              <span>Total</span>
              <span>₹{total.toFixed(0)}</span>
            </div>

            <button onClick={handlePayment} style={styles.payBtn}>
              Complete Payment
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
                color: "#888",
                marginTop: "20px",
              }}
            >
              PCI-DSS | SSL SECURE | URBANPAY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  tab: {
    flex: 1,
    padding: "12px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
  },
  activeTab: {
    flex: 1,
    padding: "12px",
    border: "1px solid #4a3352",
    background: "#f8f0fb",
    color: "#4a3352",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "5px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
    color: "#444",
  },
  payBtn: {
    width: "100%",
    padding: "15px",
    background: "#4a3352",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "15px",
  },
};

export default Payment;