import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import PageLogo from "./common/PageLogo";
import BackButton from "./common/BackButton";
import AboutList from "./common/AboutList";
import MypageImage from "../image/MypageImage.png";

const useStyles = makeStyles((theme) => ({
  aboutpageRoot: {
    width: "100%",
    height: "100%",
    background: `url(${MypageImage}) center center / cover no-repeat`,
    backgroundAttachment: "fixed",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
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
  aboutpageContent: {
    width: "100%",
    height: "90%",
    display: "flex",
    padding: "0px 5px 0px 5px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

const AboutPage = ({ handleAboutpage }) => {
  const classes = useStyles();

  return (
    <div className={classes.aboutpageRoot}>
      <Paper elevation={3} className={classes.aboutpagePaper}>
        <div style={{ width: "100%" }}>
          <BackButton type="aboutpage" action={handleAboutpage} />
        </div>
        <div className={classes.aboutpageContent}>
          <AboutList />
        </div>
      </Paper>
      <PageLogo logoName="ABOUTPAGE" />
    </div>
  );
};

export default AboutPage;
