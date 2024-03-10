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

      <p class="d-grid gap-2 col-10 mx-auto">
        <button type="button" class="btn btn-primary" >Sign in</button>
        <button type="button" class="btn btn-primary">Sign up</button>
      </p>
    </div>
  );
};

export default FirstPage;
