import { LinksElement } from '../../utils/LinksElement';
import { Text, Flex } from '@chakra-ui/react';

export const Teste = () => {
  return (
    <div>
      {LinksElement.map(({ genre, id, Icon }) => (
        <Flex key={id.toString()}>
          <Text>{genre}</Text>
          <Icon />
        </Flex>
      ))}
    </div>
  );
};
