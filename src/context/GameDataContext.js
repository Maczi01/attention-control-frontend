import React, {useEffect, useRef, useState} from "react";
import FetchData from "../api/FetchData";
import {url} from "../lib/urls";
import {Http} from "../lib/HttpMethods";

export const GameDataContext = React.createContext(null);

const GameDataProvider = ({children}) => {
    const [gameData, setGameData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(0);
    const [name, setName] = useState('');
    const [resultsBoard, setResultsBoard] = useState([]);

    useEffect(async () => {
        FetchData.getData(url.localGameDataEndpoint, Http.GET)
            .then(data => setGameData(data))
            .catch(err => setError(err.message))
            .finally(() => setIsPending(false))
    }, []);

    const checkGivenNumber = async (number) => {
        return await FetchData.getData(url.localToCheckNumber, Http.POST, number)
            .catch(err => console.error(err.message));
    };

    const getResults = async () => {
        return await FetchData.getData(url.localGameResultEndpoint, Http.GET)
            .then(data => setResult(data))
            .catch(err => console.error(err.message));
    };

    const saveUserInDatabase = async (playerName, score) => {
        console.log({playerName, score});
        const date = new Date();
        const id = Math.random();
        await FetchData.getData(url.localToGetResultBoard, Http.POST, JSON.stringify(({playerName, score, date})))
            .catch(err => console.error(err.message));
    };

    const getResultsBoard = async () => {
        return await FetchData.getData(url.localToGetResultBoard, Http.GET)
            .then(data => setResultsBoard(data))
            .catch(err => console.error(err.message));
    }

    const deleteResultFromBoard = async (id) => {
        await fetch(`${url.localToGetResultBoard}${id}`, {method: 'DELETE'})
        // FetchData.getData(`${url.localToGetResultBoard}${id}`, `${Http.DELETE)
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
        deleteResultFromBoard
    }
    return (<GameDataContext.Provider value={value}>
        {children}
    </GameDataContext.Provider>)
}

export default GameDataProvider;