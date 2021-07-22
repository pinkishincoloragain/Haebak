import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Paper, Typography } from "@material-ui/core";

import { authService, dbService } from "../firebase";
import LandingLogin from "../components/LandingLogin";
import LandingRegister from "../components/LandingRegister";
import LandingImage from "../assets/image/LandingImage.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${LandingImage}) center center / cover no-repeat`,
    height: "100vh",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    alignContent: "space-around",
    justifyContent: "center",
    "@media (max-width:970px)": {
      flexDirection: "column-reverse",
      "& > h1": {
        margin: "0 0 30px 0 !important",
        fontSize: "3em",
      },
    },
  },
  paper: {
    width: "350px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 30px 15px 30px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  up: {
    textAlign: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#e53935",
    marginLeft: "50px",
    fontFamily: "FingerPaint",
    backgroundColor: "white",
    height: "fit-content",
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
      if (newAccount) {
        await authService.signInWithEmailAndPassword(
          inputs.email,
          inputs.password
        );

        const userInfoObj = {
          department: inputs.department,
          email: inputs.email,
          name: inputs.name,
        };
        dbService.collection("userInfo").add(userInfoObj);
      } else {
        data = await authService.createUserWithEmailAndPassword(
          inputs.email,
          inputs.password
        );
      }

      setInputs(init);
    } catch (err) {
      alert(err.message);
    }
  };

  const toggleAccount = () => {
    setInputs(init);
    setNewAccount((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {!newAccount ? (
          <LandingRegister
            userinput={inputs}
            onch={onChange}
            submit={handleSubmit}
          />
        ) : (
          <LandingLogin
            userinput={inputs}
            onch={onChange}
            submit={handleSubmit}
          />
        )}
        <Link to="/CreateAccount" variant="body2" onClick={toggleAccount}>
          {!newAccount ? "계정이 있어요" : "계정이 없어요"}
        </Link>
        <span onClick={toggleAccount}></span>
      </Paper>
      <Typography component="h1" variant="h2" className={classes.title}>
        KNU
        <span style={{ color: "black" }}>HOUSE</span>
      </Typography>
    </div>
  );
}

export default Landing;
