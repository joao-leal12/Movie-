import { Flex } from '@chakra-ui/react';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
import { useContextCreate } from '../../hooks/useContextCreate';
export const HomeMoviesList = () => {
  const { listMovies } = useContextCreate();

  return (
    <Flex as="section">
      <ListMoviesWrapper data={listMovies} />
    </Flex>
  );
};
