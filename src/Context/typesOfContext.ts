import { IMovieData } from '../types/ApiType';
import { IGenres } from './GlobalContext';

export interface IinitialValueProps {
  newElement: string;
  handleStates: (input: any) => void;
  handleClickOnLinks: (path: string) => void;
  genresIds: number;
  SetGenresIds: (initialValue: number) => void;
  genresCode: number;
  setGenresCode: (initialValue: number) => void;
  genres: IGenres | undefined;
  isLoading: boolean;
  genreName: string;
  setGenreName: (initialValue: string) => void;
  searchMovies: boolean;
  setSearchMovies: (initialValue: boolean) => void;
  load: boolean;
  setLoad: (initialValue: boolean) => void;
  listMovies: IMovieData[];
  listMoviesByGenres: IMovieData[];
  isLoadingByGenres: boolean;
  page: number;
  setPage: (value: number) => void;
}
