import React, { useState } from "react";
import "./css/typescript.css";
import card01 from "./recordImg/card01.png";
import card02 from "./recordImg/card02.png";
import card03 from "./recordImg/card03.png";
import cardView from "./recordImg/card-view.png";
import cardAdd from "./recordImg/card-add.png";
import cardUpload from "./recordImg/card-upload.png";

const Javscript: React.FC = (props) => {
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
            width={200}
            height={250}
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
              Realtime upload and remove what user maker cards
            </li>
            <li className="record__type__li">
              Card image data have save in cloudinary service
            </li>
          </ul>
        </div>
      )}

      <div className="record__type__images">
        <ul className="record__type__ul imgBox">
          <li className="record__type__li">
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={card01}
              alt="sns01"
              width={160}
              height={100}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={cardView}
              alt="snsPro"
              width={160}
              height={100}
            />
          </li>
          <li className="record__type__li">
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={card02}
              alt="sns02"
              width={160}
              height={100}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={cardAdd}
              alt="snsImg"
              width={160}
              height={100}
            />
          </li>
          <li className="record__type__li">
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={card03}
              alt="sns03"
              width={160}
              height={100}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={cardUpload}
              alt="snsProfile"
              width={160}
              height={100}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Javscript;
