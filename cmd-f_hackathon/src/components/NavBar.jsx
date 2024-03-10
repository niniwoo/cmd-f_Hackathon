import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faPlus,
  faUser,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <div className="container-fluid justify-content-around">
        <div className="navbar-brand" onClick={() => handleNavigate("/main")}>
          <FontAwesomeIcon icon={faHouseChimney} />
        </div>
        <div
          className="navbar-brand"
          onClick={() => handleNavigate("/posting")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="navbar-brand" onClick={() => handleNavigate("/mypage")}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="navbar-brand" onClick={() => handleNavigate("/chat")}>
          <FontAwesomeIcon icon={faComments} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
