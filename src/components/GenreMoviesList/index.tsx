import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GET_GENRE, GET_MOVIES_OF_GENRE } from '../../utils/API/API_ROUTES';
import { IMovieData, IGenre } from '../../types/ApiType';
import { MoviesList } from '../MoviesList';
import { UseFetch } from '../../hooks/UseFetch';
import { useFilter } from '../../hooks/useFilter';
import axios from 'axios';
export const GenreMoviesList = () => {
  const { genre } = useParams();
  const [moviesOfGenre, setMoviesOfGenre] = useState<IMovieData[] | null>(null);
  const [genresIds, SetGenresIds] = useState(0);

  const { request, loading } = UseFetch();
  const { ElementsFiltered, newElement } = useFilter(moviesOfGenre);
  function GetMoviesofGenre() {
    if (genresIds > 0) {
      const { url } = GET_MOVIES_OF_GENRE(genresIds);
      request(url)
        .then((response) => {
          const { results } = response;
          return results;
        })
        .then((newValue) => {
          if (newValue.length > 0) {
            setMoviesOfGenre(newValue);
          }
        });
    }
  }

  useEffect(() => {
    const { url } = GET_GENRE();
    const controller = new AbortController();
    const { signal } = controller;
    axios
      .get(url, {
        signal,
      })
      .then((res) => {
        // const { genres } = res || {};

        const result = res?.data.genres
          .filter((gen: { name: string | undefined }) =>
            gen.name === genre ? gen : null
          )
          .reduce((acc: number, IdNext: IGenre) => {
            acc = IdNext.id;

            return acc;
          }, 0);

        return result;
      })
      .then((result) => {
        SetGenresIds(result);
      });

    return () => {
      if (genresIds > 0) controller.abort();
    };
  }, [genre, genresIds]);
  useEffect(() => {
    // GetMoviesofGenre();
    const controller = new AbortController();
    const { signal } = controller;
    const { url } = GET_MOVIES_OF_GENRE(genresIds);
    axios
      .get(url, {
        signal,
      })
      .then((response) => {
        const { results } = response.data;

        if (results.length > 0) setMoviesOfGenre(results);
      });
  }, [genresIds]);

  useEffect(() => {
    if (ElementsFiltered !== undefined && ElementsFiltered.length > 0) {
      setMoviesOfGenre(ElementsFiltered);
    }
    if (newElement.length === 0 && ElementsFiltered !== undefined) {
      GetMoviesofGenre();
    }
  }, [ElementsFiltered, newElement]);

  return (
    <>
      {moviesOfGenre !== null && (
        <MoviesList data={moviesOfGenre} loading={loading} />
      )}
    </>
  );
};
