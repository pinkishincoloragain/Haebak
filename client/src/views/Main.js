import React from "react";
const Home = () => <span>Home</span>;
export default Home;
import MainHeader from "../components/MainHeader";
import MainPaperList from "../components/MainPaperList";

const Main = () => {
  return (
    <div>
      <MainHeader />
      <MainPaperList />
    </div>
  );
};

export default Main;
