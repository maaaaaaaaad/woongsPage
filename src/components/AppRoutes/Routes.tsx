import React from "react";
import { BrowserRouter } from "react-router-dom";
import BodyRoutes from "../BodyRoutes/BodyRoutes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navi from "../Header/Navi/Navi";
import AuthServiceImpl from "../service/firebase/authServcie";
import FirebaseStoreImpl from "../service/firebase/store";
import "./Routes.css";

interface Props {
  authService: AuthServiceImpl;
  store: FirebaseStoreImpl;
}

const AppRoutes: React.FC<Props> = ({ authService, store }) => {
  return (
    <section className="routes__section">
      <BrowserRouter>
        <header className="routes__header">
          <Header></Header>
          <Navi></Navi>
        </header>
        <div className="routes__body">
          <BodyRoutes authService={authService} store={store}></BodyRoutes>
        </div>
        <footer className="routes__footer">
          <Footer></Footer>
        </footer>
      </BrowserRouter>
    </section>
  );
};

export default AppRoutes;
