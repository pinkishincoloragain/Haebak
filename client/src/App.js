import React, { useEffect, useState } from "react";
import { authService, dbService } from "./firebase";
import { CssBaseline } from "@material-ui/core";
import swal from "@sweetalert/with-react";

import "./App.css";
import Main from "./views/Main";
import Landing from "./views/Landing";
import "./App.css";
import Pending from "./components/common/Pending";

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
        fetchUserData(user);
        setUserObj(user);
        setIsLoggedIn(true);
<<<<<<< HEAD
        console.log(user.emailVerified);
        if (user.emailVerified !== true) {
          swal({
            title: "이메일 인증을 해주세요.",
            buttons: {
              cancel: "닫기",
            },
            content: (
              <div style={{ color: "black" }}>
                <a
                  href="https://mail.knu.ac.kr"
                  style={{ textDecoration: "none", color: "blue", fontSize: "1.5em" }}
                >
                  인증하러 가기
                </a>
              </div>
            ),
          });
=======
        if (user.emailVerified !== true) {
          alert("check your email!");
>>>>>>> f0baddd2bea9a17568e44eae7ced77f1be8f10f8
          authService.signOut();
        }
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
