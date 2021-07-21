import { useState, useEffect } from "react";
import LinearProgress from '@material-ui/core/LinearProgress';


function Timer(props) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    return 0;
                }
                return Math.min(oldProgress + 0.35, 100);
            });
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <LinearProgress variant="determinate" value={progress} />
    )
}

export default Timer;