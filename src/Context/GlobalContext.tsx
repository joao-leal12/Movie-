import { createContext, MutableRefObject, useReducer } from 'react';

import { Ichildren, IMovieData, IGenresCard } from '../types/ApiType';
import { IinitialValueProps } from './typesOfContext';
import { GET_GENRE, GET_MOVIES_FILTERED } from '../API/API_ROUTES';
import { UseFetch } from '../hooks/useFetch';
// import { UseFetch } from '../hooks/useFetch';
export const ContextCreate = createContext({} as IinitialValueProps);
export interface IGenres {
  genres: IGenresCard[];
}
export interface IMoviesFilteredProps {
  results: IMovieData[];
}
export const DEFAULT_VALUE = {
  movieBySearch: '' as string,
  genresCode: 0 as number,
  genresIds: 0 as number,
  page: 0 as number,
  genreName: '/' as string,
  searchMovies: false as boolean,
  load: false as boolean,
  movies: [] as IMovieData[],
  fethList: false as boolean,
  urlMovies: '/' as string,
};
export const GlobalContext = ({ children }: Ichildren) => {
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

  const { data: genres } = UseFetch<IGenres | undefined>(
    'genres',
    GenreUrl,
    eventContext.genreName !== '/'
  );

  const handleStates = (input: MutableRefObject<HTMLInputElement>) => {
    if (input !== null && input.current.value !== '') {
      const { url: moviesFilteredName } = GET_MOVIES_FILTERED(
        input.current.value,
        1
      );
      dispatchContext({ urlMovies: moviesFilteredName, searchMovies: true });
      input.current.value = '';
    }
  };

  const handleClickOnLinks = (e: Event, path: string) => {
    dispatchContext({ genreName: path, searchMovies: false, load: true });
  };
  return (
    <ContextCreate.Provider
      value={{
        handleStates,
        handleClickOnLinks,
        genres,
        eventContext,
        dispatchContext,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
