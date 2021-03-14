import React, {useEffect, useState} from "react";
import {Flex, Spinner} from "@chakra-ui/react"
import GameBoard from "./components/GameBoard";
import GameCounter from "./components/GameCounter";
import FetchData from "./components/FetchData";

function App() {
    const [gameData, setGameData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const gameDataEndpoint = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game.json";
    const gameResultEndpoint = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game/result.json";
    // const urlToGetData = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game.json";
    const urlToGetData = "https://myject-1557350715381-default-rtdb.firebaseio.com/game.json";

    useEffect(async () => {
        FetchData.getData(urlToGetData, 'GET')
            .then(data => {
                setGameData(data)
            })
            .catch(err => {
                    setError(err.message)
                }
            )
            .finally(() => setIsPending(false))

    }, []);

    const checkGivenNumber = async (number) => {
        const url = "http://localhost:8080/api";
        const response = await FetchData.getData(url, 'POST', number)
            .catch(err => {
                setError(err)
                console.error(err.message)
            })
        return await response

    };

    const getResults = async () => {
        // const url = "http://localhost:8080/api/results";
        const url = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game/result.json";
        const response = await FetchData.getData(url, 'GET')
            .catch(err => {
                console.error(err.message)
            })
        return response
    };

    return (
        <>
            <Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803"
                  mx="auto">
                <GameCounter
                    endOfGameTime={gameData.endOfGameTime}
                    getResults={getResults}
                />
                {error && <p> {error} </p>}
                {isPending && <Spinner/>}
                <GameBoard checkGivenNumber={checkGivenNumber} table={gameData.board}/>
            </Flex>
        </>
    );
}

export default App;
