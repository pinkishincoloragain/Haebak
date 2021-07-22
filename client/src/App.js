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
    authService.onAuthStateChanged((user) => {
      // user is logged in
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
        fetchUserData(user);
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
    const data = await dbService
      .collection("userInfo")
      .where("email", "==", user.email)
      .get();
    setUserInfoObj(data.docs[0].data());
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
