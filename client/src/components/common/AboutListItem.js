import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "white",
    border: "2px solid",
    boxShadow: "3px 3px",
    borderRadius: "4px",
    margin: "8px 0px",
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList({ img, info, name }) {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.btn}>
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
              </Typography>
              <br></br>
            </React.Fragment>
          }
        />
      </ListItem>
    </Button>
  );
}
