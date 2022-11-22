import { chakra } from '@chakra-ui/react';
import { MovieCard } from '../MovieCard';
export const MoviesList = (): JSX.Element => {
  return (
    <chakra.ul display="grid" gridTemplateColumns="1fr" justifyItems="center">
      <MovieCard />
    </chakra.ul>
  );
};
