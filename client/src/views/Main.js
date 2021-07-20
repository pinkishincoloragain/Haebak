import MainHeader from "../components/MainHeader";
import MainPaperList from "../components/MainPaperList";

const Main = ({ isLoggedIn, userObj }) => {
  return (
    <div>
      <MainHeader />
      <MainPaperList />
    </div>
  );
};

export default Main;
