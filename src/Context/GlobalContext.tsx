import { createContext, useState, useEffect } from 'react';
import { useBoolean } from '@chakra-ui/react';

import { Ichildren, IMovieData, IGenresCard } from '../types/ApiType';
import { IinitialValueProps } from './typesOfContext';
import { GET_GENRE } from '../API/API_ROUTES';
import { apiCall } from '../lib/apiCall';

export const ContextCreate = createContext({} as IinitialValueProps);

export const GlobalContext = ({ children }: Ichildren) => {
  const [newElement, setNewElement] = useState('');
  const [genres, setGenres] = useState('');
  const [inforGenres, setInforGenres] = useState<IGenresCard[]>([]);
  const [moviesOfGenre, setMoviesOfGenre] = useState<IMovieData[]>([]);
  const [genresIds, SetGenresIds] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [onInput, setOnInput] = useBoolean();
  const [listMovies, setListMovies] = useState<IMovieData[]>([]);
  useEffect(() => {
    const { url } = GET_GENRE();
    const controller = new AbortController();
    const signal = controller.signal;
    apiCall
      .get(url, {
        signal,
      })
      .then((response) => {
        if (response.status === 200) {
          setInforGenres(response.data.genres);
        }
      });

    return () => {
      controller.abort();
    };
  }, [moviesOfGenre]);

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
        loading,
        setLoading,
        listMovies,
        setListMovies,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
