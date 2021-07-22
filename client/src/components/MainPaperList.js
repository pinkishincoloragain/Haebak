import { makeStyles } from "@material-ui/core/styles";

import LinkPaper from "./common/LinkPaper";

const useStyles = makeStyles((theme) => ({
  mainPaperList: {
    width: "1100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const MainPaperList = ({ handleActivity }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainPaperList} style={{ width: "100%" }}>
      <div
        className={classes.mainPaperList}
        style={{ justifyContent: "space-between" }}
      >
        <LinkPaper
          name="question"
          title="질문하기"
          action={() => handleActivity(true)}
        />
        <LinkPaper
          name="answer"
          title="답변하기"
          action={() => handleActivity(false)}
        />
      </div>
    </div>
  );
};

export default MainPaperList;
