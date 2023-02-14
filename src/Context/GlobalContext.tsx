import { createContext, useState, useEffect } from 'react';
import { useBoolean } from '@chakra-ui/react';

import { Ichildren, IMovieData, IGenresCard } from '../types/ApiType';
import { IinitialValueProps } from './typesOfContext';
import { GET_GENRE, GET_MOVIES, GET_MOVIES_OF_GENRE } from '../API/API_ROUTES';
import { apiCall } from '../lib/apiCall';

export const ContextCreate = createContext({} as IinitialValueProps);

export const GlobalContext = ({ children }: Ichildren) => {
  const [onInput, setOnInput] = useBoolean();
  const [newElement, setNewElement] = useState('');
  const [genresCode, setGenresCode] = useState(0);
  const [inforGenres, setInforGenres] = useState<IGenresCard[]>([]);
  const [genresIds, SetGenresIds] = useState(0);
  const [listMovies, setListMovies] = useState<IMovieData[]>([]);
  const [genrePathRoute, setGenrePathRoute] = useState<string>('');
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const { url } = GET_GENRE();
    apiCall.get(url).then((response) => {
      if (response.status === 200) {
        setInforGenres(response.data.genres);
      }
    });
  }, []);

  useEffect(() => {
    if (genrePathRoute === '') {
      const { url } = GET_MOVIES(page);

      apiCall
        .get(url)
        .then((response) => {
          if (page > 1) {
            setListMovies([...listMovies, ...response.data.results]);
            console.log(page);
          } else {
            setListMovies(response.data.results);
          }
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
    }
  }, [page, genrePathRoute]);

  useEffect(() => {
    if (genrePathRoute !== '') {
      const { url } = GET_MOVIES_OF_GENRE(genresCode, page);
      console.log(page);
      apiCall
        .get(url)
        .then((response) => {
          const { results } = response.data;
          setIsLoading(false);
          setListMovies(results);
          if (page > 1) {
            setListMovies([...listMovies, ...results]);
          } else {
            setListMovies(results);
          }
        })
        .catch((e) => console.log(e));
    }
  }, [genresCode, isLoading, genrePathRoute, page]);

  function handleChangeInput(value: string) {
    setNewElement(value);
  }

  return (
    <ContextCreate.Provider
      value={{
        newElement,
        handleChangeInput,
        onInput,
        setOnInput,
        genresIds,
        SetGenresIds,
        genresCode,
        setGenresCode,
        inforGenres,
        setInforGenres,
        listMovies,
        setListMovies,
        page,
        setPage,
        isLoading,
        setIsLoading,
        genrePathRoute,
        setGenrePathRoute,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
