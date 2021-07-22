import { useState, useEffect } from "react";
import Pending from "./common/Pending.js";
import { makeStyles } from "@material-ui/core/styles";

import { dbService } from "../firebase.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      background: "rgba(0, 0, 0, 0.4)",
      width: "100vw",
      position: "fixed",
      top: "15vh",
      display: "flex",
      height: "80px",
      color: "white",
      justifyContent: "center",
      alignContent: "center",
      textAlign: "center"
    },
  }));

const RandomAnswer = ({ userInfoObj, userObj }) => {
    const classes = useStyles();
    const [pending, setPending] = useState(true);
    const [question, setQuestion] = useState(null);
    const [available, setAvailable] = useState(true);
    useEffect(() => {
        fetchRandomQuestion();
    }, []);

    async function fetchRandomQuestion() {
        const questions = await dbService.collection('question').where("creatorDepartment", "==", userInfoObj.department).where("answered", "==", false)
        .get();
        if (questions.size) {
            
            const rand = Math.floor(Math.random() * (questions.size - 1));
            setQuestion(questions.docs[rand].data());
        } else {
            setAvailable(false);
        }
        setPending(false);
    }

    return (
        <div className={classes.root}>
            {pending && <Pending text="무작위 질문을 검색중 입니다..." />}
            {!pending && available ? 
            <audio controls src={question.recordURL}></audio> :
            <h1>질문이 없습니다!</h1>
            }
        </div>
    )
}

export default RandomAnswer;