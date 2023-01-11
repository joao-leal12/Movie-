import { Routes, Route } from 'react-router-dom';
import { MoviesList } from '../MoviesList';
import { GenreMoviesList } from '../GenreMoviesList';
import { IRoutes } from '../../types/ApiType';

export const RoutesMovies = ({ data, loading }: IRoutes) => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList data={data} loading={loading} />} />
      <Route path="movie/:genre" element={<GenreMoviesList />} />
    </Routes>
  );
};
