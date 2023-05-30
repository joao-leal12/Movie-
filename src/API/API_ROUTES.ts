/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IApiMovies } from '../types/ApiType';

const ApiKey = import.meta.env.VITE_API_KEY;

export const GET_MOVIES = (pages: number): IApiMovies => {
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
    url: `${id}/similar?api_key=${ApiKey}&language="pt-BR"`,
  };
};

export const GET_MOVIES_OF_GENRE = (
  genreCode: number,
  page: number
): IApiMovies => {
  return {
    url: `discover/movie?api_key=${ApiKey}&with_genres=${genreCode}&page=${page}`,
  };
};

export const GET_MOVIES_FILTERED = (
  movieName: string,
  page: number
): IApiMovies => {
  return {
    url: `search/movie?api_key=${ApiKey}&query=${movieName}&page=${page}`,
  };
};
