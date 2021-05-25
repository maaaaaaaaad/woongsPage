import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import AuthServiceImpl from "../../service/firebase/authServcie";
import "./SignOut.css";

interface Props {
  authService: AuthServiceImpl;
}

const SignOut: React.FC<Props> = ({ authService }) => {
  const history = useHistory();

  const onSignOutHandler: React.MouseEventHandler<SVGSVGElement> = () => {
    const message = "Are you sure sign out?";
    const ok = window.confirm(message);
    if (ok) {
      authService.logout();
      history.push("/");
    }
  };

  return (
    <FontAwesomeIcon
      className="signOut__icon sinOut"
      onClick={onSignOutHandler}
      icon={faSignOutAlt}
    ></FontAwesomeIcon>
  );
};

export default SignOut;
