import { makeStyles } from "@material-ui/core/styles";

import LinkPaper from "./common/LinkPaper";

const useStyles = makeStyles((theme) => ({
  mainPaperList: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const MainPaperList = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainPaperList} style={{ width: "100%" }}>
      <div
        className={classes.mainPaperList}
        style={{ justifyContent: "space-between" }}
      >
        <LinkPaper title="질문하기" />
        <LinkPaper title="답변하기" />
      </div>
    </div>
  );
};

export default MainPaperList;
