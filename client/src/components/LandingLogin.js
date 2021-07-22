import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(6, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-height:517px)": {
      marginBottom: "0 !important"
    },
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  up: {
    textAlign: "center",
  },
  title: {
    margin: theme.spacing(0, 0, 0, 6),
    display: "flex",
    alignItems: "center",
    color: "#e53935",
  },
}));

const Login = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        component="h1"
        variant="h5"
        style={{ fontFamily: "FingerPaint" }}
      >
        SIGN IN
      </Typography>
      <form className={classes.form} onSubmit={props.submit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="이메일"
          type="email"
          id="email"
          name="email"
          value={props.userinput.email}
          autoFocus
          onChange={props.onch}
          className={classes.input}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="비밀번호"
          type="password"
          id="password"
          name="password"
          value={props.userinput.password}
          onChange={props.onch}
          className={classes.input}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          로그인
        </Button>
      </form>
    </div>
  );
};

export default Login;
