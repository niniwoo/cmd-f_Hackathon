import React from "react";
import { useParams } from "react-router-dom";
import urgentData from "../data/urgent";
import regularData from "../data/regular";

const PostingDetail = () => {
  const { id } = useParams();
  const posting = [...urgentData, ...regularData].find(
    (item) => item.id.toString() === id
  );

  if (!posting) {
    return <div>Posting not found!</div>;
  }
  return (
    <div>
      <h1>{posting.name}</h1>
      <p>Username: {posting.username}</p>
      <p>{posting.picture}</p>
      <p>Expiry Date: {posting.expiryDate}</p>
      <p>Description: {posting.description}</p>
      <p>Quantity: {posting.quantity}</p>
    </div>
  );
};

export default PostingDetail;
