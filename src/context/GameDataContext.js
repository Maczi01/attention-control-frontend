import React, {useEffect, useState} from "react";
import {supabase} from '../supabase';
import uuid from 'react-uuid';

export const GameDataContext = React.createContext(null);

const GameDataProvider = ({children}) => {
    const [result, setResult] = useState(0);
    const [name, setName] = useState('');
    const [resultsList, setResultsList] = useState([]);
    const [playersResult, setPlayersResult] = useState({});
    const gameTimeInSeconds = 10;
    const [adding, setAdding] = useState(false);

    const addItem = async (item) => {
        console.log(item)
        const userToAdd = {
            ...item,
            id: Date.now(),
            user_id: uuid()
        }
        setAdding(true);
        try {
            // const user = supabase.auth.user();

            const { error } = await supabase
                .from("results")
                .insert(userToAdd)
                .single(); //insert an object with the key value pair, the key being the column on the table

            if (error) throw error;


        } catch (error) {
            alert(error.message);
        } finally {
            setAdding(false);
        }
    };



    const value = {
        name,
        setName,
        result,
        resultsList,
        playersResult,
        setResultsList,
        gameTimeInSeconds,
        addItem
    };
    return (<GameDataContext.Provider value={value}>
        {children}
    </GameDataContext.Provider>)
};

export default GameDataProvider;
