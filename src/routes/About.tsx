import React, { useState } from "react";
import "./css/about.css";
import myFace from "../images/Woongs-removeBg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  const [readMoreState, setReadMoreState] = useState<boolean>(false);

  const onReadMoreHandler: React.MouseEventHandler<SVGSVGElement> = () => {
    setReadMoreState((prev) => !prev);
  };

  return (
    <section className="about__imgAndGreeting">
      <img
        className="about__faceImg"
        src={myFace}
        alt="myFace"
        width={180}
        height={180}
      />
      <div className="about__greetingBox">
        <h1 className="about__greetingBox__title">Hello! I'm OH🤘🏻</h1>
        <span className="about__greetingBox__message">
          This is software enginner's website
        </span>
        <abbr
          className="about__greetingBox__abbr"
          title={!readMoreState ? "Read More" : "Close"}
        >
          {!readMoreState ? (
            <FontAwesomeIcon
              onClick={onReadMoreHandler}
              className="about__greetingBox__icon readMore"
              icon={faArrowCircleDown}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              onClick={onReadMoreHandler}
              className="about__greetingBox__icon readMore"
              icon={faArrowCircleUp}
            ></FontAwesomeIcon>
          )}
        </abbr>
      </div>
      {readMoreState && (
        <div className="about__overview">
          <ul className="about__overview__ul">
            <li className="about__overview__ul__li">
              First of all, I'm so honored that you visit my website.
            </li>
            <li className="about__overview__ul__li">
              really into Typescript & React these days
            </li>
            <li className="about__overview__ul__li">
              responsible and have a strong intellectual curiosity.
            </li>
            <li className="about__overview__ul__li">
              I'm growing up super fast.
            </li>
            <li className="about__overview__ul__li">
              Wanna be a developer who can help others.
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default About;
