import React from "react";
import AuthServiceImpl from "../service/firebase/authServcie";

import "./LoginBtn.css";
import GoogleGithub from "./GoogleGithub/GoogleGithub";
import Kakao from "./Kakao/Kakao";

interface Props {
  authService: AuthServiceImpl;
}

const LoginBtn: React.FC<Props> = ({ authService }) => {
  return (
    <>
      <div className="home__authBtn__box">
        <GoogleGithub authService={authService}></GoogleGithub>
        <Kakao></Kakao>
      </div>
    </>
  );
};

export default LoginBtn;
