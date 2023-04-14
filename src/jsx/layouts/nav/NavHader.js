import React, { useState } from "react";

/// React router dom
import { Link } from "react-router-dom";

/// images
import logo1 from "../../../images/img/logodp.png";
import sportex from "../../../images/img/logodp.png";
import logoText from "../../../images/logo-text.png";
const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="nav-header" style={{ zIndex: "6" }}>
      <Link to="/" className="brand-logo">
        <img className="logo-compact" src={sportex} alt="" />
        <img className="brand-title" src={sportex} alt="" />
      </Link>

      <div className="nav-control" onClick={() => setToggle(!toggle)}>
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
