// supabase/config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://bjxcqfoaosxwbdkzkqzj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqeGNxZm9hb3N4d2Jka3prcXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMjUwMjMsImV4cCI6MjA2MTcwMTAyM30.ekK-Oy3mj0LXQI4gz2GSKYQeSH2W0TiwLpUjq3eK9Sw';

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;