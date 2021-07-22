import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import MainSideMenu from "../components/MainSideMenu";

const useStyles = makeStyles({
  headerRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.4em",
    marginBottom: "50px",
    "@media (max-width:1150px)": {
      marginBottom: "20px !important",
    },
  },
  headerLogo: {
    fontFamily: "FingerPaint",
    "@media (max-width:1150px)": {
      fontSize: "1.5em",
    },
  },
});

const Header = ({ handleMypage, handleAboutpage }) => {
  const classes = useStyles();

  return (
    <div className={classes.headerRoot}>
      <Typography component="h1" variant="h2" className={classes.headerLogo}>
        <span style={{ color: "#e53935" }}>KNU</span>
        HOUSE
      </Typography>
      <MainSideMenu
        handleMypage={handleMypage}
        handleAboutpage={handleAboutpage}
      />
    </div>
  );
};
export default Header;
