import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(6, 3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    up: {
        textAlign: 'center',
    },
    title: {
        margin: theme.spacing(0, 0, 0, 6),
        display: 'flex',
        alignItems: 'center',
        color: '#e53935',
    }
}));

const Login = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="h1" variant="h5">
                LOGIN
            </Typography>
            <form className={classes.form} onSubmit={props.submit} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    type="email"
                    id="email"
                    name="email"
                    value={props.userinput.email}
                    autoFocus
                    onChange={props.onch}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                    value={props.userinput.password}
                    onChange={props.onch}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    LOGIN
                </Button>
            </form>
        </div>
    );
};

export default Login;