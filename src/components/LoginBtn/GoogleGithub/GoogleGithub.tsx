import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import AuthServiceImpl from "../../service/firebase/authServcie";
import "./GoogleGithub.css";

interface Props {
  authService: AuthServiceImpl;
}

const GoogleGithub: React.FC<Props> = ({ authService }) => {
  const history = useHistory();

  const onAuthBtnClick: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    const targetValue = event.currentTarget.textContent;
    const login = await authService.login(targetValue!);

    history.push({
      pathname: "/profile",
      state: {
        uid: login.user!.uid,
        displayName: login.user!.displayName,
        email: login.user!.email,
      },
    });
  };

  return (
    <>
      <button onClick={onAuthBtnClick} className="home__authBtn google">
        <FontAwesomeIcon icon={["fab", "google"]}></FontAwesomeIcon>
        <span className="home__authBtn__title">Google</span>
      </button>
      <button onClick={onAuthBtnClick} className="home__authBtn github">
        <FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon>
        <span className="home__authBtn__title">Github</span>
      </button>
    </>
  );
};

export default GoogleGithub;
