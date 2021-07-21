import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MainQuestion from '../../image/MainQuestion.png';
import MainAnswer from '../../image/MainAnswer.png';

const useStyles = makeStyles({
    question:{
        marginTop: "20vh",
        width: "80%",
        height: "360px",
        backgroundImage: `url(${MainQuestion})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        display: 'grid',
        gridTemplateColumns: "1fr 1fr"
    },
    answer: {
        width: "80%",
        height: "45%",
        backgroundImage: `url(${MainAnswer})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        display: 'grid',
        gridTemplateColumns: "1fr 1fr"
    },
    borderContainer: {
        width: "100%",
        height: "100%",
        display: "flex"
    },
    border: {
        borderWidth: "13px",
        width: "20%",
        height: "25%"
    },
    rightTop: {
        justifyContent: 'flex-end'
    },
    bottom: {
        flexDirection: "column-reverse"
    },
    rb: {
        borderStyle: 'none solid solid none',
        margin: "auto 0 0 auto"
    },
    rt: {
        borderStyle: 'solid solid none none',
    },
    lt: {
        borderStyle: 'solid none none solid',
    },
    lb: {
        borderStyle: 'none none solid solid',
    }
});

const ActivityImage = (props) => {
    const classes = useStyles();
    return (
        <div className={props.state ? classes.question : classes.answer} >
            <div className={`${classes.borderContainer} ${classes.leftTop}`}>
                <div className={`${classes.border} ${classes.lt}`}></div>
            </div>
            <div className={`${classes.borderContainer} ${classes.rightTop}`}>
                <div className={`${classes.border} ${classes.rt}`}></div>
            </div>
            <div className={`${classes.borderContainer} ${classes.bottom}`}>
                <div className={`${classes.border} ${classes.lb}`}></div>
            </div>
            <div className={`${classes.borderContainer} ${classes.bottom}`}>
                <div className={`${classes.border} ${classes.rb}`}></div>
            </div>
            {/* <div></div>
            <div></div> */}
        </div>
    )
}

export default ActivityImage;