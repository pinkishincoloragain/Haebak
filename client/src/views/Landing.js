import React, { useState } from "react";
import {
  Link,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { authService } from "../firebase";
import LandingLogin from "../components/LandingLogin";
import LandingRegister from "../components/LandingRegister";

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

function Landing() {
  const classes = useStyles();
  const init = {
    email: "",
    password: "",
    name: "",
    department: "",
  };

  const [inputs, setInputs] = useState(init);
  const [newAccount, setNewAccount] = useState(true);
  // const [error, setError] = useState("");

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
      if (!newAccount) {
        await authService.signInWithEmailAndPassword(
          inputs.email,
          inputs.password
        );
      } else {
        data = await authService.createUserWithEmailAndPassword(
          inputs.email,
          inputs.password,
          inputs.name,
          inputs.department
        );
      }
      setInputs(init);
    } catch (err) {
      alert(err.message);
    }
  };

  const toggleAccount = () => {
    setInputs(init);
    setNewAccount((prev) => !prev)
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={8} sm={8} md={3} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {newAccount ? <LandingRegister userinput={inputs} onch={onChange} submit={handleSubmit}/> : <LandingLogin userinput={inputs} onch={onChange} submit={handleSubmit}/>}
          <Grid className={classes.up}>
            <Link to="/CreateAccount" variant="body2" onClick={toggleAccount}>
              {newAccount ? "I Already have acoount" : "Join now"}
            </Link>
          </Grid>
          <span onClick={toggleAccount}></span>
        </div>
      </Grid>
      <Typography component="h1" variant="h2" className={classes.title}>
        KNU&nbsp;
        <span style={{ color: "black" }}>HOUSE</span>
      </Typography>
    </Grid>
  );
}

export default Landing;
