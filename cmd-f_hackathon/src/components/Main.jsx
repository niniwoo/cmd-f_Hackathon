
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import urgentData from "../data/urgent";
import regularData from "../data/regular";

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


      <p class="d-inline-flex gap-1">
        <button type="button" class="btn btn-primary" onClick={handleUrgentClick}>Urgen Item</button>
        <button type="button" class="btn btn-primary" onClick={handleSeeMoreClick}>See More Item</button>
        <button type="button" class="btn btn-primary" onClick={() => navigate("/mypage")}>To my page</button>
      </p>

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
    </div>
  );
};

export default Main;
