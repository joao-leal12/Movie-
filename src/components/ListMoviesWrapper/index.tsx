import { Grid } from '@chakra-ui/react';
import { Eskeleton } from '../Eskeleton';

export const ListMoviesWrapper = () => {
  return (
    <Grid
      as="section"
      templateColumns={[
        'repeat(2,1fr)',
        'repeat(2,1fr)',
        'repeat(2,1fr)',
        'repeat(3,1fr)',
      ]}
      gap={'2.4rem'}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <Eskeleton key={index} />
      ))}
    </Grid>
  );
};
