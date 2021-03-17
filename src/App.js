import React, {useEffect, useState, useContext} from "react";
import {Flex, Spinner} from "@chakra-ui/react"
import GameBoard from "./components/GameBoard";
import GameCounter from "./components/GameCounter";
import FetchData from "./components/FetchData";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {MainView} from "./pages/MainView";
import {url} from "./lib/urls"

function App() {
    const [gameData, setGameData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(0);

    const addUserWithResult = (name) => {
        console.log(name);
    }

    useEffect(async () => {
        FetchData.getData(url.globalGameDataEndpoint, 'GET')
            .then(data => setGameData(data))
            .catch(err => setError(err.message))
            .finally(() => setIsPending(false))

    }, []);

    const checkGivenNumber = async (number) => {
        const response = await FetchData.getData(url.localToCheckNumber, 'POST', number)
            .catch(err => console.error(err.message));
        return await response
    };

    const getResults = async () => {
        const response = await FetchData.getData(url.globalGameResultEndpoint, 'GET')
            .then(data => setResult(data))
            .catch(err => console.error(err.message));
        return response;
    };

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainView}/>
                    <Route/>
                    <Route/>
                </Switch>

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
