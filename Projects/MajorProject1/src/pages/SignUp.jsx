import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify({ email, password }));
    localStorage.setItem("isLoggedIn", "true");

    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-logo-section">
        <ion-icon name="bag" class="signup-icon"></ion-icon>
        <h1 className="signup-logo">Multimart</h1>
      </div>
      <div className="signup-form-section">
        <form className="signup-form-box" onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="/forgot">Forgot Password?</a>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
