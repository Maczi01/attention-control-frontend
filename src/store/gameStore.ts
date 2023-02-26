import { SetStateAction } from 'react';
import create from 'zustand';

import { supabase } from '../auth/supabase';

interface Result {
  id: string;
  name: string;
  result: number;
  accuracy: number;
}

interface Game {
  name?: string;
  result: number;
  resultsList: Result[];
  playersResult: Result;
  setResultsList: (results: SetStateAction<Result[]>) => void;
  gameTimeInSeconds: number;
  addItem: (item: Result) => Promise<void>;
  getResultsList: () => Promise<Result[]>;
}

export const useGameStore = create<Game>(() => {
  return ({
    name: undefined,
    result: 0,
    playersResult: {},
    resultsList: [],
    gameTimeInSeconds: 10,
  });
});

