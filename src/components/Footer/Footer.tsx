import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <section className="footer__section">
      <FontAwesomeIcon
        className="footer__icon copyright"
        icon={faCopyright}
      ></FontAwesomeIcon>
      <h5>By WOONG in Korea Seoul</h5>
    </section>
  );
};

export default Footer;
