import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../form.css";



function Register() {
  const [formData, setFormData] = useState({
    organization: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered successfully! (frontend only)");
  };

  return (
    <div className="auth-container">
      <div className="auth-box row shadow-lg rounded-4 p-4 bg-white"> {/* ✅ Bootstrap classes */}
        <div className="auth-left col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-7961.jpg"
            alt="Secure Register"
            className="auth-image"
          />
        </div>
        <div className="auth-right">
          <h2>Register</h2>
          <p>Create your account to generate certificates</p>
          <form onSubmit={handleSubmit}>
           <input
              type="text"
              name="organization"
              className="form-control"
              placeholder="Organization Name"
              required
              onChange={handleChange}
            /> 
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <button type="submit">Register</button>
          </form>
          <p className="link-text">
            Already have an account? <Link to="/">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

