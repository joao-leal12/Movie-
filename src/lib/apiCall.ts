import axios from 'axios';

export const apiCall = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
