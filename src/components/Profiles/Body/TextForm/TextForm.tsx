import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import FirebaseStoreImpl from "../../../service/firebase/store";
import "./TextForm.css";

interface Props {
  userDisplayName: string | null;
  store: FirebaseStoreImpl;
  userUid: string | null;
}

const TextForm: React.FC<Props> = ({ userDisplayName, store, userUid }) => {
  const [newDisplayName, setNewDisplayName] = useState<string>(
    userDisplayName as string
  );
  const [newStateMessage, setNewStateMessage] = useState<string>("");
  const [getStateMessage, setGetStateMessage] = useState<string>(
    newStateMessage as string
  );
  const [getDisplayName, setGetDisplayName] = useState<string>(newDisplayName);
  const submitRef = useRef<HTMLInputElement>(null);

  const getProfileDisplayName = (name: string) => {
    setGetDisplayName(name);
  };

  useEffect(() => {
    if (userUid) {
      return store.displaySnapshot(userUid, getProfileDisplayName);
    }
  }, [setGetDisplayName, store, userUid]);

  const getMessage = (message: string) => {
    setGetStateMessage(message);
  };

  useEffect(() => {
    if (userUid) {
      return store.messageSnapshot(userUid, getMessage);
    }
  });

  const onChangeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.currentTarget.value as string;
    setNewDisplayName(newValue);
  };

  const onChangeStateMessage: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newValue = event.currentTarget.value as string;
    setNewStateMessage(newValue);
  };

  const onSubmitClick: React.MouseEventHandler<SVGSVGElement> = (event) => {
    event.preventDefault();
    submitRef.current!.click();
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const message = "Update profile name and message";
    const ok = window.confirm(message);
    if (ok) {
      await store.addStateMessage(
        { id: userUid, displayName: newDisplayName, message: newStateMessage },
        userUid!
      );
      alert(`Changed Name and Message!`);
    }
  };

  return (
    <section className="profile__textForm__section">
      <form onSubmit={onSubmit} className="profile__textForm__form">
        <input
          onChange={onChangeName}
          className="profile__textForm__displayName"
          type="text"
          name="displayName"
          placeholder={getDisplayName ? getDisplayName : newDisplayName}
          autoComplete="off"
          required
        />
        <input
          onChange={onChangeStateMessage}
          className="profile__textForm__message"
          type="text"
          name="message"
          autoComplete="off"
          placeholder={getStateMessage ? getStateMessage : "State Message"}
          required
        />
        <input
          ref={submitRef}
          className="profile__submit"
          type="submit"
          value="submit"
        />
      </form>
      <FontAwesomeIcon
        onClick={onSubmitClick}
        className="profile__submit__icon save"
        icon={faArrowCircleRight}
      ></FontAwesomeIcon>
    </section>
  );
};

export default TextForm;
