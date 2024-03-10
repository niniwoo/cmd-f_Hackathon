import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import urgentData from "../data/urgent";
import regularData from "../data/regular";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
    <div className="container">
      <div
        style={{ backgroundColor: "lightgrey", padding: "15px" }}
        className="row justify-content-center col-md-6"
      >
        <div className="col-md-12">
          <p className="d-flex col-md-12 justify-content-center">
            <button
              type="button"
              className="btn btn-primary col-md-6" // Add margin to the right for spacing
              onClick={handleUrgentClick}
              style={{ marginRight: "15px" }}
            >
              Urgent Item
            </button>
            <button
              type="button"
              className="btn btn-primary col-md-6"
              onClick={handleSeeMoreClick}
            >
              See More Item
            </button>
          </p>

          <div>
            {showUrgent
              ? urgentData.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleClickItem(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <p style={{ fontWeight: "bold" }}>{item.name}</p>
                    <p>Expiry Date: {item.expiryDate}</p>
                    <p>Description: {item.description}</p>
                    <div className="col d-flex mb-3 align-items-center">
                      <div className="btn btn-light">More Info</div>
                      <div style={{ marginLeft: "10px" }}>
                        <FontAwesomeIcon icon={faUser} />
                        {item.username}
                      </div>
                    </div>
                  </div>
                ))
              : regularData.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleClickItem(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <p style={{ fontWeight: "bold" }}>{item.name}</p>
                    <p>Expiry Date: {item.expiryDate}</p>
                    <p>Description: {item.description}</p>
                    <div className="col d-flex mb-3 align-items-center ">
                      <div className="btn btn-light">More Info</div>
                      <div style={{ marginLeft: "10px" }}>
                        <FontAwesomeIcon icon={faUser} />
                        {item.username}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Main;
