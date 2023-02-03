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
  genres: string;
  setGenres: (initialValue: string) => void;
  moviesOfGenre: IMovieData[];
  setMoviesOfGenre: (initialValue: []) => void;
  inforGenres: IGenresCard[];
  setInforGenres: (initialValue: []) => void;
  loading: boolean;
  setLoading: (initialValue: boolean) => void;
  listMovies: IMovieData[];
  setListMovies: (initialValue: []) => void;
}
