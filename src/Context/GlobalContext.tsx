import { createContext, useState, MutableRefObject } from 'react';
import { Ichildren, IMovieData, IGenresCard } from '../types/ApiType';
import { IinitialValueProps } from './typesOfContext';
import { GET_GENRE, GET_MOVIES, GET_MOVIES_OF_GENRE } from '../API/API_ROUTES';
import { UseFetch } from '../hooks/useFetch';
// import { UseFetch } from '../hooks/useFetch';
export const ContextCreate = createContext({} as IinitialValueProps);
export interface IGenres {
  genres: IGenresCard[];
}
export const GlobalContext = ({ children }: Ichildren) => {
  const [newElement, setNewElement] = useState('');
  const [genresCode, setGenresCode] = useState(0);
  const [genresIds, SetGenresIds] = useState(0);
  const [page, setPage] = useState(1);
  const [genreName, setGenreName] = useState('/');
  const [searchMovies, setSearchMovies] = useState(false);
  const [load, setLoad] = useState(true);
  const [movies, setMovies] = useState<IMovieData[]>([]);

  const { url: HomeMoviesUrl } = GET_MOVIES(1);
  const { url: GenreUrl } = GET_GENRE();
  const { url: MoviesByGenreUrl } = GET_MOVIES_OF_GENRE(1, genresCode);

  const { data: genres } = UseFetch<IGenres | undefined>(GenreUrl);
  const { data: listMovies = [], isLoading } =
    UseFetch<IMovieData[]>(HomeMoviesUrl);
  const { data: listMoviesByGenres = [], isLoading: isLoadingByGenres } =
    UseFetch<IMovieData[]>(MoviesByGenreUrl);

  const handleStates = (input: MutableRefObject<HTMLInputElement>) => {
    setSearchMovies(true);

    setGenreName('');

    if (input !== null) {
      setNewElement(input.current.value);
      input.current.value = '';
    }
  };

  const handleClickOnLinks = (path: string) => {
    setGenreName(path);

    // const { url } = GET_MOVIES_OF_GENRE(genresCode, page);
    // const { data } = UseFetch<IMovieData[]>(url);
    // setMovies(data as IMovieData[]);

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
        isLoading,
        listMovies,
        genreName,
        setGenreName,
        searchMovies,
        setSearchMovies,
        load,
        setLoad,
        handleStates,
        handleClickOnLinks,
        listMoviesByGenres,
        isLoadingByGenres,
        page,
        setPage,
        setMovies,
        movies,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
