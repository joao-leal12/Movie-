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
  const [genres, setGenres] = useState(0);
  const [inforGenres, setInforGenres] = useState<IGenresCard[]>([]);
  const [moviesOfGenre, setMoviesOfGenre] = useState<IMovieData[]>([]);
  const [genresIds, SetGenresIds] = useState(0);
  const [listMovies, setListMovies] = useState<IMovieData[]>([]);
  const [page, setPage] = useState(1);
  const [pageMoviesOfGenre, setPageMoviesOfGenre] = useState(1);
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
    const { url } = GET_MOVIES(page);
    const controller = new AbortController();
    const { signal } = controller;

    apiCall
      .get(url, { signal })
      .then((response) => {
        setListMovies([...listMovies, ...response.data.results]);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
    return () => controller.abort();
  }, [page]);

  useEffect(() => {
    const { url } = GET_MOVIES_OF_GENRE(genres, pageMoviesOfGenre);
    const controller = new AbortController();
    const { signal } = controller;

    apiCall
      .get(url, { signal })
      .then((response) => {
        const { results } = response.data;
        setIsLoading(false);
        if (results.length > 0) {
          if (pageMoviesOfGenre > 1) {
            setMoviesOfGenre([...moviesOfGenre, ...results]);
          } else {
            setMoviesOfGenre(results);
          }
        }
      })
      .catch((e) => console.log(e));

    return () => controller.abort();
  }, [genres, pageMoviesOfGenre, isLoading]);

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
        genres,
        setGenres,
        moviesOfGenre,
        setMoviesOfGenre,
        inforGenres,
        setInforGenres,
        listMovies,
        setListMovies,
        page,
        setPage,
        isLoading,
        setIsLoading,
        pageMoviesOfGenre,
        setPageMoviesOfGenre,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
