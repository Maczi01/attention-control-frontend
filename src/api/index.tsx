import { supabase } from '../auth/supabase';
import { Result } from '../types/types';

export const getResults = async () => {
  const { data, error } = await supabase
    .from('results')
    .select()
    .order('name', {ascending: false})

  if (error) {
    throw new Error('Error fetching results');
  }

  return data;
}

export const saveResult = async (item: Result) => await supabase
  .from('results')
  .insert(item)
  .single();
