import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import BackButton from "./common/BackButton";
import HelpButton from "./HelpButton";

const useStyles = makeStyles((theme) => ({
    aboutpageRoot: {
    //   background: `url(${MypageImage}) center center / cover no-repeat`,
      backgroundAttachment: "fixed",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    aboutpagePaper: {
      width: "500px",
      height: "725px",
      border: "3px solid",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    },
  }));

const AboutPage = ({handleAboutpage}) => {
  const classes = useStyles();
  return (
    <div className={classes.aboutpageRoot}>
      <Paper elevation={3} className={classes.aboutpagePaper}>
        <div style={{ width: "100%" }}>
          <BackButton type="mypage" action={handleAboutpage} />
        </div>
        <div style={{ fontSize: "1.6em" }}>
          <p>WHAT ABOUT?</p>
        </div>
      </Paper>
      <HelpButton />
    </div>
  );
};

export default AboutPage;
