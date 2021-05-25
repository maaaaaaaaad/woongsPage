import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./css/typescript.css";
import card01 from "./recordImg/card01.png";
import card02 from "./recordImg/card02.png";
import card03 from "./recordImg/card03.png";
import cardView from "./recordImg/card-view.png";
import cardAdd from "./recordImg/card-add.png";
import cardUpload from "./recordImg/card-upload.png";

const Javascript: React.FC = (props) => {
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
          <h1 className="record__type__title">Pet Card Maker</h1>
          <ul className="record__type__ul">
            <li className="record__type__li">Stack: Javascript, React</li>
            <li className="record__type__li">Design: Post CSS</li>
            <li className="record__type__li">Back-end: Firebase, Cloudinary</li>
          </ul>
          <h1 className="record__type__impl">Implements</h1>
          <ul className="record__type__ul">
            <li className="record__type__li">
              Loign as Google and Github Authentication
            </li>
            <li className="record__type__li">
              User can Realtime upload and remove what user maker cards
            </li>
            <li className="record__type__li">
              User made card image data have save in cloudinary service
            </li>
            <li className="record__type__li">
              The service code is separate in the lump
            </li>
          </ul>
          <a
            href="https://github.com/dongwoongoh/Network-service"
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
              src={card01}
              alt="sns01"
              width={200}
              height={150}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={cardAdd}
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
              src={card02}
              alt="sns02"
              width={200}
              height={150}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={cardUpload}
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
              src={card03}
              alt="sns03"
              width={200}
              height={150}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={cardView}
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

export default Javascript;
