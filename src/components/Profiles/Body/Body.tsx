import React from "react";
import FirebaseStoreImpl from "../../service/firebase/store";
import "./Body.css";
import ImageForm from "./ImageForm/ImageForm";
import TextForm from "./TextForm/TextForm";

interface Props {
  userDisplayName: string | null;
  userUid: string | null;
  store: FirebaseStoreImpl;
}

const Body: React.FC<Props> = ({ userDisplayName, userUid, store }) => {
  return (
    <section className="profile__body__section">
      <ImageForm userUid={userUid} store={store}></ImageForm>
      <TextForm
        userDisplayName={userDisplayName}
        store={store}
        userUid={userUid}
      ></TextForm>
    </section>
  );
};

export default Body;
