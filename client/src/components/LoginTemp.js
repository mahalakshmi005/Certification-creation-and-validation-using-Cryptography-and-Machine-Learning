import React from "react";
import { Link } from "react-router-dom";
import "../form.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box row shadow-lg rounded-4 p-4 bg-white"> 
        <div className="auth-left col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="https://img.freepik.com/free-vector/digital-certificate-concept-illustration_114360-7962.jpg"
            alt="Certificate"
            className="auth-image"
          />
        </div>
        <div className="auth-right">
          <h2>Certificate Login</h2>
          <p>Login to create and verify secure certificates

</p>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p className="link-text">
            New user? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;





