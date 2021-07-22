import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Pending from "./common/Pending.js";
import { dbService } from "../firebase.js";

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
      textAlign: "center",
      alignItems: "center"
    },
  }));

const RandomAnswer = ({ userInfoObj, userObj, submited, setGotQuestion }) => {
    const classes = useStyles();
    const [pending, setPending] = useState(true);
    const [question, setQuestion] = useState(null);
    const [available, setAvailable] = useState(false);
    
    useEffect(() => {
        fetchRandomQuestion();
    }, []);

    useEffect(() => {
        return () => {
            if(!submited && question) {
                dbService.collection('question').doc(question.id).update({answered: false});
            }
        }
    }, [question, submited]);

    async function fetchRandomQuestion() {
        await dbService.collection('question').where("creatorDepartment", "==", userInfoObj.department).where("answered", "==", false).where("ansewerURL", "==", "").where("creatorId", "!=", userObj.uid)
        .get().then((querySnapshot) => {
            if (querySnapshot.size) {
                const rand = Math.floor(Math.random() * querySnapshot.size);
                const selected = querySnapshot.docs[rand];
                dbService.collection('question').doc(selected.id).update({answered: true});
                setQuestion(selected);
                setGotQuestion(selected);
                setAvailable(true);
            }
        }).finally(setPending(false));
    }

    return (
        <div className={classes.root}>
            {pending && <Pending text="무작위 질문을 검색중 입니다..." />}
            {!pending && question && available ? 
            <audio controls src={question.data().recordURL}>질문</audio> :
            <h1>존재하는 질문이 없습니다!</h1>
            }
        </div>
    )
}

export default RandomAnswer;