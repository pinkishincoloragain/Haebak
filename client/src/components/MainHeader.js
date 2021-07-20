import { makeStyles } from "@material-ui/core/styles";

import MainSideMenu from "../components/MainSideMenu";

const useStyles = makeStyles({
  headerRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    fontSize: "1.4em",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerRoot}>
      <h1 style={{ textAlign: "center" }}>KNUHOUSE</h1>
      <MainSideMenu />
    </div>
  );
};
export default Header;
