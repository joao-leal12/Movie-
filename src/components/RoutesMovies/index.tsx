import { Routes, Route } from 'react-router-dom';
import { GenreMovieList } from '../GenreMoviesList';
import { HomeMoviesList } from '../HomeMovieList';

export const RoutesMovies = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeMoviesList />} />
      <Route path="movie/:genre" element={<GenreMovieList />} />
    </Routes>
  );
};
