import {
  WrapItem,
  Link,
  Image,
  Heading,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react';
import CardImage from '../../assets/card-image.png';
import StarFull from '../../assets/starFull.png';
import StarEmpty from '../../assets/starEmpty.png';
import { GET_GENRE } from '../../utils/API/GET_MOVIES';
import { useEffect } from 'react';
import { UseFetch } from '../../hooks/UseFetch';

export const MovieCard = ({ card }: any) => {
  const { url } = GET_GENRE();
  const { data, request } = UseFetch();

  useEffect(() => {
    void request(url);
    console.log(data);
  }, []);
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
          {card.title}
        </Heading>
        <Text fontSize="1.8rem" letterSpacing="0.16em">
          Comedy
        </Text>
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
