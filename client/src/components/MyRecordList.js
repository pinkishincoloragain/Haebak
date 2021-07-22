import { useState, useEffect } from "react";
import QandA from "./QandA";
import { dbService, storageService } from "../firebase.js";
import Pending from "./common/Pending";

const MyRecordList = ({ userObj }) => {
  const [pending, setPending] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    dbService.collection('question').where('creatorId', "==", userObj.uid).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setData([...data, doc.data()]);
        console.log(doc.id, " => ", doc.data());
      });
    }).finally(setPending(false));
  }, []);

  return (
    <>
      {pending && <Pending text="질문 가져오는 중..." />}
      <h1 style={{ textAlign: "center" }}>나의 질문 목록</h1>
      <div style={{ width: "100%" }}>
        {!pending && data.map((doc) => <QandA doc={doc} />)}
      </div>
    </>
  );
};

export default MyRecordList;
