import { createClient } from '@supabase/supabase-js'

// Using the environment variables
const supabaseServiceRole = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cHRicmZ4bmV3eXp2cnN3emlmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDEyNzcyMywiZXhwIjoyMDI1NzAzNzIzfQ.pSrxBMURKGDm4NZ5jBR-6xUgZ_pyoySdTE4AEC19ZsI"
const supabaseUrl = "https://dyptbrfxnewyzvrswzif.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cHRicmZ4bmV3eXp2cnN3emlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxMjc3MjMsImV4cCI6MjAyNTcwMzcyM30.4XfIFo3UGHJG_5oxwAeGUcaYmM72E_LfyvB2O0o-1nE";

if (!supabaseUrl || !supabaseKey || !supabaseServiceRole) {
  throw new Error('Missing environment variables for Supabase');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
