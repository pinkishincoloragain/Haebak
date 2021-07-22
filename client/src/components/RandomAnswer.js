import { useState, useEffect } from "react";
import { dbService } from "../firebase.js";

const RandomAnswer = ({ userInfoObj, userObj }) => {
    const [question, setQuestion] = useState(null);
    useEffect(() => {
        fetchRandomQuestion();
    }, []);

    async function fetchRandomQuestion() {
        const questions = await dbService.collection('question').where("creatorDepartment", "==", userInfoObj.department).where("answered", "==", false)
        .get();
        console.log(questions.size());
    }

    return (
        <div>
            <audio></audio>
        </div>
    )
}

export default RandomAnswer;