import create from 'zustand';
import React from "react";

interface Result {
    id: string;
    name: string;
    result: number;
}

interface Game {
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


export const useGameStore = create<Game>(() => ({
    name: '',
    setName: () => {},
    result: 0,
    resultsList: [],
    playersResult: {},
    setResultsList: () => {},
    gameTimeInSeconds: 10,
    addItem: () => Promise.resolve(),
    getResultsList: () => Promise.resolve([]),
}))
