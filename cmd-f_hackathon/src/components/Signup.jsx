import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage("");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setSuccessMessage("");
    } else {
      alert("Thanks for signing up!");
      setErrorMessage("");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/signin");
    }
  };

  return (
    <div className="container p-3">
      <div
        className="row justify-content-center col-md-6 p-3"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="col-md-12 p-3">
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Email</label>
            <input
              type="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="btn btn-primary col-md-6">
              Sign up
            </button>
          </form>
          <div className="justify-content-center">
            <p>or</p>
            <p className="d-grid gap-2 col-10 mx-auto">
              <button type="button" className="btn btn-light">
                Sign up with Google
              </button>
              <button type="button" className="btn btn-light">
                Sign up with Apple
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
