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
  paper: {
    width: "480px",
    height: "500px",
    "&:hover": {
      backgroundColor: "#fafafa",
    },
  },
}));

const MainPaper = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.paperRoot}>
      <Paper elevation={3} className={classes.paper}>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
      </Paper>
    </div>
  );
};

export default MainPaper;
