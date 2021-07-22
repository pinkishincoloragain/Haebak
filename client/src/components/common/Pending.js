import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Pending = ({ text }) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={true} >
          <h1>{text}</h1>
          <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Pending;