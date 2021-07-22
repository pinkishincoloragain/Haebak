import { useState, useEffect } from "react";
import QandA from "./QandA";
import { dbService } from "../firebase.js";
import Pending from "./common/Pending";

const MyRecordList = ({ userObj }) => {
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
    <div>
      {pending && <Pending text="질문 가져오는 중..." />}
      <h1 style={{ textAlign: "center" }}>나의 질문 목록</h1>
      <div style={{ width: "100%" }}>
        {!pending && data.map((doc, idx) => <QandA key={idx} doc={doc} />)}
      </div>
    </div>
  );
};

export default MyRecordList;
