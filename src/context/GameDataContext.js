import React, {useEffect, useState} from "react";
import FetchData from "../api/FetchData";
import {url} from "../lib/urls";
import {HttpMethod} from "../lib/HttpMethods";

export const GameDataContext = React.createContext(null);

const GameDataProvider = ({children}) => {
    const [gameData, setGameData] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(0);
    const [name, setName] = useState('');
    const [resultsList, setResultsList] = useState([]);
    const [playersResult, setPlayersResult] = useState({});

    useEffect(async () => {
        FetchData.getData(url.localGameDataEndpoint, HttpMethod.GET)
            .then(data => setGameData(data))
            .catch(err => setError(err.message))
            .finally(() => setIsPending(false))
    }, []);

    const checkGivenNumber = async (number) => {
        return await FetchData.getData(url.localToCheckNumber, HttpMethod.POST, number)
            .catch(err => console.error(err.message));
    };

    const getResults = async () => {
        return await FetchData.getData(url.localGameResultEndpoint, HttpMethod.GET)
            .then(data => setResult(data))
            .catch(err => console.error(err.message));
    };

    const saveUserInDatabase = async (playerName, score) => {
        console.log({playerName, score});
        const date = new Date();
        const id = Math.random();
        await FetchData.getData(url.localToGetResultBoard, HttpMethod.POST, JSON.stringify(({
            id,
            playerName,
            score,
            date,
            gameboard: gameData.board
        })))
            .catch(err => console.error(err.message));
    };

    const getResultsList = async () => {
        return await FetchData.getData(url.localToGetResultBoard, HttpMethod.GET)
            .then(data => setResultsList(data))
            .catch(err => console.error(err.message));
    };

    const getPlayersResult = async (id) => {
        console.log(id);
        return await FetchData.getData(`${url.localToGetResultBoard}${id}`, HttpMethod.GET)
            .then(data => setPlayersResult(data))
            .catch(err => console.error(err.message));
    };

    const deleteResultFromList = async (id) => {
        await fetch(`${url.localToGetResultBoard}${id}`, {method: HttpMethod.DELETE});
        getResultsList();
    };

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
        getResultsList,
        resultsList,
        deleteResultFromList,
        getPlayersResult,
        playersResult,
        setResultsList
    };
    return (<GameDataContext.Provider value={value}>
        {children}
    </GameDataContext.Provider>)
};

export default GameDataProvider;