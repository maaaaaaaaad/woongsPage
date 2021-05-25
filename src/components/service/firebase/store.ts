import { fireStore } from "./data";

interface FirebaseStore {
  addImgUrlData: (userImgData: FireData, userUid: string) => Promise<void>;
  imgSnapshot: (userUid: string, getImgUrl: Function) => void;
  addStateMessage: (userTextData: FireData, userUid: string) => Promise<void>;
  messageSnapshot: (userUid: string, getMessage: Function) => void;
  displaySnapshot: (userUid: string, getDisplayName: Function) => void;
}

type FireData = firebase.default.firestore.DocumentData;

class FirebaseStoreImpl implements FirebaseStore {
  addImgUrlData(userImgData: FireData, userUid: string) {
    return fireStore.collection("user").doc(userUid).set(userImgData);
  }

  imgSnapshot(userUid: string, getImgUrl: Function) {
    fireStore
      .collection("user")
      .doc(userUid)
      .onSnapshot((doc) => getImgUrl(doc.data()?.userImage as string));
  }

  addStateMessage(userTextData: FireData, userUid: string) {
    return fireStore.collection("stateMessage").doc(userUid).set(userTextData);
  }

  messageSnapshot(userUid: string, getMessage: Function) {
    fireStore
      .collection("stateMessage")
      .doc(userUid)
      .onSnapshot((doc) => getMessage(doc.data()?.message as string));
  }

  displaySnapshot(userUid: string, getDisplayName: Function) {
    fireStore
      .collection("stateMessage")
      .doc(userUid)
      .onSnapshot((doc) => getDisplayName(doc.data()?.displayName as string));
  }
}

export default FirebaseStoreImpl;
