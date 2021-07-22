import { makeStyles } from "@material-ui/core/styles";
import {Button, Tooltip} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  defaultBackBtn: {
    border: "2px solid",
    boxShadow: "3px 3px",
  },
  mypageBackBtn: {
    top: "10px",
    left: "35px",
  },
  activityBackBtn: {
    position: "absolute",
    top: "6%",
    left: "11%",
  },
}));

const BackButton = ({ type, action }) => {
  const classes = useStyles();
  let btnClass = "";

  (type === "mypage" || type === "aboutpage") && (btnClass = classes.mypageBackBtn);
  type === "activity" && (btnClass = classes.activityBackBtn);

  return (
    <Tooltip title="뒤로 가기">
      <Button
        variant="outlined"
        className={`${classes.defaultBackBtn} ${btnClass}`}
        onClick={action}
      >
        <ArrowBackIcon />
      </Button>
    </Tooltip>
  );
};

export default BackButton;
