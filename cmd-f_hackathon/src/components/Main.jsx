import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import urgentData from "../data/urgent";
import regularData from "../data/regular";
import NavBar from "./NavBar";

const Main = () => {
  const navigate = useNavigate();
  const [showUrgent, setShowUrgent] = useState(false);

  const handleUrgentClick = () => {
    setShowUrgent(true);
  };

  const handleSeeMoreClick = () => {
    setShowUrgent(false);
  };

  const handleClickItem = (id) => {
    // Handle click logic here, such as navigating to a detailed view
    console.log("Clicked item with ID:", id);
    navigate(`/post-detail/${id}`);
  };

  return (
    <div>
      <h1>This is main page</h1>
      <button onClick={handleUrgentClick}>Urgent Item</button>
      <button onClick={handleSeeMoreClick}>See more item</button>

      <button onClick={() => navigate("/mypage")}>To my page</button>
      <div>
        {showUrgent
          ? urgentData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClickItem(item.id)}
                style={{ cursor: "pointer" }}
              >
                <h2>{item.name}</h2>
                <p>Username: {item.username}</p>
                <p>Expiry Date: {item.expiryDate}</p>
                <p>Description: {item.description}</p>
                <hr />
              </div>
            ))
          : regularData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClickItem(item.id)}
                style={{ cursor: "pointer" }}
              >
                <h2>{item.name}</h2>
                <p>Username: {item.username}</p>
                <p>Expiry Date: {item.expiryDate}</p>
                <p>Description: {item.description}</p>
                <hr />
              </div>
            ))}
      </div>
      <NavBar />
    </div>
  );
};

export default Main;
