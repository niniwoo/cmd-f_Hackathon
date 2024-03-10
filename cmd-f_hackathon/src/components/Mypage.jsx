import historyData from "../data/history";
import recentData from "../data/recent";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Mypage = () => {
  const navigate = useNavigate();
  const [showHistory, setShowHistory] = useState(false);

  const handleHistoryClick = () => {
    setShowHistory(true);
  };

  const handleRecentClick = () => {
    setShowHistory(false);
  };

  const handleClickItem = (id) => {
    console.log("Clicked item with ID:", id);
    navigate(`/post-detail/${id}`);
  };

  return (
    <div>
      <h1> This is my page</h1>
      <div>
        <button style={{ marginBottom: "10px" }}>Profile</button>
      </div>

      <p class="d-inline-flex gap-1">
        <button type="button" class="btn btn-primary" onClick={handleRecentClick}>Recent</button>
        <button type="button" class="btn btn-primary" onClick={handleHistoryClick}>History</button>
      </p>



      <div>
        {showHistory && showHistory
          ? historyData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClickItem(item.id)}
              style={{ cursor: "pointer" }}
            >
              <h2>{item.name}</h2>
              <p>Expiry Date: {item.expiryDate}</p>
              <p>Description: {item.description}</p>
              <hr />
            </div>
          ))
          : recentData.map((item) => (
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

export default Mypage;
