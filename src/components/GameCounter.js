import React, {useState, useEffect} from "react";
import {Button, ButtonGroup, Grid, Flex, Box} from "@chakra-ui/react"
import {ChakraProvider} from "@chakra-ui/react"
import Number from "./Number";
import CurrentTimebox from "./CurrentTimebox";
import {useDisclosure} from "@chakra-ui/react"
import GameBoard from "./GameBoard";
import StartWindow from "./StartWindow";

const GameCounter = ({endOfGameTime,isOpen,onClose}) => {
    const [elapsedTime, setElapsedTime] = useState( endOfGameTime);

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
        if (elapsedTime > 0) {
            setTimeout(() => setElapsedTime(elapsedTime - 1), 1000);
        } else {
            console.log('BOOOOM!');
        }
    });


    // const startCounting = () =>{
    //     // if (interval ===null){
    //     //     interval = window.setInterval((() => {
    //     //         setElapsedTime(elapsedTime + 1)
    //     //     }), 1000)
    //     // }
    //     if (elapsedTime > 0) {
    //         setTimeout(() => setElapsedTime(elapsedTime - 1), 1000);
    //     } else {
    //         console.log('BOOOOM!');
    //     }
    //     console.log(elapsedTime)
    // }
    console.log(`time: ${elapsedTime}`)
    return (
        <>
        <StartWindow
            isOpen={isOpen}
            onClose={onClose}
            // handleStart={startCounting}
            />
            <p>{elapsedTime}</p>
            </>
    )
}

export default GameCounter