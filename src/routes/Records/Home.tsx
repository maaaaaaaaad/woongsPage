import React from "react";
import "./css/record-home.css";

const Home: React.FC = (props) => {
  return (
    <section className="record__home__section">
      <ul className="record__home__ul">
        <li className="record__home__ul__li title">Information</li>
        <li className="record__home__ul__li">
          Basically, Project include HTML5, CSS3
        </li>
        <li className="record__home__ul__li">
          You can see more project where my github
        </li>
        <li className="record__home__ul__li">
          But there is exist what no CSS project
        </li>
        <li className="record__home__ul__li">
          Almost of project used Firebase as back-end system
        </li>
        <li className="record__home__ul__li">
          This page update is continue as you’d expect
        </li>
      </ul>
    </section>
  );
};

export default Home;
