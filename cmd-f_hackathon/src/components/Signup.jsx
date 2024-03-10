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
      setSuccessMessage("Thanks for signing up!");
      setErrorMessage("");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div>
      <h1>This is Sign up page</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <button type="button" class="btn btn-primary">Sign up</button>
      </form>
      <p>or</p>
      <p class="d-grid gap-2 col-10 mx-auto">
        <button type="button" class="btn btn-primary" >Sign in</button>
        <button type="button" class="btn btn-primary">Sign up</button>
        <button type="button" class="btn btn-primary" onClick={() => navigate("/")}>Go to main page</button>
      </p>

    </div>
  );
};

export default Signup;
