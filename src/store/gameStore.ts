import { SetStateAction } from 'react';
import create from 'zustand';

import { supabase } from '../auth/supabase';

interface Result {
  id: string;
  name: string;
  result: number;
}

interface Game {
  name?: string;
  setName: (name: SetStateAction<string | undefined>) => void;
  result: number;
  resultsList: Result[];
  playersResult: Record<string, number>;
  setResultsList: (results: SetStateAction<Result[]>) => void;
  gameTimeInSeconds: number;
  addItem: (item: Result) => Promise<void>;
  getResultsList: () => Promise<Result[]>;
}

export const useGameStore = create<Game>((set) => ({
  name: undefined,
  setName: (name: SetStateAction<string | undefined>) => {
    if (typeof name === "function") {
      set((state) => ({ name: name(state.name) }));
    } else {
      set({ name });
    }
  },
  result: 0,
  playersResult: {},
  resultsList: [],
  setResultsList: (value: SetStateAction<Result[]>) =>
    set((state) => ({
      resultsList: typeof value === 'function' ? value(state.resultsList) : value,
    })),
  gameTimeInSeconds: 10,
  addItem: async (item: Result) => {
    try {
      const { data, error } = await supabase
        .from("results")
        .insert(item)
        .single();
      set((state: Game) => ({
        resultsList: [...state.resultsList, data ?? {id: '', name: '', result: 0}],
      }));
    } catch ({ message }) {
      alert(message);
    }
  },
  getResultsList: async () => {
    const { data, error } = await supabase
      .from("results")
      .select("*")
      .order("result", { ascending: false })
      .limit(10);
    if (error) {
      console.log(error);
      return [];
    } else {
      return data ?? [];
    }
  },
}));
