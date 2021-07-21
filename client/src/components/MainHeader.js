import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import MainSideMenu from "../components/MainSideMenu";

const useStyles = makeStyles({
  headerRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50px",
    marginBottom: "30px",
    fontSize: "1.4em",
  },
});

const Header = ({ handleMypage }) => {
  const classes = useStyles();

  return (
    <div className={classes.headerRoot}>
      <Typography component="h1" variant="h2">
        <span style={{ color: "#e53935" }}>KNU&nbsp;</span>
        HOUSE
      </Typography>
      <MainSideMenu handleMypage={handleMypage} />
    </div>
  );
};
export default Header;
