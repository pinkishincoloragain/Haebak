import { makeStyles } from "@material-ui/core/styles";

import MainPaper from "./MainPaper";

const useStyles = makeStyles((theme) => ({
  paperLayout: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const MainPaperList = () => {
  const classes = useStyles();

  return (
    <div className={classes.paperLayout} style={{ width: "100%" }}>
      <div
        className={classes.paperLayout}
        style={{ justifyContent: "space-between" }}
      >
        <MainPaper title="질문하기" />
        <MainPaper title="답변하기" />
      </div>
    </div>
  );
};

export default MainPaperList;
