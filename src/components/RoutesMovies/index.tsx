import { Routes, Route } from 'react-router-dom';
import { HomeContainerList } from '../HomeContainerList';
import { GenreMoviesList } from '../GenreMoviesList';

export const RoutesMovies = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeContainerList />} />
      <Route path="movie/:genre" element={<GenreMoviesList />} />
    </Routes>
  );
};
