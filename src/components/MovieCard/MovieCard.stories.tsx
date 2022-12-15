import { MovieCard } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { MoviesList } from '../MoviesList';
import { ListItem } from '@chakra-ui/react';
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'components/MovieCard',
  component: MovieCard,
  decorators: [
    (Story) => {
      return (
        <MoviesList>
          <ListItem>{Story()}</ListItem>
        </MoviesList>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
