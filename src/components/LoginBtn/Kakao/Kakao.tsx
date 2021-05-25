import React from "react";
import kakaoBtn from "../../../images/kakao_login.png";

const Kakao: React.FC = () => {
  return (
    <>
      <button className="home__authBtn kakao">
        <img
          className="home__authBtn__kakao__img"
          src={kakaoBtn}
          alt="kakaoBtn"
          width={12}
          height={12}
        />
        <span className="home__authBtn__title">Kakao</span>
      </button>
    </>
  );
};

export default Kakao;
