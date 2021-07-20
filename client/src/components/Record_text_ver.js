import React, { useState, useEffect } from "react";
import { dbService } from "../firebase";

const Record = ({ userObj }) => {
  // main data
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);
  // get text when component mounted

  const getTexts = async () => {
    // db_texts : collection
    const db_texts = await dbService.collection("texts").get();

    // strange datatype. Querysnapshot. like array of documents.
    console.log(db_texts);

    // how to get seperate data from db
    // db_texts.forEach((document) => console.log(document.data()));
    db_texts.forEach((document) => {
      const textObj = {
        ...document.data(),
        id: document.id,
      };

      // setTexts((prev) => [document.data(), ...prev]);
      setTexts((prev) => [textObj, ...prev]);
    });
  };

  useEffect(() => {
    getTexts();
    dbService.collection("texts").onSnapshot((snapshot) => {
      // console.log("realtime");
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // insert data to database
    await dbService.collection("knuhouse").add({
      // first text : column name of the data(DB) ------ second text : real data (state)
      text: text,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });

    // flush inputform
    setText("");
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  // console.log(texts);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="">
          <input type="submit" value="text" />
        </input>
      </form>
      <div>
        {texts.map((text) => (
          <div key={text.id}>{text.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Record;
