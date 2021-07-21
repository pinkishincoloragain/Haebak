import { makeStyles } from "@material-ui/core/styles";

import LinkPaper from "./common/LinkPaper";

const useStyles = makeStyles({
  mypagePaperList: {
    display: "flex",
  },
});

const ActivityRecord = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>나의 활동 기록</h1>
      <div className={classes.mypagePaperList}>
        <LinkPaper type="mypage" title="질문" color="#fbb9b9" />
        <LinkPaper type="mypage" title="답변" color="#b8fbe4" />
      </div>
    </div>
  );
};

export default ActivityRecord;
