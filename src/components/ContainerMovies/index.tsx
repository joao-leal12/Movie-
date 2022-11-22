import { chakra } from '@chakra-ui/react';
import { MoviesList } from '../MoviesList';
export const ContainerMovies = (): JSX.Element => {
  return (
    <chakra.section flex="2" border="1px solid red">
      <MoviesList />
    </chakra.section>
  );
};
