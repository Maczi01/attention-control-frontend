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
    const [clicked, setClicked] = useState(0);

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

    const saveUserInDatabase = async (playerName, score, clicked) => {
        console.log({playerName, score, clicked});
        const date = new Date();
        const id = Math.random();
        await FetchData.getData(url.localToGetResultBoard, HttpMethod.POST, JSON.stringify(({
            id,
            playerName,
            score,
            date,
            gameboard: gameData.board,
            clicked
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

    const countNumberOfClicks = () => {
        setClicked(previous => previous +1);
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
        getResultsList,
        resultsList,
        deleteResultFromList,
        getPlayersResult,
        playersResult,
        setResultsList,
        clicked,
        countNumberOfClicks
    };
    return (<GameDataContext.Provider value={value}>
        {children}
    </GameDataContext.Provider>)
};

export default GameDataProvider;