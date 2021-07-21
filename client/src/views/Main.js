import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MainHeader from "../components/MainHeader";
import MainPaperList from "../components/MainPaperList";
import MyPage from "../components/MyPage";
import AboutPage from "../components/AboutPage";
import HelpButton from "../components/HelpButton";
import GetRecord from "../components/GetRecord";

const useStyles = makeStyles({
  mainRoot: {
    height: "100%",
  },
});

const Main = ({ isLoggedIn, userObj }) => {
  const classes = useStyles();
  const [isMypage, setIsMypage] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const handleMypage = () => setIsMypage(!isMypage);
  const handleAboutpage = () => setIsAbout(!isAbout);

  return (
    <div className={classes.mainRoot}>
      {!isMypage ? (!isAbout ? (
        <div>
          <MainHeader handleMypage={handleMypage} handleAboutpage={handleAboutpage}/>
          <MainPaperList />
          <HelpButton />
        </div>
      ) : (
        <AboutPage handleAboutpage={handleAboutpage} />
      )) : <MyPage userObj={userObj} handleMypage={handleMypage} />
      }
    </div>
  );

  // return (
  //   <div>
  //     <GetRecord userObj={userObj} />
  //   </div>
  // );
};

export default Main;
