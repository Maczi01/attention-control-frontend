import React, {useEffect, useRef, useState} from "react";
import FetchData from "../api/FetchData";
import {url} from "../lib/urls";

export const GameDataContext = React.createContext(null);

const GameDataProvider = ({children}) => {
    const [gameData, setGameData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(0);
    const [name, setName] = useState('');

    useEffect(async () => {
        FetchData.getData(url.localGameDataEndpoint, 'GET')
            .then(data => setGameData(data))
            .catch(err => setError(err.message))
            .finally(() => setIsPending(false))
    }, []);

    const checkGivenNumber = async (number) => {
        return await FetchData.getData(url.localToCheckNumber, 'POST', number)
            .catch(err => console.error(err.message));
    };

    const getResults = async () => {
        return await FetchData.getData(url.localGameResultEndpoint, 'GET')
            .then(data => setResult(data))
            .catch(err => console.error(err.message));
    };


    const value = {gameData, checkGivenNumber, getResults, name, setName, result, error, isPending}
    return (<GameDataContext.Provider value={value}>
        {children}
    </GameDataContext.Provider>)
}

export default GameDataProvider;