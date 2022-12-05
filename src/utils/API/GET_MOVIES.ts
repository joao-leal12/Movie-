import { API_KEY } from '../API_KEY';
import { IApiMovies } from '../../types/ApiType';

export const GET_MOVIES = (url: string): IApiMovies => {
  return {
    url: `${url}${API_KEY}`,
  };
};
