import { Flex } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { ToogleColor } from '../ToogleColor';

export const Header = () => {
  return (
    <Flex as="header" width="100%" justify={'space-between'}>
      <Logo />
      <ToogleColor />
    </Flex>
  );
};
