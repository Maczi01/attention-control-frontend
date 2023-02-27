import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lfhpvhfbugykqfygicja.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmaHB2aGZidWd5a3FmeWdpY2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5MzE5OTUsImV4cCI6MTk5MjUwNzk5NX0.uDTex9Fjc5gi7UvGkUAdvn02_-CpCPgq5WybA9aPNX8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
