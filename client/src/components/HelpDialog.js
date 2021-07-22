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
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : (
        ""
      )}
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
      <Dialog onClose={props.func} open={true}>
        <DialogTitle onClose={props.func}>
          <span
            style={{
              fontFamily: "FingerPaint",
              color: "red",
            }}
          >
            KNU
          </span>
          <span style={{ fontFamily: "FingerPaint" }}>HOUSE is ...</span>
        </DialogTitle>
        <DialogContent dividers>
          <h3>
            당신의 목소리로 질문해보세요. <p />
            <span style={{ color: "red" }}>같은 학과</span>의 다른 친구들이 답을
            해 줄 거에요.
          </h3>
          <h3>
            같은 학과의 친구들의 고민을 들어주세요. 질문은{" "}
            <span style={{ color: "red" }}>랜덤</span>으로 받을 수 있어요.
          </h3>
          <h3
            style={{
              fontSize: "2.2rem",
              textAlign: "center",
              fontFamily: "NanumPenScript",
            }}
          >
            텍스트가 아닌 서로의 목소리로 소통해보세요 !
          </h3>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HelpDialog;
