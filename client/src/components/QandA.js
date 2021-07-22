import { makeStyles } from "@material-ui/core/styles";

import QandAHeader from "./QandAHeader";

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

const QandA = ({ doc, handleDeleteRecord }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.audioRoot}>
        <QandAHeader doc={doc} handleDeleteRecord={handleDeleteRecord} />
        <div className={classes.audioBox}>
          <h3>질문</h3>
          <audio
            src={doc.data().recordURL}
            controls
            className={classes.audio}
          ></audio> 
        </div>
        <div className={classes.audioBox}>
          <h3>답변</h3>{" "}
          {doc.data().answerURL !== "" ? (
            <audio
              src={doc.data().answerURL}
              controls
              className={classes.audio}
            ></audio>
          ) : (
            <div style={{ width: "300px", textAlign: "center" }}>
              답변이 없습니다
            </div>
          )}
        </div>
      </div>
      <hr style={{ width: "90%", color: "#f50057", border: "1px solid" }} />
    </>
  );
};

export default QandA;
