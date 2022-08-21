import React, {useEffect, useState} from "react";
import {supabase} from '../supabase';
import uuid from 'react-uuid';
import async from 'async';

export const GameDataContext = React.createContext(null);

const GameDataProvider = ({children}) => {
    const [result, setResult] = useState(0);
    const [name, setName] = useState('');
    const [resultsList, setResultsList] = useState([]);
    const [playersResult, setPlayersResult] = useState({});
    const gameTimeInSeconds = 5;

    const addItem = async (item) => {
        try {
            let { data, error } = await supabase
                .from("results")
                .insert(item)
                .single();
        } catch (error) {
            alert(error.message);
        }
    };

    const getResultsList = async () => await supabase.from('results').select()

    const value = {
        name,
        setName,
        result,
        resultsList,
        playersResult,
        setResultsList,
        gameTimeInSeconds,
        addItem,
        getResultsList
    };
    return (<GameDataContext.Provider value={value}>
        {children}
    </GameDataContext.Provider>)
};

export default GameDataProvider;
