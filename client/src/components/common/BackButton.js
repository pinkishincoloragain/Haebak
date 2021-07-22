import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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

  type === "mypage" && (btnClass = classes.mypageBackBtn);
  type === "activity" && (btnClass = classes.activityBackBtn);

  return (
    <Button
      variant="outlined"
      className={`${classes.defaultBackBtn} ${btnClass}`}
      onClick={action}
    >
      <ArrowBackIcon />
    </Button>
  );
};

export default BackButton;
