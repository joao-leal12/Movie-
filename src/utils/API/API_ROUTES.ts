import { API_KEY } from '../API_KEY';
import { IApiMovies } from '../../types/ApiType';
import { URL } from './URL';
export const GET_MOVIES = (pages: number): IApiMovies => {
  return {
    url: `${URL}/popular?api_key=${API_KEY}&page=${pages}`,
  };
};

export const GET_GENRE = (): IApiMovies => {
  return {
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
  };
};

export const GET_FILTER = (id: number): IApiMovies => {
  return {
    url: `${URL}${id}/similar?api_key=${API_KEY}`,
  };
};
