import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Drawer, List } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

import MenuButton from "./MenuButton";
import LogOut from "./LogOut";

const useStyles = makeStyles({
  menuRoot: {
    position: "absolute",
    right: "4%",
  },
  menuDrawer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  menuLayout: {
    marginTop: "30px",
  },
  menuList: {
    width: "300px",
  },
  menuItem: {
    margin: "0px 17px 40px 17px",
    border: "2px solid",
    boxShadow: "3px 3px",
  },
});

const MainSideMenu = ({ handleMypage, handleAboutpage }) => {
  const [IsShowMenu, setIsShowMenu] = useState(false);
  const classes = useStyles();

  const handleShowMenu = () => setIsShowMenu(!IsShowMenu);

  return (
    <div className={classes.menuRoot}>
      <MenuButton isHeader={true} handleShowMenu={handleShowMenu} />
      <Drawer anchor="right" open={IsShowMenu} onClose={handleShowMenu}>
        <div className={classes.menuDrawer}>
          <div className={classes.menuLayout}>
            <MenuButton
              isShowMenu={IsShowMenu}
              handleShowMenu={handleShowMenu}
            />
            <List className={classes.menuList}>
              <MenuItem className={classes.menuItem} onClick={handleMypage}>
                <Typography variant="h5" style={{fontFamily: "FingerPaint"}}>MyPage</Typography>
              </MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleAboutpage}>
                <Typography variant="h5" style={{fontFamily: "FingerPaint"}}>About</Typography>
              </MenuItem>
            </List>
          </div>
          <LogOut />
        </div>
      </Drawer>
    </div>
  );
};
export default MainSideMenu;
