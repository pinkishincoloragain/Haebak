import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  mainPaper: {
    width: "480px",
    height: "500px",
    "&:hover": {
      backgroundColor: "#fafafa",
    },
  },
  mypagePaper: {
    width: "200px",
    height: "300px",
  },
  paperContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const LinkPaper = ({ type, title, color }) => {
  const classes = useStyles();

  return (
    <div className={classes.paperRoot}>
      <Paper
        elevation={3}
        className={type === "main" ? classes.mainPaper : classes.mypagePaper}
        style={{ backgroundColor: `${type === "mypage" && color}` }}
      >
        <div className={classes.paperContent}>
          <h2>{title}</h2>
          {type === "mypage" && <h2>3</h2>}
        </div>
      </Paper>
    </div>
  );
};

LinkPaper.defaultProps = {
  type: "main",
};

export default LinkPaper;
