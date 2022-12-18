import { WrapItem, Link, Image } from '@chakra-ui/react';
import { Genre } from '../Genre';
import { useEffect, useState } from 'react';
import { StarAverage } from '../StarAverage';
import { ICardMovie } from '../../types/MoviesCards';

export const MovieCard = ({ dataMovie }: ICardMovie | any) => {
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(dataMovie.poster_path);
  }, [dataMovie]);
  const pathUrl = `https://image.tmdb.org/t/p/w500${path}`;
  return (
    <WrapItem
      bg="white"
      p="2.4rem"
      maxW="343px"
      borderTopLeftRadius="10rem"
      borderTopRightRadius="1.6rem"
      borderBottomLeftRadius="1.6rem"
      borderBottomRightRadius="10rem"
      overflow="hidden"
    >
      <Link display="block" _hover={{ textDecor: 'none' }}>
        <Image
          src={pathUrl}
          maxW="295px"
          alt="movie-image"
          borderTopLeftRadius="10rem"
          borderTopRightRadius="1.6rem"
          borderBottomLeftRadius="1.6rem"
          borderBottomRightRadius="10rem"
          mb="1.5rem"
        />

        <Genre genre={dataMovie.genre_ids} />
        <StarAverage rating={dataMovie.vote_average} />
      </Link>
    </WrapItem>
  );
};
