import { CssBaseline } from "@material-ui/core";

import Main from "./views/Main";
import Landing from "./views/Landing";
import "./App.css";
import React, { useEffect, useState } from "react";
import GetRecord from "./components/GetRecord";
import { authService, dbService } from "./firebase";
import Activity from "./views/Activity";
import Pending from "./components/common/Pending";
import { useReducer } from "react";
import firebase from "firebase/app";

function App() {
  // initialization for Firebase Firestore
  const [init, setInit] = useState(false);

  // Authentication information (not containing userInfo)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // User object contains user information like ID, recording .. .
  const [userObj, setUserObj] = useState(null);

  const [userInfoObj, setUserInfoObj] = useState(null);

  // activates whenever this component renders
  useEffect(() => {
    // check authentication

    authService.setPersistence(firebase.auth.Auth.Persistence.SESSION);
    authService.onAuthStateChanged((user) => {
      // user is logged in
      console.log(user);
      if (user) {
        fetchUserData(user);
        setUserObj(user);
        setIsLoggedIn(true);
      }
      // user is not logged in
      else {
        setIsLoggedIn(false);
      }

      // database not ready
      setInit(true);
    });
  }, []);

  async function fetchUserData(user) {
    await dbService
      .collection("userInfo")
      .where("email", "==", user.email)
      .get()
      .then((d) => setUserInfoObj(d.docs[0].data()));
  }

  return (
    <>
      {/* <Activity /> */}
      {init ? (
        <div className="App" style={{ height: "100vh" }}>
          <CssBaseline />
          {!isLoggedIn ? (
            <Landing setUserInfoObj={setUserInfoObj} />
          ) : (
            <Main
              isLoggedIn={isLoggedIn}
              userObj={userObj}
              userInfoObj={userInfoObj}
            />
          )}
        </div>
      ) : (
        <Pending text="로딩중... " />
      )}
    </>
  );
}

export default App;
