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
      "& > div > h1": {
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
    border: "2px solid black",
    boxShadow: "3px 3px black",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  up: {
    textAlign: "center",
  },
  titleBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#e53935",
    marginLeft: "50px",
    fontFamily: "FingerPaint",
    backgroundColor: "#fafafa",
    height: "fit-content",
    border: "2px solid black",
    boxShadow: "3px 3px black",
    padding: "10px",
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
    try {
      if (newAccount) {
        const userInfoObj = {
          department: inputs.department,
          email: inputs.email,
          name: inputs.name,
        };

        await authService
          .createUserWithEmailAndPassword(inputs.email, inputs.password)
          .then((userCredential) => {
            // send verification mail.
            userCredential.user.sendEmailVerification();
            authService.signOut();
            alert("Email sent");
          })
          .catch(alert);
        await dbService.collection("userInfo").add(userInfoObj);
        var emailUser = authService.currentUser;

        console.log("emailUser의 값은 : ", emailUser);
        emailUser
          .sendEmailVerification()
          .then(function () {
            console.log("이메일이 전송됨");
          })
          .catch("email not sent");
      } else {
        const userInfoObj = {
          department: inputs.department,
          email: inputs.email,
          name: inputs.name,
        };

        await authService.signInWithEmailAndPassword(
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
        <button onClick={toggleAccount}>
          {!newAccount ? "계정이 있어요" : "계정이 없어요"}
        </button>
        <span onClick={toggleAccount}></span>
      </Paper>
      <div className={classes.titleBox}>
        <Typography component="h1" variant="h2" className={classes.title}>
          KNU
          <span style={{ color: "black" }}>HOUSE</span>
        </Typography>
      </div>
    </div>
  );
}

export default Landing;
