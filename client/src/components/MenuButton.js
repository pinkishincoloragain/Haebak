import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
  menuButton: (isHeader) => ({
    marginRight: "auto",
    marginTop: `${!isHeader && "20px"}`,
    marginBottom: `${!isHeader && "30px"}`,
  }),
  menuIcon: {
    fontSize: "2em",
  },
});

const MenuButton = ({ isHeader, handleShowMenu, isShowMenu }) => {
  const classes = useStyles(isHeader);

  return (
    <IconButton
      className={classes.menuButton}
      color="inherit"
      onClick={handleShowMenu}
    >
    { isShowMenu ? 
      <ArrowForwardIosIcon className={classes.menuIcon} />
    : <MenuIcon className={classes.menuIcon} />}
    </IconButton>
  );
};

MenuButton.defaultProps = {
  isHeader: false,
};

export default MenuButton;
