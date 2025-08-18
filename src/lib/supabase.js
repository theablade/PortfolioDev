import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://czuexlccjovfkhpmpbmw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dWV4bGNjam92ZmtocG1wYm13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3MzA4NzAsImV4cCI6MjA3MDMwNjg3MH0.xApEIUZWHqiEjt-XZ4UlvOQbdLOLEgiDeq6CHhiYiMo'
export const supabase = createClient(supabaseUrl, supabaseKey)
