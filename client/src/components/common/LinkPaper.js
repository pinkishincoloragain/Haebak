import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import LinkPaperImg from "./LinkPaperImg";

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
    border: "2px solid",
    boxShadow: "3px 3px",
    width: `${props.type === "main" ? "480px" : "200px"}`,
    height: `${props.type === "main" ? "500px" : "300px"}`,
    backgroundColor: `${
      props.type === "mypage" &&
      (props.name === "question" ? "#fbb9b9" : "#b8fbe4")
    }`,
    "&:hover": {
      backgroundColor: `${
        props.type === "main"
          ? "#e6e6e6"
          : props.name === "question" && "#ff9d9d"
      }`,
    },
    "@media (max-width:1150px)": {
      width: `${props.type === "main" ? "300px" : "150px"}`,
      height: `${props.type === "main" ? "320px" : "250px"}`,
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
  const { type, name, title } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.paperRoot} onClick={props.action && props.action}>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.paperContent}>
          <h2>{title}</h2>
          <LinkPaperImg type={type} name={name} />
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
