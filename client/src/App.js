import { CssBaseline } from "@material-ui/core";

import Main from "./views/Main";
import Landing from "./views/Landing";
import "./App.css";
import React, { useEffect, useState } from "react";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import GetRecord from "./components/GetRecord";
import { authService } from "./firebase";
import Activity from "./views/Activity";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  const classes = useStyles();
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
      {/* <Activity /> */}
      {init ? (
        <div className="App" style={{ height: "100vh" }}>
          <CssBaseline />
          {!isLoggedIn ? (
            <Landing />
          ) : (
            <Main isLoggedIn={isLoggedIn} userObj={userObj} />
          )}
        </div>
      ) : (
        <Backdrop className={classes.backdrop} open={true} >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default App;
