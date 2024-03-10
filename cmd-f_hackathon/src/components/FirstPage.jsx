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

      <p className="d-grid gap-2 col-10 mx-auto">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignIn}
        >
          Sign in
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignUp}
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default FirstPage;
