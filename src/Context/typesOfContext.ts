import { Dispatch } from 'react';
import { IMovieData } from '../types/ApiType';
import { IGenres, DEFAULT_VALUE } from './GlobalContext';

export interface IinitialValueProps {
  newElement: string;
  handleStates: (input: any) => void;
  handleClickOnLinks: (e: any, path: string) => void;
  genresIds: number;
  SetGenresIds: (initialValue: number) => void;
  genresCode: number;
  setGenresCode: (initialValue: number) => void;
  genres: IGenres | undefined;

  genreName: string;
  setGenreName: (initialValue: string) => void;
  searchMovies: boolean;
  setSearchMovies: (initialValue: boolean) => void;
  load: boolean;
  setLoad: (initialValue: boolean) => void;

  page: number;
  setPage: (value: number) => void;
  movies: IMovieData[];
  setMovies: (data: IMovieData[]) => void;
  eventContext: typeof DEFAULT_VALUE;
  dispatchContext: Dispatch<Partial<typeof DEFAULT_VALUE>>;
}
