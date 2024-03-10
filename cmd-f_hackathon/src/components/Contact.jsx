import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import messageData from "../data/message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const navigate = useNavigate();
  const handleChat = () => {
    navigate("/chat");
  };
  return (
    <div className="container p-3">
      <div
        className="row justify-content-center col-md-6 p-3"
        style={{ backgroundColor: "#FDF4EB" }}
      >
        <h3>Contacts</h3>
        <div className="d-flex flex-column">
          {messageData.map((item) => (
            <div
              key={item.id}
              style={{
                cursor: "pointer",
                alignItems: "center",
                marginBottom: "30px",
              }}
              className="d-flex align-items-center"
            >
              <FontAwesomeIcon icon={faUser} />
              <div
                className="d-flex ml-3"
                onClick={handleChat}
                style={{ marginLeft: "5px", padding: "10px" }}
              >
                <div style={{ fontSize: "15px" }}>{item.username}</div>
                <div
                  style={{
                    fontSize: "12px",
                    marginLeft: "15px",
                    marginTop: "5px",
                  }}
                >
                  {item.message}
                </div>
              </div>
            </div>
          ))}
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Contact;
