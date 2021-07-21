import { useState } from "react";

import MainHeader from "../components/MainHeader";
import MainPaperList from "../components/MainPaperList";
import MyPage from "../components/MyPage";
import AboutPage from "../components/AboutPage";
import Activity from "./Activity";
import HelpButton from "../components/HelpButton";
import GetRecord from "../components/GetRecord";

const Main = ({ isLoggedIn, userObj }) => {
  const [isOtherPage, setIsOtherPage] = useState({
    main: true,
    mypage: false,
    about: false,
    activity: false,
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

  const handleActivity = () =>
    setIsOtherPage({
      ...isOtherPage,
      main: !isOtherPage.main,
      activity: !isOtherPage.activity,
    });

  return (
    <div style={{ height: "100%" }}>
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
      {isOtherPage.activity && <Activity handleActivity={handleActivity} />}
      <HelpButton />
    </div>
  );

  return (
    <div>
      <GetRecord userObj={userObj} />
    </div>
  );
};

export default Main;
