import React from "react";
import "./css/home.css";
import homeImg from "../../images/record-home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = (props) => {
  return (
    <section className="record__home__section">
      <div className="record__home__description">
        <div className="record__home__title">Information</div>
        <div className="record__home__content">
          Basically, Project include HTML5, CSS3 <br />
          Here navigation has 4 project
          <br />
          You can see more project where my github
          <br />
          But there is exist what no CSS project
          <br />
          Almost of project used Firebase as back-end system
          <br />
          <footer className="record__home__content__footer">
            <FontAwesomeIcon
              className="record__home__content__icon star"
              icon={faStar}
            ></FontAwesomeIcon>
            This page update is continue as you’d expect
          </footer>
        </div>
      </div>
      <img className="record__home__img" src={homeImg} alt="homeImg" />
    </section>
  );
};

export default Home;
