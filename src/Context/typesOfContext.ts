import { IMovieData, IGenresCard } from '../types/ApiType';

export interface IinitialValueProps {
  newElement: string;
  handleChangeInput: (value: string) => void;
  onInput: boolean;
  setOnInput: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
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
  genrePathRoute: string;
  setGenrePathRoute: (initialValue: string) => void;
}
