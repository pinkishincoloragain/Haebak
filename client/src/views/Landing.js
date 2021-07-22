import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

import { authService, dbService } from "../firebase";
import LandingLogin from "../components/LandingLogin";
import LandingRegister from "../components/LandingRegister";
import SuccSnackbar from "../components/common/SuccSnackbar";
import LandingImage from "../assets/image/paper.jpeg";

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
    height: "fit-content",
    padding: "15px",
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
  const [snackOpen, setSnackOpen] = useState(false);

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
    try {
      if (!newAccount) {
        await authService
          .setPersistence("session")
          .then(() =>
            authService
              .createUserWithEmailAndPassword(inputs.email, inputs.password)
              .then((userCredential) => {
                // send verification mail.
                userCredential.user.sendEmailVerification();
                authService.signOut();
                alert("Email sent");
              })
          )
          .catch(alert);
        const userInfoObj = {
          department: inputs.department,
          email: inputs.email,
          name: inputs.name,
        };

        await dbService.collection("userInfo").add(userInfoObj);
      } else {
        await authService
          .setPersistence("session")
          .then(() => {
            authService
              .signInWithEmailAndPassword(inputs.email, inputs.password)
              .catch((error) => {
                // Handle Errors here.
                setSnackOpen(true);
                // alert(error);
              });
          })
          .catch((error) => {
            // Handle Errors here.
            alert(error);
          });
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
        <span style={{color:"black", cursor:"pointer"}} onClick={toggleAccount}>
          {!newAccount ? "계정이 있어요" : "계정이 없어요"}
        </span>
        <span onClick={toggleAccount}></span>
      </Paper>
      <div className={classes.titleBox}>
        <Typography component="h1" variant="h2" className={classes.title}>
          KNU
          <span style={{ color: "black" }}>HOUSE</span>
        </Typography>
      </div>
      {snackOpen && (
        <SuccSnackbar
          content="너 뭔가 잘못 친 거 같은데 ? 다시 한번 확인해줘"
          type="error"
        />
      )}
    </div>
  );
}

export default Landing;
