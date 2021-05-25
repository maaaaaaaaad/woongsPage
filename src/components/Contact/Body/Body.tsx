import { faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Body.css";

const Body: React.FC = (props) => {
  return (
    <section className="contact__body__section">
      <ul className="contact__body__ul">
        <li className="contact__body__li">
          <FontAwesomeIcon
            className="contact__body__icon"
            icon={faLocationArrow}
          ></FontAwesomeIcon>
          <span className="contact__body__text">
            WOONG is live in Seoul now
          </span>
        </li>
        <li className="contact__body__li">
          <FontAwesomeIcon
            className="contact__body__icon"
            icon={["fab", "github"]}
          ></FontAwesomeIcon>
          <a
            className="contact__body__li"
            href="https://github.com/dongwoongoh"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/dongwoongoh
          </a>
        </li>
        <li className="contact__body__li">
          <FontAwesomeIcon
            className="contact__body__icon"
            icon={faPhone}
          ></FontAwesomeIcon>
          <span className="contact__body__text">+82)10-7585-1779</span>
        </li>
      </ul>
    </section>
  );
};

export default Body;
