import { createContext, useState, useEffect, MutableRefObject } from 'react';
import { Ichildren, IMovieData, IGenresCard } from '../types/ApiType';
import { IinitialValueProps } from './typesOfContext';
import {
  GET_GENRE,
  GET_MOVIES,
  GET_MOVIES_OF_GENRE,
  GET_MOVIES_FILTERED,
} from '../API/API_ROUTES';
import { apiCall } from '../lib/apiCall';

export const ContextCreate = createContext({} as IinitialValueProps);

export const GlobalContext = ({ children }: Ichildren) => {
  const [newElement, setNewElement] = useState('');
  const [genresCode, setGenresCode] = useState(0);
  const [inforGenres, setInforGenres] = useState<IGenresCard[]>([]);
  const [genresIds, SetGenresIds] = useState(0);
  const [listMovies, setListMovies] = useState<IMovieData[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [genreName, setGenreName] = useState('/');
  const [searchMovies, setSearchMovies] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const { url } = GET_GENRE();
    apiCall.get(url).then((response) => {
      if (response.status === 200) {
        setInforGenres(response.data.genres);
      }
    });
  }, []);

  useEffect(() => {
    if (genreName === '/' && !searchMovies) {
      const { url } = GET_MOVIES(page);

      apiCall.get(url).then((response) => {
        if (page > 1) {
          setListMovies([...listMovies, ...response.data.results]);
        } else {
          setListMovies(response.data.results);
        }
        setIsLoading(false);
      });
    }
  }, [page, genreName]);

  useEffect(() => {
    if (genreName !== '/' && !searchMovies) {
      const { url } = GET_MOVIES_OF_GENRE(genresCode, page);
      apiCall.get(url).then((response) => {
        const { results } = response.data;
        setIsLoading(false);
        if (page > 1) {
          setListMovies([...listMovies, ...results]);
        } else {
          setListMovies(results);
        }
      });
    }
  }, [genresCode, genreName, page]);

  useEffect(() => {
    if (searchMovies && newElement.length > 0) {
      const { url } = GET_MOVIES_FILTERED(newElement, page);
      apiCall.get(url).then((response) => {
        const { results } = response.data;
        if (results.length < 20) {
          setLoad(false);
        } else {
          setLoad(true);
        }
        if (page > 1) {
          setListMovies([...listMovies, ...results]);
        } else {
          setListMovies(results);
        }
      });
    }
  }, [searchMovies, page, newElement]);

  const handleStates = (input: MutableRefObject<HTMLInputElement>) => {
    setSearchMovies(true);
    setPage(1);
    setGenreName('');

    if (input !== null) {
      setNewElement(input.current.value);
      input.current.value = '';
    }
  };

  const handleClickOnLinks = (path: string) => {
    setGenreName(path);
    setPage(1);
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
        inforGenres,
        setInforGenres,
        listMovies,
        setListMovies,
        page,
        setPage,
        isLoading,
        setIsLoading,
        genreName,
        setGenreName,
        searchMovies,
        setSearchMovies,
        load,
        setLoad,
        handleStates,
        handleClickOnLinks,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
