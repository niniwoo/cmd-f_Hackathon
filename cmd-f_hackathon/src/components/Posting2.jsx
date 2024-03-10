import React, { useState } from "react";

const Posting2 = () => {
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
    } else {
      setErrorMessage(`You can't post [ ${uncheckedCheckboxes.join(", ")} ]`);
    }
  };

  return (
    <div>
      <div>
        <label>Image</label>
        <input type="file" id="image" accept="image/*" />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="checklist1"
            onChange={handleCheckboxChange}
          />
          Check list1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checklist2"
            onChange={handleCheckboxChange}
          />
          Check list2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checklist3"
            onChange={handleCheckboxChange}
          />
          Check list3
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checklist4"
            onChange={handleCheckboxChange}
          />
          Check list4
        </label>
        <br />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Posting2;
