import React from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>This is main page</h1>
      </div>

      <div>
        <button onClick={() => navigate("/mypage")} style={{ marginBottom: "10px" }}>
          to my page
        </button>
      </div>
    </div>
  );
};

export default Main;
