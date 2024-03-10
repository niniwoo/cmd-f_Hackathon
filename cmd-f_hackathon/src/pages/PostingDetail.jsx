import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import urgentData from "../data/urgent";
import regularData from "../data/regular";
import NavBar from "../components/NavBar";

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
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="col-md-12 p-3">
          <div>
            <h2>Username: {posting.username}</h2>
            {/* Image   <p>{posting.picture}</p> */}
            <h3>{posting.name}</h3>
            <p>Quantity: {posting.quantity}</p>
            <p>Expiry Date: {posting.expiryDate}</p>
            <div>Description: {posting.description}</div>
            <div>Location</div>
            <div>Source</div>
            <div className="btn btn-primary" onClick={goChat}>
              Contact Now
            </div>
            <div className="btn btn-primary" onClick={goBack}>
              Go back
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default PostingDetail;
