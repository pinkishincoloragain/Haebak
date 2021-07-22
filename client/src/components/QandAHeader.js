import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AskDialog from "./common/AskDialog";

const QandAHeader = ({ doc, handleDeleteRecord }) => {
  let questionDate = new Date(doc.data().createdAt);
  questionDate =
    questionDate.getFullYear().toString() +
    " / " +
    (questionDate.getMonth() + 1).toString() +
    " / " +
    questionDate.getDate().toString() +
    " - " +
    questionDate.getHours().toString() +
    ":" +
    questionDate.getMinutes().toString() +
    ":" +
    questionDate.getSeconds().toString();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h4 style={{ margin: "0" }}>{questionDate}</h4>
      <AskDialog
        btn={
          <IconButton aria-label="delete" color="secondary">
            <DeleteIcon />
          </IconButton>
        }
        title="해당 질문 기록을 삭제하시겠습니까?"
        content="삭제된 기록은 복구할 수 없습니다."
        action={() => handleDeleteRecord(doc.id)}
      />
    </div>
  );
};

export default QandAHeader;
