import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://qpcxqanisevvkjayrbnp.supabase.com'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwY3hxYW5pc2V2dmtqYXlyYm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQyMDY1NzYsImV4cCI6MTk2OTc4MjU3Nn0.YsNuDSeLoK1lEi-_oDC9qOZqqEHvywOpwALm1hWnXhY\n'

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '')
