import React, { useState, useEffect } from "react";
import { dbService } from "../firebase";
import Record from "./Record";
import { v4 as uuidv4 } from "uuid";
import { storageService } from "../firebase";

const GetRecord = ({ userObj }) => {
  // test for record (text version)
  const [record, setRecord] = useState("");
  // list of data (text version)
  const [records, setRecords] = useState([]);
  // record file
  const [recordData, setRecordData] = useState(null);

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
    // uuid makes random name for file link.
    // And put the data to storageService
    const fileRef = storageService.ref().child(userObj.uid + "/" + uuidv4());

    // return uploadtask -> put to response
    const response = await fileRef.putString(recordData, "data_url");
    const recordURL = await response.ref.getDownloadURL();

    // insert data to database
    await dbService.collection("knuhouse").add({
      // first record : column name of the data(DB) ------ second record : real data (state)
      createdAt: Date.now(),
      creatorId: userObj.uid,
      recordURL,
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

  const handleFileChange = (e) => {
    // List of files
    // console.log(e.target.files);
    const {
      target: { files },
    } = e;
    // get 1st file (input file)
    const file = files[0];
    console.log(file);

    //  File reader which change Rec file to url-like thing
    const reader = new FileReader();

    // if encoding to URL finish -> onloadend
    reader.onloadend = (finishedEvent) => {
      // set record data with result of finishedEvent
      const {
        currentTarget: { result },
      } = finishedEvent;
      setRecordData(result);
      console.log(finishedEvent);
    };

    // read data and make URL
    reader.readAsDataURL(file);
  };

  const handleClear = () => {
    setRecordData(null);
  };

  // console.log(texts);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="text input test"
        />

        <input
          type="file"
          accept="audio/*"
          capture
          onChange={handleFileChange}
        />
        <input type="submit" value="녹음 제출하기 !" />
        {recordData && (
          <>
            <audio src={recordData} />
            <button onClick={handleClear}>다시 녹음 버튼</button>
          </>
        )}
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
