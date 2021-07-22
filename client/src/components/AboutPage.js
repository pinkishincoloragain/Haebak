import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import PageLogo from "./common/PageLogo";
import BackButton from "./common/BackButton";
import AboutList from "./common/AboutList";
import AboutpageImage from "../image/AboutpageImage.png";

const useStyles = makeStyles((theme) => ({
  aboutpageRoot: {
    background: `url(${AboutpageImage}) center center / cover no-repeat`,
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
  aboutpageContent: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    alignItems: "center",
  },
}));

const AboutPage = ({ handleAboutpage }) => {
  const classes = useStyles();

  return (
    <div className={classes.aboutpageRoot}>
      <Paper elevation={3} className={classes.aboutpagePaper}>
        <div style={{ width: "100%" }}>
          <BackButton
            type="aboutpage"
            action={handleAboutpage}
          />
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
