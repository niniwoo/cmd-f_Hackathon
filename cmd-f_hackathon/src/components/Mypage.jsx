import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import historyData from "../data/history";
import recentData from "../data/recent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Mypage = () => {
  const navigate = useNavigate();
  const [showHistory, setShowHistory] = useState(false);

  const handleHistoryClick = () => {
    setShowHistory(true);
  };

  const logOut = () => {
    navigate("/");
  };

  const handleRecentClick = () => {
    setShowHistory(false);
  };

  const handleClickItem = (id) => {
    navigate(`/post-detail/${id}`);
  };

  return (
    <div className="container p-3">
      <div
        className="row justify-content-center col-md-6 p-3"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="d-flex align-content-center">
          <FontAwesomeIcon icon={faUser} size="2x" />
          <div style={{ marginLeft: "20px" }}>
            <div className="row mr-3">john</div>
            <div className="row ">john@gmail.com</div>
          </div>
        </div>
        <div className="btn btn-dark" onClick={logOut}>
          Logout
        </div>

        <p className="d-inline-flex gap-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleRecentClick}
          >
            Recent
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleHistoryClick}
          >
            History
          </button>
        </p>

        <div>
          {showHistory
            ? historyData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleClickItem(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <p>{item.name}</p>
                  <p>Item Status: {item.status}</p>
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
                  <p>{item.name}</p>
                  <p>Expiry Date: {item.expiryDate}</p>
                  <p>Description: {item.description}</p>
                  <hr />
                </div>
              ))}
        </div>

        <NavBar />
      </div>
    </div>
  );
};

export default Mypage;
