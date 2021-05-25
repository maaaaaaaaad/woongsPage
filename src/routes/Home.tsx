import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import LoginBtn from "../components/LoginBtn/LoginBtn";
import AuthServiceImpl from "../components/service/firebase/authServcie";
import FirebaseStoreImpl from "../components/service/firebase/store";
import homeDefaultImg from "../images/body.png";

import "./css/home.css";

library.add(fab);

interface Props {
  authService: AuthServiceImpl;
  store: FirebaseStoreImpl;
}

const Home: React.FC<Props> = ({ authService, store }) => {
  const [loginBtn, setLoginBtn] = useState<boolean>(false);
  const [userData, setUserData] = useState<firebase.default.User | null>(null);
  const [userUid, setUserUid] = useState<string>("");
  const [userDisplayName, setUserDisplayName] = useState<string | null>(null);
  const [onUserId, setOnUserId] = useState<boolean>(false);

  const [getProfileImg, setGetProfileImg] =
    useState<string | undefined>(undefined);

  const [getProfileMessage, setGetProfileMessage] =
    useState<string | undefined>(undefined);

  const [getDisplayName, setGetDisplayName] =
    useState<string | undefined>(undefined);

  const onLoginBtnHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setLoginBtn((prev) => !prev);
  };

  useEffect(() => {
    authService.userState((user: firebase.default.User) => {
      if (!user) {
        setUserDisplayName(null);
        setUserData(null);
      } else {
        setUserData(user);
        setUserDisplayName(user.displayName!);
      }
    });
  }, [authService]);

  const getMiniDisplayName = (name: string) => {
    setGetDisplayName(name);
  };

  useEffect(() => {
    if (userUid) {
      return store.displaySnapshot(userUid, getMiniDisplayName);
    }
  }, [setGetDisplayName, store, userUid]);

  const getMiniProfileImg = (url: string) => {
    setGetProfileImg(url);
  };

  useEffect(() => {
    if (userUid) {
      return store.imgSnapshot(userUid, getMiniProfileImg);
    }
  }, [setGetProfileImg, store, userUid]);

  const getMiniMessage = (message: string) => {
    setGetProfileMessage(message);
  };

  useEffect(() => {
    if (userUid) {
      return store.messageSnapshot(userUid, getMiniMessage);
    }
  }, [setGetProfileMessage, store, userUid]);

  const getUserUid = (uid: string): void => {
    setUserUid(uid);
  };

  useEffect(() => {
    if (userData) {
      getUserUid(userData!.uid);
      setOnUserId(true);
    }
  }, [userData]);

  return (
    <section className="home__section">
      <img className="home__defaultImg" src={homeDefaultImg} alt="defaultImg" />
      {!loginBtn ? (
        <h1 className="home__title">Wellcome to WOONG's Home</h1>
      ) : (
        <h1 className="home__title">Please you sign in but this is optional</h1>
      )}

      {!loginBtn ? (
        <>
          {onUserId ? (
            <section className="home__greeting__section">
              <div className="home__greeting">
                {getDisplayName ? getDisplayName : userDisplayName}
                <img
                  className="home__greeting__userImg"
                  src={getProfileImg}
                  alt="miniProfileImg"
                  width={40}
                  height={40}
                />
              </div>
              <div className="home__greeting__message">
                {getProfileMessage && getProfileMessage}
              </div>
            </section>
          ) : (
            <button onClick={onLoginBtnHandler} className="home__authBtn">
              Login as another authentication
            </button>
          )}
        </>
      ) : (
        <LoginBtn authService={authService}></LoginBtn>
      )}
    </section>
  );
};

export default Home;
