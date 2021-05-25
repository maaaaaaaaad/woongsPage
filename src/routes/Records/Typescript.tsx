import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./css/typescript.css";
import sns01 from "./recordImg/sns01.png";
import sns02 from "./recordImg/sns02.png";
import sns03 from "./recordImg/sns03.png";
import snsPro from "./recordImg/sns-login.png";
import snsImg from "./recordImg/sns-img.png";
import snsProfile from "./recordImg/sns-profile.png";

const Typescript: React.FC = (props) => {
  const [imgOver, setImgOver] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>("");

  const onImgOverHandler: React.MouseEventHandler<HTMLImageElement> = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const target = event.target as HTMLImageElement;
    setImgOver(true);
    setImgSrc(target.src);
  };

  const onImgOutHandler: React.MouseEventHandler<HTMLImageElement> = () => {
    setImgOver(false);
    setImgSrc("");
  };

  return (
    <section className="record__type__section">
      {imgOver ? (
        <div className="record__type__imgViewer">
          <img
            className="record__type__imgViewer__img"
            src={imgSrc}
            alt={imgSrc}
            width={400}
            height={450}
          />
        </div>
      ) : (
        <div className="record__type__description">
          <h1 className="record__type__title">Simple Mini SNS</h1>
          <ul className="record__type__ul">
            <li className="record__type__li">Stack: Typescript, React</li>
            <li className="record__type__li">Design: Basic CSS</li>
            <li className="record__type__li">Back-end: Firebase</li>
          </ul>
          <h1 className="record__type__impl">Implements</h1>
          <ul className="record__type__ul">
            <li className="record__type__li">
              Create user ID with Email and Password
            </li>
            <li className="record__type__li">
              Loign as Google and Github Authentication
            </li>
            <li className="record__type__li">
              {" "}
              User message write and view (realtime chatting)
            </li>
            <li className="record__type__li"> Upload user profile</li>
          </ul>
          <a
            href="https://github.com/dongwoongoh/Simple-Mini-SNS"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="record__type__icon git"
              icon={["fab", "github"]}
              size={"2x"}
            ></FontAwesomeIcon>
          </a>
        </div>
      )}

      <div className="record__type__images">
        <ul className="record__type__ul">
          <li className="record__type__li">
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={sns01}
              alt="sns01"
              width={200}
              height={150}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={snsPro}
              alt="snsPro"
              width={200}
              height={150}
            />
          </li>
          <li className="record__type__li">
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={sns02}
              alt="sns02"
              width={200}
              height={150}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={snsImg}
              alt="snsImg"
              width={200}
              height={150}
            />
          </li>
          <li className="record__type__li">
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={sns03}
              alt="sns03"
              width={200}
              height={150}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={snsProfile}
              alt="snsProfile"
              width={200}
              height={150}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Typescript;
