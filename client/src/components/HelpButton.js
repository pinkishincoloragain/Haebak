import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

// import HelpDialog from "./HelpDialog";

const useStyles = makeStyles((theme) => ({
  Helpbtn: {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(7),
    color: "black",
  },
}));

const HelpButton = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const closeDialog = () => {
    setShow(false);
  };
  return (
    <>
      <IconButton size="large" className={classes.Helpbtn}>
        <HelpOutlineIcon fontSize="large" />
      </IconButton>
      {/* {show ? <HelpDialog func={closeDialog}/> : ""} */}
    </>
  );
};

export default HelpButton;
