import React from "react";
import { Link } from "react-router-dom";
import "./Navi.css";

const Navi: React.FC = (props) => {
  return (
    <section className="navi__section">
      <ul className="navi__ul">
        <li className="navi__li">
          <Link className="navi__link" to="/">
            Home
          </Link>
        </li>
        <li className="navi__li">
          <Link className="navi__link" to="/about">
            About
          </Link>
        </li>
        <li className="navi__li">
          <Link className="navi__link" to="/stack">
            Stack
          </Link>
        </li>
        <li className="navi__li">
          <Link className="navi__link" to="/record">
            Record
          </Link>
        </li>
        <li className="navi__li">
          <Link className="navi__link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="navi__li">
          <Link className="navi__link" to="/profile">
            Edit Profile
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Navi;
