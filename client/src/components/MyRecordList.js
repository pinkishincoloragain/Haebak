import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import QandA from "./QandA";
import { dbService } from "../firebase.js";
import Pending from "./common/Pending";

const useStyles = makeStyles({
  listFrame: {
    width: "90%",
    height: "85%",
    border: "2px solid",
    boxShadow: "3px 3px",
    overflowY: "scroll",
  },
});

const MyRecordList = ({ userObj }) => {
  const classes = useStyles();
  const [pending, setPending] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const querySnapshot = await dbService.collection('question').where('creatorId', "==", userObj.uid).get();
    const transformedData = querySnapshot.docs.map((doc) => doc.data());
    setData(transformedData);
    setPending(false);
  }

  return (
    <>
      {pending && <Pending text="질문 가져오는 중..." />}
      <h1 style={{ textAlign: "center" }}>나의 질문 목록</h1>
      <div className={classes.listFrame}>
        {!pending && data.map((doc, idx) => <QandA key={idx} doc={doc} />)}
      </div>
    </>
  );
};

export default MyRecordList;
