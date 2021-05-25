import React, { useEffect, useRef, useState } from "react";
import "./ImageForm.css";
import defaultImg from "./defaultImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faPen,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import FirebaseStoreImpl from "../../../service/firebase/store";

interface Props {
  userUid: string | null;
  store: FirebaseStoreImpl;
}

const ImageForm: React.FC<Props> = ({ userUid, store }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const submitRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imgPreview, setImgPreview] = useState<boolean>(false);
  const [profileImgUrl, setProfileImgUrl] =
    useState<string | undefined>(undefined);
  const [imgLodingSpanner, setImgLodingSpanner] = useState<boolean>(false);

  const getImgUrl = (url: string) => {
    setProfileImgUrl(url);
  };

  useEffect(() => {
    if (userUid) {
      return store.imgSnapshot(userUid! as string, getImgUrl);
    }
  }, [setProfileImgUrl, store, userUid]);

  const onSubmitClick: React.MouseEventHandler<SVGSVGElement> = (event) => {
    event.preventDefault();
    submitRef.current!.click();
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const message = "Update your profile image";
    const ok = window.confirm(message);
    if (ok) {
      setImgLodingSpanner(true);
      try {
        await store.addImgUrlData(
          {
            id: userUid,
            userImage: selectedImage,
          },
          userUid!
        );
      } catch (error) {
        alert(`Error! file data too big`);
      }
      setImgLodingSpanner(false);
      setImgPreview(false);
    }
  };

  const onImgClick: React.MouseEventHandler<SVGSVGElement> = (event) => {
    event.preventDefault();
    fileRef.current!.click();
  };

  const onProfileImgHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const target = event.target.files as FileList;
    const file = target[0] as File;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = (event: ProgressEvent<FileReader>) => {
      const fileTarget = event.currentTarget as FileReader;
      const result = fileTarget.result as string;
      setSelectedImage(result);
      setProfileImgUrl(undefined);
      setImgPreview(true);
    };
  };

  const onImgCancel: React.MouseEventHandler<SVGSVGElement> = () => {
    const message = "Are you sure cancel?";
    const ok = window.confirm(message);
    if (ok) {
      setSelectedImage(null);
      setImgPreview(false);
      store.imgSnapshot(userUid! as string, getImgUrl);
    }
  };

  type Sort = {
    userProfileImgUrl: string | undefined;
    userSelectedImage: string | null;
  };

  const imgOptions: Sort = {
    userProfileImgUrl: profileImgUrl,
    userSelectedImage: selectedImage,
  };

  const getImages = (imgOptions: Sort) => {
    if (imgOptions.userProfileImgUrl !== undefined) {
      return profileImgUrl;
    } else if (imgOptions.userSelectedImage !== null) {
      return selectedImage;
    } else if (
      imgOptions.userProfileImgUrl === undefined &&
      imgOptions.userSelectedImage === null
    ) {
      return defaultImg;
    }
  };

  return (
    <section className="profile__body__imgForm__section">
      {imgLodingSpanner ? (
        <div className="profile__body__imgForm__loding">Uploading...🕐</div>
      ) : (
        <>
          <div className="profile__body__imgForm__imgBox">
            <img
              className="profile__body__imgForm__default"
              src={`${getImages(imgOptions)}`}
              alt="default"
              width={200}
              height={200}
            />
            {!imgPreview ? (
              <FontAwesomeIcon
                onClick={onImgClick}
                className="profile__body__imgForm__icon pen"
                icon={faPen}
              ></FontAwesomeIcon>
            ) : (
              <>
                <FontAwesomeIcon
                  onClick={onSubmitClick}
                  className="profile__body__imgForm__icon saved"
                  icon={faCheckSquare}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  onClick={onImgCancel}
                  className="profile__body__imgForm__icon cancel"
                  icon={faWindowClose}
                ></FontAwesomeIcon>
              </>
            )}
          </div>
        </>
      )}

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="profile__body__imgForm__form"
      >
        <input
          onChange={onProfileImgHandler}
          ref={fileRef}
          className="profile__body__imgForm__input"
          type="file"
          name="imgFile"
          accept="image/*"
        />
        <input
          ref={submitRef}
          type="submit"
          className="profile__body__imgForm__submit"
        />
      </form>
    </section>
  );
};

export default ImageForm;
