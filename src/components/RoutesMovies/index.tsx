import { Routes, Route } from 'react-router-dom';
import { MoviesList } from '../MoviesList';
import { GenreMoviesList } from '../GenreMoviesList';
export const RoutesMovies = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path="movie/:genre" element={<GenreMoviesList />} />
    </Routes>
  );
};
