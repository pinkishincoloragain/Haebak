import { makeStyles } from "@material-ui/core/styles";

import LinkPaper from "./common/LinkPaper";

const useStyles = makeStyles((theme) => ({
  mainlistRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainPaperList: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "@media (max-width:1150px)": {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
}));

const MainPaperList = ({ handleActivity }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainPaperList}>
      <div className={classes.mainPaperList}>
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
