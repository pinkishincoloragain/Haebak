import { useState, useEffect } from "react";
import Pending from "./common/Pending.js";
import { makeStyles } from "@material-ui/core/styles";

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

const RandomAnswer = ({ userInfoObj, userObj }) => {
    const classes = useStyles();
    const [pending, setPending] = useState(true);
    const [question, setQuestion] = useState(null);
    const [submited, setSumited] = useState(false);
    const [available, setAvailable] = useState(false);
    
    useEffect(() => {
        fetchRandomQuestion();
    }, []);

    useEffect(() => {
        return () => {
            if(!submited && question) {
                console.log(question);
                dbService.collection('question').doc(question.id).update({answered: false});
            }
        }
    }, [question, submited]);

    async function fetchRandomQuestion() {
        await dbService.collection('question').where("creatorDepartment", "==", userInfoObj.department).where("answered", "==", false).where("creatorId", "!=", userObj.uid)
        .get().then((querySnapshot) => {
            if (querySnapshot.size) {
                const rand = Math.floor(Math.random() * querySnapshot.size);
                const selected = querySnapshot.docs[rand];
                dbService.collection('question').doc(selected.id).update({answered: true});
                setQuestion(selected);
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