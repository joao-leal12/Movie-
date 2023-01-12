import { chakra } from '@chakra-ui/react';
import { RoutesMovies } from '../RoutesMovies';

export const ContainerMovies = () => {
  return (
    <chakra.section mt="2rem">
      <RoutesMovies />
    </chakra.section>
  );
};
