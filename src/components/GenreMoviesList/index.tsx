import { useParams } from 'react-router-dom';

export const GenreMoviesList = () => {
  const { genre } = useParams();

  console.log(genre);
  return <div>{genre}</div>;
};
