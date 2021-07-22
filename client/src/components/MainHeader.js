import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import MainSideMenu from "../components/MainSideMenu";

const useStyles = makeStyles({
  headerRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "70px",
    fontSize: "1.4em",
    "@media (max-width:520px)": {
      marginBottom: "20px !important",
    },
  },
  headerLogo: {
    "@media (max-width:520px)": {
      fontSize: "1.5em",
    },
  },
});

const Header = ({ handleMypage, handleAboutpage }) => {
  const classes = useStyles();

  return (
    <div className={classes.headerRoot}>
      <Typography component="h1" variant="h2" className={classes.headerLogo}>
        <span style={{ color: "#e53935" }}>KNU&nbsp;</span>
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
