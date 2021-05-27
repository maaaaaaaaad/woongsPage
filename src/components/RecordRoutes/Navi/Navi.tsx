import React from "react";
import { Link } from "react-router-dom";
import "./Navi.css";
import tsLog from "../../../images/stack-images/Typescript_logo.png";
import reactLog from "../../../images/stack-images/React_logo.png";
import jsLog from "../../../images/stack-images/Javascript_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navi: React.FC = (props) => {
  return (
    <section>
      <ul className="record__navi__ul">
        <li className="record__navi__li">
          <Link className="record__navi__link home" to="/record">
            <FontAwesomeIcon
              className="record__navi__icon"
              icon={faHome}
            ></FontAwesomeIcon>
          </Link>
        </li>
        <li className="record__navi__li">
          <Link className="record__navi__link tsreact" to="/record/typescript">
            <img
              className="record__navi__img"
              src={tsLog}
              alt="ts"
              width={40}
              height={40}
            />
            <img
              className="record__navi__img"
              src={reactLog}
              alt="react-ts"
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li className="record__navi__li">
          <Link className="record__navi__link jsreact" to="/record/javascript">
            <img
              className="record__navi__img"
              src={jsLog}
              alt="js"
              width={40}
              height={40}
            />
            <img
              className="record__navi__img"
              src={reactLog}
              alt="react-js"
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li className="record__navi__li">
          <Link className="record__navi__link hc" to="/record/jsVideo">
            <img
              className="record__navi__img"
              src={jsLog}
              alt="css"
              width={40}
              height={40}
            />
            <img
              className="record__navi__img"
              src={reactLog}
              alt="html"
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li className="record__navi__li"></li>
      </ul>
    </section>
  );
};

export default Navi;
