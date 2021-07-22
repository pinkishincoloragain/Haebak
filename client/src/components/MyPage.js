import { useState, useEffect } from "react";
import { debounce } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import MyRecordList from "./MyRecordList";
import MypageContent from "./MyPageContent";
import PageLogo from "./common/PageLogo";
import BackButton from "./common/BackButton";
import MypageImage from "../assets/image/MypageImage.png";

import { dbService } from "../firebase";

const useStyles = makeStyles((theme) => ({
  mypageRoot: {
    width: "100%",
    height: "100%",
    background: `url(${MypageImage}) center center / cover no-repeat`,
    backgroundAttachment: "fixed",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  mypagePaper: {
    width: "500px",
    height: "725px",
    border: "3px solid",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    "@media (max-width:610px)": {
      width: "440px",
    },
    "@media (max-width:500px)": {
      width: "350px",
    },
  },
  mypageContent: (isMypage) => ({
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: `${isMypage ? "space-around" : "flex-start"}`,
    alignItems: "center",
  }),
}));

const MyPage = ({ userObj, handleMypage, userInfoObj }) => {
  const [isMypage, setIsMypage] = useState(true);
  const classes = useStyles(isMypage);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pending, setPending] = useState(true);
  const [data, setData] = useState([]);
  const [answered, setAnswered] = useState(0);

  useEffect(() => {
    fetchData();
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  async function fetchData() {
    const querySnapshot = await dbService
      .collection("question")
      .where("creatorId", "==", userObj.uid)
      .get();
    const transformedData = querySnapshot.docs.map((doc) => doc);
    await dbService
      .collection("question")
      .where("answerId", "==", userObj.uid)
      .get().then((snapshot) => setAnswered(snapshot.size));  
    setData(transformedData);
    setPending(false);
  }

  const handleMyQuestion = () => setIsMypage(!isMypage);

  return (
    <div className={classes.mypageRoot}>
      <Paper elevation={3} className={classes.mypagePaper}>
        <div style={{ width: "100%" }}>
          <BackButton
            type="mypage"
            action={isMypage ? handleMypage : handleMyQuestion}
          />
        </div>
        <div className={classes.mypageContent}>
          {isMypage ? (
            <MypageContent
              question={data.length}
              answered={answered}
              userObj={userObj}
              userInfoObj={userInfoObj}
              handleMyQuestion={handleMyQuestion}
            />
          ) : (
            <MyRecordList
              userObj={userObj}
              data={data}
              pending={pending}
              setData={setData}
              setPending={setPending}
            />
          )}
        </div>
      </Paper>
      <PageLogo logoName="MYPAGE" windowWidth={windowWidth} />
    </div>
  );
};

export default MyPage;
