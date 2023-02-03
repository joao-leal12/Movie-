import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { GET_GENRE, GET_MOVIES_OF_GENRE } from '../../API/API_ROUTES';
import { IGenre } from '../../types/ApiType';

import { useContextCreate } from '../../hooks/useContextCreate';
import { apiCall } from '../../lib/apiCall';

export const GenreMoviesList = () => {
  const { genre } = useParams();

  const { genresIds, SetGenresIds, moviesOfGenre, setMoviesOfGenre } =
    useContextCreate();

  useEffect(() => {
    const { url } = GET_GENRE();

    apiCall
      .get(url)
      .then((res) => {
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
  }, [genresIds, genre]);

  useEffect(() => {
    const { url } = GET_MOVIES_OF_GENRE(genresIds);
    const controller = new AbortController();
    const signal = controller.signal;

    apiCall
      .get(url, {
        signal,
      })
      .then((response) => {
        const { results } = response.data;

        if (results.length > 0) setMoviesOfGenre(results);
      });

    return () => controller.abort();
  }, [genresIds, genre]);
  return <>{moviesOfGenre.length > 0 && <h1>Ola</h1>}</>;
};
