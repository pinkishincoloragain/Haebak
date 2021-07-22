import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import PageLogo from "./common/PageLogo";
import ActivityRecord from "./ActivityRecord";
import BackButton from "./common/BackButton";
import MypageImage from "../image/MypageImage.png";
import MyRecordList from "./MyRecordList";
import { dbService } from "../firebase";

const useStyles = makeStyles((theme) => ({
  mypageRoot: {
    background: `url(${MypageImage}) center center / cover no-repeat`,
    backgroundAttachment: "fixed",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
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
  },
  mypageContent: {
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

const MyPage = ({ userObj, handleMypage }) => {
  const classes = useStyles();
  const [isMypage, setIsMypage] = useState(true);

  const handleMyQuestion = () => setIsMypage(!isMypage);

  // useEffect(() => {
  //   getQuestionAnswers;
  // }, []);

  // const getQuestionAnswers = async () => {
  //   // filtering = where
  //   // 내 레코드 다 가져와
  //   const RecordData = await dbService
  //     .collection("Record")
  //     .where("creatorId", "==", userObj.uid)
  //     .orderBy("createdAt")
  //     .get();
  //   console.log(records.docs.map((doc) => doc.data()));
  // };

  return (
    <div className={classes.mypageRoot}>
      <Paper elevation={3} className={classes.mypagePaper}>
        <div style={{ width: "100%" }}>
          <BackButton
            type="mypage"
            action={isMypage ? handleMypage : handleMyQuestion}
          />
        </div>
<<<<<<< HEAD
        +
        {isMypage ? (
          <>
            <div style={{ fontSize: "1.6em" }}>
              <p>학과 : IT대학 - 컴퓨터학부</p>
              <p>이메일 : {userObj.email}</p>
            </div>
            <ActivityRecord handleMyQuestion={handleMyQuestion} />
          </>
        ) : (
          <MyRecordList />
        )}
=======
        <div className={classes.mypageContent}>
          {isMypage ? (
            <>
              <div style={{ fontSize: "1.6em" }}>
                <p>학과 : IT대학 - 컴퓨터학부</p>
                <p>이메일 : {userObj.email}</p>
              </div>
              <ActivityRecord handleMyQuestion={handleMyQuestion} />
            </>
          ) : (
            <MyRecordList />
          )}
        </div>
>>>>>>> e925ab6b5df4aa893e20d8ad5e2f495a604dec07
      </Paper>
      <PageLogo logoName="MYPAGE" />
    </div>
  );
};

export default MyPage;
