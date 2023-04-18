import { createContext, useState, MutableRefObject, useEffect } from 'react';
import { Ichildren, IMovieData, IGenresCard } from '../types/ApiType';
import { IinitialValueProps } from './typesOfContext';
import { GET_GENRE, GET_MOVIES, GET_MOVIES_OF_GENRE } from '../API/API_ROUTES';
import { apiCall } from '../lib/apiCall';
import { useQuery } from 'react-query';
export const ContextCreate = createContext({} as IinitialValueProps);
export interface IGenres {
  genres: IGenresCard[];
}
export const GlobalContext = ({ children }: Ichildren) => {
  const [newElement, setNewElement] = useState('');
  const [genresCode, setGenresCode] = useState(0);
  const [genresIds, SetGenresIds] = useState(0);

  const [genreName, setGenreName] = useState('/');
  const [searchMovies, setSearchMovies] = useState(false);
  const [load, setLoad] = useState(true);

  const { data: genres } = useQuery<IGenres | undefined>(
    'infor-genres',
    async () => {
      const { url } = GET_GENRE();

      return await apiCall.get(url).then((response) => response.data);
    }
  );
  const { data: listMovies = [], isLoading } = useQuery<IMovieData[]>(
    'Movies-home',
    async () => {
      const { url } = GET_MOVIES(1);
      return await apiCall.get(url).then((response) => response.data.results);
    }
  );

  const {
    data: listMoviesByGenres = [],
    isLoading: isLoadingByGenres,
    refetch,
  } = useQuery<IMovieData[]>(
    'Movies-by-genre',
    async () => {
      const { url } = GET_MOVIES_OF_GENRE(genresCode, 1);

      return await apiCall.get(url).then((response) => response.data.results);
    },
    {}
  );

  useEffect(() => {
    refetch({ queryKey: ['Moives-by-genre', genresCode] });
  }, [genresCode]);

  // useEffect(() => {
  //   if (searchMovies && newElement.length > 0) {
  //     const { url } = GET_MOVIES_FILTERED(newElement, page);
  //     apiCall.get(url).then((response) => {
  //       const { results } = response.data;
  //       if (results.length < 20) {
  //         setLoad(false);
  //       } else {
  //         setLoad(true);
  //       }
  //       if (page > 1) {

  //     });
  //   }
  // }, [searchMovies, page, newElement]);

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
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
