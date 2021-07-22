import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

import Record from "../components/Record";
import ActivityImage from "../components/common/ActivityImage";
import BackButton from "../components/common/BackButton";
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

import { dbService, storageService } from "../firebase.js";
import Pending from "../components/common/Pending";
import RandomAnswer from "../components/RandomAnswer";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  submit: {
    background: "rgba(0, 0, 0, 0.4)",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.8)",
    },
    width: "100vw",
    position: "fixed",
    top: "36vh",
    textAlign: "center",
    height: "100px",
    fontSize: "3rem",
    color: "white",
  },
}));

const Activity = ({ userObj, userInfoObj, isQuestion, handleActivity }) => {
  const [file, setFile] = useState(null);
  const [pending, setPending] = useState(false);
  const [record, setRecord] = useState(isQuestion);
  const classes = useStyles();

  async function handleSubmit() {
    setPending(true);
    const fileRef = storageService.ref().child(userObj.uid + "/" + uuidv4());

    // return uploadtask -> put to response
    const response = await fileRef.put(file);
    const recordURL = await response.ref.getDownloadURL();

    await dbService.collection("question").add({
      createdAt: Date.now(),
      creatorId: userObj.uid,
      creatorDepartmnet: userInfoObj.department,
      recordURL,
      answered: false,
      answerId: "",
    });
    setFile(null);
    handleActivity();
    setPending(false);
  }

  return (
    <div>
      {pending && <Pending text="질문하는 중..." />}
      <BackButton type="activity" action={handleActivity} />
      <div className={classes.container}>
        <ActivityImage state={isQuestion} />
        {record && <Record setFile={setFile} /> }
        {!isQuestion && 
          <RandomAnswer userInfoObj={userInfoObj} userObj={userObj} />
        }
      </div>
      { file &&
        <Fade in={true}>
          <Button className={classes.submit} onClick={handleSubmit} variant="contained">
            질문하기
          </Button>
        </Fade>
      }
    </div>
  );
};

export default Activity;
