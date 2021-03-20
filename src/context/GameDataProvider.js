import React, {useEffect, useState} from "react";
import FetchData from "../components/FetchData";
import {url} from "../lib/urls";
export const GameContext = React.createContext()

const GameDataProvider = () => {
    const [gameData, setGameData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(0);

    const addUserWithResult = (name) => {
        console.log(name);
    }

    useEffect(async () => {
        FetchData.getData(url.localGameDataEndpoint, 'GET')
            .then(data => setGameData(data))
            .catch(err => setError(err.message))
            .finally(() => setIsPending(false))
    }, []);

    const checkGivenNumber = async (number) => {
        const response = await FetchData.getData(url.localToCheckNumber, 'POST', number)
            .catch(err => console.error(err.message));
        return await response
    };
    //
    // const getResults = async () => {
    //     const response = await FetchData.getData(url.localGameResultEndpoint, 'GET')
    //         .then(data => setResult(data))
    //         .catch(err => console.error(err.message));
    //     return response;
    // };

    const value = {gameData, checkGivenNumber}
    return <GameContext value={value}/>
}

export default GameDataProvider;