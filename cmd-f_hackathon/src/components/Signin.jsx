import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email === "test@test.com" && password === "test123") {
      navigate("/main");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <h1>This is Sign in page</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignIn} style={{ marginBottom: "10px" }}>
        Sign In
      </button>
      <p style={{ marginTop: "20px", marginBottom: "10px" }}>or</p>
      <div style={{ marginBottom: "10px" }}>
        <button>Login With Google</button>
        <button>Login With Apple</button>
      </div>
      <div>
        <p style={{ marginTop: "10px" }}>You don't have an account?</p>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signin;
