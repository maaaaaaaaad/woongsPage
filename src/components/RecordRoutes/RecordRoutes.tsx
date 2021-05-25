import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../RecordBodyRouter/Routes";
import Header from "./Header/Header";
import Navi from "./Navi/Navi";
import "./RecordRoutes.css";

const RecordRoutes: React.FC = (props) => {
  return (
    <section className="record__section">
      <BrowserRouter>
        <header className="record__header">
          <Header></Header>
        </header>
        <div className="record__body">
          <Routes></Routes>
        </div>
        <nav className="record__nav">
          <Navi></Navi>
        </nav>
      </BrowserRouter>
    </section>
  );
};

export default RecordRoutes;
