import { useState } from "react";

import MainHeader from "../components/MainHeader";
import MainPaperList from "../components/MainPaperList";
import MyPage from "../components/MyPage";
import GetRecord from "../components/GetRecord";

const Main = ({ isLoggedIn, userObj }) => {
  const [isMypage, setIsMypage] = useState(false);

  const handleMypage = () => setIsMypage(!isMypage);

  return !isMypage ? (
    <div>
      <MainHeader handleMypage={handleMypage} />
      <MainPaperList />
    </div>
  ) : (
    <MyPage userObj={userObj} handleMypage={handleMypage} />
  );

  // return (
  //   <div>
  //     <GetRecord userObj={userObj} />
  //   </div>
  // );
};

export default Main;
