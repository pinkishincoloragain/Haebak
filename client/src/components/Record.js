import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import MicIcon from "@material-ui/icons/Mic";
import StopIcon from "@material-ui/icons/Stop";
import MicRecorder from "mic-recorder-to-mp3";
import CircularProgress from '@material-ui/core/CircularProgress';
import { green, deepOrange } from '@material-ui/core/colors';

<<<<<<< HEAD
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "150px",
  },
  record: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  player: {
    height: "75px",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function Record() {
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState("");
  const [isBlocked, setIsBlocked] = useState(true);
  const [recorder, setRecorder] = useState(
    new MicRecorder({
      bitRate: 128,
    })
  );
  const classes = useStyles();

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        // 녹음할 수 있는 권한이 있는지 없는지 확인
        console.log("Granted");
        setIsBlocked(false);
      },
      () => {
        console.log("Denied");
        setIsBlocked(true);
      }
    );
  }, []);
=======
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "150px"
    },
    record: {
      width: '100vw',
      display: "flex",
      justifyContent: "center"
    },
    player: {
        height: "75px",
        width: '100vw',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    fab: {
        backgroundColor: green[700],
        '&:hover': {
            backgroundColor: green[500],
        },
        zIndex: 1,
    },
    fabRecord: {
        backgroundColor: deepOrange[500],
        '&:hover': {
            backgroundColor: deepOrange[700],
        },
        zIndex: 1,
    },
    fabProgress: {
        color: deepOrange[800],
        position: 'absolute',
        top: -6,
        left: -6,
    }
  }));

function Record({ isQuestion, setFile }) {
    const [isRecording, setIsRecording] = useState(false);
    const [blobURL, setBlobURL] = useState("");
    const [isBlocked, setIsBlocked] = useState(true);
    const [recorder, setRecorder] = useState(new MicRecorder({
        bitRate: 128
    }));
    const classes = useStyles();
>>>>>>> e925ab6b5df4aa893e20d8ad5e2f495a604dec07

  const handleRecord = () => {
    if (isBlocked) {
      console.log("Permission Denied");
    } else {
      recorder
        .start()
        .then(() => {
          setIsRecording(true);
        })
        .catch((e) => console.error(e));
    }
  };

  const handleStopRecord = () => {
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setBlobURL(blobURL);
        setIsRecording(false);
        // const file = new File(buffer, 'me-at-thevoice.mp3', {
        //     type: blob.type,
        //     lastModified: Date.now()
        // });

<<<<<<< HEAD
        // const player = new Audio(URL.createObjectURL(file));
        // player.play();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={classes.root}>
      <div className={classes.player}>
        {!isRecording && blobURL && (
          <audio controls src={blobURL}>
            오디오
          </audio>
        )}
      </div>
      <div className={classes.record}>
        <Fab
          color={isRecording ? "secondary" : "primary"}
          onClick={isRecording ? handleStopRecord : handleRecord}>
          {isRecording ? <StopIcon /> : <MicIcon />}
        </Fab>
      </div>
    </div>
  );
=======
    const handleStopRecord = () => {
        recorder.stop().getMp3().then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob);
            setBlobURL(blobURL);
            setIsRecording(false);
            setFile(blob);
        }).catch((e) => console.log(e));
    };

    return (
        <div className={classes.root}>     
            <div className={classes.player}> 
                { !isRecording && blobURL && <audio controls src={blobURL}>오디오</audio>}
            </div>
            <div className={classes.record}>
                <div className={classes.wrapper}>
                    <Fab 
                        className={isRecording ? classes.fabRecord : classes.fab}
                        color={isRecording ? "secondary" : "primary"}
                        onClick={isRecording ? handleStopRecord : handleRecord}
                    >
                        {isRecording ? <StopIcon /> : <MicIcon />}
                    </Fab>
                    {isRecording && <CircularProgress size={68} className={classes.fabProgress} />}
                </div>
            </div>
        </div>
    )
>>>>>>> e925ab6b5df4aa893e20d8ad5e2f495a604dec07
}

export default Record;
