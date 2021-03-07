import React, {useState, useEffect} from "react";
import {Button, ButtonGroup, Grid, Flex, Box} from "@chakra-ui/react"
import {ChakraProvider} from "@chakra-ui/react"
import Number from "./components/Number";
import CurrentTimebox from "./components/CurrentTimebox";
import {useDisclosure} from "@chakra-ui/react"
import GameBoard from "./components/GameBoard";
import GameCounter from "./components/GameCounter";


function App() {

    const [table, setTable] = useState([])
    const [gameData, setGameData] = useState({});
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/api");
            res.json()
                .then(res => setTable(res))
        }

        fetchData();
    }, [setTable]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/api/time");
            res.json()
                .then(res =>setGameData(res));
        }

        fetchData();
    }, [setGameData])

    const makeRequest = async (number) => {
        const url = "http://localhost:8080/api";
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await fetch(url,
            {
                method: "post",
                headers,
                body: number
            }
        );
        return  await response.json();
    };

    const getResults = async () => {
        const url = "http://localhost:8080/api/results";
        const headers = {
            "Content-Type": "application/json",
        }
        const response = await fetch(url,
            {
                headers,
            }
        );
        const newVar = await response.json();
        return newVar;
    };
    return (
        <ChakraProvider>
            <Flex direction="column" align="center" justify="space-between" width="80%" height="full"
                  backgroundColor="#ffd803" mx="auto" py="1%">
            <GameCounter
                endOfGameTime={gameData.endOfGameTime}
                getResults={getResults}
            />
            <GameBoard makeRequest={makeRequest} table={table}/>
        </Flex>
</ChakraProvider>
)
    ;
}

export default App;
