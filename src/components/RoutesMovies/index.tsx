import { Routes, Route } from 'react-router-dom';
import { HomeMoviesList } from '../HomeMovieList';
export const RoutesMovies = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeMoviesList />} />
      <Route path="movie/:genrePath" element={<HomeMoviesList />} />
    </Routes>
  );
};
