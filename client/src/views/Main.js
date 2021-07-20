import { useState } from "react";

import MainHeader from "../components/MainHeader";
import MainPaperList from "../components/MainPaperList";
import MyPage from "../components/MyPage";

const Main = () => {
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
};

export default Main;
