import { makeStyles } from "@material-ui/core/styles";

import LinkPaper from "./common/LinkPaper";

const useStyles = makeStyles({
  mypagePaperList: {
    display: "flex",
  },
});

const ActivityRecord = ({ handleMyQuestion }) => {
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>나의 활동 기록</h1>
      <div className={classes.mypagePaperList}>
        <LinkPaper
          type="mypage"
          name="question"
          title="질문"
          action={handleMyQuestion}
        />
        <LinkPaper type="mypage" name="answer" title="답변" />
      </div>
    </div>
  );
};

export default ActivityRecord;
