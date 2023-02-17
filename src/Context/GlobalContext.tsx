import { createContext, useState, useEffect } from 'react';
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
  const [genreName, setGenreName] = useState('');
  useEffect(() => {
    const { url } = GET_GENRE();
    apiCall.get(url).then((response) => {
      if (response.status === 200) {
        setInforGenres(response.data.genres);
      }
    });
  }, []);

  useEffect(() => {
    if (genreName === '/' || genreName === '') {
      const { url } = GET_MOVIES(page);

      apiCall
        .get(url)
        .then((response) => {
          if (page > 1) {
            setListMovies([...listMovies, ...response.data.results]);
          } else {
            setListMovies(response.data.results);
          }
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
    }
  }, [page, genreName]);

  useEffect(() => {
    if (genreName !== '/' && genreName !== '') {
      const { url } = GET_MOVIES_OF_GENRE(genresCode, page);
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
  }, [genresCode, isLoading, genreName, page]);

  useEffect(() => {
    if (newElement !== '') {
      window.addEventListener('keydown', filmsFilteredByTyping);
    }

    return () => window.removeEventListener('keydown', filmsFilteredByTyping);
  }, [newElement]);
  function handleChangeInput(value: string) {
    setNewElement(value);
  }
  function filteredMovies() {
    const { url } = GET_MOVIES_FILTERED(newElement, page);
    apiCall(url).then((response) => {
      if (page === 1) {
        setListMovies(response.data.results);
      } else {
        setListMovies([...listMovies, ...response.data.results]);
      }
    });
  }

  function filteredMoviesOnHandleClick() {
    filteredMovies();
  }

  function filmsFilteredByTyping(e: KeyboardEvent) {
    if (e.code === 'Enter') filteredMovies();
  }

  return (
    <ContextCreate.Provider
      value={{
        newElement,
        handleChangeInput,
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
        filteredMovies,
        filteredMoviesOnHandleClick,
        filmsFilteredByTyping,
        genreName,
        setGenreName,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
