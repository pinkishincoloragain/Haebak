import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  audioRoot: {
    width: "100%",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  audioBox: {
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  audio: {
    height: "40px",
  },
});

const QandA = ({ doc }) => {
  const classes = useStyles();

  return (
    <div className={classes.audioRoot}>
      <div className={classes.audioBox}>
        <h3>질문</h3> <audio src={doc.recordURL} controls className={classes.audio}></audio>
      </div>
      {/* <div className={classes.audioBox}>
        <h3>답변</h3> <audio controls className={classes.audio}></audio>
      </div> */}
    </div>
  );
};

export default QandA;
