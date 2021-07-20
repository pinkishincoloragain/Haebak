import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Login from "../components/LandingLogin";

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
    title: {
        margin: theme.spacing(0, 0, 0, 6),
        display: 'flex',
        alignItems: 'center',
        color: '#e53935',
    }
}));

function Landing() {
    const classes = useStyles();
    
    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={8} sm={8} md={3} component={Paper} elevation={6} square>
                <Login />
            </Grid>
            <Typography component="h1" variant="h2" className={classes.title}>
                KNU&nbsp;
                <span style={{color: 'black'}}>HOUSE</span>
            </Typography>
        </Grid>
    );
}

export default Landing;