import {
  WrapItem,
  Link,
  Image,
  Heading,
  List,
  ListItem,
} from '@chakra-ui/react';
import CardImage from '../../assets/card-image.png';
import StarFull from '../../assets/starFull.png';
import StarEmpty from '../../assets/starEmpty.png';
import { Genre } from '../Genre';

export const MovieCard = ({ dataMovie }: any) => {
  return (
    <WrapItem
      bg="white"
      p="2.4rem"
      maxW="343px"
      borderTopLeftRadius="10rem"
      borderTopRightRadius="1.6rem"
      borderBottomLeftRadius="1.6rem"
      borderBottomRightRadius="10rem"
    >
      <Link display="block" _hover={{ textDecor: 'none' }}>
        <Image src={CardImage} maxW="295px" alt="movie-image" />
        <Heading
          color="dark.900"
          fontSize="3.6rem"
          fontWeight="400"
          lineHeight="4.19rem"
          letterSpacing="0.18em"
          fontFamily="Roboto"
          mt="1.3rem"
          whiteSpace="nowrap"
        >
          Spawn
        </Heading>

        <Genre genre={dataMovie.genre_ids} />

        <List display="flex">
          <ListItem>
            <Image src={StarFull} alt="star full" />
          </ListItem>
          <ListItem>
            <Image src={StarFull} alt="star full" />
          </ListItem>
          <ListItem>
            <Image src={StarFull} alt="star full" />
          </ListItem>
          <ListItem>
            <Image src={StarEmpty} alt="stars empty" />
          </ListItem>
          <ListItem>
            <Image src={StarEmpty} alt="stars empty" />
          </ListItem>
        </List>
      </Link>
    </WrapItem>
  );
};
