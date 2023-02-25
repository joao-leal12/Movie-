import { MovieCard } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
import { ListItem } from '@chakra-ui/react';

export default {
  title: 'components/MovieCard',
  component: MovieCard,
  decorators: [
    (Story) => {
      return (
        <ListMoviesWrapper>
          <ListItem>{Story()}</ListItem>
        </ListMoviesWrapper>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
