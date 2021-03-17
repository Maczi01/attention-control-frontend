import React, {useEffect, useState} from "react";
import {Flex, Spinner} from "@chakra-ui/react"
import GameBoard from "./components/GameBoard";
import GameCounter from "./components/GameCounter";
import FetchData from "./components/FetchData";
import {BrowserRouter as Router, Switcher, Route} from 'react-router-dom'

function App() {
    const [gameData, setGameData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(0);

    const urlGlobalGameDataEndpoint = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game.json";
    const urlLocalGameDataEndpoint = "http://localhost:8080/api/time";
    const urlLocalToCheckNumber = "http://localhost:8080/api";
    const urlGlobalGameResultEndpoint = "https://my-project-1557350715381-default-rtdb.firebaseio.com/game/result.json";
    const urlLocalGameResultEndpoint = "http://localhost:8080/api/results";

    useEffect(async () => {
        FetchData.getData(urlGlobalGameDataEndpoint, 'GET')
            .then(data => setGameData(data))
            .catch(err => setError(err.message))
            .finally(() => setIsPending(false))

    }, []);

    const checkGivenNumber = async (number) => {
        const response = await FetchData.getData(urlLocalToCheckNumber, 'POST', number)
            .catch(err => console.error(err.message));
        return await response
    };

    const getResults = async () => {
        const response = await FetchData.getData(urlGlobalGameResultEndpoint, 'GET')
            .then(data => setResult(data))
            .catch(err => console.error(err.message));
        return response;
    };

    return (
        <>
            <Router>
                    <Switcher>
                        <Route exact path="/" component={}/>
                        <Route/>
                        <Route/>
                    </Switcher>

            </Router>
            {/*<Flex direction="column" align="center" justify="space-around" width="80%" backgroundColor="#ffd803"*/}
            {/*      mx="auto">*/}
            {/*    <GameCounter*/}
            {/*        endOfGameTime={gameData.endOfGameTime}*/}
            {/*        result={result}*/}
            {/*        getResults={getResults}*/}
            {/*    />*/}
            {/*    {error && <p> {error} </p>}*/}
            {/*    {isPending && <Spinner/>}*/}
            {/*    <GameBoard checkGivenNumber={checkGivenNumber} table={gameData.board}/>*/}
            {/*</Flex>*/}
        </>
    );
}

export default App;
