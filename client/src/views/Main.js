import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MainHeader from "../components/MainHeader";
import MainPaperList from "../components/MainPaperList";
import MyPage from "../components/MyPage";
import AboutPage from "../components/AboutPage";
import Activity from "./Activity";
import HelpButton from "../components/HelpButton";
import GetRecord from "../components/GetRecord";

const useStyles = makeStyles({
  mainFrame: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Main = ({ isLoggedIn, userObj }) => {
  const classes = useStyles();
  const [isOtherPage, setIsOtherPage] = useState({
    main: true,
    mypage: false,
    about: false,
    activity: false,
    isQuestion: true,
  });

  const handleMypage = () =>
    setIsOtherPage({
      ...isOtherPage,
      main: !isOtherPage.main,
      mypage: !isOtherPage.mypage,
    });

  const handleAboutpage = () =>
    setIsOtherPage({
      ...isOtherPage,
      main: !isOtherPage.main,
      about: !isOtherPage.about,
    });

  const handleActivity = (isQ) =>
    setIsOtherPage({
      ...isOtherPage,
      main: !isOtherPage.main,
      activity: !isOtherPage.activity,
      isQuestion: isQ,
    });

  return (
    <div className={classes.mainFrame}>
      {isOtherPage.main && (
        <>
          <MainHeader
            handleMypage={handleMypage}
            handleAboutpage={handleAboutpage}
          />
          <MainPaperList handleActivity={handleActivity} />
        </>
      )}
      {isOtherPage.mypage && (
        <MyPage userObj={userObj} handleMypage={handleMypage} />
      )}
      {isOtherPage.about && <AboutPage handleAboutpage={handleAboutpage} />}
      {isOtherPage.activity && (
        <Activity
          isQuestion={isOtherPage.isQuestion}
          handleActivity={handleActivity}
        />
      )}
      <HelpButton />
    </div>
  );

  // return (
  //   <div>
  //     <GetRecord userObj={userObj} />
  //   </div>
  // );
};

export default Main;
