import { useMemo } from 'react';
import { Star } from 'phosphor-react';
import { List, ListItem } from '@chakra-ui/react';
import { IStars } from '../../types/ApiType';

type IEstaticElements = number;
export const StarAverage = ({ rating }: IStars) => {
  const maxRating: IEstaticElements = 10;
  const maxStars: IEstaticElements = 5;

  const starsWillFilled: IEstaticElements = useMemo(
    () => Math.round((maxStars * rating) / maxRating),
    [maxRating, rating, maxStars]
  );
  const stars = new Array(maxStars).fill('');

  return (
    <List display="flex">
      {stars.map((_, index) =>
        index < starsWillFilled ? (
          <ListItem key={index}>
            <Star color="#ffad05" size={32} weight="fill" />
          </ListItem>
        ) : (
          <ListItem key={index}>
            <Star color="#ffad05" size={32} weight="bold" />
          </ListItem>
        )
      )}
    </List>
  );
};
