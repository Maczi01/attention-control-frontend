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

export const useGameStore = create<Game>((set) => {
  return ({
    name: undefined,
    result: 0,
    playersResult: {},
    resultsList: [],
    gameTimeInSeconds: 10,
    addItem: async (item: Result) => {
      try {
        const { data, error } = await supabase
          .from('results')
          .insert(item)
          .single();
        set((state: Game) => {
          return ({
            resultsList: [...state.resultsList, data ?? { id: '', name: '', result: 0 }],
          });
        });
      } catch ({ message }) {
        alert(message);
      }
    },

    getResultsList: async () => {
      const { data, error } = await supabase
        .from('results')
        .select()
        .order('name', {ascending: false})

      if (error) {
        console.log('error')
      }
      if (data) {
        console.log('data in store: ', data)
        return data
      }
    },
  });
});

