import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import urgentData from "../data/urgent";
import regularData from "../data/regular";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const PostingDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const posting = [...urgentData, ...regularData].find(
    (item) => item.id.toString() === id
  );
  const goBack = () => {
    navigate(-1);
  };
  const goChat = () => {
    navigate("/chat");
  };

  if (!posting) {
    return <div>Posting not found!</div>;
  }
  return (
    <div className="container p-3">
      <div
        className="row justify-content-center col-md-6 p-3"
        style={{ backgroundColor: "#FDF4EB" }}
      >
        <div className="col-md-12">
          <div>
            <h2>Username: {posting.username}</h2>
            <img
              style={{ width: "100%", height: 200, borderRadius: "10px" }}
              src={require("../images/bread.png")}
              alt=" "
            />
            <div className="d-flex">
              <FontAwesomeIcon icon={faUser} />
              <div style={{ marginLeft: "10px", paddingBottom: "15px" }}>
                {" "}
                {posting.username}
              </div>
            </div>
            {/* Image   <p>{posting.picture}</p> */}
            <h3>{posting.name}</h3>
            <p>Quantity: {posting.quantity}</p>
            <p>Expiry Date: {posting.expiryDate}</p>
            <div>Description: {posting.description}</div>
            <div>Location</div>
            <div>Source</div>
            <div style={{ marginBottom: "20px", marginTop: "10px" }}>
              <div
                className="btn btn-primary"
                onClick={goChat}
                style={{ marginRight: "20px" }}
              >
                Contact Now
              </div>
              <div className="btn btn-primary" onClick={goBack}>
                Go back
              </div>
            </div>

            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostingDetail;
