import React, { useState, useEffect } from "react";
import { dbService } from "../firebase";
import Record from "./Record";

const GetRecord = ({ userObj }) => {
  // main data
  const [record, setRecord] = useState("");
  // list of data
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // onSnapshot -> detect change from DB
    dbService.collection("records").onSnapshot((snapshot) => {
      // console.log(snapshot.docs);

      // create arr of data.
      const recordArr = snapshot.docs.map((doc) => ({
        id: doc,
        ...doc.data(),
      }));
      // console.log(recordArr);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // insert data to database
    await dbService.collection("knuhouse").add({
      // first record : column name of the data(DB) ------ second record : real data (state)
      record: record,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });

    // flush inputform
    setRecord("");
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setRecord(value);
  };

  // console.log(texts);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="">
          <input type="submit" value="record" />
        </input>
      </form>
      <div>
        {/* Show datas using mapping */}
        {records.map((record) => (
          <Record
            // id for each record
            key={record.id}
            // Obj for record
            recordObj={record}
            // check if the user(logged in) is creator of record
            isOwner={record.creatorId === userObj.uid}></Record>
        ))}
      </div>
    </div>
  );
};

export default GetRecord;
