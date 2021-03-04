import React, {useState} from "react";
import StartWindow from "./StartWindow";

const GameCounter = ({endOfGameTime,isOpen,onClose}) => {
    const [elapsedTime, setElapsedTime] = useState( 10);

    const [pause, setPause] = useState( false);
    const [running, setRunning] = useState( false);
    const [result, setResult] = useState( 0);
    // const {isOpen, onOpen, onClose} = useDisclosure({defaultIsOpen: true})

    let interval = null;

    // const handleStart = () => {
    //     setRunning(true);
    //     startCounting();
    // }

    React.useEffect(() => {
        // if (elapsedTime > 0) {
        //     setTimeout(() => setElapsedTime(elapsedTime => elapsedTime - 1), 1000);
        // } else {
        //     console.log('BOOOOM!');
        // }
        if (elapsedTime < 1) {
            clearInterval(elapsedTime);
        }
    }, [elapsedTime]
    );

    const startCounting = () => {
        // if (elapsedTime > 0) {
            setInterval(() => setElapsedTime((elapsedTime) => elapsedTime - 1), 1000);
        // } else {
        //     console.log('BOOOOM!');
        // }
    }



    console.log(`time: ${elapsedTime}`)
    return (
        <>
        <StartWindow
            isOpen={isOpen}
            onClose={onClose}
            handleStart={startCounting}
            />
            <p>{elapsedTime}</p>
            </>
    )
}

export default GameCounter