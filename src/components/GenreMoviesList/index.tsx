import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieCard } from '../MovieCard';
import { UseFetch } from '../../hooks/UseFetch';
import { GET_MOVIES, GET_GENRE } from '../../utils/API/API_ROUTES';
import { IMovieData } from '../../types/ApiReturn';

export const GenreMoviesList = () => {
  const { genre } = useParams();
  const [moviesOfGenre, setMoviesOfGenre] = useState<IMovieData[] | null>(null);
  const [genresIds, SetGenresIds] = useState(0);
  const { request } = UseFetch();
  const { url } = GET_MOVIES(1);
  interface IGenre {
    id: number;
    name: string;
  }

  useEffect(() => {
    const { url } = GET_GENRE();

    void request(url)
      .then((res) => {
        const { genres } = res;

        const result = genres
          .filter((gen: { name: string | undefined }) =>
            gen.name === genre ? gen : ''
          )
          .reduce((IdPrev: number, IdNext: IGenre) => {
            IdPrev = IdNext.id;

            return IdPrev;
          }, 0);

        return result;
      })
      .then((result) => SetGenresIds(result));
  }, [genresIds, genre]);
  useEffect(() => {
    void request(url)
      .then((response) => {
        const { results } = response;

        const newValue = results.filter((result: { genre_ids: number[] }) =>
          result.genre_ids.includes(genresIds)
        );
        return newValue;
      })
      .then((newValue) => {
        setMoviesOfGenre(newValue);
        console.log(moviesOfGenre);
      });
  }, [request, genresIds, genre]);

  if (moviesOfGenre !== null)
    return (
      <>
        {moviesOfGenre.map((movie) => (
          <MovieCard dataMovie={movie} key={movie.id} />
        ))}
      </>
    );
  else return null;
};
