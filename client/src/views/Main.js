import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MainHeader from "../components/MainHeader";
import MainPaperList from "../components/MainPaperList";
import MyPage from "../components/MyPage";
import GetRecord from "../components/GetRecord";

const useStyles = makeStyles({
  mainRoot: {
    height: "100%",
  },
});

const Main = ({ isLoggedIn, userObj }) => {
  const classes = useStyles();
  const [isMypage, setIsMypage] = useState(false);

  const handleMypage = () => setIsMypage(!isMypage);

  return (
    <div className={classes.mainRoot}>
      {!isMypage ? (
        <div>
          <MainHeader handleMypage={handleMypage} />
          <MainPaperList />
        </div>
      ) : (
        <MyPage userObj={userObj} handleMypage={handleMypage} />
      )}
    </div>
  );

  // return (
  //   <div>
  //     <GetRecord userObj={userObj} />
  //   </div>
  // );
};

export default Main;
