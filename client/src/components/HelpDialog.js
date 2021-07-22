import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, IconButton, Dialog } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : ""}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const HelpDialog = (props) => {
  return (
    <div>
      <Dialog
        onClose={props.func}
        open={true}
      >
        <DialogTitle onClose={props.func}>
          <span style={{ fontFamily: "FingerPaint" }}>KNUHOUSE is ...</span>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            당신의 목소리로 직접 질문하거나 답변해보세요 !
          </Typography>
          <Typography gutterBottom>
            텍스트가 아닌 서로의 목소리로 소통하세요 !
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HelpDialog;