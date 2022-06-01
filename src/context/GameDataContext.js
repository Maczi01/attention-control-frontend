import React, {useEffect, useState} from "react";

export const GameDataContext = React.createContext(null);

const GameDataProvider = ({children}) => {
    const [result, setResult] = useState(0);
    const [name, setName] = useState('');
    const [resultsList, setResultsList] = useState([]);
    const [playersResult, setPlayersResult] = useState({});
    const gameTimeInSeconds = 10;


    const value = {
        name,
        setName,
        result,
        resultsList,
        playersResult,
        setResultsList,
        gameTimeInSeconds,
    };
    return (<GameDataContext.Provider value={value}>
        {children}
    </GameDataContext.Provider>)
};

export default GameDataProvider;
