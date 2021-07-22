import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { dbService } from "../firebase.js";
import QandA from "./QandA";
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

const MyRecordList = ({ data, pending, setData, setPending }) => {
  const classes = useStyles();

  const handleDeleteRecord = async (id) => {
    setPending(true);
    await dbService.collection('question').doc(id).delete();
    setData(data.filter((doc) => doc.id !== id));
    setPending(false);
  };

  return (
    <>
      {pending && <Pending text="로딩 중..." />}
      <h1 style={{ textAlign: "center" }}>나의 질문 목록</h1>
      <div className={classes.listFrame}>
        {!pending &&
          data.map((doc, idx) => (
            <QandA
              key={idx}
              doc={doc}
              handleDeleteRecord={handleDeleteRecord}
            />
          ))}
      </div>
    </>
  );
};

export default MyRecordList;
