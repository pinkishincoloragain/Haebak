import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

import Record from "../components/Record";
import ActivityImage from "../components/common/ActivityImage";
import BackButton from "../components/common/BackButton";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

import { dbService, storageService } from "../firebase.js";
import Pending from "../components/common/Pending";

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
  answer: {
    background: "rgba(0, 0, 0, 0.4)",
    width: "100vw",
    position: "fixed",
    top: "15vh",
    display: "flex",
    height: "80px",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"
  },
}));

const Activity = ({ userObj, userInfoObj, isQuestion, handleActivity }) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [pending, setPending] = useState(true);
  const [question, setQuestion] = useState(null);
  const [available, setAvailable] = useState(false);
    
  useEffect(() => {
      fetchRandomQuestion();
  }, []);

  useEffect(() => {
    return () => {
      if(question) {
        dbService.collection('question').doc(question.id).update({using: false});
      }
    }
  }, [question]);

  async function fetchRandomQuestion() {
      await dbService.collection('question').where("creatorDepartment", "==", userInfoObj.department).where("answered", "==", false).where("using", "==", false)
      .get().then((querySnapshot) => {
        const filtered = querySnapshot.docs.filter(d => d.data().creatorId !== userObj.uid);
       if (filtered.length) {
          const rand = Math.floor(Math.random() * filtered.length);
          const selected = filtered[rand];
          dbService.collection('question').doc(selected.id).update({using: true});
          setQuestion(selected);
          setAvailable(true);
      }
    }).finally(setPending(false));
  }


  async function handleSubmit() {
    setPending(true);
    const fileRef = storageService.ref().child(userObj.uid + "/" + uuidv4());

    // return uploadtask -> put to response
    const response = await fileRef.put(file);
    const recordURL = await response.ref.getDownloadURL();

    if (isQuestion) {
      await dbService.collection("question").add({
        createdAt: Date.now(),
        creatorId: userObj.uid,
        creatorDepartment: userInfoObj.department,
        recordURL,
        answered: false,
        answerId: "",
        answerURL: "",
        using: false
      });
    } else {
      await dbService.collection('question').doc(question.id).update({ answerId: userObj.uid, answerURL: recordURL, answered: true });
    }
    setFile(null);
    handleActivity();
    setPending(false);
  }

  return (
    <div>
      {pending && <Pending text={isQuestion ? "질문하는 중..." : question ? "답변하는 중..." : "질문 가져오는 중..."} />}
      <BackButton type="activity" action={handleActivity} />
      <div className={classes.container}>
        <ActivityImage state={isQuestion} />
        {isQuestion ? (
          <Record setFile={setFile} />
        ) : (
          question && <Record setFile={setFile} />
        )}
        {!isQuestion && (
          <div className={classes.answer}>
            {!pending && question && available ? 
            <audio controls src={question.data().recordURL}>질문</audio> :
            <h1>존재하는 질문이 없습니다!</h1>
            }
          </div>
        )}
      </div>
      {file && !pending && (
        <Fade in={true}>
          <Button
            className={classes.submit}
            onClick={handleSubmit}
            variant="contained"
          >
            { isQuestion ? "질문하기" : "답변하기" }
          </Button>
        </Fade>
      )}
    </div>
  );
};

export default Activity;