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
    const [resultsBoard, setResultsBoard] = useState([]);

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

    const saveUserInDatabase = async (playerName, score) => {
        console.log({name, result})
        const date = new Date();
        await FetchData.getData(url.localToGetResultBoard, 'POST', JSON.stringify(({playerName, score, date})))
            .catch(err => console.error(err.message));
    };

    const getResultsBoard = async () => {
        return await FetchData.getData(url.localToGetResultBoard, 'GET')
            .then(data => setResultsBoard(data))
            .catch(err => console.error(err.message));
    }

    const value = {
        gameData,
        checkGivenNumber,
        name,
        setName,
        result,
        error,
        isPending,
        saveUserInDatabase,
        getResults,
        getResultsBoard,
        resultsBoard,
    }
    return (<GameDataContext.Provider value={value}>
        {children}
    </GameDataContext.Provider>)
}

export default GameDataProvider;