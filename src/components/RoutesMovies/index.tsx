import { Routes, Route } from 'react-router-dom';
import { MoviesList } from '../MoviesList';
import { GenreMoviesList } from '../GenreMoviesList';
export const RoutesMovies = ({ data, loading }: any) => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList data={data} loading={loading} />} />
      <Route path="movie/:genre" element={<GenreMoviesList />} />
    </Routes>
  );
};
