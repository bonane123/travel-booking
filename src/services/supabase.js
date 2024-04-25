import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tfzvntlmarcktykyfyjg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmenZudGxtYXJja3R5a3lmeWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNzk5MTYsImV4cCI6MjAyOTY1NTkxNn0.9SO5977JvVl6dCYGQsMqXgcJ_ItP7ZLczGfU5QXr3O8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
