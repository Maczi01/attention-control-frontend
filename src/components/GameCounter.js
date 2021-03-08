import React, {useState, useRef} from "react";
import StartWindow from "./StartWindow";
import ResultWindow from "./ResultWindow";
import {useDisclosure} from "@chakra-ui/hooks";

const GameCounter = ({endOfGameTime, getResults}) => {
    const [elapsedTime, setElapsedTime] = useState(endOfGameTime);
    const [isActive, setIsActive] = useState(false);
    const [result, setResult] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure({defaultIsOpen: true})
    const {
        isOpen: isOpenReportModal,
        onOpen: onOpenReportModal,
        onClose: onCloseReportModal
    } = useDisclosure()
    console.log({endOfGameTime})

    const countRef = useRef(null);
    const getPoints = () =>   getResults().then(res => setResult(res))

    React.useEffect( () => {
            setElapsedTime(endOfGameTime)
        }, [endOfGameTime]
    );

    React.useEffect( () => {
            if (elapsedTime < 1) {
                getPoints();
                clearInterval(countRef.current);
                setIsActive(false);
                onOpenReportModal();
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
            <ResultWindow
                onOpen={onOpenReportModal}
                isOpen={isOpenReportModal}
                result={result}
            />
            <p>{elapsedTime}</p>
        </>
    )
}

export default GameCounter