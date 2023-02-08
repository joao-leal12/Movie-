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
  genres: number;
  setGenres: (initialValue: number) => void;
  moviesOfGenre: IMovieData[];
  setMoviesOfGenre: (initialValue: IMovieData[]) => void;
  inforGenres: IGenresCard[];
  setInforGenres: (initialValue: []) => void;
  listMovies: IMovieData[];
  setListMovies: (initialValue: []) => void;
  page: number;
  setPage: (initialValue: number) => void;
  isLoading: boolean;
  setIsLoading: (initialValue: boolean) => void;
}
