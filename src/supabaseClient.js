// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dgtgthpewfvcswrdvtwm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndGd0aHBld2Z2Y3N3cmR2dHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NzkwMjgsImV4cCI6MjA2OTU1NTAyOH0.XUbNabv4spoVjOaE9mJoTnAw88Zw0gQzhThCt9fSppw';
export const supabase = createClient(supabaseUrl, supabaseKey);
