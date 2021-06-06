# Welcome to the WOONG's Page
Go to Woongs page 👉🏻 https://woongspage.netlify.app/

# Auth
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
