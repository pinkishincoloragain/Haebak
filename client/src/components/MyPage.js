import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

import MyPageLogo from "./MyPageLogo";

const useStyles = makeStyles((theme) => ({
  MypageRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  MypagePaper: {
    width: "500px",
    height: "725px",
    border: "3px solid",
  },
}));

const MyPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.MypageRoot}>
      <Paper elevation={3} className={classes.MypagePaper}>
        <Typography variant="h5">Test</Typography>
      </Paper>
      <MyPageLogo />
    </div>
  );
};

export default MyPage;
