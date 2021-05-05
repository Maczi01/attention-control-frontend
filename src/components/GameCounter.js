import React, {useState, useRef, useEffect} from "react";
import StartWindow from "./StartWindow";
import ResultModal from "./ResultModal";
import {useDisclosure} from "@chakra-ui/hooks";

const GameCounter = ({endOfGameTime, getResults, result, stopCheckingAccuracy}) => {
    const [elapsedTime, setElapsedTime] = useState(endOfGameTime);
    const [isActive, setIsActive] = useState(false);
    const [clicked, setClicked] = useState(0);

    const {isOpen, onOpen, onClose} = useDisclosure({defaultIsOpen: true})
    const {
        isOpen: isOpenReportModal,
        onOpen: onOpenReportModal,
        onClose: onCloseReportModal
    } = useDisclosure();
    const countRef = useRef(null);
    useEffect(() => {
            setElapsedTime(endOfGameTime)
        }, [endOfGameTime]
    );

    useEffect(() => {
            if (elapsedTime < 1) {
                getResults();
                clearInterval(countRef.current);
                setIsActive(false);
                onOpenReportModal();
                window.removeEventListener("click", countNumberOfClicks)
            }
        }, [elapsedTime]
    );

    const countNumberOfClicks = () => {
        setClicked(previous => previous + 1);
        console.log("dupa");
    };


    const handleStart = () => {
        if (isActive === true) {
            clearInterval(countRef.current);
            setIsActive(false);
        } else if (elapsedTime > 1) {
            window.addEventListener("click", () => countNumberOfClicks())
            setIsActive(true);

            countRef.current = setInterval(() => {
                setElapsedTime((elapsedTime) => elapsedTime - 1);
            }, 1000);
        }
    };

    return (
        <>
            <StartWindow
                isOpen={isOpen}
                onClose={onClose}
                handleStart={handleStart}
            />
            <ResultModal
                onOpen={onOpenReportModal}
                isOpen={isOpenReportModal}
                result={result}
                clicked={clicked}
                handleStart={handleStart}
            />
        </>
    )
}

export default GameCounter