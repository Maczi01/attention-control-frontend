import React, {useState, useEffect} from "react";
import {Button, ButtonGroup, Grid, Flex, Box} from "@chakra-ui/react"
import {ChakraProvider} from "@chakra-ui/react"
import Number from "./Number";
import CurrentTimebox from "./CurrentTimebox";
import {useDisclosure} from "@chakra-ui/react"
import GameBoard from "./GameBoard";

const GameCounter = () => {

    const [pause, setPause] = useState( false);
    const [running, setRunning] = useState( false);
    const [elapsedTime, setElapsedTime] = useState( 0);
    const [result, setResult] = useState( 0);


    return (
        <p>nic</p>
    )
}

export default GameCounter