import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import kdg from "../../assets/image/kdg.png";
import bsu from "../../assets/image/bsu.png";
import smb from "../../assets/image/smb.png";
import cjw from "../../assets/image/cjw.png";
import AboutListItem from "../common/AboutListItem";

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: "center",
    "& > a": {
      color: "black",
      textDecoration: "none",
    },
  },
  title: {
    textAlign: "center",
    background: "linear-gradient(20deg, #ffffff 0%, #000000 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "white",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    margin: "0",
    fontFamily: "FingerPaint",
  },
  list: {
    textAlign: "center",
    width: "100%",
    border: 0,
    borderRadius: 3,
    "& > a": {
      color: "black",
      textDecoration: "none",
    },
  },
  inline: {
    display: "inline",
  },
  btn: {
    backgroundColor: "white",
    border: "2px solid",
    boxShadow: "3px 3px",
    borderRadius: "4px",
    margin: "8px 0px",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <>
      <header className={classes.section}>
        <h1 className={classes.title}>DEVELOPERS</h1>
      </header>
      <List className={classes.list}>
        <a href="https://github.com/KingDonggyu">
          <AboutListItem
            img={kdg}
            info="경북대 컴퓨터학부 17학번"
            name="김동규"
          />
        </a>
        <a href="https://github.com/SeongukBaek">
          <AboutListItem
            img={bsu}
            info="경북대 컴퓨터학부 17학번"
            name="백성욱"
          />
        </a>
        <a href="https://github.com/pinkishincoloragain">
          <AboutListItem
            img={smb}
            info="경북대 컴퓨터학부 17학번"
            name="손명빈"
          />
        </a>
        <a href="https://github.com/woong-jae">
          <AboutListItem
            img={cjw}
            info="경북대 컴퓨터학부 17학번"
            name="정재웅"
          />
        </a>
      </List>
      <footer className={classes.section}>
        <a href="https://github.com/pinkishincoloragain/Haebak">
          <Button variant="contained" className={classes.btn}>
            <GitHubIcon />
          </Button>
        </a>
      </footer>
    </>
  );
}
