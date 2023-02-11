import { Flex } from '@chakra-ui/react';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
import { useContextCreate } from '../../hooks/useContextCreate';
export const HomeMoviesList = () => {
  const { listMovies, page, setPage } = useContextCreate();

  return (
    <Flex as="section">
      <ListMoviesWrapper data={listMovies} page={page} setPage={setPage} />
    </Flex>
  );
};
