import React, { useState } from "react";
import "./css/about.css";
import myFace from "../images/Woongs-removeBg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  const [readMoreState, setReadMoreState] = useState<boolean>(false);

  const onReadMoreHandler: React.MouseEventHandler<SVGSVGElement> = () => {
    setReadMoreState((prev) => !prev);
  };

  return (
    <section className="about__section">
      <section className="about__imgAndGreeting">
        <img
          className="about__faceImg"
          src={myFace}
          alt="myFace"
          width={200}
          height={200}
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
                icon={faArrowDown}
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                onClick={onReadMoreHandler}
                className="about__greetingBox__icon readMore"
                icon={faArrowUp}
              ></FontAwesomeIcon>
            )}
          </abbr>
        </div>
      </section>
      {readMoreState && (
        <div className="about__overview">
          First of all, I'm so honored that you visit my website.
          <br /> I really appreciate it.
          <br />
          I'm really into Typescript & React these days
          <br />
          Implement back-end service is from Firebase.
          <br />I am responsible and have a strong intellectual curiosity.
          <br /> also I'm really enjoying this. I think,
          <br /> I'm growing up super fast.
          <br /> And I want to be a developer who can help others.
        </div>
      )}
    </section>
  );
};

export default About;
