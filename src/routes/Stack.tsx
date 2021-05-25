import React from "react";
import TsLog from "../images/stack-images/Typescript_logo.png";
import ReactLog from "../images/stack-images/React_logo.png";
import JsLog from "../images/stack-images/Javascript_logo.png";
import CssLog from "../images/stack-images/CSS3_logo.png";
import HtmlLog from "../images/stack-images/HTML5_logo.jpeg";
import "./css/stack.css";

const Stack: React.FC = (props) => {
  return (
    <section className="stack__section">
      <ul className="stack__ul">
        <li className="stack__li">
          <img
            className="stack__img ts"
            src={TsLog}
            alt="TsLog"
            width={150}
            height={120}
          />
        </li>
        <li className="stack__li">
          <img
            className="stack__img react"
            src={ReactLog}
            alt="ReactLog"
            width={150}
            height={120}
          />
        </li>
        <li className="stack__li">
          <img
            className="stack__img js"
            src={JsLog}
            alt="JsLog"
            width={150}
            height={120}
          />
        </li>
        <li className="stack__li">
          <img
            className="stack__img css"
            src={CssLog}
            alt="CssLog"
            width={150}
            height={120}
          />
        </li>
        <li className="stack__li">
          <img
            className="stack__img html"
            src={HtmlLog}
            alt="HtmlLog"
            width={150}
            height={120}
          />
        </li>
      </ul>
    </section>
  );
};

export default Stack;
