import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  menuButton: {
    marginRight: "auto",
  },
  menuIcon: {
    fontSize: "2em",
  },
});

const MenuButton = ({ isHeader, handleShowMenu }) => {
  const classes = useStyles();

  return (
    <IconButton
      className={classes.menuButton}
      color="inherit"
      onClick={handleShowMenu}
      style={{ marginTop: `${!isHeader && "20px"}` }}>
      <MenuIcon className={classes.menuIcon} />
    </IconButton>
  );
};

MenuButton.defaultProps = {
  isHeader: false,
};

export default MenuButton;
