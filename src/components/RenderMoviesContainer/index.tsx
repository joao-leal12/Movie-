import { IMovieData } from '../../types/ApiType';
import { MovieCard } from '../MovieCard';
import { useContextCreate } from '../../hooks/useContextCreate';
interface IRenderMoviesProps {
  data: IMovieData[];
}
export const RenderMoviesContainer = ({ data = [] }: IRenderMoviesProps) => {
  const { inforGenres } = useContextCreate();
  return (
    <>
      {data.length > 0 &&
        data.map((movie) => (
          <MovieCard
            dataMovie={movie}
            key={movie.id}
            inforGenres={inforGenres}
          />
        ))}
    </>
  );
};
