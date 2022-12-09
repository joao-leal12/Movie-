import { chakra } from '@chakra-ui/react';
import { MovieCard } from '../MovieCard';

export const MoviesList = () => {
  return (
    <chakra.ul
      display="grid"
      gridTemplateColumns="repeat(3, 1fr) "
      justifyItems="center"
      gap="2.4rem"
    >
      <MovieCard />
    </chakra.ul>
  );
};
