import React, {useState, useRef, useEffect} from "react";
import StartWindow from "./StartWindow";
import ResultModal from "./ResultModal";
import {useDisclosure} from "@chakra-ui/hooks";
import {Box} from "@chakra-ui/layout";

const GameCounter = ({endOfGameTime, getResults, result, clicked, board}) => {
    const [elapsedTime, setElapsedTime] = useState(endOfGameTime);
    const [isActive, setIsActive] = useState(false);

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
            }
        }, [elapsedTime]
    );

    const handleStart = () => {
        if (isActive === true) {
            clearInterval(countRef.current);
            setIsActive(false);
        } else if (elapsedTime > 1) {
            setIsActive(true);
            countRef.current = setInterval(() => {
                setElapsedTime((elapsedTime) => elapsedTime - 1);
            }, 1000);
        }
    };

    return (
        <Box
            filter="blur(20px)"
        >
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
                board={board}
                handleStart={handleStart}
            />
        </Box>
    )
}

export default GameCounter