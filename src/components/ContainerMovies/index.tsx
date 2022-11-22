import { chakra } from '@chakra-ui/react';
import { MoviesList } from '../MoviesList';
export const ContainerMovies = (): JSX.Element => {
  return (
    <chakra.section flex="2" mt="2rem">
      <MoviesList />
    </chakra.section>
  );
};
