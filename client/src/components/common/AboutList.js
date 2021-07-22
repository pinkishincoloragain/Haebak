import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Divider } from "@material-ui/core";

import kdg from "../../image/kdg.png";
import bsu from "../../image/bsu.png";
import smb from "../../image/smb.png";
import cjw from "../../image/cjw.png";
import AboutListItem from "../common/AboutListItem";

const useStyles = makeStyles((theme) => ({
    title: {
    textAlign: "center",
    background: 'linear-gradient(45deg, #ffffff 0%, #000000 100%)',
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "white",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  root: {
    width: "100%",
    backgroundColor: "#eeeeee",
    border: 0,
    borderRadius: 3,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}>DEVELOPERS</h1>
      <List className={classes.root}>
        <AboutListItem
          img={kdg}
          info="경북대 컴퓨터학부 17학번"
          name="김동규"
          git="KingDonggyu"
        />
        <Divider variant="inset" component="li" />
        <AboutListItem
          img={bsu}
          info="경북대 컴퓨터학부 17학번"
          name="백성욱"
          git="SeongukBaek"
        />
        <Divider variant="inset" component="li" />
        <AboutListItem
          img={smb}
          info="경북대 컴퓨터학부 17학번"
          name="손명빈"
          git="pinkishincoloragain"
        />
        <Divider variant="inset" component="li" />
        <AboutListItem
          img={cjw}
          info="경북대 컴퓨터학부 17학번"
          name="정재웅"
          git="woong-jae"
        />
      </List>
      <h1 className={classes.title}>GITHUB</h1>

    </>
  );
}
