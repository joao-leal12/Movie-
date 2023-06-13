import { createContext, useState, MutableRefObject, useReducer } from 'react';
import { Ichildren, IMovieData, IGenresCard } from '../types/ApiType';
import { IinitialValueProps } from './typesOfContext';
import { GET_GENRE } from '../API/API_ROUTES';
import { UseFetch } from '../hooks/useFetch';
// import { UseFetch } from '../hooks/useFetch';
export const ContextCreate = createContext({} as IinitialValueProps);
export interface IGenres {
  genres: IGenresCard[];
}

export const DEFAULT_VALUE = {
  newElement: '' as string,
  genresCode: 0 as number,
  genresIds: 0 as number,
  page: 0 as number,
  genreName: '/' as string,
  searchMovies: false as boolean,
  load: false as boolean,
  movies: [] as IMovieData[],
};
export const GlobalContext = ({ children }: Ichildren) => {
  const [newElement, setNewElement] = useState('');
  const [genresCode, setGenresCode] = useState(0);
  const [genresIds, SetGenresIds] = useState(0);
  const [page, setPage] = useState(1);
  const [genreName, setGenreName] = useState('/');
  const [searchMovies, setSearchMovies] = useState(false);
  const [load, setLoad] = useState(true);
  const [movies, setMovies] = useState<IMovieData[]>([]);
  const [eventContext, dispatchContext] = useReducer(
    (prev: typeof DEFAULT_VALUE, next: Partial<typeof DEFAULT_VALUE>) => {
      return {
        ...prev,
        ...next,
      };
    },
    DEFAULT_VALUE
  );

  const { url: GenreUrl } = GET_GENRE();

  const { data: genres } = UseFetch<IGenres | undefined>('genres', GenreUrl);

  // const { data: listMovies = [], isLoading } = UseFetch<IMovieData[]>(
  //   'movies',
  //   HomeMoviesUrl
  // );
  // const { data: listMoviesByGenres = [], isLoading: isLoadingByGenres } =
  //   UseFetch<IMovieData[]>('by-genres', MoviesByGenreUrl);

  const handleStates = (input: MutableRefObject<HTMLInputElement>) => {
    setSearchMovies(true);

    setGenreName('');

    if (input !== null) {
      setNewElement(input.current.value);
      input.current.value = '';
    }
  };

  const handleClickOnLinks = (e: any, path: string) => {
    dispatchContext({ genreName: path });
    setGenreName(path);
    setSearchMovies(false);
    setLoad(true);
  };
  return (
    <ContextCreate.Provider
      value={{
        newElement,
        genresIds,
        SetGenresIds,
        genresCode,
        setGenresCode,
        genres,

        genreName,
        setGenreName,
        searchMovies,
        setSearchMovies,
        load,
        setLoad,
        handleStates,
        handleClickOnLinks,

        page,
        setPage,
        setMovies,
        movies,
        eventContext,
        dispatchContext,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
