import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import appName from "../images/AppName.png";

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
    <div className="container p-3">
      <div
        className="row justify-content-center col-md-6"
        style={{ backgroundColor: "#FDF4EB" }}
      >
        <div className="col-md-12 p-3">
          <div className="row justify-content-center col-md-12 mb-4">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "150px", height: "130px", marginTop: "20px" }}
            />
            <img
              src={appName}
              alt="appName"
              style={{ width: "200px", height: "45px" }}
            />
          </div>
          <div className="text-center mb-2 col-md-12">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-center mb-4 col-md-12">
            {/* Centering password input */}
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            className="btn btn-primary text-center col-md-12 "
            onClick={handleSignIn}
          >
            Sign In
          </div>
          <p className="justify-content-center text-center col-md-12">or</p>{" "}
          {/* Centering "or" text */}
          <button
            type="button"
            className="btn btn-light text-center mb-2 col-md-12"
          >
            Sign in with Google
          </button>
          <br />
          <button
            type="button"
            className="btn btn-light text-center mb-4 col-md-12"
          >
            Sign up with Apple
          </button>
          <div
            type="button"
            onClick={() => navigate("/signup")}
            className="justify-content-center col-md-12"
          >
            <div className="text-center">
              You don't have an account? Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
