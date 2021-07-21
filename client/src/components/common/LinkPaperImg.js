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

const LinkPaperImg = ({ type, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainPaperImgRoot}>
      {type === "main" ? (
        <img
          src={title === "질문하기" ? MainQuestionImg : MainAnswerImg}
          alt={title === "질문하기" ? "Question img" : "Answer img"}
          width="75%"
          style={{ marginBottom: `${title === "답변하기" && "40px"}` }}
        />
      ) : (
        <img
          src={title === "질문" ? MypageQuestionImg : MypageAnswerImg}
          alt={title === "질문" ? "Question img" : "Answer img"}
          width={title === "질문" ? "75%" : "59%"}
        />
      )}
    </div>
  );
};

export default LinkPaperImg;
