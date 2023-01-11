/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IApiMovies } from '../../types/ApiType';
import { URL } from './URL';
const ApiKey = import.meta.env.VITE_API_KEY;

export const GET_MOVIES = (pages: number): IApiMovies => {
  return {
    url: `${URL}/movie/popular?api_key=${ApiKey}&page=${pages}`,
  };
};

export const GET_GENRE = (): IApiMovies => {
  return {
    url: `${URL}genre/movie/list?api_key=${ApiKey}`,
  };
};

export const GET_FILTER = (id: number): IApiMovies => {
  return {
    url: `${URL}${id}/similar?api_key=${ApiKey}`,
  };
};

export const GET_MOVIES_OF_GENRE = (genre: number | undefined): IApiMovies => {
  return {
    url: `${URL}discover/movie?api_key=${ApiKey}&with_genres=${genre}`,
  };
};
