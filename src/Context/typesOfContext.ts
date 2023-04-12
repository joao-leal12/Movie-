import { IMovieData, IGenresCard } from '../types/ApiType';

export interface IinitialValueProps {
  newElement: string;
  handleStates: (input: any) => void;
  handleClickOnLinks: (path: string) => void;
  genresIds: number;
  SetGenresIds: (initialValue: number) => void;
  genresCode: number;
  setGenresCode: (initialValue: number) => void;
  inforGenres: IGenresCard[];
  setInforGenres: (initialValue: []) => void;
  listMovies: IMovieData[];
  setListMovies: (initialValue: []) => void;
  page: number;
  setPage: (initialValue: number) => void;
  isLoading: boolean;
  setIsLoading: (initialValue: boolean) => void;
  genreName: string;
  setGenreName: (initialValue: string) => void;
  searchMovies: boolean;
  setSearchMovies: (initialValue: boolean) => void;
  load: boolean;
  setLoad: (initialValue: boolean) => void;
}
