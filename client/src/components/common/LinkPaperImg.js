import { makeStyles } from "@material-ui/core/styles";

import MainQuestionImg from "../../image/MainQuestion.png";
import MainAnswerImg from "../../image/MainAnswer.png";
import MypageQuestionImg from "../../image/MypageQuestion.png";
import MypageAnswerImg from "../../image/MypageAnswer.png";

const useStyles = makeStyles({
  mainPaperImgRoot: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const LinkPaperImg = ({ type, name }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainPaperImgRoot}>
      {type === "main" ? (
        <img
          src={name === "question" ? MainQuestionImg : MainAnswerImg}
          alt={name === "answer" ? "Question img" : "Answer img"}
          width="70%"
          style={{ marginBottom: `${name === "answer" && "40px"}` }}
        />
      ) : (
        <img
          src={name === "question" ? MypageQuestionImg : MypageAnswerImg}
          alt={name === "question" ? "Question img" : "Answer img"}
          width={name === "question" ? "70%" : "54.5%"}
        />
      )}
    </div>
  );
};

export default LinkPaperImg;
