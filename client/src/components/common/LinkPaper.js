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
  paper: (props) => ({
    width: `${props.type === "main" ? "480px" : "200px"}`,
    height: `${props.type === "main" ? "500px" : "300px"}`,
    backgroundColor: `${
      props.type === "mypage" &&
      (props.title === "질문" ? "#fbb9b9" : "#b8fbe4")
    }`,
    "&:hover": {
      backgroundColor: `${
        props.type === "main"
          ? "#fafafa"
          : props.title === "질문"
          ? "#ff9d9d"
          : "#73e8c0"
      }`,
    },
  }),
  paperContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const LinkPaper = (props) => {
  const { type, title } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.paperRoot}>
      <Paper elevation={3} className={classes.paper}>
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
