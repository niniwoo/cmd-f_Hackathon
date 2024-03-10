import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Posting2 = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState({
    checklist1: false,
    checklist2: false,
    checklist3: false,
    checklist4: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    const uncheckedCheckboxes = Object.entries(isChecked)
      .filter(([name, checked]) => !checked)
      .map(([name]) => name);

    if (uncheckedCheckboxes.length === 0) {
      setErrorMessage("");
      alert("Form submitted successfully!");
      navigate("/main");
    } else {
      setErrorMessage(
        `Posting failed. Please ensure all required conditions are met.`
      );
    }
  };

  return (
    <div className="container p-3 justify-content-center align-items-center">
      <div
        className="row justify-content-center col-md-6"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div>
          <div>
            <label>Image of Item</label>
            <input type="file" id="image" accept="image/*" />
          </div>
          <div className="mt-3">
            <div>
              <input
                type="checkbox"
                name="checklist1"
                onChange={handleCheckboxChange}
              />
              Safe to consume for humans
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                name="checklist2"
                onChange={handleCheckboxChange}
              />
              Packaging not opened or re-sealed
            </div>

            <div className="mt-2">
              <input
                type="checkbox"
                name="checklist3"
                onChange={handleCheckboxChange}
              />
              Food isn't expired or moldy
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                name="checklist4"
                onChange={handleCheckboxChange}
              />
              Not a home-cooked meal
            </div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <button
              className="btn btn-primary col-md-4 mt-4"
              onClick={handleSubmit}
            >
              upload
            </button>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Posting2;
