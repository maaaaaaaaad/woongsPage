import React, { useEffect, useState } from "react";
import Body from "../components/Profiles/Body/Body";
import Header from "../components/Profiles/Header/Header";
import SignOut from "../components/Profiles/SignOut/SignOut";
import AuthServiceImpl from "../components/service/firebase/authServcie";
import FirebaseStoreImpl from "../components/service/firebase/store";
import "./css/profile.css";

interface Props {
  authService: AuthServiceImpl;
  store: FirebaseStoreImpl;
}

const Profile: React.FC<Props> = ({ authService, store }) => {
  const [userDisplayName, setUserDisplayName] = useState<string | null>(null);
  const [userUid, setUserUid] = useState<string | null>(null);
  const [getDisplayName, setGetDisplayName] =
    useState<string | undefined>(undefined);

  useEffect(() => {
    authService.userState((user: firebase.default.User) => {
      if (!user) {
        setUserDisplayName(null);
      } else {
        setUserDisplayName(user.displayName!);
        setUserUid(user.uid);
      }
    });
  }, [authService, userDisplayName]);

  const getMiniDisplayName = (name: string) => {
    setGetDisplayName(name);
  };

  useEffect(() => {
    userUid && store.displaySnapshot(userUid, getMiniDisplayName);
  });

  return (
    <>
      {userDisplayName ? (
        <section className="profile__section">
          <header className="profile__header">
            <Header
              userDisplayName={userDisplayName}
              getDisplayName={getDisplayName}
            ></Header>
          </header>
          <div className="profile__body">
            <Body
              userDisplayName={userDisplayName}
              userUid={userUid}
              store={store}
            ></Body>
          </div>
          <footer className="profile__footer">
            <SignOut authService={authService}></SignOut>
          </footer>
        </section>
      ) : (
        <div>Please Login</div>
      )}
    </>
  );
};

export default Profile;
