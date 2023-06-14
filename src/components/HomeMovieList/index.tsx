import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
import { useContextCreate } from '../../hooks/useContextCreate';

export const HomeMoviesList = () => {
  const { genres, dispatchContext, eventContext } = useContextCreate();

  useEffect(() => {
    if (eventContext.genreName === '/' && genres?.genres === undefined) return;
    const newValue =
      genres?.genres.find((genres) =>
        genres.name.includes(eventContext.genreName)
      )?.id ?? 0;
    dispatchContext({ genresCode: newValue });
  }, [eventContext.genreName, genres]);
  return (
    <Flex as="section">
      <ListMoviesWrapper />
    </Flex>
  );
};
