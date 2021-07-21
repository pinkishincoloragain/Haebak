import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { authService } from "../firebase";

const useStyles = makeStyles({
  logoutBtn: {
    border: "2px solid",
    marginBottom: "100px",
    boxShadow: "3px 3px",
  },
});

const LogOut = () => {
  const classes = useStyles();
  const onLogOutClick = () => authService.signOut();

  return (
    <Button className={classes.logoutBtn} onClick={onLogOutClick}>
      <ExitToAppIcon />
      &nbsp;Sign out
    </Button>
  );
};

export default LogOut;
