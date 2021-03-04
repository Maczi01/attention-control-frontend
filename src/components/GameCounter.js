import React, {useState, useRef} from "react";
import StartWindow from "./StartWindow";

const GameCounter = ({endOfGameTime, results, isOpen, onClose}) => {
    const [elapsedTime, setElapsedTime] = useState(10);
    const [isActive, setIsActive] = useState(false);

    const [pause, setPause] = useState(false);
    const [running, setRunning] = useState(false);
    const [result, setResult] = useState();
    // const {isOpen, onOpen, onClose} = useDisclosure({defaultIsOpen: true})
    const countRef = useRef(null);


    React.useEffect(() => {
            if (elapsedTime < 1) {
                clearInterval(countRef.current);
                setIsActive(false);
                setResult(getResults)
                console.log(`The result is ${result}`)
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