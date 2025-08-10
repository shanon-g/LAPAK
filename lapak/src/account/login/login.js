import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "auditor") {
      navigate("/auditor/dashboard");
    } else if (role === "auditee") {
      navigate("/auditee/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <h1>Welcome To LAPAK</h1>
        <p className="subtitle">Login to your account</p>
            <form className="login-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <div className="password-field">
                <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                />
                <span
                className="eye-icon"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={0}
                >
                👁️
                </span>
            </div>

            <label>Select Role</label>
            <select value={role} onChange={e => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="auditor">Auditor</option>
                <option value="auditee">Auditee</option>
            </select>

            <button type="submit" className="login-btn">
                Login
            </button>
</form>
        <p className="register-link">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
      <div className="login-image-section"></div>
    </div>
  );
}