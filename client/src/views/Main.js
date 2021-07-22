import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MainHeader from "../components/MainHeader";
import MainPaperList from "../components/MainPaperList";
import MyPage from "../components/MyPage";
import AboutPage from "../components/AboutPage";
import Activity from "./Activity";
import HelpButton from "../components/HelpButton";
import SuccSnackbar from "../components/common/SuccSnackbar";
import MainImage from "../assets/image/paper.jpeg"

const useStyles = makeStyles({
  mainFrame: {
    width:"100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainBackground: {
    background: `url(${MainImage}) center center / cover no-repeat`,
    backgroundAttachment: "fixed",
  },
});

const Main = ({ userObj, userInfoObj }) => {
  const classes = useStyles();
  const [isOtherPage, setIsOtherPage] = useState({
    main: true,
    mypage: false,
    about: false,
    activity: false,
    isQuestion: true,
  });
  const [snackOpen, setSnackOpen] = useState(false);

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

  const handleSnack = () => {
    setSnackOpen(true);
  }

  return (
    <div className={classes.mainFrame}>
      {isOtherPage.main && (
        <div className={`${classes.mainFrame} ${classes.mainBackground}`}>
          <MainHeader
            handleMypage={handleMypage}
            handleAboutpage={handleAboutpage}
          />
          <MainPaperList handleActivity={handleActivity} />
        </div>
      )}
      {isOtherPage.mypage && (
        <MyPage
          userObj={userObj}
          userInfoObj={userInfoObj}
          handleMypage={handleMypage}
        />
      )}
      {isOtherPage.about && <AboutPage handleAboutpage={handleAboutpage} />}
      {isOtherPage.activity && (
        <Activity
          userInfoObj={userInfoObj}
          userObj={userObj}
          isQuestion={isOtherPage.isQuestion}
          handleActivity={handleActivity}
          handleSnack={handleSnack}
        />
      )}
      <HelpButton />
      {snackOpen && <SuccSnackbar content="전송이 완료되었습니다!" type="success"/>}
    </div>
  );
};

export default Main;
