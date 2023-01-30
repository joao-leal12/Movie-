/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IApiMovies } from '../../types/ApiType';

const ApiKey = import.meta.env.VITE_API_KEY;

export const GET_MOVIES = (pages: string): IApiMovies => {
  return {
    url: `/movie/popular?api_key=${ApiKey}&page=${pages}`,
  };
};

export const GET_GENRE = (): IApiMovies => {
  return {
    url: `genre/movie/list?api_key=${ApiKey}`,
  };
};

export const GET_FILTER = (id: number): IApiMovies => {
  return {
    url: `${id}/similar?api_key=${ApiKey}`,
  };
};

export const GET_MOVIES_OF_GENRE = (genre: number | undefined): IApiMovies => {
  return {
    url: `discover/movie?api_key=${ApiKey}&with_genres=${genre}`,
  };
};
