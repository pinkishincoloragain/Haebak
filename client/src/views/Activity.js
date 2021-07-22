import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Record from "../components/Record";
import ActivityImage from "../components/common/ActivityImage";
import BackButton from "../components/common/BackButton";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const Activity = ({ isQuestion, handleActivity }) => {
  const classes = useStyles();

  return (
    <div>
      <BackButton type="activity" action={handleActivity} />
      <div className={classes.container}>
        <ActivityImage state={isQuestion} />
        <Record />
      </div>
    </div>
  );
};

export default Activity;
