import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList({ img, info, name, git }) {
  const classes = useStyles();
  const gitlink = "https://github.com/" + git;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sizes="large" variant="square" alt={name} src={img} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {info}
              <a href={gitlink}>
                <GitHubIcon style={{ color: grey[500] }}/>
              </a>
            </Typography>
            <br></br>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
