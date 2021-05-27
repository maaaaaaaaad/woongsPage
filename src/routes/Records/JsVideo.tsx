import React, { useState } from "react";
import "./css/typescript.css";
import yotube01 from "./recordImg/youtube01.png";
import yotube02 from "./recordImg/youtube02.png";
import yotube03 from "./recordImg/youtube03.png";
import youtubeMain from "./recordImg/youtube-main.png";
import youtubeApp from "./recordImg/youtube-app.png";
import youtubeSearch from "./recordImg/youtube-search.png";

const JsVideo: React.FC = (props) => {
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
          <h1 className="record__type__title">Popular Youtube videos</h1>
          <ul className="record__type__ul">
            <li className="record__type__li">Stack: Javascript, React</li>
            <li className="record__type__li">Design: Post CSS</li>
            <li className="record__type__li">API: Youtube Video API</li>
          </ul>
          <h1 className="record__type__impl">Implements</h1>
          <ul className="record__type__ul">
            <li className="record__type__li">
              This is my frist youtube API project with using React
            </li>
            <li className="record__type__li">
              Always load videos to 25 count what a popular to world
            </li>
            <li className="record__type__li">
              Search video and watch it through the "Search" form
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
              src={yotube01}
              alt="sns01"
              width={160}
              height={100}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={youtubeMain}
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
              src={yotube02}
              alt="sns02"
              width={160}
              height={100}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={youtubeApp}
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
              src={yotube03}
              alt="sns03"
              width={160}
              height={100}
            />
            <img
              onMouseOver={onImgOverHandler}
              onMouseOut={onImgOutHandler}
              className="record__type__li__img"
              src={youtubeSearch}
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

export default JsVideo;
