import { createContext, MutableRefObject, useReducer } from 'react';
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

  const handleStates = (input: MutableRefObject<HTMLInputElement>) => {
    dispatchContext({ searchMovies: true, genreName: '' });

    if (input !== null) {
      dispatchContext({ newElement: input.current.value });
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
