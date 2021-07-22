import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import HelpDialog from "./HelpDialog";

const useStyles = makeStyles((theme) => ({
  Helpbtn: {
    position: "absolute",
    right: "4%",
    bottom: "0%",
    color: "black",
    "@media (max-width:520px)": {
      bottom: "-1% !important",
    },
  },
}));

const HelpButton = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const openDialog = () => {
    setShow(true);
  };

  const closeDialog = () => {
    setShow(false);
  };

  return (
    <>
      <IconButton size="medium" className={classes.Helpbtn} onClick={openDialog}>
        <HelpOutlineIcon fontSize="large" />
      </IconButton>
      {show ? <HelpDialog func={closeDialog} /> : ""}
    </>
  );
};

export default HelpButton;
