import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

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
    <div className="container">
      <div
        className="row justify-content-center col-md-6 p-3"
        style={{ backgroundColor: "lightgrey" }}
      >
        <form className="col-md-12 p-3" onSubmit={handleSubmit}>
          <div>
            <h4 className="text-center">Listing Information</h4>

            <div>
              <label>Name (e.g Donuts)</label>
              <input type="text" className="form-control" id="name" />
            </div>

            <div className="mt-3">
              <label>Description (5 word min.)</label>
              <input
                type="text"
                id="description"
                className="form-control"
                style={{ width: "100%", height: "70px" }}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="source">Source</label>
              <input type="text" id="source" className="form-control" />
            </div>

            <div className="align-items-center">
              <div className="col">
                <label htmlFor="foodQuantity">Food Quantity:</label>
              </div>
              <div className="col d-flex">
                <div className="btn btn-primary mr-2" onClick={handleDecrement}>
                  -
                </div>
                <input
                  type="text"
                  id="foodQuantity"
                  className="form-control text-center"
                  value={quantity}
                  readOnly
                />
                <div className="btn btn-primary ml-2" onClick={handleIncrement}>
                  +
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="location">Meetup Location:</label>
              <select id="location" className="form-select w-50">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="mt-3">
              <label htmlFor="expirationDate">Expiration date:</label>
              <input
                type="text"
                id="expirationDate"
                className="form-control w-50"
                placeholder="YYYY-MM-DD"
              />
            </div>

            <button className="btn btn-primary col-md-4 mt-4" type="submit">
              Next
            </button>
          </div>
        </form>
        <NavBar />
      </div>
    </div>
  );
};

export default Posting;
