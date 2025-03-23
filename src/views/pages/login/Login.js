import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    // Redirect to the dashboard when login is clicked
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="flower-background"></div>
      <div className={`login-card ${open ? "opened" : ""}`}>
        {!open ? (
          <button className="open-btn" onClick={() => setOpen(true)}>
            Open
          </button>
        ) : (
          <div className="login-form">
            <h2 className="login-title">Welcome Back</h2>
            <div className="door left-door"></div>
            <div className="door right-door"></div>
            <div className="input-container">
              <input type="text" placeholder="Username" className="login-input" />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Password" className="login-input" />
            </div>
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
