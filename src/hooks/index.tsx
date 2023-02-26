import { useEffect, useState } from 'react';

import { useGameStore } from '../store/gameStore';

interface Result {
  id: string;
  name: string;
  points: number;
  accuracy: number;
}

export const useGetResultsList = () => {
  const getResultsList = useGameStore(state => state.getResultsList);

  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getResultsList();
      setResults(res);
    };
    fetchData();
  }, [getResultsList]);

  return results;
};
