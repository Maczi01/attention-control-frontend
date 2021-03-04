import React, {useState, useRef} from "react";
import StartWindow from "./StartWindow";

const GameCounter = ({endOfGameTime, getResults, isOpen, onClose}) => {
    const [elapsedTime, setElapsedTime] = useState(10);
    const [isActive, setIsActive] = useState(false);

    const [pause, setPause] = useState(false);
    const [running, setRunning] = useState(false);
    const countRef = useRef(null);
    const getPoints = () =>   getResults().then(res => console.log(res))

    React.useEffect( () => {
            if (elapsedTime < 1) {
                getPoints();
                clearInterval(countRef.current);
                setIsActive(false);
            }
        }, [elapsedTime]
    );

    const handleStart = () => {
        if (isActive === true) {
            clearInterval(countRef.current)
            setIsActive(false);
        } else if (elapsedTime > 1) {
            setIsActive(true);
            countRef.current = setInterval(() => {
                setElapsedTime((elapsedTime) => elapsedTime - 1);
            }, 1000);
        }
    }

    console.log(`time: ${elapsedTime}`)
    return (
        <>
            <StartWindow
                isOpen={isOpen}
                onClose={onClose}
                handleStart={handleStart}
            />
            <p>{elapsedTime}</p>
        </>
    )
}

export default GameCounter