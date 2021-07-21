import { CssBaseline } from "@material-ui/core";

import Main from "./views/Main";
import Landing from "./views/Landing";
import "./App.css";
import React, { useEffect, useState } from "react";
import GetRecord from "./components/GetRecord";
import { authService } from "./firebase";
import Activity from "./views/Activity";

function App() {
  // initialization for Firebase Firestore
  const [init, setInit] = useState(false);

  // Authentication information (not containing userInfo)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // User object contains user information like ID, recording .. .
  const [userObj, setUserObj] = useState(null);

  // activates whenever this component renders
  useEffect(() => {
    // check authentication
    authService.onAuthStateChanged((user) => {
      // user is logged in
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      }
      // user is not logged in
      else {
        setIsLoggedIn(false);
      }

      // database not ready
      setInit(true);
    });
  }, []);
  return (
    <>
      <Activity />
      {/* {init ? (
        <div className="App" style={{ height: "100vh" }}>
          <CssBaseline />
          {!isLoggedIn ? (
            <Landing />
          ) : (
            <Main isLoggedIn={isLoggedIn} userObj={userObj} />
          )}
        </div>
      ) : (
        "Firebase Synchronization 하는 데 시간이 필요합니다 .. 기다리세요 !!"
      )} */}
    </>
  );
}

export default App;
