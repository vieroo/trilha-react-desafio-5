import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://hidsdhudfjgrdylvfdlp.supabase.co/rest/v1/',
  headers: {
    apikey: `${process.env.SUPABASE_ANON_KEY}`,
    authorization: `Bearer ${process.env.SUPABASE_ANON_TOKEN}`,
  },
});
