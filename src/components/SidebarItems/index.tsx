import { SidebarLinks } from '../SidebarLinks';
import { Flex } from '@chakra-ui/react';
export const SidebarItems = () => {
  return (
    <Flex
      as="ul"
      flexDir="column"
      maxW="28.5rem"
      gap="2.4rem"
      paddingInline="2.4rem"
    >
      <SidebarLinks />
    </Flex>
  );
};
