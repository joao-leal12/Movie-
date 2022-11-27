import { chakra } from '@chakra-ui/react';
import { MoviesList } from '../MoviesList';
export const ContainerMovies = () => {
  return (
    <chakra.section mt="2rem">
      <MoviesList />
    </chakra.section>
  );
};
