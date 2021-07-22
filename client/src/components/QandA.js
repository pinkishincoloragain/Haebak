import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  audioRoot: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  audioBox: {
    width: "80%",
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
  let questionDate = new Date(doc.createdAt);
  questionDate =
    questionDate.getFullYear().toString() +
    " / " +
    (questionDate.getMonth() + 1).toString() +
    " / " +
    questionDate.getDate().toString();

  return (
    <>
      <div className={classes.audioRoot}>
        <h4 style={{ marginBottom: "0px" }}>{questionDate}</h4>
        <div className={classes.audioBox}>
          <h3>질문</h3>
          <audio src={doc.recordURL} controls className={classes.audio}></audio>
        </div>

        <div className={classes.audioBox}>
          <h3>답변</h3>{" "}
          {doc.answered ? (
            <audio controls className={classes.audio}></audio>
          ) : (
            <div style={{ width: "300px", textAlign: "center" }}>
              답변이 없습니다
            </div>
          )}
        </div>
      </div>
      <hr style={{ width: "90%", color: "#ff9d9d  ", border: "1px solid" }} />
    </>
  );
};

export default QandA;
