import { WrapItem, Link, Image, useColorModeValue } from '@chakra-ui/react';
import { Genre } from '../Genre';
import { useEffect, useState } from 'react';
import { StarAverage } from '../StarAverage';
import { IMountCardMovie } from '../../types/ApiType';

export const MovieCard = ({ dataMovie, inforGenres }: IMountCardMovie) => {
  const [path, setPath] = useState('');
  const [load, setLoad] = useState(false);
  const bg = useColorModeValue('light.900', '#767E70');

  useEffect(() => {
    setPath(dataMovie.poster_path);
  }, [dataMovie]);
  const pathUrl = `https://image.tmdb.org/t/p/w500${path}`;
  return (
    <>
      {load ? (
        <WrapItem
          bg={bg}
          p="2.4rem"
          maxW="343px"
          borderTopLeftRadius="10rem"
          borderTopRightRadius="1.6rem"
          borderBottomLeftRadius="1.6rem"
          borderBottomRightRadius="10rem"
          overflow="hidden"
          opacity="1"
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

            <Genre genre={dataMovie.genre_ids} inforGenre={inforGenres} />
            <StarAverage rating={dataMovie.vote_average} />
          </Link>
        </WrapItem>
      ) : (
        <WrapItem
          bg={bg}
          p="2.4rem"
          maxW="343px"
          borderTopLeftRadius="10rem"
          borderTopRightRadius="1.6rem"
          borderBottomLeftRadius="1.6rem"
          borderBottomRightRadius="10rem"
          overflow="hidden"
          opacity="0"
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
              onLoad={() => setLoad(true)}
            />

            <Genre genre={dataMovie.genre_ids} />
            <StarAverage rating={dataMovie.vote_average} />
          </Link>
        </WrapItem>
      )}
    </>
  );
};
