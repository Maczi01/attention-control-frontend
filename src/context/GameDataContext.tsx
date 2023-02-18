import React, {createContext, useState} from "react";
import {supabase} from '../auth/supabase';

interface GameDataContextProps {
    children: React.ReactNode;
}

interface Result {
    id: string;
    name: string;
    result: number;
    accuracy: number
}

interface GameDataContextValue {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    result: number;
    resultsList: Result[];
    playersResult: Record<string, number>;
    setResultsList: React.Dispatch<React.SetStateAction<Result[]>>;
    gameTimeInSeconds: number;
    addItem: (item: Result) => Promise<void>;
    getResultsList: () => Promise<Result[]>;
}

const defaultValues: GameDataContextValue = {
    name: '',
    setName: () => {},
    result: 0,
    resultsList: [],
    playersResult: {},
    setResultsList: () => {},
    gameTimeInSeconds: 0,
    addItem: () => Promise.resolve(),
    getResultsList: () => Promise.resolve([]),
}

export const GameDataContext = createContext<GameDataContextValue>(defaultValues);

const GameDataProvider: React.FC<GameDataContextProps> = ({ children }) => {
    const [result, setResult] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [resultsList, setResultsList] = useState<Result[]>([]);
    const [playersResult, setPlayersResult] = useState<Record<string, number>>({});
    const gameTimeInSeconds: number = 5;

    const addItem = async (item: Result) => {
        try {
            const { data, error } = await supabase
                .from("results")
                .insert(item)
                .single();
        } catch ({message}) {
            alert(message);
        }
    };

    const getResultsList = async (): Promise<Result[]> => {
        const { data, error } = await supabase.from('results').select();
        if (error) {
            alert(error.message);
            return [];
        }
        return data ?? [];
    };

    const value: GameDataContextValue = {
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

    return (
        <GameDataContext.Provider value={value}>
            {children}
        </GameDataContext.Provider>
    );
};

export default GameDataProvider;
