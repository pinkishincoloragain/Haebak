import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";

import MenuButton from "./MenuButton";

const useStyles = makeStyles({
  menuRoot: {
    position: "fixed",
    right: "50px",
  },
  menuLayout: {
    marginTop: "30px",
  },
  menuList: {
    width: "200px",
  },
  menuItem: {
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "20px",
  },
});

const MainSideMenu = () => {
  const [IsShowMenu, setIsShowMenu] = useState(false);
  const classes = useStyles();

  const handleShowMenu = () => setIsShowMenu(!IsShowMenu);

  return (
    <div className={classes.menuRoot}>
      <MenuButton handleShowMenu={handleShowMenu} />
      <Drawer anchor="right" open={IsShowMenu} onClose={handleShowMenu}>
        <div className={classes.menuLayout}>
          <MenuButton handleShowMenu={handleShowMenu} />
          <List className={classes.menuList}>
            <MenuItem className={classes.menuItem}>MyPage</MenuItem>
            <MenuItem className={classes.menuItem}>About</MenuItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};
export default MainSideMenu;
