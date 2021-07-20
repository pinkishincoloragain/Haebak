import React from 'react';
import { Button, TextField, Link, Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        alignContent: 'space-around',
        justifyContent: 'center',
    },
    paper: {
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
}));

const handleSubmit = () => {
    
}

function Landing() {
    const classes = useStyles();

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
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
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
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Join now"}
                            </Link>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Landing;