import { useState, useEffect } from "react";

import Fab from '@material-ui/core/Fab';
import MicIcon from '@material-ui/icons/Mic';
import StopIcon from '@material-ui/icons/Stop';
import MicRecorder from "mic-recorder-to-mp3";

function Record() {
    const [isRecording, setIsRecording] = useState(false);
    const [blobURL, setBlobURL] = useState("");
    const [isBlocked, setIsBlocked] = useState(true);
    const [recorder, setRecorder] = useState(new MicRecorder({
        bitRate: 128
    }));

    useEffect(() => {
        navigator.getUserMedia({ audio: true }, () => {
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
        <div>
            <Fab 
                color={isRecording ? "secondary" : "primary"}
                onClick={isRecording ? handleStopRecord : handleRecord}
            >
                {isRecording ? <StopIcon /> : <MicIcon />}
            </Fab>
            { blobURL && <audio controls src={blobURL}>오디오</audio>}
        </div>
    )
}

export default Record;