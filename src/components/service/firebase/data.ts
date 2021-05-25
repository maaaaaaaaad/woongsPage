import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

type AuthData = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

const firebaseConfig: AuthData = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY as string,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_ID as string,
  appId: process.env.REACT_APP_FIREBASE_APP_ID as string,
};

export const firebaseData = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseData.auth();
export const googleProvier = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const fireStore = firebaseData.firestore();
