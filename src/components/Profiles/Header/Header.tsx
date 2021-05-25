import React from "react";
import "./Header.css";

interface Props {
  userDisplayName: string | null;
  getDisplayName: string | undefined;
}

const Header: React.FC<Props> = ({ userDisplayName, getDisplayName }) => {
  return (
    <section className="profile__header__section">
      <h1 className="profile__header__title">
        {getDisplayName ? getDisplayName : userDisplayName}'s Profile
      </h1>
    </section>
  );
};

export default Header;
