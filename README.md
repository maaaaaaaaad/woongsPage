# Welcome to the WOONG's Page
Go to Woongs page 👉🏻 https://woongspage.netlify.app/

# Data
## attention to the getProvider function in 19 lane
```javascript
import { firebaseAuth, githubProvider, googleProvier } from "./data";

interface AuthService {
  login: (providerValue: string) => Promise<UserCredential>;
  logout: () => void;
  userState: (onState: Function) => firebase.default.Unsubscribe;
}

type UserCredential = firebase.default.auth.UserCredential;

class AuthServiceImpl implements AuthService {
  login(providerValue: string) {
    const provider = getProvider(providerValue);
    return firebaseAuth.signInWithPopup(provider);
  }

  userState(onState: Function) {
    return firebaseAuth.onAuthStateChanged((user) => onState(user));
  }

  logout() {
    firebaseAuth.signOut();
  }
}

function getProvider(providerValue: string) {
  switch (providerValue) {
    case "Google":
      return googleProvier;
    case "Github":
      return githubProvider;
    default:
      throw new Error(`Not invaild ${providerValue}`);
  }
}

export default AuthServiceImpl;
```

# Auth
## These interface have sent the class into a stabilizaiton.
```javascript
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
```
