import React from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h1>Firstpage</h1>
      <p>Logo</p>

      <button
        type="button"
        className="btn btn-primary active"
        data-bs-toggle="button"
        aria-pressed="true"
      >
        Active toggle button
      </button>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default FirstPage;
