import { createContext, useState, useEffect } from 'react';
import { useBoolean } from '@chakra-ui/react';

import { Ichildren, IMovieData, IGenresCard } from '../types/ApiType';
import { IinitialValueProps } from './typesOfContext';
import { GET_MOVIES, GET_GENRE } from '../utils/API/API_ROUTES';
import { apiCall } from '../lib/apiCall';

export const ContextCreate = createContext({} as IinitialValueProps);

export const GlobalContext = ({ children }: Ichildren) => {
  const [newElement, setNewElement] = useState('');
  const [dataMovies, setDataMovies] = useState<IMovieData[]>([]);
  const [count, setCount] = useState<number>(1);

  const [genres, setGenres] = useState('');
  const [inforGenres, setInforGenres] = useState<IGenresCard[]>([]);
  const [moviesOfGenre, setMoviesOfGenre] = useState<IMovieData[]>([]);
  const [onInput, setOnInput] = useBoolean();
  const [genresIds, SetGenresIds] = useState(0);
  useEffect(() => {
    const { url } = GET_MOVIES(1);
    const controller = new AbortController();
    apiCall.get(url).then((response) => setDataMovies(response.data.results));

    return () => controller.abort();
  }, [count]);

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
      })
      .catch((e) => console.log(e));

    return () => {
      controller.abort();
    };
  }, [dataMovies, moviesOfGenre]);

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
        dataMovies,
        setDataMovies,
        genresIds,
        SetGenresIds,
        genres,
        setGenres,
        moviesOfGenre,
        setMoviesOfGenre,
        inforGenres,
        setInforGenres,
        count,
        setCount,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
