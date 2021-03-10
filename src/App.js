import React, {useEffect, useState} from "react";
import {ChakraProvider, Flex, Box, Spinner} from "@chakra-ui/react"
import GameBoard from "./components/GameBoard";
import GameCounter from "./components/GameCounter";


function App() {
    const [gameData, setGameData] = useState({});
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/time")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setGameData(data)
                setIsPending(false);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, []);

    const checkGivenNumber = async (number) => {
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
        return await response.json();
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
        return await response.json();
    };

    return (
        <>
            <Flex direction="column" align="center" justify="space-around" width="80%"
                  backgroundColor="#ffd803"
                  mx="auto">
                <GameCounter
                    endOfGameTime={gameData.endOfGameTime}
                    getResults={getResults}
                />
                {isPending && <Spinner/>}
                <GameBoard checkGivenNumber={checkGivenNumber} table={gameData.board}/>
            </Flex>
        </>
    );
}

export default App;
