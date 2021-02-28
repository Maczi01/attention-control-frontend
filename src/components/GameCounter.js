import React, {useState, useEffect} from "react";
import {Button, ButtonGroup, Grid, Flex, Box} from "@chakra-ui/react"
import {ChakraProvider} from "@chakra-ui/react"
import Number from "./Number";
import CurrentTimebox from "./CurrentTimebox";
import {useDisclosure} from "@chakra-ui/react"
import GameBoard from "./GameBoard";

const GameCounter = () => {

    const [time, setTime] = useState(
        {
            isPaused: false,
            isRunning: false,
            elapsedTime: 0,
            resultModal: false,
        })


    return (
        <p>nic</p>
    )
}

export default GameCounter