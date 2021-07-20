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
    <MyPage handleMypage={handleMypage} />
  );

  // return (
  //   <div>
  //     <GetRecord />
  //   </div>
  // );
};

export default Main;
