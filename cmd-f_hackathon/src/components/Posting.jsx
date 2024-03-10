import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Posting = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevValue) => prevValue - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const location = event.target.location.value;
    const expirationDate = event.target.expirationDate.value;

    if (!name || !description || !location || !expirationDate) {
      alert("Please fill in all fields.");
    } else {
      navigate("/posting2");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>This is creating posting page</h1>
      <form onSubmit={handleSubmit}>
        <legend>Listing Information</legend>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <select id="location">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div>
          <label htmlFor="foodQuantity">Food Quantity:</label>
          <button type="button" onClick={handleDecrement}>
            -
          </button>
          <input type="text" id="foodQuantity" value={quantity} readOnly />
          <button type="button" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration date:</label>
          <input type="text" id="expirationDate" placeholder="YYYY-MM-DD" />
        </div>

        <button>next</button>
      </form>
    </div>
  );
};

export default Posting;
