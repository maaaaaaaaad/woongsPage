import React from "react";
import AppRoutes from "./components/AppRoutes/Routes";
import "./App.css";
import AuthServiceImpl from "./components/service/firebase/authServcie";
import FirebaseStoreImpl from "./components/service/firebase/store";

interface Props {
  authService: AuthServiceImpl;
  store: FirebaseStoreImpl;
}

const App: React.FC<Props> = ({ authService, store }) => {
  return (
    <section className="app__section">
      <AppRoutes authService={authService} store={store}></AppRoutes>
    </section>
  );
};

export default App;
