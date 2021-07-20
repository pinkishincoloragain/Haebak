import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  mypageBackBtn: {
    border: "2px solid",
    left: "30px",
  },
}));

const BackButton = ({ type, action }) => {
  const classes = useStyles();
  let btnClass = "";

  if (type === "mypage") btnClass = classes.mypageBackBtn;

  return (
    <Button variant="outlined" className={btnClass} onClick={action}>
      <ArrowBackIcon />
    </Button>
  );
};

export default BackButton;
