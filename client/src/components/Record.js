import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import MicIcon from '@material-ui/icons/Mic';
import StopIcon from '@material-ui/icons/Stop';
import MicRecorder from "mic-recorder-to-mp3";
import { Grid } from "@material-ui/core";
import Timer from "./Timer";

const useStyles = makeStyles({
    root: {
      width: '50%'
    }
  });

function Record() {
    const [isRecording, setIsRecording] = useState(false);
    const [blobURL, setBlobURL] = useState("");
    const [isBlocked, setIsBlocked] = useState(true);
    const [recorder, setRecorder] = useState(new MicRecorder({
        bitRate: 128
    }));
    const classes = useStyles();

    useEffect(() => {
        navigator.getUserMedia({ audio: true }, () => { // 녹음할 수 있는 권한이 있는지 없는지 확인
            console.log("Granted");
            setIsBlocked(false);
        }, () => {
            console.log("Denied");
            setIsBlocked(true);
        });
    }, []);

    const handleRecord = () => {
        if (isBlocked) {
            console.log('Permission Denied');
          } else {
            recorder.start().then(() => {
                setIsRecording(true);
            }).catch((e) => console.error(e));
        }
    };

    const handleStopRecord = () => {
        recorder.stop().getMp3().then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob);
            setBlobURL(blobURL);
            setIsRecording(false);
            // const file = new File(buffer, 'me-at-thevoice.mp3', {
            //     type: blob.type,
            //     lastModified: Date.now()
            // });
         
            // const player = new Audio(URL.createObjectURL(file));
            // player.play();
        }).catch((e) => console.log(e));
    };

    return (
        <div className={classes.root}>
            <Grid container direction="column">
                <Grid item xs={12}>
                    <div>
                        { isRecording && <Timer />}
                        { !isRecording && blobURL && <audio controls src={blobURL}>오디오</audio>}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Fab 
                    color={isRecording ? "secondary" : "primary"}
                    onClick={isRecording ? handleStopRecord : handleRecord}
                    >
                    {isRecording ? <StopIcon /> : <MicIcon />}
                    </Fab>
                </Grid>
            </Grid>
        </div>
    )
}

export default Record;