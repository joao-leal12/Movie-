import { API_KEY } from '../API_KEY';
import { IApiMovies } from '../../types/ApiType';
import { URL } from './URL';
export const GET_MOVIES = (): IApiMovies => {
  return {
    url: `${URL}/popular?api_key=${API_KEY}`,
  };
};

export const GET_GENRE = (): IApiMovies => {
  return {
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
  };
};
