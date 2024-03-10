import React from "react";

const Signin = () => {
  return (
    <div>
      <h1>This is Sign in page</h1>
      <div>
        <div>
          <p>email</p>
          <input />
          <p>password</p>
          <input />
        </div>
        <p>or </p>
        <div>
          <div>Login With google_btn</div>
          <div>Login With Apple_btn</div>
        </div>
        <div>
          <p> You don't have an account ? Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
