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
export const MovieCard = (): JSX.Element => {
  return (
    <WrapItem
      bg="light.900"
      p="2.4rem"
      borderTopLeftRadius="10rem"
      borderTopRightRadius="1.6rem"
      borderBottomLeftRadius="1.6rem"
      borderBottomRightRadius="10rem"
    >
      <Link display="block" _hover={{ textDecor: 'none' }}>
        <Image src={CardImage} />
        <Heading
          color="dark.900"
          fontSize="3.6rem"
          fontWeight="400"
          lineHeight="4.19rem"
          letterSpacing="0.18em"
          fontFamily="Roboto"
          mt="1.3rem"
        >
          Home Alone 2
        </Heading>
        <Text fontSize="1.8rem" letterSpacing="0.16em">
          Comedy
        </Text>
        <List display="flex">
          <ListItem>
            <Image src={StarFull} />
          </ListItem>
          <ListItem>
            <Image src={StarFull} />
          </ListItem>
          <ListItem>
            <Image src={StarFull} />
          </ListItem>
          <ListItem>
            <Image src={StarEmpty} />
          </ListItem>
          <ListItem>
            <Image src={StarEmpty} />
          </ListItem>
        </List>
      </Link>
    </WrapItem>
  );
};
