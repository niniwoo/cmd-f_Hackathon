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
    <div>
      <div>
        {" "}
        <h1>{posting.name}</h1>
        <p>Username: {posting.username}</p>
        <p>{posting.picture}</p>
        <p>Expiry Date: {posting.expiryDate}</p>
        <p>Description: {posting.description}</p>
        <p>Quantity: {posting.quantity}</p>
        <button onClick={goChat}>Contact Now</button>
        <button onClick={goBack}>Go back</button>
      </div>
      <NavBar />
    </div>
  );
};

export default PostingDetail;
