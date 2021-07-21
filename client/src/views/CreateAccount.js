import React, { useState } from "react";
import {
  Button,
  TextField,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { authService } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    alignContent: "space-around",
    justifyContent: "center",
  },
  paper: {
    margin: theme.spacing(6, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

function CreateAccount() {
  const classes = useStyles();
  const init = {
    email: "",
    passwd: "",
  };

  const [inputs, setInputs] = useState(init);
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    let data;
    try {
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          inputs.email,
          inputs.passwd
        );
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={8} sm={8} md={3} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              id="email"
              name="email"
              placeholder="KNU Email"
              value={inputs.email}
              autoFocus
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="passwd"
              name="passwd"
              value={inputs.passwd}
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Create Account
            </Button>
            {/* <Grid className={classes.up}>
              <Link href="#" variant="body2">
                {"Join now"}
              </Link>
            </Grid> */}
          </form>
          {error}
        </div>
      </Grid>
      <Typography component="h1" variant="h2" className={classes.title}>
        KNU&nbsp;
        <span style={{ color: "black" }}>HOUSE</span>
      </Typography>
    </Grid>
  );
}

export default CreateAccount;
