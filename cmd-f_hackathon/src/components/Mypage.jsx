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
    navigate("/signin");
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
        style={{ backgroundColor: "lightgrey" }}
        className="row justify-content-center col-md-6 p-3"
      >
        <div>
          <div>
            <div className="d-flex justify-content-center col-md-6">
              <FontAwesomeIcon icon={faUser} size="2x" />
              <div className="mr-3">john</div>
              <p>john@gmail.com</p>
            </div>
            <div className="btn btn-dark" onClick={logOut}>
              Logout
            </div>
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
                    <h2>{item.name}</h2>
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
                    <h2>{item.name}</h2>
                    <p>Expiry Date: {item.expiryDate}</p>
                    <p>Description: {item.description}</p>
                    <hr />
                  </div>
                ))}
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default Mypage;
