import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://azabkzkqfmtolrrdgixa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6YWJremtxZm10b2xycmRnaXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0NDA2OTUsImV4cCI6MjAwMzAxNjY5NX0.wSYb9zjc-wSGdGm0Xuxkz5eADyInz7yWNhKgApz1St8";

export const BASE_URL = "https://reservationmaker.de";
export const supabase = createClient(supabaseUrl, supabaseKey);