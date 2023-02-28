import { supabase } from '../auth/supabase';
import { Result } from '../types/types';

export const getResults = async (): Promise<Result[]> => {
  const { data, error } = await supabase.from('results').select().order('name', { ascending: false });

  if (error) {
    throw new Error('Error fetching results');
  }

  return data.map((result) => ({
    id: result.id,
    name: result.name,
    points: result.points,
    accuracy: result.accuracy,
  }));
};

export const saveResult = async (item: Result) => await supabase.from('results').insert(item).single();
