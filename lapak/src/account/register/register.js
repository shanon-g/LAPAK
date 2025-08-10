import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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
    <div className="register-container">
      <div className="register-form-section">
        <h1>Welcome To LAPAK</h1>
        <p className="subtitle">create your account</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Insert your name" />

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

          <label>Confirm Password</label>
          <div className="password-field">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Re-enter your password"
            />
            <span
              className="eye-icon"
              onClick={() => setShowConfirm((v) => !v)}
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

          <button type="submit" className="create-account-btn">
            Create Account
          </button>
        </form>
        <p className="login-link">
          Already has an account? <Link to="/login">Login here</Link>
        </p>
      </div>
      <div className="register-image-section">
        <img alt="" />
      </div>
    </div>
  );
}