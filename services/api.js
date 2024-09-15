import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://hidsdhudfjgrdylvfdlp.supabase.co/rest/v1/',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZHNkaHVkZmpncmR5bHZmZGxwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjQzNzc0NSwiZXhwIjoyMDQyMDEzNzQ1fQ.aRnLzPu21ffsRM9-DI_so6M3Qf7UtcJaZX_vFeH51Y0',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZHNkaHVkZmpncmR5bHZmZGxwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjQzNzc0NSwiZXhwIjoyMDQyMDEzNzQ1fQ.aRnLzPu21ffsRM9-DI_so6M3Qf7UtcJaZX_vFeH51Y0',
  },
});
